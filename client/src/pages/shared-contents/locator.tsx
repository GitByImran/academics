import { AiOutlineRight } from "react-icons/ai";
import React from "react";
import { useRouter } from "next/router";

const Locator: React.FC = () => {
  const router = useRouter();
  const location = router.pathname.split("/");

  return (
    <div>
      <div className="text-gray-400">
        <p className="flex items-center gap-2 text-md">
          <AiOutlineRight /> {location[2]}
        </p>
      </div>
    </div>
  );
};

export default Locator;
