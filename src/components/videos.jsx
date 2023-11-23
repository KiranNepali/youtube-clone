import { ChannelCard } from "./channelCard";
import { VideoCard } from "./videoCard";
export const Videos = ({ videos }) => {
  if (!videos || !Array.isArray(videos)) {
    return <div>No videos available</div>; // or some other fallback UI
  }

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {videos.map((item, idx) => (
          <div key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </div>
        ))}
      </div>
    </>
  );
};
