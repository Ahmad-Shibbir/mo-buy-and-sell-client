import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/my-products?email=${user.email}`;

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(url,{
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      });
    //   console.log(res);
      const data = await res.json();
    //   console.log(data);
      return data;
    },
  });
    return (
        <div>
      <h3 className="text-3xl text-center font-bold mt-6 text-primary ">
        My Products
      </h3>
      <h3 className="text-xl font-bold text-center mt-2 mb-12  ">
        You have <span className='text-primary text-3xl'>{products.length}</span> products on this list
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
         
            {
                products?.map((prd,i) =><tr>
                    <th>{i+1}</th>
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
                          <div className="text-3xl text-primary font-bold">${prd.selling_price}</div>
                        </div>
                      </div>
                    </td>
                    <th>
                      <h2>status</h2>
                    </th>
                    <th>
                      <button className="btn btn-accent btn-xs">Delete</button>
                    </th>
                    <th>
                      <button className="btn btn-primary btn-xs">Advertise</button>
                    </th>
                    
                    {/* <td>Purple</td> */}
                    
                  </tr>
                )
            }
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
    );
};

export default MyProducts;