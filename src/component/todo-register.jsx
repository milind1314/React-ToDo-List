import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export function ToDoRegister(){

    let navigate = useNavigate();

    const [userExists, setUserExists] = useState(false);

    const validate = async values => {
        const errors = {};

        if (!values.userid) {
            errors.userid = 'Required';
        } else if (values.userid.length < 5) {
            errors.userid = 'User ID must be at least 5 characters';
        } else if (!/^[a-zA-Z0-9_]*$/.test(values.userid)) {
            errors.userid = 'User ID must contain only letters, numbers and underscore';
        } else {
            const response = await axios.get(`http://127.0.0.1:4000/users?userid=${values.userid}`);
            if (response.data.length > 0) {
                setUserExists(true);
                errors.userid = 'User ID already exists';
            }
        }

        if (!values.userid) {
            errors.password = 'Required';
        } else if(!/[A-Z]/.test(values.password)){
            errors.password = 'Password must contain at least one uppercase letter';
        } else if(!/[0-9]/.test(values.password)){
            errors.password = 'Password must contain at least one number';
        } else if (!/[!@#$%^&*]/.test(values.password)){
            errors.password = 'Password must contain at least one special character';
        }
    
        return errors;
        

    }


    const formik = useFormik({
        initialValues:{
            userid: '',
            password: '',
            email: ''
        },
        validate,
        onSubmit: (user)=>{
            axios.post(`http://127.0.0.1:4000/users`,user).then(()=>{
                console.log("Posted...");
            })
            alert("Register Successfully...");
            navigate('/login');
        }
    })

    return(
        <div className="container p-4 w-50 bg-light">
            <h3>Register User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User ID</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="userid" required/>
                    {formik.errors.userid ? <div className="text-danger">{formik.errors.userid}</div> : null}
                    {/* {userExists ? <div className="text-danger">User ID already exists</div> : null} */}
                    </dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="password" required/>
                    {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                    </dd>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange} className="form-control" name="email" required /></dd>
                </dl>
                <button className="btn btn-warning">Register</button>
                <p className="mt-4">
                    Existing User <Link to="/login"> Login </Link>
                </p>
            </form>
        </div>
    )
}
