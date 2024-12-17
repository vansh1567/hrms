import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaHome, FaUser, FaCalendarAlt, FaTicketAlt, FaMoneyCheckAlt, FaCog, FaQuestionCircle, FaDoorOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../assets/logowhite.png';


const UserSideBar = () => {
    const [showTicketOptions, setShowTicketOptions] = useState(false);
    const [showLeaveOptions, setShowLeaveOptions] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="bg-white h-screen w-[290px] px-6 py-8 flex flex-col shadow-lg">
            <div className="flex items-center mb-2">
                <img src={Logo} alt="LazyHR" className="h-[80px] w-[200px] mr-2" />
            </div>
            <nav className="flex-1 space-y-4">
                {/* Home */}
                <Link
                    to="/"
                    className={`flex items-center p-3 rounded-md ${activeItem === 'Home' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                    onClick={() => handleItemClick('Home')}
                >
                    <FaHome className="mr-3" />
                    <span>Home</span>
                </Link>

                {/* Profile */}
                <Link
                    to="/profile"
                    className={`flex items-center p-3 rounded-md ${activeItem === 'My Profile' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                    onClick={() => handleItemClick('My Profile')}
                >
                    <FaUser className="mr-3" />
                    <span>My Profile</span>
                </Link>

                {/* Attendance */}
                <Link
                    to="/attendance"
                    className={`flex items-center p-3 rounded-md ${activeItem === 'Attendance' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                    onClick={() => handleItemClick('Attendance')}
                >
                    <FaCalendarAlt className="mr-3" />
                    <span>Attendance</span>
                </Link>

                {/* Ticket */}
                <div>
                    <div
                        className={`flex items-center p-3 rounded-md ${activeItem === 'Ticket' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                        onClick={() => {
                            setShowTicketOptions(!showTicketOptions);
                            handleItemClick('Ticket');
                        }}
                    >
                        <FaTicketAlt className="mr-3" />
                        <span>Ticket</span>
                        <div className="ml-auto">
                            {showTicketOptions ? (
                                <FaChevronUp className={`w-5 h-5 ${activeItem === 'Ticket' ? 'text-white' : 'text-gray-600'}`} />
                            ) : (
                                <FaChevronDown className={`w-5 h-5 ${activeItem === 'Ticket' ? 'text-white' : 'text-gray-600'}`} />
                            )}
                        </div>
                    </div>

                    {showTicketOptions && (
                        <div className="ml-8 space-y-2 transition-all duration-300 ease-in-out">
                            <Link
                                to="/ticketquery"
                        
                                className={`flex items-center p-2 rounded-md ${activeItem === 'Query' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                                onClick={() => handleItemClick('Query')}
                            >
                                <span>Query</span>
                            </Link>

                            <Link
                                to="/ticket/reimbursement"
                                className={`flex items-center p-2 rounded-md ${activeItem === 'Reimbursement' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                                onClick={() => handleItemClick('Reimbursement')}
                            >
                                <span>Reimbursement</span>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Leave */}
                <div>
                    <div
                        className={`flex items-center p-3 rounded-md ${activeItem === 'Leave' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                        onClick={() => {
                            setShowLeaveOptions(!showLeaveOptions);
                            handleItemClick('Leave');
                        }}
                    >
                        <FaCalendarAlt className="mr-3" />
                        <span>Leave</span>
                        <div className="ml-auto">
                            {showLeaveOptions ? (
                                <FaChevronUp className={`w-5 h-5 ${activeItem === 'Leave' ? 'text-white' : 'text-gray-600'}`} />
                            ) : (
                                <FaChevronDown className={`w-5 h-5 ${activeItem === 'Leave' ? 'text-white' : 'text-gray-600'}`} />
                            )}
                        </div>
                    </div>

                    {showLeaveOptions && (
                        <div className="ml-8 space-y-2 transition-all duration-300 ease-in-out">
                            <Link
                                to="/leave/apply"
                                className={`flex items-center p-2 rounded-md ${activeItem === 'Apply Leave' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                                onClick={() => handleItemClick('Apply Leave')}
                            >
                                <span>Apply Leave</span>
                            </Link>
                            <Link
                                to="/leave/my-leaves"
                                className={`flex items-center p-2 rounded-md ${activeItem === 'My Leaves' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                                onClick={() => handleItemClick('My Leaves')}
                            >
                                <span>My Leaves</span>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Payroll */}
                <Link
                    to="/payroll"
                    className={`flex items-center p-3 rounded-md ${activeItem === 'Payroll' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                    onClick={() => handleItemClick('Payroll')}
                >
                    <FaMoneyCheckAlt className="mr-3" />
                    <span>Payroll</span>
                </Link>

                {/* Settings */}
                <Link
                    to="/settings"
                    className={`flex items-center p-3 rounded-md ${activeItem === 'Setting' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                    onClick={() => handleItemClick('Setting')}
                >
                    <FaCog className="mr-3" />
                    <span>Setting</span>
                </Link>
            </nav>

            {/* Help */}
            <div
                className={`flex items-center p-3 rounded-md ${activeItem === 'Help' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                onClick={() => handleItemClick('Help')}
            >
                <FaQuestionCircle className="mr-2" />
                <span>Help</span>
            </div>

            {/* Logout */}
            <div
                className={`flex items-center mt-4 p-3 rounded-md ${activeItem === 'Logout' ? 'bg-[#534feb] text-white' : 'hover:bg-gray-100 hover:text-gray-800 text-gray-600'}`}
                onClick={() => handleItemClick('Logout')}
            >
                <FaDoorOpen className="mr-2" />
                <span>Logout</span>
            </div>
        </div>
    );
};

export default UserSideBar;
