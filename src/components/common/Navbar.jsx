import { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { MdEmail, MdNotifications } from "react-icons/md";
const Navbar = ({ socket }) => {
    const [notification, setNotification] = useState([])
    const [OpenNoted, setOpenNoted] = useState(false)

    useEffect(() => {
        socket.on("getNotification", (data) => {
            setNotification((prev) => [...prev, data])

        })
    }, [socket])
    console.log(notification)

    const displayNotification = ({ senderName, type }) => {
        let action

        if (type === 1) {
            action = "Liked"
        } else if (type === 2) {
            action = "commented"
        } else {
            action = "Shared"
        }
        return (
            <span>{`${senderName} ${action} your post`}</span>
        )
    }
    const handleRead = () => {
        setNotification([])
        setOpenNoted(false)
    }
    return (
        <header className="flex justify-center items-center shadow-md top-0 sticky bg-green-600 w-full h-[12vh] ">
            <div className="flex justify-between items-center w-[90%] h-[12vh]">
                <div className="flex justify-center items-center">
                    <span className="flex justify-center items-center text-white cursor-pointer">FlashNotify</span>
                </div>
                <div className=" flex justify-center items-center space-x-5">
                    <div className="relative flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer">
                        <MdNotifications size={28} className="text-white" onClick={() => setOpenNoted(!OpenNoted)} />
                        {notification.length > 0 && <span className="absolute top-0 right-0 flex w-[20px] h-[20px] bg-[red] rounded-full text-white text-xs justify-center items-center">
                            {notification.length}
                        </span>}
                    </div>
                    <div className="flex justify-center items-center  rounded-full w-[40px] h-[40px] relative cursor-pointer">
                        <MdEmail size={28} className="text-white" />
                        <span className="flex  w-[20px] h-[20px]  bg-[red] rounded-full text-white top-0 right-0 absolute justify-center items-center">2</span>
                    </div>
                    <div className="flex justify-center items-center  rounded-full w-[40px] h-[40px] relative cursor-pointer">
                        <IoSettingsSharp size={28} className="text-white" />
                        <span className="flex  w-[20px] h-[20px]  bg-[red] rounded-full text-white top-0 right-0 absolute justify-center items-center">2</span>
                    </div>
                </div>

            </div>

            {
                OpenNoted && (
                    <div className="absolute  top-[63px] right-52 text-sm bg-white flex flex-col gap-3 p-3 justify-center items-center rounded-md">
                        {
                            notification.map((n) => displayNotification(n))
                        }
                        <button className="flex py-2 px-3 justify-center items-center bg-[green] rounded-md text-sm text-white cursor-pointer hover:bg-white hover:text-black duration-300 transition-all hover:shadow-md" onClick={handleRead}>Mark has read</button>
                    </div>
                )
            }

        </header>
    )
}

export default Navbar


// import { useEffect, useState } from "react";
// import { IoSettingsSharp } from "react-icons/io5";
// import { MdEmail, MdNotifications } from "react-icons/md";

// const Navbar = ({ socket }) => {
//     const [notifications, setNotifications] = useState([]);

//     useEffect(() => {
//         // Listen for incoming notifications from the socket server
//         socket.on("getNotification", (data) => {
//             setNotifications((prev) => [...prev, data]); // Add new notification to the list
//         });

//         // Clean up the socket event listener when the component unmounts
//         return () => {
//             socket.off("getNotification");
//         };
//     }, [socket]);

//     // Get the current notification count
//     const notificationCount = notifications.length;
//     console.log(notifications)

//     return (
//         <div className="flex justify-center items-center shadow-md top-0 sticky bg-green-600 w-full h-[12vh]">
//             <div className="flex justify-between items-center w-[90%] h-[12vh]">
//                 <div className="flex justify-center items-center">
//                     <span className="flex justify-center items-center text-white">FlashNotify</span>
//                 </div>
//                 <div className="flex justify-center items-center space-x-5">
//                     {/* Notification Icon */}
//                     <div className="relative flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer">
//                         <MdNotifications size={28} className="text-white" />
//                         {notificationCount > 0 && (
//                             <span className="absolute top-0 right-0 flex w-[20px] h-[20px] bg-red-600 rounded-full text-white text-xs justify-center items-center">
//                                 {notificationCount}
//                             </span>
//                         )}
//                     </div>

//                     {/* Email Icon */}
//                     <div className="relative flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer">
//                         <MdEmail size={28} className="text-white" />
//                         {notificationCount > 0 && (
//                             <span className="absolute top-0 right-0 flex w-[20px] h-[20px] bg-red-600 rounded-full text-white text-xs justify-center items-center">
//                                 {notificationCount}
//                             </span>
//                         )}
//                     </div>

//                     {/* Settings Icon */}
//                     <div className="relative flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer">
//                         <IoSettingsSharp size={28} className="text-white" />
//                         {notificationCount > 0 && (
//                             <span className="absolute top-0 right-0 flex w-[20px] h-[20px] bg-red-600 rounded-full text-white text-xs justify-center items-center">
//                                 {notificationCount}
//                             </span>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
