import type { FC } from 'react';

interface CreateRankerProps {}

const CreateRanker: FC<CreateRankerProps> = ({}) => {

    
        return (
            <main>
                <div className="bg-[#D9D9D9] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-4xl max-w-xs mx-auto aspect-square md:w-80 md:h-80 ml-2 mr-4 mb-6 p-4 relative shadow-right-bottom">
                    <div className="m-8 mb-0 p-4">
                    <h1 className="text-3xl font-bold leading-7">Create a new ranking topic and watch the buzz unfold!</h1>
                    <div className="font-bold text-xl md:mt-0 md:absolute md:bottom-auto md:align-middle">
                        <br />
                        Create a Ranker!
                    </div>
                </div>
                <div className="flex items-center justify-between font-montserrat text-sm">
                    <div className="w-20 h-20 bg-blue-500 rounded-full hover:cursor-pointer absolute bottom-4 right-4 flex items-center justify-center">
                        
                    </div>
                </div>
                </div>
            </main>
            
        );
}
export default CreateRanker;
