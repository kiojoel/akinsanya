import Image from "next/image";
import React from "react";

const projects = [
  {
    projectName: "Black-Scholes Option Pricer",
    projectType: "FinTech Application",
    description:
      "An interactive web app for pricing European options and their Greeks using the Black-Scholes model with live market data from Yahoo Finance.",
    techStacks: "Python, Streamlit, Pandas, yfinance",
    link: "https://black-scholes-pricing-models.streamlit.app/",
    src: "/black-scholes-app.jpg",
  },
  {
    projectName: "Gradient Descent Variants",
    projectType: "Machine Learning",
    description:
      "An educational toolkit designed for understanding gradient descent optimization.",
    techStacks: "Python",
    link: "https://gradient-descent-variants.streamlit.app/",
    src: "/gradient.png",
  },
  {
    projectName: "Custom Cross-Validation Library (custom-cv)",
    projectType: "Python Package | Machine Learning",
    description:
      "Developed and published a Python library to PyPI providing specialized cross-validation strategies (Stratified, Time-Series, Spatial) for robust model evaluation.",
    techStacks:
      "Python | PyPI | scikit-learn | pytest | Matplotlib | Seaborn | Pandas",
    link: "https://github.com/kiojoel/custom-cv-lib",
    src: "/cv.png",
  },
  {
    projectName: "Multiple Disease Prediction System",
    projectType: "Machine Learning",
    description:
      "A web app that predicts various diseases like diabetes and heart disease based on user health data using machine learning models. It helps users take preventive action by providing quick and accurate predictions.",
    techStacks: "Python | Streamlit",
    link: "https://multiple-health-disease-prediction-systems.streamlit.app/",
    src: "/health.png",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="max-w-7xl w-full mb-5">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
      <p className="text-md text-muted-foreground mt-2">
        Projects that I created or working on.
      </p>
      <p>
        you can explore various data science and machine learning projects I
        have worked on. For detailed code and datasets, visit my{" "}
        <a
          className="text-blue-500"
          href="https://www.kaggle.com/akinsanyajoel/code"
          target="_blank"
        >
          Kaggle profile
        </a>{" "}
        and{" "}
        <a
          className="text-blue-500"
          href="https://github.com/kiojoel?tab=repositories"
          target="_blank"
        >
          GitHub repository
        </a>{" "}
        .
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
              <li className="py-4 mt-6  h-full w-full shadow-md bg-white dark:bg-gray-950 rounded-xl px-3 text-gray hover:scale-105 transition-transform duration-300">
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
