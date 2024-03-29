'use client'

import { useState, type FC, useEffect } from 'react';

interface CopyLearnMenuProps {}

const CopyLearnMenu: FC<CopyLearnMenuProps> = ({}) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);
      

    const togglePopup = () => {
        setIsOpen(!isOpen);
      };

      return (
        <main className=''>
          <div className="bg-[#253143] py-4 px-8 rounded-t-5xl rounded-b-2xl sm:w-80 w-screen">
            <div className="bg-white flex-col flex justify-center items-center mb-4 rounded-t-4xl rounded-b-2xl py-2 px-8 m-4">
              <span className="m-2 text-md sm:text-sm">Copy your link!</span>
              <div className="bg-blue-500 px-4 py-2 my-2 rounded-2xl hover:cursor-pointer">Copy</div>
            </div>
            <div className="bg-white flex-col flex justify-center items-center rounded-2xl py-2 px-8 m-4">
              <span className="m-2">How to Share?</span>
              <div className="bg-blue-500 px-4 py-2 my-2 rounded-2xl hover:cursor-pointer" onClick={togglePopup}>
                Learn
              </div>


              {isOpen && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center ">
                  <div className="bg-white p-4 rounded-lg max-w-80 min-h-80">
                    <div className="flex justify-end">
                      <button className="text-white hover:text-blue-300 bg-blue-700 w-8 h-8 rounded-full border-none cursor-pointer" onClick={togglePopup}> X </button>
                    </div>
                    <p>This is your popup content.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      );
    }
export default CopyLearnMenu;