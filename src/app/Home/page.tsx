"use client";

import { useState } from "react";
import { repositories } from "@/data/repositories";
import { RepositoryList } from "@/components/custom/respolist";
import { SidebarNav } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo2 from "@/assets/auth/signup/logo2.png";

export default function RepositoriesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Image
            src={logo2}
            alt="CodeAnt AI"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out
            lg:relative lg:translate-x-0
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <Image
                src={logo2}
                alt="CodeAnt AI"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="py-4 flex-1 flex flex-col min-h-0">
            <SidebarNav />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto w-full">
          <RepositoryList repositories={repositories} />
        </main>
      </div>
    </div>
  );
}
