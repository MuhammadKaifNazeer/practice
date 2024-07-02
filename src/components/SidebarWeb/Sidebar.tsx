"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { MediaLinks } from "@/data/mediaLinks";
import { useState } from "react";
import Link from "next/link";
// import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { DiscordLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Bolt,
  CodeXml,
  Coffee,
  Cog,
  Cpu,
  Github,
  GithubIcon,
  Layers,
  Linkedin,
  Mail,
  NotebookTabs,
  Rocket,
  ShoppingCart,
  SlidersVertical,
  TrendingUp,
  User,
  Video,
  Youtube,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

type SidebarProps = {
  className?: string;
};

const ExploreLinks = [
  {
    link: "/",
    name: "Home",
    icon: <Bolt />,
  },
  {
    link: "/about",
    name: "About Me",
    icon: <User />,
  },
  {
    link: "/services",
    name: "Services",
    icon: <SlidersVertical />,
  },
  {
    link: "/stack",
    name: "Stack",
    icon: <Layers />,
  },
  {
    link: "/projects",
    name: "Projects",
    icon: <Cpu />,
  },
  {
    link: "/contact",
    name: "Contact",
    icon: <Mail />,
  },
];

// const PortfolioLinks = [
// ];

const SocialLinks = [
  // {
  //   link: MediaLinks.youtube,
  //   name: "Youtube",
  //   icon: <Youtube />,
  // },
  {
    link: MediaLinks.github,
    name: "Github",
    icon: <Github />,
  },
  {
    link: MediaLinks.linkedin,
    name: "Linkedin",
    icon: <Linkedin />,
  },
  {
    link: MediaLinks.discordServer,
    name: "Discord",
    icon: <DiscordLogoIcon />,
  },
  {
    link: MediaLinks.buymeacoffee,
    name: "Buy Me A Coffee",
    icon: <Coffee />,
  },
];

export function Sidebar({ className }: SidebarProps) {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const CloseSidebarLink = ({ href, children }) => (
    <Link href={href} onClick={() => setIsOpen(false)}>
      {children}
    </Link>
  );

  return (
    <>
      <div className="fixed lg:hidden w-full top-0 flex border-b items-center justify-between gap-4 bg-background px-4 py-2 md:px-6 z-[100]">
        <Link href={"/"} className="flex justify-start items-center">
          <Rocket className="mr-2 h-7 w-7 font-bold text-primary" />
          <h3 className="text-2xl font-bold">Kaif</h3>
        </Link>
        <div className="flex items-center justify-end gap-3">
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 rounded"
            onClick={toggleSidebar}
          >
            <HamburgerMenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
      </div>

      <div
        className={cn(
          `z-[100] w-[17rem] border-r lg:pt-3  bg-background max-w-[80%] h-screen duration-500 lg:fixed lg:left-0 fixed ${
            isOpen ? "left-0" : "left-[-17rem]"
          } top-0`,
          className,
        )}
      >
        <div className="space-y-4 ">
          <div className="flex justify-between border-b">
            <Link
              href={"/"}
              className="flex justify-start items-center pl-7 px-3 py-2"
            >
              <Rocket className="mr-2 h-7 w-7 font-bold text-primary" />
              <h3 className="text-2xl font-bold">Kaif</h3>
            </Link>
            <div className="px-3 py-2">{/* <ThemeToggler /> */}</div>
          </div>
          <ScrollArea className="h-[77vh] sm:h-[78vh] lg:h-[77vh] px-1 ">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Explore
              </h2>
              <div className="space-y-1">
                {ExploreLinks.map((link) => (
                  <CloseSidebarLink href={link.link} key={link.name}>
                    <Button
                      variant={
                        link.link === currentPath ? "secondary" : "ghost"
                      }
                      className="w-full justify-start"
                    >
                      {link.icon && (
                        <div className="mr-2 h-4 w-4 flex items-center">
                          {link.icon}
                        </div>
                      )}
                      {link.name}
                    </Button>
                  </CloseSidebarLink>
                ))}
              </div>
            </div>
            {/* <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Portfolio
              </h2>
              <div className="space-y-1">
                {PortfolioLinks.map((link) => (
                  <Link href={link.link} key={link.name}>
                    <Button
                      variant={
                        link.link === currentPath ? "secondary" : "ghost"
                      }
                      className="w-full justify-start"
                    >
                      {link.icon && (
                        <div className="mr-2 h-4 w-4 flex items-center">
                          {link.icon}
                        </div>
                      )}
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div> */}
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Social Links
              </h2>
              <div className="space-y-1">
                {SocialLinks.map((link) => (
                  <Link href={link.link} key={link.name} target="_blank">
                    <Button
                      variant={
                        link.link === currentPath ? "secondary" : "ghost"
                      }
                      className="w-full justify-start"
                    >
                      {link.icon && (
                        <div className="mr-2 h-4 w-4 flex items-center">
                          {link.icon}
                        </div>
                      )}
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="absolute left-0 bottom-0 w-full px-3 py-3 dark:bg-[#000] bg-white min-h-[10vh]">
          <Separator className="absolute top-0 left-0 w-full" />
          <div className="flex items-center justify-center">
            <Link href={"/contact"} className="w-full">
              <Button className="w-full h-9">Let&apos;s Talk</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
