import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="max-w-7xl pl-7 md:px-10 mx-auto mt-8">
      <h1
        className=" scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4`
        "
      >
        Enabling Innovation with Machine Learning and App Development.
      </h1>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-6"></h4>
      <p className="text-xl text-muted-foreground mb-4">
        <a className="text-blue-500 underline font-semibold" href="/about">
          About Me &#x2197; :
        </a>
        Designing intelligent systems and applications to solve real-world
        problems, continuously advancing in machine learning techniques to push
        boundaries.
      </p>

      <p className="text-xl text-muted-foreground mb-4">
        <a className="text-blue-500 underline font-semibold" href="/articles">
          Articles &#x2197;:
        </a>
        Documenting my learning journey through writing.
      </p>
      <p className="text-xl text-muted-foreground mb-4">
        <a className="text-blue-500 underline font-semibold" href="/projects">
          Projects &#x2197;:
        </a>
        Developing web and mobile applications while also training machine
        learning models and conducting data analytics.
      </p>

      <p className="text-xl text-muted-foreground mb-4">
        Let&apos;s collaborate and transform ideas into reality—connect with me
        to embark on exciting projects together.
      </p>

      <h5 className="font-semibold tracking-tight">Contact me</h5>
      <p className="text-sm text-muted-foreground">
        <a className="block" href="mailto:akinsanyajoel82@gmail.com">
          Email: akinsanyajoel82@gmail.com
        </a>
      </p>
    </section>
  );
}
