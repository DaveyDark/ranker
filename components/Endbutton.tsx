'use client'

import { useRef, type FC } from 'react';
import confetti from 'canvas-confetti';

interface EndbuttonProps {
    title: String;
}

const Endbutton: FC<EndbuttonProps> = ({title}) => {

    const buttonRef = useRef<HTMLButtonElement>(null);
    
    const handleConfetti = () =>  {

        const button = buttonRef.current;
        if (!button) return;
        const buttonRect = button.getBoundingClientRect();

        const buttonX = buttonRect.left + buttonRect.width / 2 - 80 ;
        const buttonY = buttonRect.top + buttonRect.height / 2 - 24;

        confetti({
            particleCount: 100,
            spread: 100,
            origin: { x: buttonX / window.innerWidth, y: buttonY / window.innerHeight },
            decay: 0.8
          });     
    }

        return (
        <>
            <div className='flex items-center mt-0' onClick={handleConfetti}>
                <h1 className='bg-blue-500 p-1 rounded-3xl m-1 hover:cursor-pointer text-base font-light'>{title}</h1>
                <button className='w-10 h-10 bg-blue-500 rounded-full hover:cursor-pointer border-0' ref={buttonRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                </button>
            </div>
        </>
        );
}
export default Endbutton;