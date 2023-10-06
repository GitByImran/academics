import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <div style={{ background: "#183661" }}>
      <div className="w-10/12 m-auto flex lg:flex-row flex-col items-start gap-10 py-20">
        <div>
          <h2 className="text-3xl text-white py-1 font-normal border-b-4 border-b-emerald-500 w-max capitalize">
            About Our University
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            nesciunt quaerat ad reiciendis perferendis voluptate fugiat sunt
            fuga error totam.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus assumenda omnis tempora ullam alias amet eveniet
            voluptas, incidunt quasi aut officiis porro ad, expedita saepe
            necessitatibus rem debitis architecto dolore? Nam omnis sapiente
            placeat blanditiis voluptas dignissimos, itaque fugit a laudantium
            adipisci dolorem enim ipsum cum molestias? Quod quae molestias modi
            fugiat quisquam. Eligendi recusandae officiis debitis quas beatae
            aliquam?
          </p>
          <Link href="#" className="text-lg text-emerald-400 font-normal">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
