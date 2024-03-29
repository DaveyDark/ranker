import type { FC } from 'react';
import { Reorder } from 'framer-motion';

interface AvgListMainProps {
    title: string,
    count: number,
}

const AvgListMain: FC<AvgListMainProps> = ({title, count}) => {
        return (
            <>
                    <div className="bg-[#253143] m-2 text-[.45rem] text-white px-2 rounded-xl shadow-xl min-w-60 max-w-60 min-h-[7vh] max-h-[7vh] text-wrap relative flex flex-col justify-center items-center cursor-pointer">
                        <span className="absolute -top-1.5 -left-1.5 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                            {count}
                        </span>
                        <div className="overflow-auto max-h-[6vh] w-full custom-scrollbar flex justify-center">
                            <h1 className='px-4'>{title}</h1>
                        </div>
                    </div>
            </>
        );
}
export default AvgListMain;