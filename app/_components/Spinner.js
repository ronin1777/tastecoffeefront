"use client";

import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <BeatLoader color="#FFA500" loading={true} size={20} />
    </div>
  );
};

export default Spinner;
