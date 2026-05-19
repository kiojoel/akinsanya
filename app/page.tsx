import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-10">

      <div className="w-full aspect-[3/2] rounded-xl overflow-hidden border border-slate-300 shadow-sm">
        <Image
          src="/akin.png"
          alt="Akinsanya Joel"
          width={800}
          height={533}
          className="object-cover object-top w-full h-full"
          priority
        />
      </div>

      {/* Name + Role + Tagline */}
      <div className="flex flex-col gap-2 pb-8 border-b border-slate-300">
        <p className="text-lg tracking-widest font-bold uppercase text-slate-500">
          Machine Learning / MLOps Engineer
        </p>
        <h1 className="text-2xl md:text-4xl font-bold leading-snug tracking-tight">
          Akinsanya Joel
        </h1>
        <p className="text-lg md:text-base text-slate-600 leading-relaxed mt-1">
          Building ML systems and the backend infrastructure that supports them.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 pb-8 border-b border-slate-300">
        <a
          href="/articles"
          className="text-slate-800 font-semibold text-lg tracking-wide hover:text-slate-500 underline underline-offset-4 decoration-slate-400"
        >
          Articles
        </a>
        <a
          href="/projects"
          className="text-slate-800 font-semibold text-lg tracking-wide hover:text-slate-500 underline underline-offset-4 decoration-slate-400"
        >
          Projects
        </a>
      </div>

      <p className="text-lg md:text-base text-slate-600 leading-relaxed -mb-4">
        If you&apos;re working on something interesting in ML or backend
        systems, I&apos;d like to hear about it.
      </p>

      {/* Contact */}
      <div className="flex flex-col gap-3 pt-4 border-t border-slate-300">
        <span className="text-sm tracking-widest uppercase text-slate-500 font-medium">
          Contact
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="mailto:akinsanyajoel82@gmail.com"
            className="text-slate-800 font-medium hover:text-slate-500 underline underline-offset-4 decoration-slate-400"
          >
            Email
          </a>
          <a
            href="https://twitter.com/Akinsanya__Joel"
            target="_blank"
            className="text-slate-800 font-medium hover:text-slate-500 underline underline-offset-4 decoration-slate-400"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/akinsanya-joel-1a5b51168/"
            target="_blank"
            className="text-slate-800 font-medium hover:text-slate-500 underline underline-offset-4 decoration-slate-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kiojoel"
            target="_blank"
            className="text-slate-800 font-medium hover:text-slate-500 underline underline-offset-4 decoration-slate-400"
          >
            GitHub
          </a>
        </div>
      </div>

    </div>
  );
}