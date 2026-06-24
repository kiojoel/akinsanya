import Image from "next/image";
import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface Project {
  projectName: string;
  projectType: string;
  description: string;
  techStacks: string[];
  link: string;
  src: string;
}

const projects: Project[] = [
  {
    projectName: "Black-Scholes Option Pricer",
    projectType: "FinTech Application",
    description:
      "An interactive web app for pricing European options and their Greeks using the Black-Scholes model with live market data from Yahoo Finance.",
    techStacks: ["Python", "Streamlit", "Pandas", "yfinance"],
    link: "https://black-scholes-pricing-models.streamlit.app/",
    src: "/black-scholes-app.jpg",
  },
  {
    projectName: "Gradient Descent Variants",
    projectType: "Machine Learning",
    description:
      "An educational toolkit designed for understanding gradient descent optimization.",
    techStacks: ["Python"],
    link: "https://gradient-descent-variants.streamlit.app/",
    src: "/gradient.png",
  },
  {
    projectName: "Custom Cross-Validation Library (custom-cv)",
    projectType: "Python Package",
    description:
      "Developed and published a Python library to PyPI providing specialized cross-validation strategies (Stratified, Time-Series, Spatial) for robust model evaluation.",
    techStacks: ["Python", "PyPI", "scikit-learn", "pytest", "Matplotlib", "Pandas"],
    link: "https://github.com/kiojoel/custom-cv-lib",
    src: "/cv.png",
  },
  {
    projectName: "Multiple Disease Prediction System",
    projectType: "Machine Learning",
    description:
      "A web app that predicts various diseases like diabetes and heart disease based on user health data using machine learning models.",
    techStacks: ["Python", "Streamlit"],
    link: "https://multiple-health-disease-prediction-systems.streamlit.app/",
    src: "/health.png",
  },
];

const Projects = () => {
  return (
    <section className="max-w-7xl w-full mb-5">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
      <p className="text-muted-foreground">
        You can explore various data science and machine learning projects I
        have worked on. For detailed code and datasets, visit my{" "}
        <a
          className="text-blue-500"
          href="https://www.kaggle.com/akinsanyajoel/code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kaggle profile
        </a>{" "}
        and{" "}
        <a
          className="text-blue-500"
          href="https://github.com/kiojoel?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <div className="mt-8">
        <ul className="md:grid md:grid-cols-3 gap-5 block">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="py-4 mt-6 h-full w-full shadow-md bg-white dark:bg-gray-950 rounded-xl px-3 border border-gray-200 dark:border-gray-800 text-gray hover:scale-105 transition-transform duration-300">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <Image
                        alt={project.projectName}
                        src={project.src || "/d_images.png"}
                        width={48}
                        height={48}
                        className="rounded-lg object-cover shrink-0"
                        style={{ width: "48px", height: "48px" }}
                      />
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold leading-snug truncate">
                          {project.projectName}
                        </h2>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {project.projectType}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStacks.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>

      {/* Open to Discussion */}
      <div className="mt-12 mb-8 border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-sm bg-white dark:bg-gray-950">
        <div>
          <h2 className="text-lg font-semibold mb-1">Open to Discussion</h2>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            If you&apos;re working on something interesting or want to
            collaborate on a project, feel free to reach out.
          </p>
        </div>
        <a
          href="mailto:akinsanyajoel82@gmail.com"
          className="shrink-0 inline-flex items-center gap-2 bg-gray-950 text-white dark:bg-white dark:text-gray-950 px-5 py-2.5 rounded-lg hover:opacity-80 transition-opacity font-medium text-sm"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Projects;