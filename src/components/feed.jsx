import React, { useState } from "react";
import { SideBar } from "./sideBar";
import { Videos } from "./videos";
import { useEffect } from "react";

import { fetchFromApi } from "../../utils/fetchFromApi";

export const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className="w-full text-white mt-4">
      <div className="sm:grid sm:grid-cols-6 ">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="w-full px-4 py-3 col-span-5">
          <h2 className="font-semibold text-3xl tracking-wide mb-3 ">
            {selectedCategory} <span className="text-red-500 ">videos</span>
          </h2>
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};
