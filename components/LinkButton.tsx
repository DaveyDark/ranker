"use client";
import confetti from "canvas-confetti";
import feather from "feather-icons";
import React, { useEffect } from "react";
import { useToast } from "./ui/use-toast";

const LinkButton = ({
  disabled,
  link,
}: {
  disabled: boolean;
  link: string;
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const toaster = useToast();

  useEffect(() => {
    feather.replace();
  });

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

    setTimeout(() => {
      navigator.clipboard.writeText(window.location.host + `${link}`);
      toaster.toast({
        title: "Link Copied!",
        description: "Share with your friends!",
      });
    }, 500);
  };

  return (
    <button
      className="bg-primary text-white p-4 rounded-3xl flex gap-4 font-semibold disabled:bg-gray"
      ref={buttonRef}
      onClick={handleConfetti}
      disabled={disabled}
    >
      <svg data-feather="link" width={24} height={24} />
      Link
    </button>
  );
};

export default LinkButton;
