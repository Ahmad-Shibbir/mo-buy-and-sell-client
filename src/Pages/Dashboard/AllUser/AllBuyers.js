import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import NoInfoPage from '../../Shared/NoInfoPage/NoInfoPage';

const AllBuyers = () => {
    const user_type = "buyer";
    const { data: users = [],refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch(`https://mo-buy-and-sell-server.vercel.app/all-seller/${user_type}`);
        const data = await res.json();
        return data;
      },
    });

    const handleDelete = user=>{    
        fetch(`https://mo-buy-and-sell-server.vercel.app/user/${user._id}`, {
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
    return (
        <div>
                    {
        users?.length<1 && <>
        <div>
        <NoInfoPage
        message={`Oops! No Seller Found!`}
        ></NoInfoPage>
        </div>
        </> 
      }
            {
                users?.length>0 && <div>
                 <h3 className="text-3xl text-center font-bold mt-6 text-primary ">
                     All Buyers Info
                   </h3>
                   <h3 className="text-xl font-bold text-center mt-2 mb-12  ">
                      In this list <span className='text-primary text-3xl'> {users.length} </span> users found 
                   </h3>
                  <div className="overflow-x-auto mx-8 mb-12">
                   <table className="table table-zebra w-full">
                     <thead>
                       <tr>
                         <th></th>
                         <th>Name</th>
                         <th>User Type</th>
                         <th>Delete</th>
                       </tr>
                     </thead>
                     <tbody>
                      {
                         users.map((user, i)=> <tr>
                             <th>{i+1}</th>
                             <td>{user.name}</td>
                             <td>{user.user_type}</td>
                             <td><button onClick={()=>handleDelete(user)} className="btn btn-sm btn-accent">Delete</button></td>
                           </tr>)
                      }        
                     </tbody>
                   </table>
                 </div>
                </div>
            }
        </div>
    );
};

export default AllBuyers;