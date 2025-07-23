import { useEffect, useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BarChart, BoxIcon, HomeIcon, Mail, Moon, Sun } from "lucide-react";
import Projects from "@/components/utils/projects";
import Stats from "@/components/utils/stats";
import { ProjectType, StatsType } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectCard } from "@/components/utils/project_card";

const delay = 0.25;

async function fetchProjects() {
  const resp = await fetch("/api/projects");
  if (!resp.ok)
    throw new Error("Failed to fetch projects, Status Code: " + resp.status);
  return resp.json();
}

async function fetchStats() {
  const resp = await fetch("/api/stats");
  if (!resp.ok)
    throw new Error("Failed to fetch stats, Status Code: " + resp.status);
  return resp.json();
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [stats, setStats] = useState<StatsType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
        const statsData = await fetchStats();
        setStats(statsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkMode = localStorage.getItem("darkMode");
      if (darkMode !== null) {
        setIsDark(darkMode === "true");
        document.body.classList.toggle("dark", darkMode === "true");
      } else {
        localStorage.setItem("darkMode", "true");
        setIsDark(true);
        document.body.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("dark", isDark);
      localStorage.setItem("darkMode", isDark.toString());
    }
  }, [isDark]);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <header
        className="flex flex-col items-center justify-center gap-4 w-screen min-h-screen"
        id="home"
      >
        <BlurFade delay={delay} className="mt-40">
          <h1 className="font-bold text-9xl text-center">
            Hi, I am{" "}
            <span className="bg-gradient-to-br from-[#8b61ff] to-[#2feaff] text-transparent bg-clip-text">
              Kush
            </span>{" "}
            👋
          </h1>
        </BlurFade>
        <BlurFade delay={delay * 2}>
          <p className="text-2xl text-center text-muted-foreground italic">
            "I tell computers to do stuff, often breaking them in the process."
          </p>
        </BlurFade>
        <BlurFade
          className="mt-15 lg:flex hidden flex-col items-center justify-center"
          delay={delay * 5}
        >
          <h3 className="text-center text-3xl w-full">Featured Projects:</h3>
          <div className="flex flex-wrap justify-center items-stretch w-full">
            {projects
              .filter((project) => project.fields.Featured)
              .map((project) => (
                <>
                  <ProjectCard project={project} />
                </>
              ))}
          </div>
        </BlurFade>
      </header>

      <section id="stats" className="flex flex-col items-center justify-center">
        <div className="max-w-[80vw]">
          <Stats stats={stats} delay={delay * 4} />
        </div>
      </section>
      <Projects projects={projects} delay={delay * 5} />

      <section className="my-20" id="contact">
        <BlurFade delay={delay * 6}>
          <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
          <p className="text-center text-lg">
            Let’s collab or just geek out — hit me up!
          </p>
          <div id="contact-links" className="flex justify-center mt-4 gap-4">
            <a
              href="mailto:kush"
              className="border-border border-1 p-4 rounded-full hover:bg-border transition-colors duration-200"
            >
              <Mail />
            </a>
            <a
              href="https://x.com/thekushdhingra"
              className="border-border border-1 p-4 rounded-full hover:bg-border transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/thekushdhingra"
              className="border-border border-1 p-4 rounded-full hover:bg-border transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://github.com/thekushdhingra"
              className="border-border border-1 p-4 rounded-full hover:bg-border transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </BlurFade>
      </section>

      <nav className="flex gap-4 flex-row fixed bottom-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background border-border border-1 items-center">
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger>
              <a href="#home">
                <HomeIcon />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-background">Home</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a href="#stats">
                <BarChart />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-background">Coding Stats</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a href="#projects">
                <BoxIcon />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-background">Projects</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <a href="#contact">
                <Mail />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-background">Contact</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="h-6 w-px bg-border" />

        <Tooltip>
          <TooltipTrigger
            onClick={() => {
              setIsDark(!isDark);
            }}
          >
            {isDark ? <Moon /> : <Sun />}
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-background">
              {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </p>
          </TooltipContent>
        </Tooltip>
      </nav>
    </div>
  );
}
