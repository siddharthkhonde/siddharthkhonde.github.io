import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Exploring Innovation: My Portfolio Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Welcome to my project showcase! Explore a curated selection of my
            recent work that spans across various domains and technologies. Each
            project represents a unique challenge I've tackled, demonstrating my
            passion for creative problem-solving and technical innovation. From
            web applications to data-driven solutions, every project showcases
            my commitment to delivering high-quality results. Feel free to delve
            into project details, view source code, and explore live demos to
            get a closer look at my skills and expertise.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                {/*<img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
          />*/}
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 {/*opacity-0 hover:opacity-100*/}">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.category}
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
