import React, { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    type: "description",
    title: "Discover The World's Most Breathtaking Places",
    description:
      "Experience the magic of travel through our hand-picked video highlights. From the timeless streets of Europe to the sun-kissed beaches of Asia, we bring you a glimpse of the world’s most iconic destinations — in motion.",
    background: "higlight.png",
  },
  {
    type: "video",
    thumbnail: "/video/video1.png",
    videoUrl: "/video/oneVid.mp4",
  },
  {
    type: "video",
    thumbnail: "/video/video2.png",
    videoUrl: "/video/twoVid.mp4",
  },
];

const DestinationHighlights = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="px-4 md:px-8 lg:px-20 py-12 bg-white font-dm max-w-[1536px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Destination <span className="text-[#EB662B]">Highlights</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((item, index) =>
          item.type === "description" ? (
            <div
              key={index}
              className="rounded-2xl p-4 text-white shadow-md flex flex-col justify-between min-h-[18rem] sm:min-h-[20rem] md:min-h-[22rem]"
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-white/10 bg-opacity-80 p-4 rounded-xl backdrop-blur-md h-full flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md min-h-[18rem] sm:min-h-[20rem] md:min-h-[22rem]"
            >
              {playingIndex === index ? (
                <video
                  src={item.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div
                  className="relative cursor-pointer group w-full h-full"
                  onClick={() => setPlayingIndex(index)}
                >
                  <img
                    src={item.thumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover transform transition-transform rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play
                      size={40}
                      className="text-white group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default DestinationHighlights;
