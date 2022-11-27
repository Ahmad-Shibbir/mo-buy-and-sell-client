import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken]= useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((d) => {
          if (d.accessToken) {
            localStorage.setItem("accessToken", d.accessToken);
            setToken(d.accessToken);
          }
        });

    },[email]);
    return [token];
};

export default useToken;
