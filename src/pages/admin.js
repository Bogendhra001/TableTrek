import { useState } from "react";
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/admin.css";
import AdminHomePage from "./adminHomePage";

export default function Admin(props) {

    

    const [email, setEmail] = useState("adminpeople@tabletrek.com");
    const [password, setPassword] = useState("@dWinPeople");

    const [adminStat, setAdminStat] = useState(0);

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log("done");
            setAdminStat(1);
            localStorage.setItem('isLoggedIn', true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const passData = (data) => {
        props.passData(data);
    }

    if (adminStat == 1 || localStorage.getItem('isLoggedIn')) {
        return(
            <AdminHomePage passData={passData} />
        )
    }

    return(
        <div className="admin-page-container">
            <div className="admin-login">
                <p>Email:</p>
                <input placeholder="Enter email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
                <p>Password:</p>
                <input placeholder="Enter password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                <button className="submit-btn-admin" onClick={onLogin}>Login</button>
            </div>
        </div>
    )
}