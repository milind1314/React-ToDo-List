import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function AddAppointment(){


    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            title:'',
            date:'',
            userid: cookies['userid']
        },
        onSubmit: (appointment) => {
            axios.post(`http://127.0.0.1:4000/appointments`, appointment)
            .then(()=>{
                console.log('appontment added');
            })
            navigate('/dashboard');
        }
    })


    return(
        <div className="container bg-light w-50 p-4">
            <h3>Add New Appointment - {cookies['userid']} </h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Title</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="title"/></dd>
                    <dt>Date</dt>
                    <dd><input type="date" onChange={formik.handleChange} className="form-control" name="date"/></dd>
                </dl>
                <button type="submit" className="btn btn-success">Add</button>
                <Link to="/dashboard" className="btn btn-warning mx-2">Cancel</Link>
            </form>
        </div>
    )
}