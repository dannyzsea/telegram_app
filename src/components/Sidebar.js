import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
const Sidebar = () => {
    return (
        <div className="sidebar">
         <div className="sidebar__header">
<div className="sidebar__search">
<SearchIcon className="sidebar__searchIcon"/>
    <input placeholder="Search" className="sidebar__input"/>
</div>
</div>
<div className="sidebar__threads"></div>
<div className="sidebar__bottom"></div>
</div>
    )
}

export default Sidebar;
