import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import { CLIENT_ID } from '../constants/client_Id';
import { GoogleLogin, GoogleLogout } from "react-google-login";
// import SideBar from "./SideBar";

export default function Header({ IsLoggedIn, setIsLoggedIn }) {
    // localStorage.setItem("LogInData",'')
    // if(localStorage.getItem("LogInData")!==null)
    var profile = JSON.parse(localStorage.getItem("LogInData"));
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

            <div className="container-fluid">
                
            <div className="row pt-3 bg-secondary text-white header">
                <div className="col-md-2 text-center col-sm-6 ">
                    <span className="align-middle"><h2>CRUD APP</h2></span>
                </div>
                <div className="col-md-6">                    
                    {/* <Navbar/> */}
                </div>

                <div className="col-md-2 col-xs-12  text-center">
                    <div className="row">
                        <div className={`col-md-12 ${profile === null ? 'd-none' : 'd-block'}`}>
                            <img src={profile === null ? '' : profile.imageUrl} height="50px" width="50px" alt={profile === null ? '' : profile.id} className="mx-auto d-block  img-thumbnail circle d-block" />
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-md-12">
                            <h6>{profile === null ? '' : profile.name}</h6>
                        </div> */}
                    </div>
                </div>
                <div className="col-md-1 align-middle">
                    {localStorage.getItem('IsLoggedIn') === "true" ? <GoogleLogout
                        clientId={CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    /> : <GoogleLogin
                            clientId={CLIENT_ID}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="mb-4"
                        />}
                </div>

            </div>
            </div>
        </>
    )
}
