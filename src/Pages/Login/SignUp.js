import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import login from "./../../assets/login.svg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignup = (data) => {
    console.log(data);
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
               
                <option value="">Are you buyer or seller</option>
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
                  value="Login"
                  type="submit"
                />
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
