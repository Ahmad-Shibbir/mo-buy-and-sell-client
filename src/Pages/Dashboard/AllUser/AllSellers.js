import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const user_type = "seller";
    const { data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/all-seller/${user_type}`);
        const data = await res.json();
        return data;
      },
    });
    return (
        <div>
        <h3 className="text-3xl text-center font-bold mt-6 text-primary ">
            All Sellers Info
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
                    <td><button className="btn btn-primary">Delete</button></td>
                  </tr>)
             }        
            </tbody>
          </table>
        </div>
       </div>
    );
};

export default AllSellers;