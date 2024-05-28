"use client"
import Link from "next/link";
import maroonBg from "@/public/images/maroon-bg.png";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-primary-900">
      <div
        className="flex-col m-6 p-20 justify-center text-center rounded-2xl"
        style={{ backgroundImage: `url(${maroonBg.src})` }}
      >
        <h2 className="text-light">Sorry, something went wrong.</h2>
        <Link href="/" className="underline text-accent">
          Go back to home.
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
