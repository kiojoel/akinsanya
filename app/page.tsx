export default function Home() {
  return (
    <div className="max-w-7xl pl-7 md:px-10 mx-auto mt-8 flex flex-col gap-4">
      <h1
        className=" scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4`
        "
      >
        Enabling Innovation with Machine Learning & Intelligent App Development.
      </h1>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-6"></h4>
      <p className="text-xl text-muted-foreground mb-4">
        <a className="text-blue-500 underline font-semibold" href="/about">
          About Me &#x2197; :
        </a>
        I’m a machine learning engineer and aspiring quant researcher focused on
        building intelligent systems that solve real-world problems. With a
        strong foundation in ML, data science, and backend development, I’m
        continuously pushing boundaries through hands-on projects, research, and
        open-source contributions.
      </p>

      <p className="text-xl text-muted-foreground mb-4">
        <a className="text-blue-500 underline font-semibold" href="/articles">
          Articles &#x2197;:
        </a>
        I share my journey by writing about machine learning, data science, and
        new insights—simplifying complex topics and documenting my growth.
      </p>
      <p className="text-xl text-muted-foreground mb-4">
        <a className="text-blue-500 underline font-semibold" href="/projects">
          Projects &#x2197;:
        </a>
        From training ML models and building end-to-end AI systems to performing
        deep data analysis, I focus on delivering impactful, scalable solutions
        that bridge innovation and application.
      </p>

      <p className="text-xl text-muted-foreground mb-4">
        Let&apos;s collaborate and bring meaningful ideas to life—whether it’s a
        project, competition, or research, I’m always open to building something
        exciting together!
      </p>

      <h5 className="font-semibold tracking-tight">Contact me</h5>
      <p className="text-sm text-muted-foreground">
        <a
          className="block hover:text-blue-700"
          href="mailto:akinsanyajoel82@gmail.com"
        >
          Email: akinsanyajoel82@gmail.com
        </a>
      </p>
    </div>
  );
}
