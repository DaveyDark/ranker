"use client";
import feather from "feather-icons";
import React, { useEffect, useRef } from "react";
import { useToast } from "./ui/use-toast";
import domtoimage from "dom-to-image";

interface Props {
  shareTitle: string;
  shareText: string;
  rankerId: number;
  targetId: string;
  listId: string;
}

const ShareStoryButton = ({
  shareTitle,
  shareText,
  targetId,
  listId,
}: Props) => {
  const handleShare = async (blob: Blob) => {
    const filesArray = [
      new File([blob], `${shareTitle}.png`, {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      title: shareTitle,
      text: shareText,
      files: filesArray,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    } else {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${shareTitle}.png`;
      a.click();
    }
  };

  useEffect(() => feather.replace(), []);

  return (
    <div
      className="flex gap-4 items-center hover:cursor-pointer"
      onClick={() => {
        document.getElementById(listId)!.style.maxHeight = "none";
        document.getElementById(listId)!.style.overflow = "hidden";
        domtoimage
          .toBlob(document.getElementById(targetId)!, {
            style: {
              borderRadius: "0px",
            },
          })
          .then((blob: Blob) => {
            handleShare(blob).then(() => {
              document.getElementById(listId)!.style.maxHeight = "50vh";
              document.getElementById(listId)!.style.overflowY = "scroll";
            });
          });
      }}
    >
      <h1
        className="bg-primary text-primary-foreground p-3 rounded-3xl 
          font-semibold text-lg px-16"
      >
        Share to story
      </h1>
    </div>
  );
};

export default ShareStoryButton;
