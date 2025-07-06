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
            alt="Akinsanya Joel"
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
            Machine Learning Engineer
          </p>
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p className="text-xl text-muted-foreground mb-6">
            I am a Machine Learning Engineer with extensive experience in
            developing, training, and deploying machine learning models across
            various domains. My expertise encompasses deep learning
            architectures, statistical modeling, and MLOps practices, enabling
            me to build robust, scalable solutions that drive business value
            through data-driven insights.
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            My technical proficiency spans the complete machine learning
            lifecycle, from data preprocessing and feature engineering to model
            optimization and production deployment. I have hands-on experience
            with frameworks such as TensorFlow, PyTorch, and scikit-learn,
            alongside cloud platforms for distributed training and model
            serving.
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            I am passionate about advancing the field of machine learning
            through continuous learning and staying current with emerging
            research. My focus lies in translating complex algorithms into
            practical solutions that solve real-world problems and deliver
            measurable impact.
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            I welcome opportunities to collaborate on challenging machine
            learning projects and discuss innovative approaches to AI
            implementation.
          </p>
          <h5 className="font-semibold tracking-tight">Contact</h5>
          <p className="text-sm text-muted-foreground">
            <a href="mailto:akinsanyajoel82@gmail.com">
              akinsanyajoel82@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
