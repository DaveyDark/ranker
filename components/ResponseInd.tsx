import type { FC } from 'react';

interface ResponseIndProps {
    title: String;
    count: number;
}

const ResponseInd: FC<ResponseIndProps> = ({title, count}) => {
        return (
        <>
            <div className="relative text-xs">
                <span className="absolute -top-1.5 -left-1.5 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">{count}</span>
                <div className="bg-[#526580] text-[.45rem] text-white px-2 py-8 rounded-xl pt-10 shadow-r-b min-w-24 max-w-24 min-h-8 max-h-8 text-wrap">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
        );
}
export default ResponseInd;