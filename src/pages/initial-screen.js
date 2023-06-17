import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import Restaurant from "./restraunt_interface";

export default function InitialScreen() {
    
    const getData = async () => {
        await getDocs(collection(db, "restaurant_details"))
            .then((query) => {
                const data = query.docs.map((doc) => ({...doc.data(), id:doc.id }));
                console.log(data)
            })
    }

    useEffect( () => {
        getData();
    }, [] )

    return(
        <div className="initial-screen-container">
            {/* This is a text */}
            <Restaurant></Restaurant>
        </div>
    )
}