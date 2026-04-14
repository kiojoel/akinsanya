import React from "react";
import Image from "next/image";

const Research = () => {
  const studyAreas = [
    {
      title: "Mathematics for ML",
      description:
        "Linear algebra, multivariable calculus, and probability theory. Working through the foundations that make ML theory legible rather than just mechanical.",
      topics: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
      status: "Active",
      image: null, // replace with image path e.g. "/images/research/math.jpg"
    },
    {
      title: "Algorithms and Data Structures",
      description:
        "Core CS fundamentals with focus on the patterns that show up in ML systems: graphs, trees, dynamic programming, and complexity analysis.",
      topics: ["Graph Algorithms", "Dynamic Programming", "Trees", "Complexity"],
      status: "Active",
      image: null,
    },
    {
      title: "MLOps and Distributed Systems",
      description:
        "How production ML actually works: feature stores, model serving, pipelines, monitoring, and the distributed systems primitives underneath all of it.",
      topics: ["Model Serving", "Feature Stores", "Pipelines", "Distributed Systems"],
      status: "Active",
      image: null,
    },
  ];

  const resources = [
    {
      title: "Mathematics for Machine Learning",
      authors: "Deisenroth, Faisal, Ong",
      type: "Book",
      notes: "Primary reference for the math foundations track.",
    },
    {
      title: "Designing Machine Learning Systems",
      authors: "Chip Huyen",
      type: "Book",
      notes: "Most practical overview of production ML I have found.",
    },
    {
      title: "Introduction to Algorithms (CLRS)",
      authors: "Cormen, Leiserson, Rivest, Stein",
      type: "Book",
      notes: "Working through selected chapters alongside DSA practice.",
    },
  ];

  const statusColor: Record<string, string> = {
    Active:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
    Paused:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
    Planned:
      "bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800",
  };

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">

      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
          Study Log
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
          Research
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The math, theory, and systems topics I am actively working through.
          Not a publication list — just an honest record of what I am studying
          and why.
        </p>
      </div>

      {/* Areas of focus — 3 cards, clean grid */}
      <section className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
          Areas of Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {[
            {
              label: "ML Systems",
              body: "Production pipelines, model serving, monitoring, and the infrastructure that keeps ML reliable at scale.",
            },
            {
              label: "Mathematics",
              body: "Linear algebra, calculus, and probability as foundations for understanding ML methods rather than just applying them.",
            },
            {
              label: "Distributed Systems",
              body: "The systems primitives underneath MLOps: consistency, fault tolerance, coordination, and backend architecture.",
            },
          ].map((area) => (
            <div key={area.label} className="bg-card p-8">
              <div className="w-1 h-8 bg-foreground mb-5 rounded-full" />
              <h3 className="text-base font-semibold mb-3">{area.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Studying */}
      <section className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8">
          Currently Studying
        </h2>
        <div className="space-y-6">
          {studyAreas.map((area, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Optional image slot */}
              {area.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[area.status] ?? ""}`}
                  >
                    {area.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Resources */}
      <section className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8">
          Key Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200 flex flex-col gap-2"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                {resource.type}
              </p>
              <h3 className="font-semibold leading-snug">{resource.title}</h3>
              <p className="text-sm text-muted-foreground">{resource.authors}</p>
              <p className="text-sm text-muted-foreground mt-auto pt-3 border-t border-border">
                {resource.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="border border-border rounded-lg p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Open to Discussion</h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              If you are working through similar topics or have recommendations
              on resources, approaches, or problems worth studying, I am happy
              to talk.
            </p>
          </div>
          <a
            href="mailto:akinsanyajoel82@gmail.com"
            className="shrink-0 inline-block bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-80 transition-opacity font-medium text-sm"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Research;