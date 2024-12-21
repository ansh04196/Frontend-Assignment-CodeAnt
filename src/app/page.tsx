"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo02 from "@/assets/auth/signup/logo2.png";
import { StatsSection } from "./auth/stats/stats";
import { SaasContent } from "./auth/signup/signup";
import { SelfHostedContent } from "./auth/signin/signin";

const handleclick = () => {
  console.log("Sign in with Github");
};
// Main Auth Layout Component
export default function AuthLayout() {
  const [mode, setMode] = useState("saas"); // "saas" or "selfhosted"

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Section */}
      <StatsSection />

      {/* Right Section */}
      <div className="p-6 md:p-24 flex items-center justify-center bg-gray-50">
        <div className="w-full pace-y-8 p-12 bg-white shadow-md rounded-lg">
          <div className="text-center">
            <Image
              src={logo02}
              alt="CodeAnt AI"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold mb-4 pt-4">
              Welcome to CodeAnt AI
            </h1>
          </div>

          {/* Plan Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Button
              variant={mode === "saas" ? "default" : "outline"}
              className={`w-full py-6 text-md font-bold ${
                mode === "saas" ? "bg-blue-500 hover:bg-blue-600" : ""
              }`}
              onClick={() => setMode("saas")}
            >
              SAAS
            </Button>
            <Button
              variant={mode === "selfhosted" ? "default" : "outline"}
              className={`w-full py-6 text-md font-bold ${
                mode === "selfhosted" ? "bg-blue-500 hover:bg-blue-600" : ""
              }`}
              onClick={() => setMode("selfhosted")}
            >
              Self Hosted
            </Button>
          </div>

          {/* Conditional Content */}
          {mode === "saas" ? <SaasContent /> : <SelfHostedContent />}

          {/* Privacy Policy */}
          <p className="text-center text-sm text-muted-foreground pt-5">
            By signing {mode === "saas" ? "up" : "in"} you agree to the{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
