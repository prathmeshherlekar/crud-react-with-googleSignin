// import { Row, Col, Button, Table, Container, } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Route } from 'react-router-dom';
import AddUser from './AddUser';
import Users from './Users';
import Dashboard from './Dashboard';
import UpdateUser from './updateUser';

export default function MainApp() {
    return (
        <>            
            <div className="container-fluid">
                <Route exact path="/">
                    <Dashboard/>
                </Route>
                <Route exact path="/Users">
                    <Users/>
                </Route>
                <Route exact path="/addUsers">
                    <AddUser/>
                </Route>
                <Route exact path="/updateUser/:id" component={UpdateUser}/>
                    
            </div>
        </>
    )
}
