import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Link } from "lucide-react";
import type { ProjectType } from "@/types";

type ProjectCardProps = {
  project: ProjectType;
  className?: string;
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <CardContainer className={className}>
      <CardBody className="flex flex-col items-center justify-center p-4 border border-border rounded-lg shadow-lg mx-8 text-center bg-card">
        <CardItem translateZ="100" className="w-full mb-4">
          <img
            src={project.fields.Attachments[0].thumbnails.large.url}
            alt={project.fields.Name}
            className="w-full h-40 object-cover rounded-lg "
          />
        </CardItem>
        <CardItem
          translateZ="50"
          as="h3"
          className="text-2xl font-bold mb-2 cursor-default"
        >
          {project.fields.Name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-lg mb-4 cursor-default"
        >
          {project.fields.Description}
        </CardItem>
        <div className="flex justify-center gap-4 items-center w-full mt-4">
          <CardItem
            translateZ={20}
            as="a"
            href={project.fields["Github URL"]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-primary hover:text-background transition-colors duration-200 p-3 rounded-full border border-border"
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
          </CardItem>
          {project.fields["Project URL"] && (
            <CardItem
              translateZ={20}
              as="a"
              href={project.fields["Project URL"]}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary hover:text-background transition-colors duration-200 p-3 rounded-full border border-border"
            >
              <Link size={20} />
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
