"use client";
import ReactPlayer from "react-player/youtube";
import { Input } from "@/components/ui/input";
import React from 'react';


const Hero = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-accent-400"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=cXI_rcSdXpQ"
        playing
        loop
        muted
        height="100%"
        width="100%"
        className="absolute top-0 left-0 object-cover"
        config={{
          playerVars: {
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
          },
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/75 via-black/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full m-4 flex items-center justify-center font-lato">
        <div className="flex flex-col justify-center items-center text-center w-full px-4">
          <h1 className="font-bold text-primary-500  text-7xl mb-6">
            UP Reserve Hub
          </h1>
          <h4 className="italic text-accent-200 drop-shadow-lg mb-12 text-3xl">
            Build communities. Make Memories.
          </h4>
          {/* <div className="flex border-b-2 font-bold border-accent drop-shadow-lg w-full max-w-md"> */}
            {/* <Input className="border-none font-bold bg-transparent italic text-white placeholder-white text-xl w-full " placeholder="Search a facility..."/> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
