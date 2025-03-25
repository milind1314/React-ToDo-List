import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export function DeleteAppointment(){

    let params = useParams();
    let navigate = useNavigate();

    const [appointment,setAppointment] = useState({id:0, title:'', datr:'', userid:''});

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4000/appointments/${params.id}`)
        .then(response =>{
            setAppointment(response.data);
        })
    },[])

    function handleDeleteClick(){
        axios.delete(`http://127.0.0.1:4000/appointments/${params.id}`)
        .then(()=>{
            console.log("deleted...");
        });
        navigate('/dashboard');
    }

    return(
        <div className="container bg-light w-50 p-4">
            <h3>Delete Appointment</h3>
            <h5 className="my-3">Are you sure you want to delete?</h5>
            <button onClick={handleDeleteClick} className="btn btn-danger mx-2">Yes</button>
            <Link to="/dashboard" className="btn btn-warning">Cancel</Link>
        </div>
    )
}