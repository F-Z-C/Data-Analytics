import Image from "next/image"
import Profile1 from "../Images/Profile1.png"
import Profile2 from "../Images/Profile2.png"
import Profile3 from "../Images/Profile3.png"
const Cards = () =>{
    return(
        
        <div className=" mx-8 sm:mx-2 md:mx-2  ">
            <div className=" max-w-[1240px] py-10 mx-auto grid md:grid-cols-3 sm:grid-cols-3  ">

                <div className=" bg-gray-500 sm:mx-0 md:mx-2 lg:mx-10 py-6 my-8 flex flex-col justify-center items-center rounded-2xl drop-shadow-md hover:scale-105 duration-500  ">
                <Image className="bg-gray-500 mx-auto object-contain" src={Profile1} width={200} height={200} />
                <h2 className='bg-gray-500 text-4xl my-2 text-white font-bold'>Single User</h2>
                <div className="bg-gray-500 text-white w-full text-center p-8 ">
                    <p className='bg-gray-500 text-4xl text-white font-bold'>$119</p>
                    <p className=" bg-gray-500 border-b border-b-gray-300 py-2 mx-0 mt-8 ">500 GB Storage</p>
                    <p className=" bg-gray-500 border-b border-b-gray-300 py-2 mx-0 ">1 User Allowed</p>
                    <p className=" bg-gray-500 border-b border-b-gray-300 py-2 mx-0">Send up to 5GB</p>
                </div>
                <button className="  hover:from-teal-600 hover:to-yellow-100 text-3xl text-white bg-gradient-to-br from-teal-700 to-yellow-100 my-8 rounded-lg p-2 w-[20rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem]"> Start Trial</button>
                </div> 


                <div className=" bg-gray-500 sm:mx-2 md:mx-2 lg:mx-10 py-6 my-8 flex flex-col justify-center items-center rounded-2xl drop-shadow-md hover:scale-105 duration-500 ">
                <Image className="bg-transparent mx-auto object-contain" src={Profile2} width={200} height={200} />
                <h2 className='bg-transparent text-4xl my-2 text-white font-bold'>Two Users</h2>
                <div className="bg-transparent text-white w-full text-center p-8 ">
                    <p className='bg-gray-500 text-4xl text-white font-bold'>$150</p>
                    <p className="bg-gray-500 border-b border-b-gray-300 py-2 mx-0 mt-8  ">1 TB Storage</p>
                    <p className="bg-gray-500 border-b border-b-gray-300 py-2 mx-0 ">2 Users Allowed</p>
                    <p className="bg-gray-500 border-b border-b-gray-300 py-2 mx-0">Send up to 10GB</p>
                </div>
                <button className=" hover:from-teal-600 hover:to-yellow-100 text-3xl text-white bg-gradient-to-br from-teal-700 to-yellow-100 my-8 rounded-lg p-2 w-[20rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem]"> Start Trial</button>
                </div> 


                <div className=" bg-gray-500 sm:mx-0 md:mx-2 lg:mx-10 py-6 my-8 flex flex-col justify-center items-center rounded-2xl drop-shadow-md hover:scale-105 duration-500  ">
                <Image className=" bg-gray-500 mx-auto object-contain " src={Profile3} width={200} height={200} />
                <h2 className=' bg-gray-500 text-4xl my-2 text-white font-bold'>Three Users</h2>
                <div className=" bg-gray-500 text-white w-full text-center p-8 ">
                    <p className=' bg-gray-500  text-4xl text-white font-bold'>$199</p>
                    <p className=" bg-gray-500 border-b border-b-gray-300 py-2 mx-0 mt-8  ">2 TB Storage</p>
                    <p className=" bg-gray-500 border-b border-b-gray-300 py-2 mx-0  ">3 Users Allowed</p>
                    <p className=" bg-gray-500 border-b border-b-gray-300 py-2 mx-0">Send up to 20GB</p>
                </div>
                <button className=" hover:from-teal-600 hover:to-yellow-100 text-3xl text-white bg-gradient-to-br from-teal-700 to-yellow-100 my-8 rounded-lg p-2 w-[20rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem]"> Start Trial</button>
                </div>
                


            </div>
        </div>             
    )
}
export default Cards