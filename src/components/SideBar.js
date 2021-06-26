import React from 'react'
import '../css/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import { GoogleLogout,GoogleLogin } from "react-google-login";
import {CLIENT_ID} from '../constants/client_Id'
import {FaTachometerAlt,FaUserAlt,FaUserPlus} from 'react-icons/fa';


export default function SideBar({profile,IsLoggedIn,setIsLoggedIn}) {

    // var profile = JSON.parse(localStorage.getItem("LogInData"));
    const logout = (res) => {
        console.log(res)
        localStorage.clear()
        setIsLoggedIn(false)
    }
    const responseGoogle = (response) => {
        console.log(response.profileObj);
        localStorage.setItem("IsLoggedIn", true);
        localStorage.setItem("LogInData", JSON.stringify(response.profileObj));
        setIsLoggedIn(true);
    }
    return (
        <>
            <div className="container">

                <div className="sidenav">
                <div className={`col-md-12 text-center ${profile === null ? 'd-none' : 'd-block'}`}>
                    <img src={profile === null ? '' : profile.imageUrl} height="50px" width="50px" className="circle img-thumbnail d-inline-block " alt="" />

                </div>
                    <h6 className="text-white text-center ">{profile === null ? '' : profile.name}</h6>
                    <div className="text-center">
                    {localStorage.getItem('IsLoggedIn') === "true" ? <GoogleLogout
                        clientId={CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                        className="mb-4"
                    /> : <GoogleLogin
                            clientId={CLIENT_ID}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="mb-4"
                        />}
                        </div>
                    <Link to='/'> 
                        <FaTachometerAlt />
                        <span className="m-2">Dashboard</span>
                    </Link>
                    <Link to='/Users' > 
                        <FaUserAlt/>
                        <span className="m-2">Users</span>
                    </Link>
                    <Link to='/addUsers'>
                        <FaUserPlus/>
                        <span className="m-2">Add Users</span>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
