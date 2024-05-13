import Image from "next/image";
import maroonBg from "@/public/images/maroon-bg.png";
import Icon from "@/components/Icon";
import university from "@/public/icons/university.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-3">
        <div className="flex gap-2 items-center">
          <Icon
            src={university}
            alt="UP Reserve Hub logo"
            className="w-6 h-6"
          />
          <p className="font-bold text-lg">UP Reserve Hub</p>
        </div>
        <div className="flex items-center justify-center h-full">{children}</div>
      </div>

      {/* right side: bg + logo */}
      <div
        className="flex-1 bg-cover bg-center
          max-h-full flex items-center justify-center"
        style={{ backgroundImage: `url(${maroonBg.src})` }}
      >
        <Image
          src="/images/UP-logo.png"
          alt="UP logo"
          className="w-full h-auto lg:p-40 sm:p-10"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
