import {Bookmarks as BookmarksIcon,Timeline as TimelineIcon,Help as HelpIcon,People as PeopleIcon,Event as EventIcon} from '@material-ui/icons';
import "./sidebar.css";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidewrapper">
                <ul className="sideList">
                    <li className="sideListItem">
                        <TimelineIcon className="sideIcon"/>
                        <span className="sideListItemText">TimeLine</span>
                    </li>
                    <li className="sideListItem">
                        <PeopleIcon className="sideIcon"/>
                        <span className="sideListItemText">Group</span>
                    </li>
                    <li className="sideListItem">
                        <BookmarksIcon className="sideIcon"/>
                        <span className="sideListItemText">Saved</span>
                    </li>
                    <li className="sideListItem">
                        <EventIcon className="sideIcon"/>
                        <span className="sideListItemText">Events</span>
                    </li>
                    <li className="sideListItem">
                        <HelpIcon className="sideIcon"/>
                        <span className="sideListItemText">Help</span>
                    </li>
                    <button className="sidebtn"> See More
                        </button>
                </ul>
            </div>   
        </div>
    )
}

export default Sidebar
