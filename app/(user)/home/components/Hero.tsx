"use client";
import ReactPlayer from "react-player/youtube";
import { Input } from "@/components/ui/input";

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
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary-500/75 " /> */}
      <div className="absolute top-0 left-0 w-full h-full m-4 flex items-center justify-center font-lato">
        <div className="flex-col justify-center text-center">
          <h1 className="font-bold text-primary/50 text-outline">UP Reserve Hub</h1>
          <h4 className="italic text-accent-200">
            Build communities. Make Memories.
          </h4>
          <div className="flex border-b-2 border-accent">
            <Input className="border-none bg-transparent italic text-white" placeholder="Search a facility..."/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;