import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 mt-12 flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
        Enabling Innovation with Machine Learning.
      </h1>{" "}
      <p className="text-lg md:text-xl text-muted-foreground">
        I&apos;m a machine learning engineer passionate about creating
        intelligent systems that tackle real-world challenges through practical
        projects and research.
      </p>
      <p className="text-lg md:text-xl text-muted-foreground">
        I enjoy sharing my experiences and insights on machine learning, data
        science, and my current research through my
        <a
          href="/articles"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          {" "}
          articles{" "}
        </a>
        . I strive to make complex concepts accessible and to chronicle my
        personal growth along the way.
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
        range from developing ML models and complete AI systems to conducting
        thorough data analyses, always aiming to deliver impactful, scalable
        solutions that bridge innovative ideas with real-world applications.
      </p>
      <p className="text-lg md:text-xl text-muted-foreground">
        Let&apos;s join forces to turn inspiring ideas into reality, whether
        through a project, competition, or research endeavor. I&apos;m eager to
        collaborate on something thrilling together!
      </p>
      <div className="mt-6">
        <h5 className="text-lg font-semibold mb-1">Contact Me</h5>
        <div className="flex items-center gap-6">
          <a
            className="text-sm text-muted-foreground hover:text-blue-700"
            href="mailto:akinsanyajoel82@gmail.com"
          >
            Email: akinsanyajoel82@gmail.com
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com/Akinsanya__Joel"
              target="_blank"
              className="text-gray-500 hover:text-blue-700 hover:cursor-pointer"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/akinsanya-joel-1a5b51168/"
              target="_blank"
              className="text-gray-500 hover:text-blue-700 hover:cursor-pointer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/kiojoel"
              target="_blank"
              className="text-gray-500 hover:text-blue-700 hover:cursor-pointer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
