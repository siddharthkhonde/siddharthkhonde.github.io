import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Tech Stack
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are the technologies and frameworks I have worked with so
            far...
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex flex-col p-4 h-full items-center center">
                <div className="flex flex-row m-2">
                  <img
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    src={skill.icon}
                  />
                  <h2>{skill.category}</h2>
                </div>
                <div className="title-font font-medium text-white whitespace-normal center">
                  {skill.names.map((name, index) => {
                    return (
                      <p key={index} className="mr-2 inline-block">
                        {name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
