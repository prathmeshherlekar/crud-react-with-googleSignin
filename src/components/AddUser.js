import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector,useDispatch} from 'react-redux';
import {addUser} from '../reduxFiles/action/action'
import {useState} from 'react';
import StatusToast from "./StatusToast";

export default function AddUser() {
    const userStore = useSelector(state => state.reducer)
    const dispatch = useDispatch()
    const [Show, setShow] = useState(false)
    const [Status, setStatus] = useState(false);
    const addUsers=(e)=>{
        var id;
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var age=document.getElementById('age').value;
        if(userStore.length===0){
            id=0
        }else{            
            id=parseInt(userStore[userStore.length-1].id)+1;
        }
        if (name !== '' && age !== ''&&email!==''){
            dispatch(addUser({id:id,name:name,age:age,email:email}))
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
                            Add Users
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 offset-3">
                    <div class="mb-3 row">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="email" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="age" class="col-sm-2 col-form-label">Age</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" id="age" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <button className="btn btn-primary" onClick={addUsers}>Add User</button>
                    </div>
                </div>
                <div className="col-md-3">
            <StatusToast show={Show} setShow={setShow} addedOrUpdated='Added' status={Status}/>

                </div>
            </div>
        </>
    )
}
