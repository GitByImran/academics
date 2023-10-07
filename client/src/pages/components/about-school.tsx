import Image from "next/image";
import React from "react";

const AboutSchool: React.FC = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <div className="flex lg:flex-row flex-col items-start gap-5 lg:gap-20 py-20">
          <div>
            <h2 className="text-3xl text-black py-1 font-normal border-b-4 border-b-emerald-500 w-max capitalize">
              About Our Academy
            </h2>
          </div>
          <p className="text-lg font-normal text-gray-400 flex flex-col md:flex-row gap-2">
            <span className="basis-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, iure
              dolorum! Nam veniam tempore tenetur aliquam architecto, hic alias
              quia quisquam, obcaecati laborum dolores. Ex libero cumque
              veritatis numquam placeat?
            </span>
            <span className="basis-1/2">
              Nam veniam tempore tenetur aliquam architecto, hic alias quia
              quisquam, obcaecati laborum dolores. Ex libero cumque veritatis
              numquam placeat?
            </span>
          </p>
        </div>
        {/* this part */}

        <div className="flex flex-col gap-20 mb-10 lg:my-20">
          <div className="part-1 flex md:flex-row flex-col gap-10">
            <div className="basis-1/2">
              <Image
                src="https://images.pexels.com/photos/4620862/pexels-photo-4620862.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="basis-1/2">
              <h2 className="text-3xl text-black pb-1 font-normal border-b-4 border-b-emerald-500 w-max capitalize">
                Why Academics Works
              </h2>
              <p className="mt-10 text-lg text-gray-500">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  itaque dolore libero corrupti! Itaque, delectus?
                </span>
                <br />
                <br />
                <span>
                  Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                  odit placeat nesciunt, voluptatum totam facere.
                </span>
              </p>
            </div>
          </div>
          <div className="part-2 part-1 flex md:flex-row flex-col-reverse gap-10">
            <div className="basis-1/2">
              <h2 className="text-3xl text-black pb-1 font-normal border-b-4 border-b-emerald-500 w-max capitalize">
                Personalized Learning
              </h2>
              <p className="mt-10 text-lg text-gray-500">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  itaque dolore libero corrupti! Itaque, delectus?
                </span>
                <br />
                <br />
                <span>
                  Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                  odit placeat nesciunt, voluptatum totam facere.
                </span>
              </p>
            </div>
            <div className="basis-1/2">
              <Image
                src="https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={1000}
                width={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
