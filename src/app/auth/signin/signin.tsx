"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import gitlab from "@/assets/auth/signup/gitlab.png";
import { Key } from "lucide-react";
import Link from "next/link";

// SAAS Content Component
const SelfHostedContent = () => (
  <div className="space-y-4 ">
    <Link href="/Home">
      <Button
        variant="outline"
        className="w-full py-6 flex items-center justify-center gap-2"
      >
        <Image
          src={gitlab}
          alt="GitLab"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        Self Hosted GitLab
      </Button>
    </Link>
    <Link href="/Home">
      <Button
        variant="outline"
        className="w-full py-6 my-4 flex items-center justify-center gap-2"
      >
        <Key size={24} />
        Sign in with SSO
      </Button>
    </Link>
  </div>
);

export { SelfHostedContent };
