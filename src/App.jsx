import { useEffect, useState } from "react"
import Navbar from "./components/common/Navbar"
import Card from "./page/card/Card"
import { io } from "socket.io-client"

const App = () => {
  const [Username, setUsername] = useState("")
  const [User, setUser] = useState("")
  const [UserPassword, setUserPassword] = useState("")

  useEffect(() => {
    const socket = io("http://localhost:5000")
    console.log(socket.on("FirstEvent", (data) => {
      console.log(data)
    }))
    // socket.on("FirstEvent", (data) => {
    //   console.log(data)
    // })
  }, [])

  // // Connect to the server
  // const socket = io("http://localhost:5000");

  // socket.on("connect", () => {
  //   console.log("Connected to server");
  // });

  // // Listen for the "firstEvent" message
  // socket.on("firstEvent", (data) => {
  //   console.log(data); // Should log "Hello this it test!"
  // });
  console.log(User)
  return (
    <>
      {
        User ? (
          <>
            <div className="flex flex-col  top-0 sticky">
              <Navbar />
              <span className="absolute top-14 right-[20px] text-white">{User}</span>
            </div>
            <div>
              <Card />
            </div>
          </>
        ) : (

          <div className='flex justify-center items-center bg-black'>
            <div className="flex justify-center items-center w-full h-screen">
              <div className="flex flex-col gap-[15px] w-[50%] max-sm:w-[93%] mx-auto max-lg:w-[93%]">
                <input type="text" className="px-[15px] py-[12px] rounded-md border-[1px] outline-none  max-lg:text-2xl  max-sm:text-sm font-medium flex" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className="px-[15px] py-[12px] rounded-md border-[1px] outline-none  max-lg:text-2xl font-medium flex max-sm:text-sm" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                <button className="py-[10px] px-[10px]  bg-green-800 text-white rounded-md max-lg:p-5 max-lg:text-lg max-sm:p-4 max-sm:text-sm font-medium" onClick={() => setUser(UserPassword, Username)}>Login</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default App
