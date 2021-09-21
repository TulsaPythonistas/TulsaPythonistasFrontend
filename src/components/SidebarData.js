import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io5"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoDocumentTextOutline/>,
        cName: 'nav-text'
    },
    {
        title: 'Events',
        path: '/events',
        icon: <AiIcons.AiOutlineCalendar/>,
        cName: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <FaIcons.FaPenFancy/>,
        cName: 'nav-text'
    }
]