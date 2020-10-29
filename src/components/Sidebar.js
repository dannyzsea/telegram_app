import React from 'react';
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { IconButton } from '@material-ui/core';
import SidebarThread from './SidebarThread';
import { Avatar } from '@material-ui/core'
import { PhoneOutlined, QuestionAnswerOutlined, Settings } from '@material-ui/icons';
const Sidebar = () => {
    return (
        <div className="sidebar">
         <div className="sidebar__header">
<div className="sidebar__search">
<SearchIcon className="sidebar__searchIcon"/>
    <input placeholder="Search" className="sidebar__input"/>
</div>
<IconButton>
<BorderColorOutlinedIcon variant="outlined" id="sidebar__button"/>
</IconButton>
</div>
<div className="sidebar__threads">
    <SidebarThread/>
    <SidebarThread/>
    <SidebarThread/>
    <SidebarThread/>
    <SidebarThread/>
</div>
<div className="sidebar__bottom">
    <Avatar/>
    <IconButton>
        <PhoneOutlined/>
    </IconButton>

    <IconButton>
        <QuestionAnswerOutlined/>
    </IconButton>

    <IconButton>
        <Settings/>
    </IconButton>

    
</div>
</div>
    )
}

export default Sidebar;
