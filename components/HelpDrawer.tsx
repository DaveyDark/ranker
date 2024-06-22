"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
const HelpDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="bg-primary p-2 aspect-square absolute right-5 bottom-5 rounded-full text-white">
        <svg width={36} height={36} data-feather="help-circle" />
      </DrawerTrigger>
      <DrawerContent className="bg-secondary text-white border-secondary-foreground">
        <DrawerHeader>
          <DrawerTitle>Help & Support</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col lg:flex-row w-full justify-around gap-8 items-center">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold">Demo Video</h3>
              <iframe
                src="https://www.youtube.com/embed/ysnPGPMVpbk?si=BWh8zOAX2UoEie13"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full max-w-lg aspect-video mx-auto"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold mb-2">About us</h3>
              <div className="flex gap-4 w-full justify-center">
                <div className="flex flex-col items-center gap-1">
                  <Image
                    src="/arnav.jpg"
                    width={64}
                    height={64}
                    alt="Arnav Gautam"
                    className="rounded-full"
                  />
                  <p className="text-lg">Arnav Gautam</p>
                  <span className="flex gap-2">
                    <Link
                      href="https://github.com/arnav080"
                      className="border-2 border-white rounded-full p-1"
                      target="_blank"
                    >
                      <Image
                        src="/github.svg"
                        width={20}
                        height={20}
                        alt="github icon"
                        className="invert"
                      />
                    </Link>
                    <Link
                      className="border-2 border-white rounded-full p-1"
                      href="https://www.linkedin.com/in/arnav-gautam-0a8613211/"
                      target="_blank"
                    >
                      <Image
                        src="/linkedin.svg"
                        width={20}
                        height={20}
                        alt="linkedin icon"
                        className="invert"
                      />
                    </Link>
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Image
                    src="/devesh.jpg"
                    width={64}
                    height={64}
                    alt="Devesh Sharma"
                    className="rounded-full"
                  />
                  <p className="text-lg">Devesh Sharma</p>
                  <span className="flex gap-2">
                    <Link
                      href="https://github.com/daveydark"
                      className="border-2 border-white rounded-full p-1"
                      target="_blank"
                    >
                      <Image
                        src="/github.svg"
                        width={20}
                        height={20}
                        alt="github icon"
                        className="invert"
                      />
                    </Link>
                    <Link
                      className="border-2 border-white rounded-full p-1"
                      href="https://www.linkedin.com/in/devesh-sharma04/"
                      target="_blank"
                    >
                      <Image
                        src="/linkedin.svg"
                        width={20}
                        height={20}
                        alt="linkedin icon"
                        className="invert"
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="mx-auto my-2">
              <Link
                className="bg-primary rounded-3xl p-4 py-2 font-semibold"
                href="https://buymeacoffee.com/ranker"
              >
                Support us on BuyMeACoffee
              </Link>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default HelpDrawer;
