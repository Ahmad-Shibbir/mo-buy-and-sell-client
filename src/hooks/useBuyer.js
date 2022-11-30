import { useEffect, useState } from "react";


const useBuyer = email => {
    const [isBuyer, setIsbuyer] = useState(false);
    const [isBuyerLOding, seIsBuyerLoading]= useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/user/buyer/${email}`)
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