import Link from "next/link";
import {
  HomeIcon,
  Code2Icon,
  CloudIcon,
  BookOpenIcon,
  SettingsIcon,
  PhoneIcon,
  LogOutIcon,
  ChevronDown,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mainNavItems = [
  { name: "Repositories", icon: HomeIcon, href: "#" },
  { name: "AI Code Review", icon: Code2Icon, href: "#" },
  { name: "Cloud Security", icon: CloudIcon, href: "#" },
  { name: "How to Use", icon: BookOpenIcon, href: "#" },
  { name: "Settings", icon: SettingsIcon, href: "#" },
];

const bottomNavItems = [
  { name: "Support", icon: PhoneIcon, href: "#" },
  { name: "Logout", icon: LogOutIcon, href: "/" },
];

const NavLink = ({ item }: { item: any }) => (
  <Link
    href={item.href}
    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-bgprimary hover:text-white"
  >
    <item.icon className="h-4 w-4" />
    {item.name}
  </Link>
);

export function SidebarNav() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-2 mb-4">
        <Select>
          <SelectTrigger className="w-full">
            <div className="flex items-center gap-2">
              <SelectValue placeholder="UtkarshDhairyaPatel" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="profile">UtkarshDhairyaPatel</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2 px-2 ">
        {mainNavItems.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </div>
      <div className="mt-auto py-2 px-2 space-y-2 absolute bottom-2 w-full">
        {bottomNavItems.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
