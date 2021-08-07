import React from "react";
import './Topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
// import {avatar1.jpeg} from 'images';
const Topbar = () => {
    return ( 
    <div className="topbar">
        <div className="topbarwrapper">
            <div className="logo">Dverten</div>
            <div className="topright">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                {/* <img src="avatar1.jpeg" alt="" className="topAvatar" /> */}
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvatar"/>
            </div>
        </div>
    </div>
    )
}
 
export default Topbar;