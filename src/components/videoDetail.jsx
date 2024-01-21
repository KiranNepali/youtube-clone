import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { Link } from "react-router-dom";
import { Videos } from "./videos";

export const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail) {
    return <div>Loading...</div>;
  }

  const {
    snippet: { title, channelId, channelTitle, thumbnails },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div>
      <div className="mt-10 sm:grid sm:grid-cols-4 sm:gap-2 sm:mx-10">
        <div className="h-[30rem] sm:col-span-3 ">
          <div className="w-full h-[25rem] sm:h-[42rem] sm:sticky top-[80px] rounded-lg sm:overflow-hidden z-10">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="90%"
            />
            <div className="text-[#fff] font-bold p-2">{title}</div>
            <div className=" flex justify-between text-[#fff] py-1 px-2">
              <Link
                className="flex justify-center items-center"
                to={`/channel/${channelId}`}
              >
                {/* <div>{thumbnails?.high?.url}</div> */}
                <div className="font-bold text-gray-300">{channelTitle}</div>
              </Link>
              <div className="flex gap-[20px] items-center">
                <div className="opacity-[0.7]">
                  {parseInt(viewCount).toLocaleString()} views
                </div>
                <div className="opacity-[0.7]">
                  {parseInt(likeCount).toLocaleString()} likes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:col-span-1 sm:mx-10  ">
          <Videos videos={videos} justify="column" />
        </div>
      </div>
    </div>
  );
};
