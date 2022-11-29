import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CetegoryBox = () => {

  const { data: category = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("https://mo-buy-and-sell-server.vercel.app/category");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 bg-primary ">
      {category?.map(ct=><div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={ct.category_img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <Link to={`/products/${ct.category_id}`} className="card-actions">
            <button className="btn btn-primary">{ct.category_name}</button>
          </Link>
        </div>
      </div>)
      }
     
    </div>
  );
};

export default CetegoryBox;
