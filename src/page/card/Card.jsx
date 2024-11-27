import { FaHeart, FaShareAlt } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import { Post } from "../../data/data.js";
import { useState } from "react";

const Card = ({ post, socket, User }) => {
    const [likes, setLikes] = useState(false); // Manage likes per post

    // Handle notification and like functionality
    const handleNotification = (postId, type) => {
        // Toggle like state for the specific post
        type === 1 && setLikes((prevLikes) => ({
            ...prevLikes,
            [postId]: !prevLikes[postId], // Toggle like status for the post
        }));

        // Find the post to get the receiver's username
        const post = Post.find((p) => p.id === postId);
        if (post) {
            // Emit notification
            socket.emit("sendNotification", {
                senderName: User,
                receiverName: post.username,
                type,
                postId
            });
        }
    };
    console.log(post)

    return (
        <div className="flex justify-center items-center h-[170vh] w-full bg-gray-100">
            <div className="flex justify-center items-center w-full flex-col gap-6 min-h-screen">
                {Post.map((post) => (
                    <div
                        className="w-full max-w-3xl p-4 flex flex-col gap-3 shadow-xl bg-white rounded-lg sm:max-w-lg xs:max-w-xs"
                        key={post.id}
                    >
                        {/* Image */}
                        <img
                            src={post.postImg}
                            alt="Card Image"
                            className="w-full h-[330px] bg-green-500 rounded-md object-cover sm:h-[350px] xs:h-[200px]"
                        />
                        <div className="flex items-center space-x-4">
                            <img
                                src={post.userImage}
                                alt=""
                                className="w-[40px] h-[40px] bg-green-500 object-cover cursor-pointer rounded-full"
                            />
                            <span>{post.username}</span>
                        </div>

                        {/* Icons */}
                        <div className="flex justify-around">
                            <div
                                className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer"
                                onClick={() => handleNotification(post.id, 3)} // Send message
                            >
                                <FaShareAlt
                                    size={20} className="text-gray-600" />
                            </div>

                            <div
                                className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer"
                            // Share post
                            >
                                <SiMessenger size={20} className="text-gray-600" onClick={() => handleNotification(post.id, 2)} />
                            </div>

                            <div
                                className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer"
                            // Like post
                            >
                                {likes[post.id] ? (
                                    <FaHeart size={20} className="text-red-600"


                                    />
                                ) : (
                                    <FaHeart size={20} className="text-gray-600" onClick={() => handleNotification(post.id, 1)} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;


// import { FaHeart, FaShareAlt } from "react-icons/fa";
// import { SiMessenger } from "react-icons/si";
// import { Post } from "../../data/data.js";
// import { useState } from "react";

// const Card = ({ socket, User }) => {
//     const [likes, setLikes] = useState({}); // Manage likes per post

//     // Handle like, share, and message interactions
//     // const handleClick = (postId, type) => {
//     //     setLikes((prev) => {
//     //         const newLikes = { ...prev };
//     //         // Toggle like state for the specific post
//     //         if (newLikes[postId]) {
//     //             delete newLikes[postId]; // Unlike if already liked
//     //         } else {
//     //             newLikes[postId] = true; // Like the post
//     //         }
//     //         return newLikes;
//     //     });
//     const handleClick = (postId, type) => {
//         // Toggle like state for the specific post
//         setLikes((prevLikes) => ({
//             ...prevLikes,
//             [postId]: !prevLikes[postId], // Toggle like status for the post
//         }));

//         // Find the post to determine the receiver
//         const post = Post.find((p) => p.id === postId);
//         if (post) {
//             // Emit the appropriate notification type to the receiver
//             socket.emit("sendNotification", {
//                 senderName: User,
//                 receiverName: post.username,
//                 type,
//                 postId, // Optionally include the postId for reference in notifications
//             });
//         }
//     };

//     return (
//         <div className="flex justify-center items-center h-[170vh] w-full bg-gray-100">
//             <div className="flex justify-center items-center w-full flex-col gap-6 min-h-screen">
//                 {Post.map((post) => (
//                     <div
//                         className="w-full max-w-3xl p-4 flex flex-col gap-3 shadow-xl bg-white rounded-lg sm:max-w-lg xs:max-w-xs"
//                         key={post.id}
//                     >
//                         {/* Image */}
//                         <img
//                             src={post.postImg}
//                             alt="Card Image"
//                             className="w-full h-[330px] bg-green-500 rounded-md object-cover sm:h-[350px] xs:h-[200px]"
//                         />
//                         <div className="flex items-center space-x-4">
//                             <img
//                                 src={post.userImage}
//                                 alt="User"
//                                 className="w-[40px] h-[40px] bg-green-500 object-cover cursor-pointer rounded-full"
//                             />
//                             <span>{post.username}</span>
//                         </div>

//                         {/* Icons */}
//                         <div className="flex justify-around">
//                             <div
//                                 className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer"
//                                 onClick={() => handleClick(post.id, 3)} // Send message
//                             >
//                                 <SiMessenger size={20} className="text-gray-600" />
//                             </div>
//                             <div
//                                 className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer"
//                                 onClick={() => handleClick(post.id, 2)} // Share post
//                             >
//                                 <FaShareAlt size={20} className="text-gray-600" />
//                             </div>
//                             <div
//                                 className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-white shadow-md cursor-pointer"
//                                 onClick={() => handleClick(post.id, 1)} // Like post
//                             >
//                                 {likes[post.id] ? (
//                                     <FaHeart size={20} className="text-red-600" />
//                                 ) : (
//                                     <FaHeart size={20} className="text-gray-600" />
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Card;

