import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
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
  );
};

export default AllUsers;
