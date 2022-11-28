import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import BookModal from "./BookModal";

const Products = () => {
    const [booking, setBooking]= useState(null);
  // const {name,email,img,category_id, category_name, description,selling_price,new_price,location, phon_no,duration,condition }=useLoaderData();

  const products = useLoaderData();


console.log(booking);


  
  
  
  return (
    <div>
      <div className="grid gap-6 my-4 px-12"> 
        <h1 className="text-3xl font-bold text-primary mt-6 mb-2 ">
          {products.length} product found for {products[0].category_name}
        </h1>

        {products?.map((p) => (
          <div className="card card-side lg:h-[380px] bg-base-100 shadow-xl">
            <figure className=" w-1/4">
              <img className="h-full" src={p.img} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl text-primary ">
                {p.name}
              </h2>
              <h2 className="card-title font-bold text-3xl text-accent-focus ">
                ${p.selling_price}{" "}
              </h2>
              <div className="border mt-2 border-purple-100 lg:w-3/5">
                <div className="  m-2 grid lg:grid-cols-2 ">
                  {" "}
                  <p className="text-xl">Purchased price: <span className="font-bold">$ {p.new_price}</span></p>
                  <p className="text-xl">Pickup location: <span className="font-bold"> {p.location}</span></p>
                  <p className="text-xl">Condition: <span className="font-bold"> {p.condition}</span></p>
                  {/* <p className="text-xl">Pickup location:<span className="font-bold"> {p.location}</span></p> */}
                  <p className="text-xl">Time of use:<span className="font-bold"> {p.duration}</span></p>
                  
                </div>
                <p className="m-3">{p.description}</p>
              </div>

              <div className="card-actions justify-end">
                <div className="mx-12">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxSS-sAygvA0cuD8YNoCqs5ZJUt3KmjHa0g&usqp=CAU"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">{p.phon_no}</div>
                    </div>
                  </div>
                </div>
                <label onClick={()=>setBooking(p)} className="btn btn-primary" htmlFor="my-modal-3" > Book Now!  </label>
                {/* <button onClick={()=>handAddBooking(products)} className="btn btn-primary">Book</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        booking && <BookModal
        key={booking._id}
        booking={booking}
        ></BookModal>
      }
    </div>
  );
};

export default Products;
