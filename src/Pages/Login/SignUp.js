import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";
import login from "./../../assets/login.svg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const {createUser, updateUser}= useContext(AuthContext);
  const [signupError, setSignUpError]= useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail)
  const navigate = useNavigate();

  if(token){
    navigate('/');
  }
  const handleSignup = (data) => {
    setSignUpError('');
    // console.log(data);
    createUser(data.email, data.password)
    .then(d => {
        const user = d.user;
        console.log(data.email);
        console.log(user);
        toast('User Created Successfully!')
        const userInfo ={
            displayName: data.name
            
        }
        updateUser(userInfo)
        .then(()=>{
          saveUser(data.name, data.email, data.userType)
        })
        .catch(e=>{
            console.log(e.message)
            setSignUpError(e.message);
        })
    })
    .catch(e => {
        console.log(e)
        setSignUpError(e.message);
    })

    }
    
    const saveUser = (name, email, user_type)=>{
      const user = {name, email,user_type};
      console.log(user);
      fetch('https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/users',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(d=>{
        console.log(d);
        setCreatedUserEmail(email)
        navigate('/');
      });

  };



  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="  card grid lg:grid-cols-2 m-6 p-12 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={login} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="h-96">
          <div>
            <h1 className="font-bold text-primary text-5xl py-8">SignUp</h1>
            <form className="grid gap-4" onSubmit={handleSubmit(handleSignup)}>
              {/* <Header /> */}
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Name"
                type="text"
                className="input input-bordered input-success w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-accent" role="alert">
                  {errors.name?.message}
                </p>
              )}

              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Email"
                type="text"
                className="input input-bordered input-success w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-accent" role="alert">
                  {errors.mail?.message}
                </p>
              )}
              <div>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 7,
                      message: "Password must be 7 character or long",
            
                    },
                    pattern:{
                        value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password is not strong enough",
                    },
                  })}
                  placeholder="Password"
                  type="password"
                  className="input input-bordered input-success w-full max-w-xs"
                />
                {errors.password && (
                  <p className="text-accent" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                {/* {" "} */}

                
              </div>

              {/* <input {...register("firstName")} placeholder="First name" /> */}
              <select {...register("userType", { required: "Password select an option",})} className="select select-success w-full max-w-xs">
               
                <option value="">Do you want to buy or sell</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>                
                
              </select>
              {errors.userType && (
                <p className="text-accent" role="alert">
                  {errors.userType?.message}
                </p>
              )}
              {/* <select {...register("category", { required: true })}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select> */}
              {/* <textarea {...register("aboutYou")} placeholder="About you" />
              <p>{data}</p> */}
              <div>
                <input
                  className="btn btn-primary w-1/2"
                  value="SignUp"
                  type="submit"
                />
                <div>
                    {signupError&& <p className="text-accent">{signupError}</p> }
                </div>
                <label className="block">
                  Already Have an Account?{" "}
                  <Link to="/login" className="text-primary">
                    Please Login
                  </Link>
                </label>
              </div>
              {/* <input
                className="btn btn-outline w-1/2"
                value="Login with Google"
                type="submit"
              />
              <br /> */}
              {/* <p>Or continue with: <input className="btn btn-primary w-1/4" value='Google' type="submit" /></p> */}
            </form>
          </div>
          {/* <div className="  grid grid-cols-2 card-body items-center text-center"></div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
