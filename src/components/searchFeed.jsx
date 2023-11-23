import React, { useState, useEffect } from "react";
import { Videos } from "./videos";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { useParams } from "react-router-dom";

export const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="w-full text-white mt-4">
      <div className="mx-[12rem]">
        <div className="w-full px-4 py-3">
          <h2 className="font-bold text-3xl  mb-3 ">
            <span className="text-gray-300">Search result for:</span>{" "}
            {searchTerm}
            <span className="text-red-500 "> videos</span>
          </h2>
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};
