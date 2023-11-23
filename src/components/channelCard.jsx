import React from "react";
import { demoChannelTitle, demoProfilePicture } from "../../utils/constants";
import { Link } from "react-router-dom";

export const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="w-full flex  items-center flex-col  h-[20rem] gap-1">
      <div className=" w-full  h-[15rem] flex items-center justify-center  ">
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <img
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt=""
            className="rounded-[100%] w-[12rem]  border-[#e3e3e3]  "
          />
        </Link>
      </div>
      <div className="w-full  text-center pt-1 pb-3 px-2  gap-[2px]">
        <p className="font-bold text-[20px] text-white">
          {channelDetail?.snippet?.title || demoChannelTitle}
        </p>
      </div>
    </div>
  );
};
