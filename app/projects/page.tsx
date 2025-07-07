import Image from "next/image";
import React from "react";

const projects = [
  {
    projectName: "Multiple Disease Prediction System",
    projectType: "Machine Learning",
    description:
      "A web app that predicts various diseases like diabetes and heart disease based on user health data using machine learning models. It helps users take preventive action by providing quick and accurate predictions.",
    techStacks: "Python | Streamlit",
    link: "https://multiple-health-disease-prediction-systems.streamlit.app/",
    src: "/health.png",
  },
  {
    projectName: "Gradient Descent Variants",
    projectType: "Machine Learning",
    description:
      "An educational toolkit designed for understanding gradient descent optimization.",
    techStacks: "Python",
    link: "https://github.com/kiojoel/gradient-descent-variants",
    src: "/gradient.png",
  },
  {
    projectName: "Spam Mail Prediction",
    projectType: "Machine Learning",
    description:
      "A logistic regression model to classify emails as spam or not spam, trained on features like word frequencies and TF-IDF scores, involving data preprocessing, feature engineering, model training, and evaluation.",
    techStacks: "Python | Jupyter",
    link: "https://github.com/kiojoel/Spam-Mail-Prediction-Logistic-Regression/blob/main/Spam_Mail_Prediction.ipynb",
    src: "/spam_project.webp",
  },
  {
    projectName: "Project 4",
    projectType: "Web Developement",
    description:
      "Nulla facilisi. Phasellus pretium arcu vitae quam lacinia, in tempor sapien dignissim.",
    techStacks: "Python | Jupyter",
    link: "https://example.com/project4",
  },
  {
    projectName: "Project 5",
    projectType: "Web Developement",
    description:
      "Nulla facilisi. Phasellus pretium arcu vitae quam lacinia, in tempor sapien dignissim.",
    techStacks: "Python | Jupyter",
    link: "https://example.com/project4",
  },
  {
    projectName: "Project 6",
    projectType: "Web Developement",
    description:
      "Nulla facilisi. Phasellus pretium arcu vitae quam lacinia, in tempor sapien dignissim.",
    techStacks: "Python | Jupyter",
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
