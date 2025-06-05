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
    <section className="px-8 py-12 bg-white font-dm">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Destination <span className="text-[#EB662B]">Highlights</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[22rem] px-20">
        {videos.map((item, index) =>
          item.type === "description" ? (
            <div
              key={index}
              className="rounded-2xl p-2 text-white flex flex-col justify-between shadow-md"
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-white/10 bg-opacity-80 p-4 rounded-2xl backdrop-blur-md h-[20rem] my-auto">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md"
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
                  className="relative cursor-pointer group h-full"
                  onClick={() => setPlayingIndex(index)}
                >
                  <img
                    src={item.thumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover transform transition-transform rounded-2xl"
                  />
                  <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                    <Play
                      size={25}
                      className="text-white transition-transform"
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
