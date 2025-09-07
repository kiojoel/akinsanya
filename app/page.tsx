export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 mt-10 mb-10 flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
        Building Intelligent Solutions for Finance & Beyond.
      </h1>{" "}
      <p className="text-lg md:text-xl text-muted-foreground">
        I&apos;m a machine learning engineer with a passion for quantitative
        finance, creating intelligent systems that solve complex financial
        problems through data-driven insights and practical applications.
      </p>
      <p className="text-lg md:text-xl text-muted-foreground">
        I share my journey exploring the intersection of ML and finance through
        my
        <a
          href="/articles"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          {" "}
          articles{" "}
        </a>
        . From algorithmic trading strategies to risk modeling, I break down
        complex quantitative concepts and document my learning path in both
        machine learning and financial markets.
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
        span from ML-powered trading systems and portfolio optimization tools to
        comprehensive financial analytics platforms, always focusing on creating
        scalable solutions that transform financial data into actionable
        intelligence.
      </p>
      <p className="text-lg md:text-xl text-muted-foreground">
        Let&apos;s connect to turn inspiring ideas into reality, whether through
        a project, competition, or research. I&apos;m eager to collaborate on
        something thrilling together!
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
