"use client";
import confetti from "canvas-confetti";
import feather from "feather-icons";
import React, { useEffect } from "react";
import { useToast } from "./ui/use-toast";
import domtoimage from "dom-to-image";

const ShareButton = ({
  disabled,
  rankerTitle,
  link,
}: {
  rankerTitle: string;
  disabled: boolean;
  link: string;
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const toaster = useToast();

  useEffect(() => {
    feather.replace();
  });

  const handleShare = async () => {
    document.getElementById("canvasTarget")!.style.display = "flex";
    const blob = await domtoimage.toBlob(
      document.getElementById("canvasTarget")!,
    );
    document.getElementById("canvasTarget")!.style.display = "none";
    const filesArray = [
      new File([blob], `${rankerTitle}.png`, {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ];
    const shareTitle = `${rankerTitle} | Rank now on Ranker`;
    const shareUrl = window.location.host + link;
    const shareData = {
      title: shareTitle,
      text: shareTitle,
      url: shareUrl,
      files: filesArray,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      navigator.clipboard.writeText(shareUrl);
      await navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(shareUrl);
      toaster.toast({
        title: "Link copied!",
        description: "Send it to a friend!",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${shareTitle}.png`;
      a.click();
    }
  };

  const handleConfetti = () => {
    const button = buttonRef.current;
    if (!button) return;
    const buttonRect = button.getBoundingClientRect();

    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: {
        x: buttonX / window.innerWidth,
        y: buttonY / window.innerHeight,
      },
      decay: 0.9,
    });

    setTimeout(() => handleShare(), 500);
  };

  return (
    <button
      className="bg-primary text-white p-4 rounded-3xl flex gap-4 font-semibold disabled:bg-gray"
      ref={buttonRef}
      onClick={handleConfetti}
      disabled={disabled}
    >
      <svg data-feather="share-2" width={24} height={24} />
      Share
    </button>
  );
};

export default ShareButton;
