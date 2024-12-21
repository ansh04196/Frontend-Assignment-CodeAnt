"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import logo01 from "@/assets/auth/signup/logo01.png";
import smallcard from "@/assets/auth/signup/smallcard.png";
import spider from "@/assets/auth/signup/spider.svg";

// Stats Section Component

export const StatsSection = () => {
  return (
    <div className="lg:block hidden my-auto">
      <div className="relative p-6 min-h-[400px] flex items-center justify-center">
        <div className="relative w-full max-w-[450px]">
          {/* First Card */}
          <Card className="bg-white  shadow-2xl mb-[-10px] mr-[20px] rounded-3xl">
            <div className="flex items-center justify-start gap-3 mb-6 border-b-2 p-5">
              <div className="w-8 h-8 ">
                <Image
                  src={logo01}
                  alt="CodeAnt AI Logo"
                  className="w-full h-full"
                />
              </div>
              <span className="text-lg font-semibold">
                AI to Detect & Autofix Bad Code
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center pb-[30px] pt-[10px]">
              <div>
                <div className="text-xl font-bold">30+</div>
                <div className="text-xs text-gray-500">Language Support</div>
              </div>
              <div>
                <div className="text-xl font-bold">10K+</div>
                <div className="text-xs text-gray-500">Developers</div>
              </div>
              <div>
                <div className="text-xl font-bold">100K+</div>
                <div className="text-xs text-gray-500">Hours Saved</div>
              </div>
            </div>
          </Card>

          {/* Second Card */}
          <Card className="bg-white p-4 px-6 shadow-2xl relative ml-auto w-[60%] rounded-3xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col gap-2">
                <Image
                  src={smallcard}
                  alt="CodeAnt AI Logo"
                  width={48}
                  height={48}
                  className="p-3 rounded-full bg-[#9D90FA40]"
                />

                <div className="text-md font-bold pt-2">Issues Fixed</div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#0049C6] text-sm font-bold">↑ 14%</span>

                <span className="text-sm text-[#171717]">This week</span>
              </div>
            </div>
            <div className="text-3xl font-bold">500K+</div>
          </Card>

          {/* Background Logo */}
          <div className="absolute bottom-[-220px] left-[-150px] w-64 h-64 opacity-90 pointer-events-none">
            <Image
              src={spider}
              alt="Background Illustration"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
