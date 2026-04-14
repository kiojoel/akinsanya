export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 mt-10 mb-10 flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
        Building ML Systems for the Real World.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground">
        I&apos;m a machine learning engineer with a focus on building production
        ML systems and the backend infrastructure that supports them.
      </p>
      <p className="text-lg md:text-xl text-muted-foreground">
        I share what I&apos;m learning and building through my
        <a
          href="/articles"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          {" "}
          articles{" "}
        </a>
        . From model training and deployment to distributed systems and
        backend engineering, I document the concepts and decisions that
        actually matter in production.
      </p>
      <p className="text-lg md:text-xl text-muted-foreground">
        My
        <a
          href="/projects"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          {" "}
          projects{" "}
        </a>
        range from data pipelines and ML-powered APIs to geospatial systems
        and open-source tooling, always focused on building things that work
        reliably at scale.
      </p>
      {/* <p className="text-lg md:text-xl text-muted-foreground">
        The{" "}
        <a
          href="/research"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          research
        </a>{" "}
        page tracks the math, ML theory, and systems topics I&apos;m actively
        working through.
      </p> */}
      <p className="text-lg md:text-xl text-muted-foreground">
        If you&apos;re working on something interesting in ML or backend
        systems, I&apos;d like to hear about it.
      </p>
      <div className="mt-6">
        <h5 className="text-lg font-semibold mb-1">Contact Me</h5>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <a
            className="text-sm text-muted-foreground hover:text-blue-700"
            href="mailto:akinsanyajoel82@gmail.com"
          >
            Email: akinsanyajoel82@gmail.com
          </a>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="https://twitter.com/Akinsanya__Joel"
              target="_blank"
              className="text-gray-500 hover:text-blue-700 hover:underline"
            >
              Twitter
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://www.linkedin.com/in/akinsanya-joel-1a5b51168/"
              target="_blank"
              className="text-gray-500 hover:text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://github.com/kiojoel"
              target="_blank"
              className="text-gray-500 hover:text-blue-700 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}