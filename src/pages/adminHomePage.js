import "../styles/adminhomepage.css";
import ManageReservations from "./adminManageReserv";
import ManageRestaurant from "./adminManageRest";
import { useState } from "react";

export default function AdminHomePage(props) {

    const [renderPage, setRenderPage] = useState("addRemoveRest")

    const passData = (data) => {
        props.passData(data);
    }


    const renderSection = () => {
        switch(renderPage) {
            case "addRemoveRest":
                return <ManageRestaurant passData={passData} />
            case "manageReservations":
                return <ManageReservations/>
        }
    }

    return(
        <div className="admin-homepage">
            <div className="admin-header">
                <div className="admin-nav-links">
                    <div className="nav-btns-admin" onClick={() => { setRenderPage("addRemoveRest") }}>Add / Remove restaurants</div>
                    <div className="nav-btns-admin" onClick={() => { setRenderPage("manageReservations") }}>Manage reservations</div>
                </div>
            </div>
            { renderSection() }
        </div>
    )
}