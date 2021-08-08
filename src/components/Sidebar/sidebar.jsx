import './sidebar.css'
import { AttachMoney, BarChart, Feedback, Forum, Group, LineStyle, ListAlt, MailOutline, Report, Timeline, TrendingUp, WorkOutline,   } from '@material-ui/icons';
const Sidebar = () => {
    return (  
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active">
                            <LineStyle className="listicon"/>
                            Home
                        </li>
                        <li className="sidebarlistitem">
                            <Timeline className="listicon"/>
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <TrendingUp className="listicon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active">
                            <Group className="listicon"/>
                            Users
                        </li>
                        <li className="sidebarlistitem">
                            <ListAlt className="listicon"/>
                            Products
                        </li>
                        <li className="sidebarlistitem">
                            <AttachMoney className="listicon"/>
                            Transactions
                        </li>
                        <li className="sidebarlistitem">
                            <BarChart className="listicon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Notifications</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active">
                            <MailOutline className="listicon"/>
                            Mail
                        </li>
                        <li className="sidebarlistitem">
                            <Feedback className="listicon"/>
                            Feedback
                        </li>
                        <li className="sidebarlistitem">
                            <Forum className="listicon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Staff</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active">
                            <WorkOutline className="listicon"/>
                            Manage
                        </li>
                        <li className="sidebarlistitem">
                            <Timeline className="listicon"/>
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <Report className="listicon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}
 
export default Sidebar;