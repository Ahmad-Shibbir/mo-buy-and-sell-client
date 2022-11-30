import { useEffect, useState } from "react";


const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLOding, seIsAdmintLoading]= useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/users/admin/${email}`)
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