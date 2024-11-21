import { FaHeart, FaShareAlt } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";

const Card = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex justify-center items-center w-full">
                <div className="w-full max-w-3xl p-4 flex flex-col gap-3 shadow-xl bg-white rounded-lg sm:max-w-lg xs:max-w-xs">
                    {/* Image */}
                    <img
                        src=""
                        alt="Card Image"
                        className="w-full h-[330px] bg-green-500 rounded-md object-cover sm:h-[350px] xs:h-[200px]"
                    />
                    <div className="flex">
                        <span>Divine</span>

                    </div>

                    {/* Icons */}
                    <div className="flex justify-around">
                        <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md">
                            <SiMessenger size={20} className="text-gray-600" />
                        </div>
                        <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md">
                            <FaShareAlt size={20} className="text-gray-600" />
                        </div>
                        <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md">
                            <FaHeart size={20} className="text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
