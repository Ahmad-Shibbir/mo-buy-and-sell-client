import { useEffect, useState } from "react";


const useBuyer = email => {
    const [isBuyer, setIsbuyer] = useState(false);
    const [isBuyerLOding, seIsBuyerLoading]= useState(true);
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/buyer/${email}`)
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                setIsbuyer(data.isBuyer);
                seIsBuyerLoading(false);
            })
        }

    },[email])
    return [isBuyer, isBuyerLOding]
}
export default useBuyer;