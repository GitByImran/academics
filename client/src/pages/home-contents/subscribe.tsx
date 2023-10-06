import { GiPodiumWinner } from "react-icons/gi";
import { RiPencilRulerLine } from "react-icons/ri";
import { HiMap } from "react-icons/hi";
import React from "react";

const Subscribe: React.FC = () => {
  const backgroundImageUrl =
    "https://preview.colorlib.com/theme/academics/images/bg_1.jpg";

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
          }}
        >
          <div style={{ background: "rgba(31, 68, 119, 90%)" }}>
            <div className="w-10/12 m-auto py-20">
              <div className="grid grid-cols-7 gap-10 items-end">
                <div className="text-white col-span-7 lg:col-span-4 flex flex-col gap-3">
                  <h2 className="text-3xl font-semibold">Subscribe to us!</h2>
                  <p className="text-xl font-light">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,
                  </p>
                </div>
                <div className="col-span-7 lg:col-span-3">
                  <form action="" className="flex items-center">
                    <input
                      type="email"
                      className="h-14 w-9/12 py-1 px-5 outline-none rounded-s-lg"
                    />
                    <button className="h-14 w-3/12 text-lg text-white bg-emerald-500 rounded-e-lg">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
