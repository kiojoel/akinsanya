import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface Implementation {
  title: string;
  type: "Notebook" | "Code" | "Paper" | "Algorithm";
  description: string;
  tools: string[];
  link: string;
}

const implementations: Implementation[] = [
  {
    title: "Linear Regression from Scratch",
    type: "Notebook",
    description:
      "NumPy implementation with gradient descent, compared against scikit-learn. Covers batch, stochastic, and mini-batch variants.",
    tools: ["Python", "NumPy", "Matplotlib"],
    link: "#",
  },
  {
    title: "Graph Traversal Algorithms",
    type: "Code",
    description:
      "BFS, DFS, Dijkstra's, and A* in Python with step-by-step execution traces and complexity analysis.",
    tools: ["Python"],
    link: "#",
  },
  {
    title: "Probability Distributions Visualized",
    type: "Notebook",
    description:
      "Interactive exploration of common distributions — their PDFs, CDFs, moments, and relationships to one another.",
    tools: ["Python", "SciPy", "Matplotlib"],
    link: "#",
  },
  {
    title: "Feature Pipeline Skeleton",
    type: "Code",
    description:
      "Minimal feature store setup with transformation logic, versioning, and a simple serving endpoint.",
    tools: ["Python", "FastAPI", "SQLite"],
    link: "#",
  },
  {
    title: "K-Means Convergence Analysis",
    type: "Notebook",
    description:
      "Implementing K-Means from scratch with visualizations of convergence behavior across different initializations.",
    tools: ["Python", "NumPy", "Matplotlib"],
    link: "#",
  },
  {
    title: "Consistent Hashing Implementation",
    type: "Algorithm",
    description:
      "Building a consistent hashing ring with virtual nodes, used to understand distributed cache partitioning.",
    tools: ["Python"],
    link: "#",
  },
];

const Lab = () => {
  return (
    <section className="max-w-7xl w-full mb-5">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Lab</h1>
      <p className="text-md text-muted-foreground mt-2">
        Papers, algorithms, and concept implementations I&apos;m working through.
      </p>
      <p className="text-muted-foreground">
        Notebooks and scripts where I break down ideas by hand before using
        libraries. For everything else, visit my{" "}
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
          {implementations.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="py-4 mt-6 h-full w-full shadow-md bg-white dark:bg-gray-950 rounded-xl px-3 border border-gray-200 dark:border-gray-800 text-gray hover:scale-105 transition-transform duration-300">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium">
                      {item.type}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                      >
                        {tool}
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
            If you&apos;re working through similar topics or have
            recommendations on resources or problems worth studying, I&apos;m
            happy to talk.
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

export default Lab;