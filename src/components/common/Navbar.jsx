import { IoSettingsSharp } from "react-icons/io5";
import { MdEmail, MdNotifications } from "react-icons/md";
const Navbar = () => {

    return (
        <div className="flex justify-center items-center shadow-md top-0 sticky bg-green-600 w-full h-[12vh]">
            <div className="flex justify-between items-center w-[90%] h-[12vh]">
                <div className="flex justify-center items-center">
                    <span className="flex justify-center items-center text-white">FlashNotify</span>
                </div>
                <div className=" flex justify-center items-center space-x-5">
                    <div className="relative flex justify-center items-center rounded-full w-[40px] h-[40px]">
                        <MdNotifications size={28} className="text-white" />
                        <span className="absolute top-0 right-0 flex w-[20px] h-[20px] bg-[red] rounded-full text-white text-xs justify-center items-center">
                            2
                        </span>
                    </div>
                    <div className="flex justify-center items-center  rounded-full w-[40px] h-[40px] relative">
                        <MdEmail size={28} className="text-white" />
                        <span className="flex  w-[20px] h-[20px]  bg-[red] rounded-full text-white top-0 right-0 absolute justify-center items-center">2</span>
                    </div>
                    <div className="flex justify-center items-center  rounded-full w-[40px] h-[40px] relative">
                        <IoSettingsSharp size={28} className="text-white" />
                        <span className="flex  w-[20px] h-[20px]  bg-[red] rounded-full text-white top-0 right-0 absolute justify-center items-center">2</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar