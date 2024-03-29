import type { FC } from 'react';

interface TopicsProps {
    title: string,
    Count: number,
    ResCount: number;
}

const Topics: FC<TopicsProps> = ({title, Count, ResCount}) => {
        return (
            <>
              <div className="bg-[#253143] px-4 py-4 rounded-xl shadow-md w-72 max-w-72 sm:max-w-72 relative">
                <div className="text-white flex items-center justify-between">
                  <h1 className="text-base font-medium p-2 max-w-48">{title}</h1>
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold absolute top-2 right-2">{Count}</span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-transparent border-0 text-[#D9D9D9] hover:text-blue-700 font-bold py-1 px-2 cursor-pointer">View Response</button>
                  <div className="flex items-center bg-slate-700 rounded-xl px-2 absolute bottom-3 right-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" w-4 h-4 feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span className="text-lg font-semibold text-[#D9D9D9] px-1">{ResCount}</span>
                  </div>
                </div>
              </div>
            </>
        
        );
}
export default Topics;