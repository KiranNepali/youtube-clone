import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../../utils/constants";

export const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {videos.map((item, idx) => (
          <div className="w-full flex  items-center flex-col bg-[#303030] h-[20rem]">
            {/* img  */}
            <div className="h-[13rem] w-full ">
              <img
                src={item.snippet.thumbnails.default.url}
                alt=""
                className="w-full h-full"
              />
            </div>

            {/* video desc  */}
            <div className="w-full flex  flex-col items-start pt-1 pb-3 px-2  gap-[2px]">
              <p className="font-medium text-[13px] ">{item.snippet.title}</p>
              <p className="text-[10px] text-[#b1afaf]">
                {item.snippet.channelTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
{
  /* <div className="flex flex-col justify-center gap-1 items-center">
            <div className="bg-[#303030] h-[16rem]" key={idx}>
              <div className="w-full h-[8rem]">
                <img
                  src={item.snippet.thumbnails.default.url}
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-col justify-center items-start px-3 py-1  mb-9 text-[12px] font-semibold overflow-hidden rounded-none">
                <p>{item.snippet.title}</p>
                <p className="text-[10px] font-normal tracking-wide text-gray-300">
                  {item.snippet.channelTitle}
                </p>
              </div>
            </div>
          </div> */
}
