import { useEffect, useState } from "react";


const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLOding, setIsSellerLoading]= useState(true);
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                setIsSeller(data.isSeller);
                setIsSellerLoading(false);
            })
        }

    },[email])
    return [isSeller, isSellerLOding]
}
export default useSeller;