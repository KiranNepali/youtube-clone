import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { ChannelCard } from "./channelCard";
import { Videos } from "./videos";

export const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  // console.log(channelDetail);
  // console.log(videos);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <div className="w-full h-screen mx-auto">
      <div
        className="w-full h-[20rem]  "
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,34,0.17979691876750703) 28%, rgba(0,212,255,1) 100%)",
        }}
      ></div>

      <div className="-mt-[113px] flex flex-col justify-center items-center w-full   ">
        <ChannelCard channelDetail={channelDetail} />
        <p className="text-[12px] font-medium text-[#e9e7e7] -mt-[1rem]">
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
            "en-US"
          )}
          <span className=""> Subscribers</span>
        </p>
      </div>

      <div className="mx-[15rem] mt-10">
        <Videos videos={videos} />
      </div>
    </div>
  );
};
