"use client";

import { useEffect, useRef, type FC } from "react";
import confetti from "canvas-confetti";
import feather from "feather-icons";

interface PrimaryButtonProps {
  title: String;
  icon: String;
  onSubmit: (event: "update" | "submit", args: string[] | null) => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, icon, onSubmit }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleConfetti = () => {
    const button = buttonRef.current;
    if (!button) return;
    const buttonRect = button.getBoundingClientRect();

    const buttonX = buttonRect.left + buttonRect.width / 2 - 80;
    const buttonY = buttonRect.top + buttonRect.height / 2 - 24;

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
      onSubmit("submit", null);
    }, 1000);
  };

  useEffect(() => feather.replace(), []);

  return (
    <>
      <div
        className="flex gap-4 items-center hover:cursor-pointer"
        onClick={handleConfetti}
      >
        <h1
          className="bg-primary text-primary-foreground p-5 rounded-3xl 
          font-semibold text-xl px-16"
        >
          {title}
        </h1>
        <button className="p-4 bg-primary rounded-full" ref={buttonRef}>
          <svg
            className="text-white"
            height={36}
            width={36}
            data-feather={icon}
          ></svg>
        </button>
      </div>
    </>
  );
};
export default PrimaryButton;
