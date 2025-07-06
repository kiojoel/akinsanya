import React from "react";

const Research = () => {
  const researchProjects = [
    {
      title: "Deep Learning for Time Series Forecasting",
      description:
        "Developed novel neural network architectures for multivariate time series prediction, achieving 15% improvement over state-of-the-art methods.",
      tags: ["Deep Learning", "Time Series", "LSTM", "Transformer"],
      status: "Published",
      date: "2024",
      venue: "IEEE Conference on Machine Learning",
      collaborators: ["Dr. Smith", "Prof. Johnson"],
    },
    {
      title: "Federated Learning in Healthcare Applications",
      description:
        "Implemented privacy-preserving machine learning models for medical diagnosis across distributed healthcare networks.",
      tags: ["Federated Learning", "Healthcare", "Privacy", "Neural Networks"],
      status: "Under Review",
      date: "2024",
      venue: "Nature Machine Intelligence",
      collaborators: ["Dr. Brown", "Medical Center Team"],
    },
    {
      title: "Explainable AI for Financial Risk Assessment",
      description:
        "Created interpretable machine learning models for credit risk evaluation with enhanced transparency and regulatory compliance.",
      tags: ["XAI", "Finance", "Risk Assessment", "SHAP"],
      status: "In Progress",
      date: "2024",
      venue: "Journal of Financial Technology",
      collaborators: ["FinTech Lab"],
    },
  ];

  const publications = [
    {
      title: "Advanced Neural Architectures for Sequential Data Processing",
      authors: "A. Joel, et al.",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2024",
      citations: 23,
    },
    {
      title: "Optimization Techniques for Large-Scale Model Training",
      authors: "A. Joel, Dr. Wilson",
      venue: "Journal of Machine Learning Research",
      year: "2023",
      citations: 45,
    },
    {
      title: "Scalable Distributed Learning Systems",
      authors: "A. Joel, Research Team",
      venue: "NeurIPS Workshop on Distributed ML",
      year: "2023",
      citations: 12,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          Research
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Exploring cutting-edge machine learning research with focus on
          practical applications, theoretical foundations, and scalable
          solutions for real-world problems.
        </p>
      </div>

      {/* Research Interests */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-3">Deep Learning</h3>
            <p className="text-muted-foreground">
              Neural network architectures, optimization techniques, and
              theoretical foundations
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-3">MLOps & Scalability</h3>
            <p className="text-muted-foreground">
              Production ML systems, distributed training, and model deployment
              strategies
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-3">Explainable AI</h3>
            <p className="text-muted-foreground">
              Interpretable models, fairness in ML, and transparent
              decision-making systems
            </p>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">
          Current Research Projects
        </h2>
        <div className="space-y-8">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Year:</strong> {project.date}
                </div>
                <div>
                  <strong>Collaborators:</strong>{" "}
                  {project.collaborators.join(", ")}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium">
                  Target Venue: {project.venue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Recent Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-muted-foreground mb-2">{pub.authors}</p>
              <p className="text-sm text-muted-foreground mb-3">
                {pub.venue} • {pub.year}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  📊 {pub.citations} citations
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration */}
      <section>
        <div className="p-8 border rounded-lg bg-muted/50">
          <h2 className="text-2xl font-semibold mb-4">
            Research Collaboration
          </h2>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Interested in collaborating on machine learning research? I&apos;m
            always open to discussing new projects, sharing insights, and
            exploring innovative approaches to challenging problems in AI and
            ML.
          </p>
          <a
            href="mailto:akinsanyajoel82@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Research;
