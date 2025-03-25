import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function ToDoLogin(){
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            userid: '',
            password: ''
        },
        onSubmit: (user)=>{
            axios.get(`http://127.0.0.1:4000/users`)
            .then(response => {
                let userdetails = response.data.find(item=> item.userid===user.userid);
                if(userdetails){
                    if(user.password===userdetails.password){
                        setCookie('userid',userdetails.userid);
                        navigate('/dashboard');
                    } else {
                        alert('Invalid Password');
                    }
                } else {
                    alert("User Doesn't exist");
                }
            })
        }
    })

    return(
        <div className="container p-4 w-50 bg-light">
            <h3>User Login</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User ID</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="userid"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="password"/></dd>
                </dl>
                <button className="btn btn-warning">Login</button>
                <p className="mt-4">
                    New User <Link to="/register" >Register</Link>
                </p>
            </form>
        </div>
    )
}