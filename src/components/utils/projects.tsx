import { Skeleton } from "@/components/ui/skeleton";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Github, Link, Star } from "lucide-react";
import { ProjectType } from "@/types";
import { ProjectCard } from "./project_card";

interface ProjectsProps {
  projects: ProjectType[];
  delay: number;
}

export default function Projects({ projects, delay }: ProjectsProps) {
  const sortedProjects = [...projects].sort(
    (a, b) => (b.fields.Featured ? 1 : 0) - (a.fields.Featured ? 1 : 0)
  );

  return (
    <section className="my-20 h-fit" id="projects">
      <BlurFade delay={delay}>
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        <div className="h-fit flex flex-row flex-wrap p-4 items-center justify-center">
          {projects.length
            ? sortedProjects.map((project) => <ProjectCard project={project} />)
            : Array.from({ length: 5 }).map((_, index) => (
                <div>
                  <Skeleton className="w-full h-40 mb-4" />
                  <Skeleton className="w-3/4 h-6 mb-2" />
                  <Skeleton className="w-5/6 h-4 mb-4" />
                  <div className="flex justify-center gap-4 items-center w-full">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <Skeleton className="w-8 h-8 rounded-full" />
                  </div>
                </div>
              ))}
        </div>
      </BlurFade>
    </section>
  );
}
