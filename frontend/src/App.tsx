import { useEffect, useState } from "react";
import { FiLinkedin } from "react-icons/fi";
import { PiGithubLogo, PiLink } from "react-icons/pi";

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type ImageData = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
};

type Project = {
  id: string;
  Name: string;
  Description: string;
  Link: string;
  Github?: string;
  Image: ImageData[];
};

function App() {
  const skills = [
    "Python",
    "Go",
    "TypeScript",
    "Pandas",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Flask",
    "FastAPI",
    "SolidJS",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
  ];

  const [projects, setProjects] = useState<Project[]>([]);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://kushs-backend.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data["projects"]))
      .catch(() => setProjects([]));
  }, []);

  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="bg-[#141414] text-white w-screen min-h-screen md:h-screen md:overflow-hidden overflow-y-auto p-6 flex justify-center items-start md:items-center">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl h-auto md:h-full">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8 h-auto md:h-full">
          {/* Intro */}
          <div className="bg-[#151515] border border-[#222222] rounded-xl p-8 text-center md:text-left flex-shrink-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-relaxed">
              Hi, I am Kush 👋
            </h1>
            <p className="text-lg text-gray-400">
              A passionate Python, Go, and TypeScript developer building modern
              web apps and backend systems. I focus on clean, maintainable code,
              performant APIs, and delightful user experiences, leveraging
              frameworks like React and FastAPI to deliver reliable end-to-end
              solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-[#151515] border border-[#222222] rounded-xl p-6 text-center md:text-left flex-grow overflow-y-auto md:overflow-visible">
            <h2 className="text-xl font-semibold mb-4">My Skills</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#222222] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-[#151515] border border-[#222222] rounded-xl p-6 text-center md:text-left flex-shrink-0">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p className="text-gray-400 mb-4">
              You can reach me at{" "}
              <a
                href="mailto:contact@kushs.dev"
                className="text-[#15C2CB] hover:underline"
              >
                contact@kushs.dev
              </a>{" "}
              or connect with me here:
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/thekushdhingra/"
                className="hover:bg-white rounded-full p-2 flex items-center justify-center text-center hover:text-black transition-colors duration-300"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://github.com/thekushdhingra"
                className="hover:bg-white rounded-full p-2 flex items-center justify-center text-center hover:text-black transition-colors duration-300"
              >
                <PiGithubLogo size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#151515] border border-[#222222] rounded-xl p-6 flex flex-col h-auto md:h-full overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1c1c1c] p-4 rounded-lg border border-[#222222] hover:border-[#15C2CB] transition-all w-full sm:w-[48%]"
              >
                <img
                  src={project.Image?.[0]?.url}
                  alt={project.Name}
                  className="rounded-lg mb-3 w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold mb-1">{project.Name}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {project.Description}
                </p>
                <div className="flex gap-2 items-center">
                  {project.Link && (
                    <a
                      href={project.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:bg-white hover:text-black p-3 rounded-full border-2 transition-colors duration-300 hover:border-transparent border-[#222222]"
                    >
                      <PiLink size={18} />
                    </a>
                  )}
                  {project.Github && (
                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:bg-white hover:text-black p-3 rounded-full border-2 transition-colors duration-300 hover:border-transparent border-[#222222]"
                      title="GitHub Repository"
                    >
                      <PiGithubLogo size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Back & Next Buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={handleBack}
                disabled={currentPage === 1}
                className={`px-5 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  currentPage === 1
                    ? "bg-[#222222] text-gray-600 cursor-not-allowed"
                    : "bg-[#222222] text-gray-300 hover:bg-[#333]"
                }`}
              >
                ← Back
              </button>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-5 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  currentPage === totalPages
                    ? "bg-[#222222] text-gray-600 cursor-not-allowed"
                    : "bg-[#222222] text-gray-300 hover:bg-[#333]"
                }`}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
