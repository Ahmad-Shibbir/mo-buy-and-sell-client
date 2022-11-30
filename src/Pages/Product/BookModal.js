import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";
import NoInfoPage from "../Shared/NoInfoPage/NoInfoPage";

const BookModal = (booking) => {
    const {user}=useContext(AuthContext);
    // const categor = [{category_id:'1', category_name:"Samsung", category_img:"jhf"}];
   console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
 
    const handAddBooking =data=>{
    
              const product ={
                  name:booking.booking.name,
                  email:user.email,               
                  description:data.description,
                  img:booking.booking.img ,                 
                  price:booking.booking.new_price,
                  location:data.location,
                  phon_no:data.phone
                 

              }
              fetch('https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/bookings',{
                  method:'POST',
                  headers:{
                      'content-type': 'application/json',
                      authorization:`bearer ${localStorage.getItem('accessToken')}`
                  },
                  body:JSON.stringify(product)
              })
              .then(res=> res.json())
              .then(dat=>{
                  console.log(dat);
                  toast.success(`${data.name} is added successfully`);
                //   navigate('/dashboard/my-products');
              })
          }
    //   }
    //   )
  return (
    
    
    
    <div>
      {
          !user && <>
          
          <div>
     
     <input type="checkbox" id="my-modal-3" className="modal-toggle" />
     <div className="modal">
       <div className="modal-box relative">
         <label
           htmlFor="my-modal-3"
           className="btn btn-sm btn-circle absolute right-2 top-2"
         >
           ✕
         </label>

        

         <h3 className="text-lg font-bold">
          Please Login
          </h3>
         
         






               <div className="mt-6 mb-6 border border-4 border-blue-50 flex justify-center items-center h-1/2">
         
          
          </div>
          <div className="mt-6 mb-6 border border-4 border-blue-50 flex justify-center items-center h-1/2">
          {/* <img className="" src={booking.booking.img} alt="" /> */}
          </div>








         {/* <p >
           You've been selected for a chance to get one year of subscription to
           use Wikipedia for free!
         </p> */}
       </div>
     </div>
   </div>
          </>

      }
      {user &&
      <div>
     
     <input type="checkbox" id="my-modal-3" className="modal-toggle" />
     <div className="modal">
       <div className="modal-box relative">
         <label
           htmlFor="my-modal-3"
           className="btn btn-sm btn-circle absolute right-2 top-2"
         >
           ✕
         </label>

         {/* <label onClick={()=>handAddBooking()}
           htmlFor="my-modal-3"
           className="btn btn-sm btn-primary absolute right-2 bottom-2"
         >
           Submit
         </label> */}

         <h3 className="text-lg font-bold">
          You Are going to book: <br /> </h3>
         
         



               <div className="py-4">
                   
               <form className="justify-center items-center grid  gap-4" onSubmit={handleSubmit(handAddBooking)}>
             {/* <Header /> */}             
             
             <div>
                   <input
                       {...register("location", {
                       required: "Location is required",
                       })}
                       placeholder="Location to pickup"
                       type="text"
                       className="input input-bordered input-success w-full max-w-xs"
                   />
                   {errors.location && (
                       <p className="text-accent" role="alert">
                       {errors.location?.message}
                       </p>
                   )}
             </div>
           
                    
             <div>
                   <input
                       {...register("phone", {
                       required: "Phone number is required",
                       })}
                       placeholder="Phone Number"
                       type="tel"
                       className="input input-bordered input-success w-full max-w-xs"
                   />
                   {errors.phone && (
                       <p className="text-accent" role="alert">
                       {errors.phone?.message}
                       </p>
                   )}
             </div>           
                       

             
             <div>
               <input  htmlFor="my-modal-3"
               className="btn btn-sm btn-primary absolute right-2 bottom-2"
               //   className="btn btn-primary w-full"
                 value="Add Product"
                 type="submit"
               />               
             </div>
             
           </form>
               </div>



               <div className="mt-6 mb-6 border border-4 border-blue-50 flex justify-center items-center h-1/2">
          {/* <img className="" src={booking.booking.img} alt="" /> */}
          </div>
          <div className="grid gap-4">
           <div>
           <p className=" font-bold text-primary text-2xl">Product Info</p>
           <p className="mx-12   text-xl">Name: {booking.booking.name} </p>
          <p className="mx-12 text-xl">Price: ${booking.booking.new_price}</p>
           </div>
           <div>
           <p className=" font-bold text-primary text-2xl">Your Info</p>
           <p className="mx-12   text-xl">Name: {user.displayName} </p>
          <p className="mx-12 text-xl">Email: ${user.email}</p>
           </div>
           <div>

           </div>
          </div>
          <div className="mt-6 mb-6 border border-4 border-blue-50 flex justify-center items-center h-1/2">
          {/* <img className="" src={booking.booking.img} alt="" /> */}
          </div>








         {/* <p >
           You've been selected for a chance to get one year of subscription to
           use Wikipedia for free!
         </p> */}
       </div>
     </div>
   </div>

      }
    </div>
  );
};

export default BookModal;
