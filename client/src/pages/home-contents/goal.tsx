import { GiPodiumWinner } from "react-icons/gi";
import { RiPencilRulerLine } from "react-icons/ri";
import { HiMap } from "react-icons/hi";
import React from "react";

const Goal: React.FC = () => {
  const backgroundImageUrl =
    "https://preview.colorlib.com/theme/academics/images/hero_1.jpg";

  return (
    <div>
      <div>
        <div
          className="w-xl overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div style={{ background: "rgba(31, 68, 119, 0.9)" }}>
            <div className="w-10/12 mx-auto py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="p-5 text-white">
                  <span className="text-6xl text-emerald-500">
                    <HiMap />
                  </span>
                  <h2 className="text-xl text-emerald-500 mt-3 mb-5 font-semibold">
                    Our Philosophy
                  </h2>
                  <p className="text-sky-400 text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis recusandae, iure repellat quis delectus ea?
                    Dolore, amet reprehenderit.
                  </p>
                </div>
                <div className="p-5 text-white">
                  <span className="text-6xl text-emerald-500">
                    <RiPencilRulerLine />
                  </span>
                  <h2 className="text-xl text-emerald-500 mt-3 mb-5 font-semibold">
                    Academics Principle
                  </h2>
                  <p className="text-sky-400 text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis recusandae, iure repellat quis delectus ea?
                    Dolore, amet reprehenderit.
                  </p>
                </div>
                <div className="p-5 text-white">
                  <span className="text-6xl text-emerald-500">
                    <GiPodiumWinner />
                  </span>
                  <h2 className="text-xl text-emerald-500 mt-3 mb-5 font-semibold">
                    Key of Success
                  </h2>
                  <p className="text-sky-400 text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis recusandae, iure repellat quis delectus ea?
                    Dolore, amet reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
