import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import NoInfoPage from "../../Shared/NoInfoPage/NoInfoPage";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/my-products?email=${user.email}`;

  const { data: products = [],refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      //   console.log(res);
      const data = await res.json();
      //   console.log(data);
      return data;
    },    
  });



  const handleDelete = product=>{ 
    console.log(product);   
    fetch(`https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/products/${product._id}`, {
      method:'DELETE',
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      refetch();
      toast.success(`User ${user.name} deleted successfully!`)
    })
  }


  const handleAdvertise = data =>{
    const product ={
      product_id:data._id,
      name:data.name,
      email:user.email,
      img:data.img,
      category_id:data.category_id,
      category_name:data.category_name,
      category_img:data.category_img,
      description:data.description,
      selling_price:data.price,
      new_price:data.new_price,
      location:data.location,
      phon_no:data.phone,
      duration:data.duration,
      condition:data.condition,

  }
  fetch('https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/advertise',{
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
  return (
    <div>
      {
        products?.length<1 && <>
        <div>
        <NoInfoPage
        message={`No Product Found! please Add Products`}
        ></NoInfoPage>
        </div>
        </> 
      }
      {
        products?.length>0 && <>
        <div>
      <h3 className="text-3xl text-center font-bold mt-6 text-primary ">
        My Products
      </h3>
      <h3 className="text-xl font-bold text-center mt-2 mb-12  ">
        You have{" "}
        <span className="text-primary text-3xl">{products.length}</span>{" "}
        products on this list
      </h3>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Orders {products.length}</th>
              <th>Sells Status</th>
              <th>Delete</th>
              {/* <th>Sells Status</th> */}
              <th>Advertise</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((prd, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-24 h-24">
                        <img
                          src={prd.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{prd.name}</div>
                      <div className="text-3xl text-primary font-bold">
                        ${prd.selling_price}
                      </div>
                    </div>
                  </div>
                </td>
                <th>
                  <h2>status</h2>
                </th>
                <th>
                  <button onClick={()=>handleDelete(prd)} className="btn btn-accent btn-xs">Delete</button>
                </th>
                <th>
                  <button onClick={()=>handleAdvertise(prd)} className="btn btn-primary btn-xs">Advertise</button>
                </th>

                {/* <td>Purple</td> */}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Orders {products.length}</th>
              <th>Sells Status</th>
              <th>Delete</th>
              {/* <th>Sells Status</th> */}
              <th>Advertise</th>

              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
        </> 
      }
    </div>
  );
};

export default MyProducts;
