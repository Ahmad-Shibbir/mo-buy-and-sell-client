import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import NoInfoPage from "../../../Shared/NoInfoPage/NoInfoPage";

const Myorders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/order?email=${user.email}`;

  const { data: order = [] } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const res = await fetch(url,{
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      }
      );
    //   console.log(res);
      const data = await res.json();
    //   console.log(data);
      return data;
    },
  });
  const handlePay=()=>{
  alert("Your payment is successful!")
  }
  return (
    // <div>
    //   {order.length}
    // </div>
    <div>
      {
        order.length<1 && <>
          <NoInfoPage
            message={'No order found, Buy, and enjoy!'}
          ></NoInfoPage>
        </>
      }
      {
        order.length>0 && <div>
        <h3 className="text-3xl text-center font-bold my-6 text-primary ">
          My Orders
        </h3>
  
  
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                  <th></th>
                <th>Orders</th>
                <th>Payment</th>
  
                <th></th>
              </tr>
            </thead>
            <tbody>
           
              {
                  order?.map((ord,i) =><tr>
                      <th>{i+1}</th>
                      <td>
                          
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-40 h-40">
                              <img
                                src={ord.img}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{ord.name}</div>
                            <div className="text-3xl text-primary font-bold">${ord.price}</div>
                          </div>
                        </div>
                      </td>
                      <th>
                        <button onClick={handlePay} className="btn btn-primary btn-xs">Pyment</button>
                      </th>
                      {/* <td>Purple</td> */}
                      
                    </tr>
                  )
              }
            </tbody>
            <tfoot>
              <tr>
                  <th></th>
                <th>Orders</th>
                <th>Payment</th>
  
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
        
      </div>

      }
    </div>
  );
};

export default Myorders;
