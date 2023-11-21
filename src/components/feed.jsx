import React from "react";
import { SideBar } from "./sideBar";
import { Videos } from "./videos";

export const Feed = () => {
  return (
    <div className="w-full text-white mt-4">
      <div className="grid grid-cols-6 ">
        <SideBar />
        <Videos />
      </div>
    </div>
  );
};
