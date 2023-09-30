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
          Professional Experience
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          I am a software engineer currently working at TD Securities. I have
          been working on products involving the integration and application of
          operating systems, computer networking, relational and non-relational
          databases, distributed systems, cloud computing, data structures and
          algorithms, virtualization, mathematics, and data engineering to
          improve scalable system architectures with high interoperability for
          over 4 years across different companies. Some of highlights have been
          working on TD Securities's API Platform and HSBC's Internal Cloud
          Platform to host large scale cloud-native applications. I host a more
          "complete" resume on{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/siddharthkhonde"
            style={{ textDecoration: "underline" }}
          >
            LinkedIn
          </a>
          .
        </p>
        <div className="experience-timeline flex flex-wrap m-4 px-3 py-5">
          <Timeline
            align="alternate"
            value={experiences}
            marker={() => (
              <BriefcaseIcon className="mx-auto inline-block w-7 rounded-full border-2 border-gray-500 p-1" />
            )}
            content={(item) => (
              <div
                className="bg-transparent p-2 rounded-md border-4 border-gray-500 text-white"
                style={{
                  color: "white",
                  fontWeight: 400,
                  fontSize: 14,
                  fontFamily: "Menlo, Meslo LG, monospace",
                  lineHeight: 1.725,
                  textRendering: "geometricPrecision",
                  textAlign: "left",
                }}
              >
                <h4>
                  <strong>
                    <span className="hashtag" style={{ color: "#2bbc8a" }}>
                      +
                    </span>{" "}
                    <i>Role:</i>
                  </strong>{" "}
                  {item.role}
                </h4>
                <h6>
                  <strong>
                    <span className="hashtag" style={{ color: "#2bbc8a" }}>
                      @
                    </span>{" "}
                    <i>Company:</i>
                  </strong>{" "}
                  {item.company}
                </h6>
                <p>
                  <strong>
                    <span className="hashtag" style={{ color: "#2bbc8a" }}>
                      !
                    </span>{" "}
                    <i>Location:</i>
                  </strong>{" "}
                  {item.location}
                </p>
                <p>
                  <strong>
                    <span className="hashtag" style={{ color: "#2bbc8a" }}>
                      *
                    </span>{" "}
                    <i>Duration:</i>
                  </strong>{" "}
                  {item.duration}
                </p>
                {/* <p>
                  <strong>
                    <span className="hashtag" style={{ color: "#2bbc8a" }}>
                      /&gt;
                    </span>{" "}
                    <i>Details:</i>
                  </strong>
                  <ul>
                    {item.details.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                    </p> */}
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
