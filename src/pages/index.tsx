import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiCode, FiMail } from "react-icons/fi";
import Project from "@/components/project";
import { Repo } from "@/types";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Globe } from "@/components/magicui/globe";

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

async function detectFileType(url: string): Promise<"image" | "video" | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;

    const blob = await res.blob();
    const buffer = await blob.arrayBuffer();
    const bytes = new Uint8Array(buffer).subarray(0, 16);
    const hex = Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    if (hex.startsWith("89504e47")) return "image";
    if (hex.startsWith("ffd8")) return "image";
    if (hex.startsWith("52494646") && hex.includes("57454250")) return "image";
    if (hex.includes("66747970") || hex.includes("6d6f6f76")) return "video";
    if (hex.startsWith("1a45dfa3")) return "video";
    return null;
  } catch {
    return null;
  }
}

export default function PortfolioSite() {
  const [projects, setProjects] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const reposRes = await fetch(
          "https://api.github.com/users/thekushdhingra/repos",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const body = await reposRes.text();
        if (!reposRes.ok)
          throw new Error(`GitHub API error ${reposRes.status}`);

        const reposData = JSON.parse(body);

        const reposMapped: Repo[] = await Promise.all(
          reposData
            .filter((repo: any) => repo.description?.trim())
            .map(async (repo: any) => {
              const branch = repo.default_branch || "main";
              const previewUrl = `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${branch}/preview`;
              const type = await detectFileType(previewUrl);

              return {
                id: repo.id,
                name: repo.name,
                github_url: repo.html_url,
                website_url: repo.homepage || "",
                description: repo.description,
                created_at: repo.created_at,
                preview_url: type ? previewUrl : undefined,
                preview_type: type || undefined,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
              };
            })
        );

        setProjects(reposMapped);
      } catch (error) {
        console.error("Error fetching GitHub data", error);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <div
      id="container"
      className="min-h-screen bg-[#050505] text-neutral-100 scroll-smooth snap-y snap-mandatory"
    >
      <SmoothCursor />
      <header className="px-4 pt-12 pb-10 h-fit flex flex-row items-center justify-center w-screen snap-start">
        <div className="space-y-6 w-[40%]">
          <div className="items-center gap-2 rounded-full border border-neutral-800 px-3 py-1 text-sm hidden lg:inline-flex">
            <FiCode size={16} /> Software Engineer
          </div>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tight leading-tight md:text-left text-center">
            Hey, I’m{" "}
            <span className="bg-gradient-to-br text-transparent bg-clip-text from-pink-500 to-blue-600">
              Kush
            </span>{" "}
          </h1>
          <p className="text-neutral-300 max-w-prose md:text-left text-center">
            Focused on Python, Typescript and Go. I like shipping things that
            feel instant and look crisp.
          </p>
          <div className="flex items-center gap-2 lg:justify-start justify-center">
            <a
              href="https://github.com/thekushdhingra"
              target="_blank"
              className="p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/thekushdhingra"
              target="_blank"
              className="p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:contact@kushs.dev"
              className="p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
        <div className="w-[40%] hidden lg:flex">
          <Globe />
        </div>
      </header>

      <main className="overflow-y-scroll snap-start">
        <h2 className="text-6xl text-center font-bold mb-20">
          Here Are Some Of My Projects!
        </h2>
        {projects.map((project, i) => (
          <Project key={project.id} project={project} index={i} />
        ))}
      </main>
    </div>
  );
}
