// import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
// import { FaEye,FaEyeSlash } from 'react-icons/fa';
// import { useRef, useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'

// import { Link } from "react-router-dom";
const SignUp = ()=>{

    const {createUser} = useContext(AuthContext);
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            //new user has been created
            const createAt = result.user?.metadata?.creationTime;
            const user = {email,createAt: createAt };
            
            fetch('http://localhost:5000/user',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Registration Now</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" 
                    name="email"
                    placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" 
                    name="password"
                    placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
  }
  export default SignUp;