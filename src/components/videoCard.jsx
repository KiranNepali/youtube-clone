import React from "react";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoThumbnailUrl,
} from "../../utils/constants";
import { Link } from "react-router-dom";

export const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // Ensure snippet exists before accessing its properties
  const thumbnailUrl = snippet?.thumbnails?.high?.url || demoThumbnailUrl;
  const videoTitle = snippet?.title || demoVideoTitle;
  const channelTitle = snippet?.channelTitle || demoChannelTitle;
  // console.log(videoId, snippet);
  return (
    <div className="w-full flex  items-center flex-col bg-[#303030] h-[15rem]">
      {/* img  */}

      <div className="h-[9rem] w-full ">
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
          <img
            src={thumbnailUrl || demoThumbnailUrl}
            alt=""
            className="w-full h-full object-none"
          />
        </Link>
      </div>

      {/* img ends */}

      {/* desc  */}
      {/* video desc  */}
      <div className="w-full flex text-white  flex-col items-start pt-1 pb-3 px-2  gap-[2px]">
        <p className="font-bold text-[12px] ">{videoTitle || demoVideoTitle}</p>
        <p className="text-[10px] font-medium text-[#b1afaf]">
          {channelTitle || demoChannelTitle}
        </p>
      </div>
      {/* desc ends  */}
    </div>
  );
};
