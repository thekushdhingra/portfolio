import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Repo } from "@/types";
import { BiGitBranch, BiStar } from "react-icons/bi";

function nameModify(str: String): String {
  return str
    .replace(
      /\w\S*/g,
      (text: String) =>
        text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    )
    .replace("_", " ")
    .replace("-", " ");
}

interface ProjectProps {
  project: Repo;
  index: number;
}

export default function Project({ project, index }: ProjectProps) {
  return (
    <motion.section
      key={project.id}
      id={project.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative w-screen h-screen flex items-center justify-center px-6 text-neutral-100 overflow-hidden snap-start border-y-[#232323] border-y-1"
    >
      {project.preview_url && project.preview_type === "image" && (
        <img
          src={project.preview_url}
          alt={`${project.name} ambient background`}
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
        />
      )}

      {project.preview_url && project.preview_type === "video" && (
        <video
          src={project.preview_url}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
        />
      )}

      <div className="relative z-10 max-w-3xl w-full space-y-6 text-center">
        {project.preview_url && project.preview_type === "image" && (
          <img
            src={project.preview_url}
            alt={`${project.name} preview`}
            className="rounded-2xl w-full max-h-[60vh] object-cover mx-auto shadow-xl"
          />
        )}

        {project.preview_url && project.preview_type === "video" && (
          <video
            src={project.preview_url}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl w-full max-h-[60vh] object-cover mx-auto shadow-xl"
          />
        )}

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {nameModify(project.name)}
          </h2>
          <p className="text-neutral-300">{project.description}</p>

          <div className="flex justify-center gap-4 mt-4">
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FiGithub size={20} />
            </a>

            {project.website_url && (
              <a
                href={project.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-8 w-fit text-gray-400 flex flex-row gap-2">
        {project.stars > 0 && (
          <p className="flex flex-row items-center justify-center gap-1">
            <BiStar />
            {" " + project.stars}
          </p>
        )}
        {project.forks > 0 && (
          <p className="flex flex-row items-center justify-center gap-1">
            <BiGitBranch />
            {" " + project.forks}
          </p>
        )}
      </div>

      <div className="absolute inset-0 bg-black/40" />
    </motion.section>
  );
}
