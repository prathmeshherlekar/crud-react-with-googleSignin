import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch,useSelector} from 'react-redux';
import {updateUser} from '../reduxFiles/action/action';
import { useState } from "react";
import StatusToast from './StatusToast'
export default function UpdateUser(props) {
    const dispatch = useDispatch()
    var id = parseInt(props.match.params.id);
    const [Show, setShow] = useState(false);
    const [Status, setStatus] = useState(false);
    const userState = useSelector(state => state.reducer)
    var user;
    userState.forEach((item)=>{
        if(item.id===id){
            user=item
        }
    })
    const UpdateUser=(e)=>{ 
        e.preventDefault()
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var age=document.getElementById('age').value;
        if (name !== '' && age !== ''&&email!==''){
            dispatch(updateUser({id,name,email,age}));
            setStatus(true);
            setShow(true);
        }else{
            setStatus(false);
            setShow(true);
        }
    }
    


    return (
       <>
            <div className="row ">
                <div className="header bg-light">
                    <div className="col-md-12 text-center">
                        <h4>
                            Update Users
                        </h4>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 offset-3">
                    <div className="mb-3 row">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" defaultValue={user.name}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" defaultValue={user.email}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="age" className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="age" defaultValue={user.age}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <button className="btn btn-primary" onClick={UpdateUser}>Update User</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <StatusToast show={Show} setShow={setShow} addedOrUpdated='Updated' status={Status}/>

                </div>
            </div>
       </>
    )
}
