"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import github from "@/assets/auth/signup/github.png";
import bitbucket from "@/assets/auth/signup/bucket.png";
import azure from "@/assets/auth/signup/azure.png";
import gitlab from "@/assets/auth/signup/gitlab.png";
import Link from "next/link";

const authProviders = [
  {
    name: "Github",
    image: github,
    alt: "Github",
  },
  {
    name: "Bitbucket",
    image: bitbucket,
    alt: "Bitbucket",
  },
  {
    name: "Azure DevOps",
    image: azure,
    alt: "Azure DevOps",
  },
  {
    name: "GitLab",
    image: gitlab,
    alt: "GitLab",
  },
];

export const SaasContent = () => (
  <div className="space-y-2 ">
    {authProviders.map((provider) => (
      <Link href="/Home" key={provider.name}>
        <Button
          key={provider.name}
          variant="outline"
          className="w-full py-6 my-4 flex items-center justify-center gap-2"
        >
          <Image
            src={provider.image}
            alt={provider.alt}
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Sign in with {provider.name}
        </Button>
      </Link>
    ))}
  </div>
);
