import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../../utils/constants";

export const Videos = () => {
  return (
    <>
      <div className="w-full px-4 py-3 col-span-5">
        <h2 className="font-semibold text-3xl tracking-wide mb-3 ">
          New <span className="text-red-500 ">videos</span>
        </h2>
        <div className="grid grid-cols-4 gap-3 ">
          {/* card  */}
          <div className="bg-[#303030]">
            <img src={demoThumbnailUrl} alt="" className="object-contain" />
            <div className="flex flex-col justify-center items-start px-3 py-1  mb-9 text-[12px] font-semibold overflow-hidden rounded-none">
              <p>{demoVideoTitle}</p>
              <p className="text-[10px] font-normal tracking-wide text-gray-300">
                {demoChannelTitle}
              </p>
            </div>
          </div>
          {/* card ends  */}
          {/* card  */}
          <div className="bg-[#303030]">
            <img src={demoThumbnailUrl} alt="" className="object-contain" />
            <div className="flex flex-col justify-center items-start px-3 py-1  mb-9 text-[12px] font-semibold overflow-hidden rounded-none">
              <p>{demoVideoTitle}</p>
              <p className="text-[10px] font-normal tracking-wide text-gray-300">
                {demoChannelTitle}
              </p>
            </div>
          </div>
          {/* card ends  */}
          {/* card  */}
          <div className="bg-[#303030]">
            <img src={demoThumbnailUrl} alt="" className="object-contain" />
            <div className="flex flex-col justify-center items-start px-3 py-1  mb-9 text-[12px] font-semibold overflow-hidden rounded-none">
              <p>{demoVideoTitle}</p>
              <p className="text-[10px] font-normal tracking-wide text-gray-300">
                {demoChannelTitle}
              </p>
            </div>
          </div>
          {/* card ends  */}
          {/* card  */}
          <div className="bg-[#303030]">
            <img src={demoThumbnailUrl} alt="" className="object-contain" />
            <div className="flex flex-col justify-center items-start px-3 py-1  mb-9 text-[12px] font-semibold overflow-hidden rounded-none">
              <p>{demoVideoTitle}</p>
              <p className="text-[10px] font-normal tracking-wide text-gray-300">
                {demoChannelTitle}
              </p>
            </div>
          </div>
          {/* card ends  */}
          {/* card  */}
          <div className="bg-[#303030]">
            <img src={demoThumbnailUrl} alt="" className="object-contain" />
            <div className="flex flex-col justify-center items-start px-3 py-1  mb-9 text-[12px] font-semibold overflow-hidden rounded-none">
              <p>{demoVideoTitle}</p>
              <p className="text-[10px] font-normal tracking-wide text-gray-300">
                {demoChannelTitle}
              </p>
            </div>
          </div>
          {/* card ends  */}
        </div>
      </div>
    </>
  );
};
