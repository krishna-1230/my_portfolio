import React from "react";
import projects4 from "../assets/image.png";
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img
        src={projects4}
        alt="Uzumaki Loader"
        className="w-32 h-32 animate-spin"
      />
    </div>
  );
};

export default Loader;
