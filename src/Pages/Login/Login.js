import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import login from "./../../assets/login.svg";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const {signIn} = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError]= useState('')

  const handleLogin = data=> {
    setLoginError('');
    console.log(data);
    signIn(data.email, data.password)
    .then(d=>{
      const user = d.user
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(e=>{
      console.log(e.message);
      setLoginError(e.message);
    })
  }

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="  card grid lg:grid-cols-2 m-6 p-12 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={login} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="h-96">
          <div>
            <h1 className="font-bold text-primary text-5xl py-8">Login</h1>
            <form className="grid gap-4"
              onSubmit={handleSubmit(handleLogin) }
            >
              {/* <Header /> */}
              <input
                {...register("email", { required: "Email Address is required" })}
                placeholder="Email"
                type="text"
                className="input input-bordered input-success w-full max-w-xs"
              />
               {errors.email && <p className="text-accent" role="alert">{errors.mail?.message}</p>}
              <div>
              <input
                {...register("password", { required: "Password is required", 
            minLength: {value: 7, message:'Password must be 7 character or long'} })}
                placeholder="Password"
                type="password"
                className="input input-bordered input-success w-full max-w-xs"
              />
              {errors.password && <p className="text-accent" role="alert">{errors.password?.message}</p>}
              {/* {" "} */}
                
              <label className="block">forget password?</label>
              </div>
              <div>
                {loginError && <p>{loginError}</p>}
              </div>
             
              {/* <input {...register("firstName")} placeholder="First name" /> */}
              {/* <select className="select select-success w-full max-w-xs">
                <option disabled selected>
                  Pick your favorite anime
                </option>
                <option>One Piece</option>
                <option>Naruto</option>
                
              </select>
              <select {...register("category", { required: true })}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select> */}
              {/* <textarea {...register("aboutYou")} placeholder="About you" />
              <p>{data}</p> */}
              <div>
              <input className="btn btn-primary w-1/2" value='Login' type="submit" />
              <label className="block">New to this site? <Link to='/signup' className="text-primary">Create New Account</Link></label>
              </div>
              <input className="btn btn-outline w-1/2" value='Login with Google' type="submit" />
              <br />
              {/* <p>Or continue with: <input className="btn btn-primary w-1/4" value='Google' type="submit" /></p> */}
            </form>
          </div>
          {/* <div className="  grid grid-cols-2 card-body items-center text-center"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
