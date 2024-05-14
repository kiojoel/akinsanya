import Image from "next/image";
import React from "react";

const projects = [
  {
    projectName: "Mern Blog",
    projectType: "Web Developement",
    description:
      "A full-stack blog with user authentication, article creation, commenting, and sharing capabilities",
    techStacks:
      "Next.js | React | Node.js | Express.js | MongoDB | TailwindCSS",
    link: "https://github.com/kiojoel/mern-blog",
    src: "/joels_pic.jpg",
  },
  {
    projectName: "Project 2",
    projectType: "Data Analysis",
    description:
      "Nulla facilisi. Phasellus pretium arcu vitae quam lacinia, in tempor sapien dignissim.",
    techStacks: "Next.js| Node.js| MongoDB",
    link: "https://example.com/project2",
  },
  {
    projectName: "Project 3",
    projectType: "Machine Learning",
    description:
      "Nulla facilisi. Phasellus pretium arcu vitae quam lacinia, in tempor sapien dignissim.",
    techStacks: "Python| Jupyter",
    link: "https://example.com/project3",
  },
  {
    projectName: "Project 4",
    projectType: "Web Developement",
    description:
      "Nulla facilisi. Phasellus pretium arcu vitae quam lacinia, in tempor sapien dignissim.",
    techStacks: "Python| Jupyter",
    link: "https://example.com/project4",
  },
  {
    projectName: "Project 5",
    projectType: "Web Developement",
    description:
      "Nulla facilisi. Phasellus pretium arcu vitae quam lacinia, in tempor sapien dignissim.",
    techStacks: "Python| Jupyter",
    link: "https://example.com/project4",
  },
  {
    projectName: "Project 6",
    projectType: "Web Developement",
    description:
      "Nulla facilisi. Phasellus pretium arcu vitae quam lacinia, in tempor sapien dignissim.",
    techStacks: "Python| Jupyter",
    link: "https://example.com/project4",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="max-w-7xl w-full">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
      <p className="text-md text-muted-foreground mt-2">
        Projects that I created or working on.
      </p>

      <div className="mt-8">
        <ul className=" md:grid md:grid-cols-3 gap-5 block  ">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="py-4 mt-6 mx-4 h-full w-full shadow-md bg-white dark:bg-gray-950 rounded-xl px-3 text-gray hover:scale-105 transition-transform duration-300">
                <div className="space-y-2">
                  <div className="flex items-center ">
                    <Image
                      alt="projectImg"
                      src={project.src || "/d_images.png"}
                      width={60}
                      height={60}
                      className=" rounded-full mr-5"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <div className="">
                      <h2 className="text-lg font-bold mb-1">
                        {project.projectName}
                      </h2>
                      <p className="text-sm">{project.projectType}</p>
                    </div>
                  </div>
                  <p className="mb-3">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.techStacks}
                  </p>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
