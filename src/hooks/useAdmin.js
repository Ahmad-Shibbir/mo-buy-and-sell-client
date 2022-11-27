import { useEffect, useState } from "react";


const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLOding, seIsAdmintLoading]= useState(true);
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.isAdmin);
                seIsAdmintLoading(false);
            })
        }

    },[email])
    return [isAdmin, isAdminLOding]
}
export default useAdmin;