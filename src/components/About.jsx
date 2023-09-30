import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Siddharth.
            <br className="hidden lg:inline-block" />
            I'm a Software Engineer.
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to the digital home of software engineer Siddharth Khonde!
            You can learn more about my professional experience and passion to
            stay current with emerging technologies by contributing to
            innovative projects.
            <br></br>
            <br></br>
            <p>I currently live in New Jersey.</p>
            <br></br>
            <br></br>
            <p>
              The best way to reach me is via{" "}
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/siddharthkhonde"
                style={{ textDecoration: "underline" }}
              >
                LinkedIn
              </a>{" "}
              or via{" "}
              <a
                href="mailto:sk4590@columbia.edu"
                style={{ textDecoration: "underline" }}
              >
                email
              </a>
              .
            </p>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
