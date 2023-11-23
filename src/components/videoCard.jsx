import React from "react";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoThumbnailUrl,
} from "../../utils/constants";

export const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videoId, snippet);
  return (
    <div className="w-full flex  items-center flex-col bg-[#303030] h-[15rem]">
      {/* img  */}

      <div className="h-[9rem] w-full ">
        <img
          src={snippet.thumbnails.high.url || demoThumbnailUrl}
          alt=""
          className="w-full h-full object-none"
        />
      </div>

      {/* img ends */}

      {/* desc  */}
      {/* video desc  */}
      <div className="w-full flex text-white  flex-col items-start pt-1 pb-3 px-2  gap-[2px]">
        <p className="font-bold text-[12px] ">
          {snippet.title || demoVideoTitle}
        </p>
        <p className="text-[10px] font-medium text-[#b1afaf]">
          {snippet.channelTitle || demoChannelTitle}
        </p>
      </div>
      {/* desc ends  */}
    </div>
  );
};
