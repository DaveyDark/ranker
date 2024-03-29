import type { FC } from 'react';
import ResponseInd from './ResponseInd';

interface IndividualListProps {
    count: number;
}

const IndividualList: FC<IndividualListProps> = ({count}) => {
        return (
            <>
                <div className='bg-[#253143] text-white p-4 rounded-3xl h-full w-60 md:w-60 m-4'>
                    <span className=''>Response {count}</span>
                    <div className=' flex p-4 overflow-y-auto custom-scrollbar rounded-2xl'>
                        <ResponseInd title={"bigsingle"} count={1}/>
                        <ResponseInd title={"long name one"} count={2}/>
                        <ResponseInd title={"short name"} count={3}/>
                        <ResponseInd title={"python"} count={4}/>
                        <ResponseInd title={"arnav"} count={5}/>
                        <ResponseInd title={"devesh"} count={6}/>
                        <ResponseInd title={"arnao"} count={7}/>
                        <ResponseInd title={"arnabarnao"} count={8}/>
                    </div>
                </div>
            </>
        );
}
export default IndividualList;