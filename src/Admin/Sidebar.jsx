import React, { useState } from 'react';
import { FaBars, FaTimes, FaProjectDiagram, FaUserEdit, FaLink, FaTools, FaSignOutAlt, FaKey } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from "../store/userSlice"
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <div className="fixed top-4 left-4 z-50 lg:hidden">
                <button onClick={toggleSidebar} className="text-white text-3xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div className={`fixed lg:sticky h-screen top-0 z-10 left-0  w-64 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:translate-x-0`}>
                <div className="flex flex-col items-start p-4 pt-16 space-y-4">
                    <nav className="mt-4 w-full">
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <NavLink to="info">
                                    <a href="" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 w-full text-left">
                                        <FaUserEdit />
                                        <span>Update Info</span>
                                    </a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="projects/create" >
                                    <a href="" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 w-full text-left">
                                        <FaProjectDiagram />
                                        <span>Create Project</span>
                                    </a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="projects">
                                    <a href="" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 w-full text-left">
                                        <FaTools />
                                        <span>Manage Project</span>
                                    </a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="links">
                                    <a href="" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 w-full text-left">
                                        <FaLink />
                                        <span>Update Links</span>
                                    </a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="skills">
                                    <a href="" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 w-full text-left">
                                        <FaTools />
                                        <span>Manage Skills</span>
                                    </a>
                                </NavLink>
                            </li>
                        </ul>
                        <button onClick={handleLogout} className="flex items-center mt-5 space-x-2 text-white hover:bg-gray-700 p-2 w-full text-left">
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </button>
                        <button onClick={() => navigate("password")} className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 w-full text-left">
                            <FaKey />
                            <span>Change Password</span>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
