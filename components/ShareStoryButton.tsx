"use client";
import feather from "feather-icons";
import React, { useEffect, useRef } from "react";
import { useToast } from "./ui/use-toast";
import domtoimage from "dom-to-image";

interface Props {
  shareTitle: string;
  shareText: string;
  rankerId: number;
}

const ShareStoryButton = ({ shareTitle, shareText, rankerId }: Props) => {
  const toaster = useToast();

  const handleShare = async (blob: Blob) => {
    const shareLink = `${window.location.origin}/ranker/${rankerId}/`;
    const filesArray = [
      new File([blob], `${shareTitle}.png`, {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      title: shareTitle,
      text: shareText,
      url: shareLink,
      files: filesArray,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      navigator.clipboard.writeText(shareLink);
      await navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(shareLink);
      toaster.toast({
        title: "Link copied!",
        description: "Send it to a friend!",
      });
    }
  };

  useEffect(() => feather.replace(), []);

  return (
    <div
      className="flex gap-4 items-center hover:cursor-pointer"
      onClick={() => {
        document.getElementById("canvasTarget2")!.style.maxHeight = "none";
        document.getElementById("canvasTarget2")!.style.overflow = "hidden";
        domtoimage
          .toBlob(document.getElementById("canvasTarget")!, {
            style: {
              borderRadius: "0px",
            },
          })
          .then((blob: Blob) => {
            handleShare(blob).then(() => {
              document.getElementById("canvasTarget2")!.style.maxHeight =
                "50vh";
              document.getElementById("canvasTarget2")!.style.overflowY =
                "scroll";
            });
          });
      }}
    >
      <h1
        className="bg-primary text-primary-foreground p-5 rounded-3xl 
          font-semibold text-xl px-16"
      >
        Share to story
      </h1>
      <button className="p-4 bg-primary rounded-full">
        <svg
          className="text-white"
          height={36}
          width={36}
          data-feather="upload-cloud"
        ></svg>
      </button>
    </div>
  );
};

export default ShareStoryButton;
