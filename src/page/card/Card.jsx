import { FaHeart, FaShareAlt } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import { Post } from "../../data/data.js"
import { useState } from "react";

const Card = () => {
    const [Like, setLike] = useState(false)

    const handleClick = () => {
        setLike(true)
    }
    return (
        <div className="flex justify-center items-center h-[170vh] w-full bg-gray-100">
            <div className="flex justify-center items-center w-full flex-col gap-6 min-h-screen">
                {
                    Post.map((Post) => (<div className="w-full max-w-3xl p-4 flex flex-col gap-3 shadow-xl bg-white rounded-lg sm:max-w-lg xs:max-w-xs" key={Post.id}>
                        {/* Image */}
                        <img
                            src={Post.postImg}
                            alt="Card Image"
                            className="w-full h-[330px] bg-green-500 rounded-md object-cover sm:h-[350px] xs:h-[200px]"
                        />
                        <div className="flex items-center space-x-4 ">
                            <img src={Post.userImage} alt="" className="w-[40px] h-[40px] bg-green-500 object-cover cursor-pointer rounded-full" />
                            <span>{Post.username}</span>

                        </div>

                        {/* Icons */}
                        <div className="flex justify-around">
                            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer">
                                <SiMessenger size={20} className="text-gray-600" />
                            </div>
                            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer">
                                <FaShareAlt size={20} className="text-gray-600" />
                            </div>
                            <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer">
                                {
                                    Like ?
                                        (<FaHeart size={20}
                                            className="text-[red] "
                                        />) : (<FaHeart size={20}
                                            className="text-[none] "
                                            onClick={handleClick} />)
                                }
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Card;
