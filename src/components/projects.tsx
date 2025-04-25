import { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Read Only token for Airtable
    fetch("https://api.airtable.com/v0/appFNA33xiN0SbTHf/tblnbs34h3JQ6BHqM", {
      headers: {
        Authorization:
          "Bearer patSlYUtVdlWfnw6E.3ec65ba7eb20715e84cc6c33d57f762561d2d36d900be786f40f73d603dd2775",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.records.reverse());
      });
  }, []);
  return (
    <div className="flex beeg:flex-row flex-col w-screen h-screen gap-4 text-center items-center justify-center">
      {projects && projects.length > 0 ? (
        projects.map((project) => (
          <div
            key={project.id}
            className="flex beeg:w-[30vw] bg-[#11111b50] backdrop-blur-[2px] beeg:h-[40vh] min-h-[26rem] w-[80vw] flex-col border-2 border-gray-500 hover:border-[#b4befe] transition-colors duration-700"
          >
            <Image
              src={
                project.fields["Attachments"][0]["thumbnails"]["full"]["url"]
              }
              width={500}
              height={500}
              alt="Project Banner"
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-4 p-4 items-center justify-center">
              <h2 className="text-2xl font-bold">{project.fields.Name}</h2>
              <p>{project.fields.Description}</p>
              <div className="flex flex-row gap-2 text-center items-center justify-center">
                <Link
                  className="bg-gray-300 transition-colors duration-150 p-2 text-black cursor-hover rounded-full hover:bg-[#cdd6f4]"
                  href={project.fields["Github URL"]}
                >
                  <FaGithub></FaGithub>
                </Link>
                {project.fields["Project URL"] && (
                  <Link
                    className="bg-gray-300 transition-colors duration-150 p-2 text-black cursor-hover rounded-full hover:bg-[#cdd6f4]"
                    href={project.fields["Project URL"]}
                  >
                    <FaLink></FaLink>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">Loading Projects...</h2>
          <VscLoading className="animate-spin text-4xl text-[#cdd6f4]" />
        </div>
      )}
    </div>
  );
}
