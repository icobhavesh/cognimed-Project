
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { ChatData } from "./Userdata";
import { IoSendOutline } from "react-icons/io5";

const Herosection = () => {


    const [data, setData] = useState(ChatData);
    const [selectedUserMessages, setSelectedUserMessages] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleUserClick = (user) => {
        const userMessages = data.find(entry => entry[user])?.[user] || [];
        setSelectedUserMessages(userMessages);
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredUsers = data.filter(entry => {
        const user = Object.keys(entry)[0];
        const messages = entry[user];
        return user.toLowerCase().includes(searchQuery.toLowerCase()) || messages.some(msg => msg.text.toLowerCase().includes(searchQuery.toLowerCase()));
    });

    return (
        <div className="grid  md:grid-cols-12 bg-slate-800 w-full h-screen rela">
            <div className="bg-slate-900  md:col-span-1  h-auto  md:relative relative  ">
                <div className="flex  pt-10  md:flex-col items-center  md:gap-6 gap-4">
                    <div className="w-12 bg-white h-12 border rounded-full  flex justify-center items-center   md:flex mx-auto"></div>

                    <div className="pt-10  "><FaUser className="w-4 h-4 text-white flex justify-center items-center" /></div>
                    <div className="pt-10 flex justify-center items-center "><BiMessageAlt className="w-6 h-4 text-white" /></div>
                    <div className="pt-10 flex justify-center items-center "><IoSettingsOutline className="w-6 h-6 text-white" /></div>
                    <div className="absolute  md:bottom-0  md:mb-20   mx-auto ">
                        <FaToggleOn className="text-white w-10 h-10 md:mt-2  mt-6 mx-auto" />
                    </div>


                </div>
            </div>
            {/* //second section */}
            <div className=" md:col-span-3  ">
                <div className="shadow-2xl flex sm:flex  items-center  justify-center shadow-slate-900 mt-4  sm:flex  md:items-center gap-2 sm:gap-6 ">
                    <input className=" md:px-8 px-10 my-2 py-2 rounded-full mx-2 bg-slate-500 text-white" type="text" placeholder="Search" value={searchQuery} onChange={handleInputChange} />
                    <div>
                        <IoMdAdd className="bg-white w-8 h-8 text-blue-600" />
                    </div>
                </div>
                <div>
                    {filteredUsers.map((items, idx) => (
                        <div key={idx}>
                            {Object.keys(items).map((user, idx) => (
                                <div key={idx} onClick={() => handleUserClick(user)} className="text-white shadow-2xl bg-slate-800 m-2 rounded p-4">
                                    <p>{user}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {/* Third section */}
            <div className=" md:col-span-8  sm:cols-8 border-l-2 border-slate-900">
                <div className="text-center text-white font-semibold">
                    <h1>Chat</h1>
                </div>
                {/* <div className="flex justify-between items-center mt-4">
                    <span className="border-b-4 border-r  font-semibold"></span>

                    <h1 className="border-b-4 border-white   font-semibold"></h1>
                </div> */}
                <div className="text-white mt-4">
                    {selectedUserMessages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.sender === 'user1' ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user1' ? 'bg-gray-200 ml-4 text-black' : 'bg-blue-500 m-4 text-white'}`}>
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    <div className="relative md:relative  md:bottom-0   flex  items-center justify-center my-20  mx-auto">
                        <div className=" absolute flex ">
                            <input type="text" placeholder="Type a message to send" className="md:px-72 px-16  w-full    sm:rounded rounded-full sm:mt-10   mx-auto py-2 bg-slate-500" />
                            <div className="absolute bottom-[12px] right-0 flex items-center">
                                <IoSendOutline className="mr-10  flex items-center text-white   " />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Herosection;

