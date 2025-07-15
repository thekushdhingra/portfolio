import React, { ReactNode } from "react";
import Image from "next/image";
interface TiltCardProps {
  children: ReactNode;
  banner?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, banner = "" }) => {
  return (
    <div className="gap-5">
      <div
        className="relative backdrop-blur-sm bg-[#fff1] p-2 w-80 h-96 bg-cover bg-center bg-no-repeat rounded-[40px] transition-transform duration-100 ease-in-out shadow-2xl shadow-black"
      > 
        <div>
            {banner && banner !== "" && <Image width={2000} height={2000} className="rounded-t-3xl min-w-72 min-h-48" src={banner} alt="" />}
        </div>
        <div className="w-full h-[20%] text-center flex flex-col mt-2">
            {children}
        </div>
      </div>
    </div>
  );
};

export default TiltCard;

