import "../styles/adminManageRestResrv.css";
import { getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ManageRestaurant(props) {

    // let restData = [];
    const [restData, setRestData] = useState([]);
    const getData = async () => {
        await getDocs(collection(db, "restaurant_details"))
            .then((query) => {
                const data = query.docs.map((doc) => ({...doc.data(), id:doc.id }));
                setRestData(data);
            })
    }

    useEffect( () => {
        getData();
    });

    const navigate = useNavigate();
    const getRestInfo = (rest) => {
        props.passData(rest);
        navigate("/highprevperson/editrest")
    }

    return(
        <div className="manage-rest-resrv-section">
            <div className="list-restaurants">
                <div className="spacer"></div>
                <table className="table-rest">
                    <thead>
                        <tr className="table-header">
                            <th>Restaurant ID</th>
                            <th>Restaurant Name</th>
                            <th>Restaurant Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        restData.map( (rest) => { return (
                            <tr key={rest.id} className="table-row" onClick={() => getRestInfo(rest)}>
                                <td className="table-data">{rest.id}</td>
                                <td className="table-data">{rest.rest_name}</td>
                                <td className="table-data">{rest.rest_desc}</td>
                            </tr>
                            )
                        } )
                    }
                    </tbody>
                </table>
                <button className="add-btn">+</button>
            </div>
        </div>
    )
}