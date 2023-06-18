import { useState, useEffect } from "react";
import "../styles/adminEditRest.css"
import { addDoc, collection } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function NewRest() {

    const [rest_name, set_rest_name] = useState("");
    const [rest_desc, set_rest_desc] = useState("");
    const [cuisine, set_cuisine] = useState("");
    const [rest_phone, set_rest_phone] = useState("");
    const [rest_email, set_rest_email] = useState("");
    const [rest_rating, set_rest_rating] = useState("");
    const [total_tables, set_total_tables] = useState("");
    const [type_2_tables, set_type_2_tables] = useState("");
    const [type_4_tables, set_type_4_tables] = useState("");
    const [opening_hrs, set_opening_hrs] = useState("");
    const [closing_hrs, set_closing_hrs] = useState("");
    const [temp_city, set_temp_city] = useState("");
    const [cities, set_cities] = useState([]);

    const append_place = () => {
        set_cities((cities) => [...cities, temp_city]);
        // console.log(cities);
    }

    // useEffect(() => {
    //     console.log(cities);
    //   }, [cities]);

    const deleteCity = (index) => {
        const t = cities[index];
        set_cities((cities) => {
            return cities.filter(city => city !== t)
        });
    }

    const newData = {
        closing_hrs: closing_hrs,
        cuisine: cuisine,
        opening_hrs: opening_hrs,
        rest_desc: rest_desc,
        rest_email: rest_email,
        rest_phone: rest_phone,
        rest_name: rest_name,
        rest_location: cities,
        rest_rating: rest_rating,
        total_tables: total_tables,
        type_2_tables: type_2_tables,
        type_4_tables: type_4_tables
    }


    const navigate = useNavigate();
    const addDataFireStore = () => {
        const docRef = collection(db, "restaurant_details");
        addDoc(docRef, newData)
            .then(docRef => {
                console.log("Success");
                navigate("/highprevperson");
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div className="edit-restaurants">
            <button className="update-rest" style={{alignSelf: "start"}}>Back</button>
            <div className="edit-form">
                <label className="inp-labels-admin">Restaurant Name:</label>
                <input placeholder="Enter restaurant name" defaultValue={rest_name} onChange={(e) => set_rest_name(e.target.value)} type="text"></input>
                <label className="inp-labels-admin">Restaurant Description:</label>
                <textarea defaultValue={rest_desc} onChange={(e) => set_rest_desc(e.target.value)} style={{ fontSize: "1rem", resize: "none"}} rows={2}></textarea>
                <label className="inp-labels-admin">Cuisine:</label>
                <input placeholder="Enter cuisine" defaultValue={cuisine} onChange={(e) => set_cuisine(e.target.value)} type="text"></input>
                <label className="inp-labels-admin">Restaurant phone:</label>
                <input placeholder="Enter phone" defaultValue={rest_phone} onChange={(e) => set_rest_phone(e.target.value)} type="text"></input>
                <label className="inp-labels-admin">Restaurant email:</label>
                <input placeholder="Enter email" defaultValue={rest_email} onChange={(e) => set_rest_email(e.target.value)} type="text"></input>
                <label className="inp-labels-admin">Restaurant available cites:</label>
                <div>
                <input placeholder="Enter city" onChange={(e) => set_temp_city(e.target.value)} type="text" />
                <button onClick={append_place}>Add</button>
                {
                    cities.map((city, index) => {
                        return(
                            <div key={index} className="place-multi-inp"><p>{city}</p><button className="clear-multi-inp" onClick={() => deleteCity(index)}>x</button></div>
                        )
                    })
                }
                </div>
                <label className="inp-labels-admin">Restaurant rating:</label>
                <input type="text" placeholder="Enter rating" defaultValue={rest_rating} onChange={(e) => set_rest_rating(e.target.value)} />
                <label className="inp-labels-admin">Total tables:</label>
                <input type="number" placeholder="Total tables" defaultValue={total_tables} onChange={(e) => set_total_tables(e.target.value)} />
                <label className="inp-labels-admin">Type 2 tables:</label>
                <input type="number" placeholder="Total tables" defaultValue={type_2_tables} onChange={(e) => set_type_2_tables(e.target.value)} />
                <label className="inp-labels-admin">Type 4 tables:</label>
                <input type="number" placeholder="Total tables" defaultValue={type_4_tables} onChange={(e) => set_type_4_tables(e.target.value)} />
                <label className="inp-labels-admin">Opening hours:</label>
                <input type="time" placeholder="Opening hours" defaultValue={opening_hrs} onChange={(e) => set_opening_hrs(e.target.value)} />
                <label className="inp-labels-admin">Closing hours:</label>
                <input type="time" placeholder="Closing hours" defaultValue={closing_hrs} onChange={(e) => set_closing_hrs(e.target.value)} />
            </div>
            <button className="update-rest" onClick={addDataFireStore}>Add</button>
        </div>
    )
}