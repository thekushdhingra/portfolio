import { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLink,
  FaPython,
  FaReact,
  FaDocker,
  FaDatabase,
  FaTerminal,
  FaAws,
  FaLinux,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiFastapi,
  SiTailwindcss,
  SiPostgresql,
  SiGo,
  SiFirebase,
  SiShell,
  SiPowershell,
  SiSelenium,
  SiCodeblocks,
  SiShadcnui,
  SiKubernetes,
  SiMicrosoftazure,
  SiGooglecloud,
  SiNextdotjs,
} from "react-icons/si";

type ProjectRecord = {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
    Attachments: {
      id: string;
      width: number;
      height: number;
      url: string;
      filename: string;
      size: number;
      type: string;
      thumbnails: {
        small: { url: string; width: number; height: number };
        large: { url: string; width: number; height: number };
        full: { url: string; width: number; height: number };
      };
    }[];
    "Github URL": string;
    "Project URL"?: string;
    Description: string;
    langs?: string;
  };
};

type ProjectsType = {
  records: ProjectRecord[];
};

const techIcons: Record<string, JSX.Element> = {
  Python: <FaPython />,
  Typescript: <SiTypescript />,
  Fastapi: <SiFastapi />,
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  Shadcn: <SiShadcnui />,
  Postgresql: <SiPostgresql />,
  "Data Optimization": <FaDatabase />,
  Selenium: <SiSelenium />,
  Beautifulsoup: <SiCodeblocks />,
  "Data Analysis": <FaDatabase />,
  Go: <SiGo />,
  Terminal: <FaTerminal />,
  Bash: <SiShell />,
  Powershell: <SiPowershell />,
  Docker: <FaDocker />,
  "Docker Compose": <FaDocker />,
  Firebase: <SiFirebase />,
  Kubernetes: <SiKubernetes />,
  Aws: <FaAws />,
  Azure: <SiMicrosoftazure />,
  "Google Cloud": <SiGooglecloud />,
  Linux: <FaLinux />,
  Next: <SiNextdotjs />,
};

const techColors: Record<string, string> = {
  Python: "#f9e2af",
  Typescript: "#89b4fa",
  Fastapi: "#94e2d5",
  React: "#89dceb",
  Tailwind: "#74c7ec",
  Shadcn: "#cdd6f4",
  Postgresql: "#89b4fa",
  "Data Optimization": "#fab387",
  Selenium: "#a6e3a1",
  Beautifulsoup: "#cdd6f4",
  "Data Analysis": "#b4befe",
  Go: "#89dceb",
  Terminal: "#cdd6f4",
  Bash: "#a6e3a1",
  Powershell: "#89b4fa",
  Docker: "#94e2d5",
  "Docker Compose": "#94e2d5",
  Firebase: "#f9e2af",
  Kubernetes: "#89b4fa",
  Aws: "#fab387",
  Azure: "#89b4fa",
  "Google Cloud": "#74c7ec",
  Linux: "#f9e2af",
  Next: "#cdd6f4",
};

function normalizeLang(raw: string) {
  return raw
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectRecord[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data: ProjectsType = await res.json();
        setProjects(data.records);
      } catch (error) {
        setError("Failed to load projects. Please try again later.");
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-wrap beeg:flex-row flex-col w-screen min-h-screen gap-4 text-center items-center justify-center h-fit max-h-fit p-4">
      {error ? (
        <div className="text-red-500 text-xl">{error}</div>
      ) : projects ? (
        projects.map((project) => (
          <div
            key={project.id}
            className="flex beeg:w-[30vw] bg-[#11111b50] backdrop-blur-[2px] beeg:h-[40vh] min-h-[33rem] h-fit w-[80vw] flex-col border-2 border-gray-500 hover:border-[#b4befe] duration-700 beeg:hover:-translate-y-2 transition-all"
          >
            <Image
              src={
                project.fields.Attachments[0]?.thumbnails.full.url ||
                "/fallback-image.jpg"
              }
              width={project.fields.Attachments[0]?.width || 500}
              height={project.fields.Attachments[0]?.height || 500}
              alt={`${project.fields.Name} banner`}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col gap-4 p-4 items-center justify-center">
              <h2 className="text-2xl font-bold">{project.fields.Name}</h2>
              <p className="text-gray-300">{project.fields.Description}</p>

              {project.fields.langs && (
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  {project.fields.langs.split(",").map((rawLang) => {
                    const lang = normalizeLang(rawLang);
                    return (
                      <span
                        key={lang}
                        title={lang}
                        className="flex items-center gap-1 text-[#11111b] px-2 py-1 rounded-lg text-sm font-semibold"
                        style={{
                          backgroundColor: techColors[lang] || "#cdd6f4",
                        }}
                      >
                        {techIcons[lang] || <SiCodeblocks />} {lang}
                      </span>
                    );
                  })}
                </div>
              )}

              <div className="flex flex-row gap-2 text-center items-center justify-center mt-2">
                <Link
                  className="bg-gray-300 transition-colors duration-150 p-2 text-black cursor-pointer rounded-full hover:bg-[#cdd6f4]"
                  href={project.fields["Github URL"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.fields.Name} on GitHub`}
                >
                  <FaGithub />
                </Link>
                {project.fields["Project URL"] && (
                  <Link
                    className="bg-gray-300 transition-colors duration-150 p-2 text-black cursor-pointer rounded-full hover:bg-[#cdd6f4]"
                    href={project.fields["Project URL"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.fields.Name} project page`}
                  >
                    <FaLink />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 min-h-[40vh]">
          <h2 className="text-2xl font-bold">Loading Projects...</h2>
          <VscLoading className="animate-spin text-4xl text-[#cdd6f4]" />
        </div>
      )}
    </div>
  );
}
