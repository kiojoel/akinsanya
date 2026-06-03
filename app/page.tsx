import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10 flex flex-col gap-7">

      {/* Portrait */}
      <div className="w-full aspect-[3/2] overflow-hidden rounded-xl border border-slate-300">
        <Image
          src="/akin.png"
          alt="Akinsanya Joel"
          width={800}
          height={533}
          priority
          className="object-cover object-top w-full h-full"
        />
      </div>

      {/* Intro */}
      <section className="pb-8 border-b border-slate-300">
        <h1 className="text-4xl md:text-5xl pb-2 font-bold tracking-tight text-slate-900">
          Akinsanya Joel
        </h1>
        <p className="text-slate-500 font-medium">
          Machine Learning & MLOps Engineer
        </p>

        <p className="mt-4 text-slate-700 leading-relaxed max-w-xl">
          Building machine learning systems, backend infrastructure,
          and developer tools.
        </p>
      </section>

      {/* Navigation */}
      <nav className="flex gap-8 pb-8 border-b border-slate-300">
        <a
          href="/articles"
          className="
            text-lg
            font-medium
            text-sky-800
            underline
            underline-offset-4
            decoration-sky-500
            hover:text-sky-950
            hover:decoration-sky-800
            transition-colors
          "
        >
          Articles
        </a>

        <a
          href="/projects"
          className="
            text-lg
            font-medium
            text-sky-800
            underline
            underline-offset-4
            decoration-sky-500
            hover:text-sky-950
            hover:decoration-sky-800
            transition-colors
          "
        >
          Projects
        </a>
      </nav>

      {/* Short Note */}
      <section>
        <p className="text-slate-700 leading-relaxed">
          If you're working on something interesting in ML or backend systems, I'd like to hear about it.
        </p>
      </section>

      {/* Contact */}
      <section className="pt-4 border-t border-slate-300">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">
          Contact
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="mailto:akinsanyajoel82@gmail.com"
            className="
              text-sky-800
              underline
              underline-offset-4
              decoration-sky-500
              hover:text-sky-950
            "
          >
            Email
          </a>

          <a
            href="https://twitter.com/Akinsanya__Joel"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sky-800
              underline
              underline-offset-4
              decoration-sky-500
              hover:text-sky-950
            "
          >
            Twitter
          </a>

          <a
            href="https://www.linkedin.com/in/akinsanya-joel-1a5b51168/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sky-800
              underline
              underline-offset-4
              decoration-sky-500
              hover:text-sky-950
            "
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/kiojoel"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sky-800
              underline
              underline-offset-4
              decoration-sky-500
              hover:text-sky-950
            "
          >
            GitHub
          </a>
        </div>
      </section>

    </main>
  );
}