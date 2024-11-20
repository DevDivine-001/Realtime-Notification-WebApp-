
const Card = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center min-h-screen ">
                <div className="w-full max-w-3xl p-4 flex flex-col gap-3 shadow-xl bg-white rounded-lg max-sm:w-[85%]">
                    <img src="" alt="" className="w-[400px] h-[420px] bg-[green] rounded-md" />
                    <div className="flex space-x-3">
                        <div className="h-[40px] w-[40px] rounded-full bg-black"></div>
                        <div className="h-[40px] w-[40px] rounded-full bg-black"></div>
                        <div className="h-[40px] w-[40px] rounded-full bg-black"></div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card