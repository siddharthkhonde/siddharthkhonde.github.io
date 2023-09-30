import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { Timeline } from "primereact/timeline";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Innovative Journey: Professional Experience
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Welcome to my project showcase! Explore a curated selection of my
          recent work that spans across various domains and technologies. Each
          project represents a unique challenge I've tackled, demonstrating my
          passion for creative problem-solving and technical innovation. From
          web applications to data-driven solutions, every project showcases my
          commitment to delivering high-quality results. Feel free to delve into
          project details, view source code, and explore live demos to get a
          closer look at my skills and expertise.
        </p>
        <div className="experience-timeline flex flex-wrap m-4 px-3 py-5">
          <Timeline
            align="alternate"
            value={experiences}
            marker={() => (
              <BriefcaseIcon className="mx-auto inline-block w-7 rounded-full border-2 border-gray-500 p-1" />
            )}
            content={(item) => (
              <div className="bg-transparent p-2 rounded-md border-4 border-gray-500 text-white">
                <h4>{item.post}</h4>
                <h6>{item.company}</h6>
                <p>{item.location}</p>
                <p>{item.time}</p>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
