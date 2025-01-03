import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div>
        <h1 className="scroll-m-20 text-4xl font-semi-bold tracking-tight lg:text-5xl mb-2 text-center">
          About Me
        </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center">
          <Image
            alt="JOEL"
            src="/joel_profile.jpg"
            width={168}
            height={168}
            className=" rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
          <h3 className="pt-4 pb-2 text-2xl font-semi-bold leading-8 tracking-tight">
            Akinsanya Joel
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            ML engineer
          </p>
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p className="text-xl text-muted-foreground mb-6">
            I specialize in building and deploying AI-powered systems, with
            expertise in advanced machine learning and deep learning. I develop
            and integrate models into real-world applications, creating
            scalable, end-to-end solutions that deliver data-driven insights and
            seamless user experiences.
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            When I&apos;m not coding, I&apos;m likely exploring new techniques
            in machine learning or diving into the latest developments in web
            technology. Whether it&apos;s optimizing algorithms or building
            user-friendly interfaces, I thrive on the challenge of pushing
            boundaries and creating impactful solutions.
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            Let&apos;s collaborate and transform ideas into reality—connect with
            me to embark on exciting projects together.
          </p>
          <h5 className="font-semibold tracking-tight">Contact me</h5>
          <p className="text-sm text-muted-foreground">
            <a href="mailto:akinsanyajoel82@gmail.com">
              Email: akinsanyajoel82@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
