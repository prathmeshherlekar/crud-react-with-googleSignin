import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from "react-redux";
import {deleteUser} from '../reduxFiles/action/action'
import {Link } from 'react-router-dom'
export default function Users() {
    const userStore = useSelector((state) => state.reducer)
    const dispatch = useDispatch();
    const DeleteUser=(e)=>{
        var id=e.target.value;
        console.log(id)
        dispatch(deleteUser({id:id}));
    }
    
    return (

        <>
        <div className="header bg-light">
            <div className="col-md-12 text-center">
                <h4>
                    Users
                </h4>   
            </div> 
        </div>
        
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                userStore.map((item)=>{
                    return <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                        <td>
                            <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <Link to={`/updateUser/${item.id}`}>
                                    <button className="btn btn-primary"  >
                                        Update
                                    </button>   
                                </Link> 
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <button className="btn btn-danger" onClick={DeleteUser} value={item.id}>
                                    Delete
                                </button>    
                            </div>  
                            </div>                
                        </td>
                    </tr>
                })                    
                }
                </tbody>
            </table>
        </div>
        </>
    )
}
