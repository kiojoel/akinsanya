export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 mt-12 flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
        Enabling Innovation with Machine Learning.
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground">
        <a
          href="/about"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          About Me ↗
        </a>
        &nbsp;— I’m a machine learning engineer and aspiring quant researcher
        focused on building intelligent systems that solve real-world problems.
        I work across ML, data science, and backend development—pushing
        boundaries through hands-on projects, research, and open-source
        contributions.
      </p>

      <p className="text-lg md:text-xl text-muted-foreground">
        <a
          href="/articles"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Articles ↗
        </a>
        &nbsp;— I share my journey through writing on machine learning, data
        science, and my ongoing research. My aim is to simplify complex ideas
        and document growth.
      </p>

      <p className="text-lg md:text-xl text-muted-foreground">
        <a
          href="/projects"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Projects ↗
        </a>
        &nbsp;— From building ML models and end-to-end AI systems to deep data
        analysis, I focus on delivering impactful, scalable solutions that
        bridge innovation and application.
      </p>

      <p className="text-lg md:text-xl text-muted-foreground">
        Let’s collaborate and bring meaningful ideas to life—whether it’s a
        project, competition, or research, I’m always open to building something
        exciting together!
      </p>

      <div className="mt-6">
        <h5 className="text-lg font-semibold text-gray-800 mb-1">Contact Me</h5>
        <a
          className="text-sm text-muted-foreground hover:text-blue-700 block"
          href="mailto:akinsanyajoel82@gmail.com"
        >
          Email: akinsanyajoel82@gmail.com
        </a>
      </div>
    </div>
  );
}
