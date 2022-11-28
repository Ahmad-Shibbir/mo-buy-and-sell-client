import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const {user}=useContext(AuthContext);
    // const categor = [{category_id:'1', category_name:"Samsung", category_img:"jhf"}];
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const imgHostKey = process.env.REACT_APP_imgbb_key

      const navigate = useNavigate();
      console.log(imgHostKey);
      const handAddProduct =data=>{
        const image = data.image[0];
        console.log(data.category.category_name);
        const formData= new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`;
        fetch(url, {
            method:'POST',
            body: formData
        })
        .then(res =>  res.json())
        .then(imgData=>{
            if(imgData.success){
                const cat = data.category.split(' ');
                
                const product ={
                    name:data.name,
                    email:user.email,
                    img:imgData.data.url,
                    category_id:cat[0],
                    category_name:cat[1],
                    category_img:cat[2],
                    description:data.description,
                    selling_price:data.price,
                    new_price:data.new_price,
                    location:data.location,
                    phon_no:data.phone,
                    duration:data.duration,
                    condition:data.condition,

                }
                fetch('http://localhost:5000/products',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization:`bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(product)
                })
                .then(res=> res.json())
                .then(dat=>{
                    console.log(dat);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/my-products');
                })
            }
        })
       

      }
    return (
        <div className=''>
            <h2 className=' text-4xl text-center text-primary my-6'>Add A Product</h2>
            <div className='flex justify-center items-center '>
            <form className="justify-center items-center grid lg:grid-cols-2 gap-4" onSubmit={handleSubmit(handAddProduct)}>
              {/* <Header /> */}
              <div>
                    <input
                        {...register("name", {
                        required: "Name is required",
                        })}
                        placeholder="Name"
                        type="text"
                        className="input input-bordered input-success w-full max-w-xs"
                    />
                    {errors.name && (
                        <p className="text-accent" role="alert">
                        {errors.name?.message}
                        </p>
                    )}
              </div>
              <div>
                    <select {...register("category", { required: "Password select an option",})} className="select select-success w-full max-w-xs">
                    
                    <option value="">Select category</option>
                    <option value="1 Samsung https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJJyVcUiz7_wNA_-UgKzw26C_XB-bn7r0Zw&usqp=CAU">Samsung</option>
                    <option value="2 Apple https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJJyVcUiz7_wNA_-UgKzw26C_XB-bn7r0Zw&usqp=CAU">Apple</option>
                    <option value="3 Xiomi https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJJyVcUiz7_wNA_-UgKzw26C_XB-bn7r0Zw&usqp=CAU">Xiomi</option>
                                  
                    </select>
                    {errors.category && (
                    <p className="text-accent" role="alert">
                        {errors.category?.message}
                    </p>
                    )}
              </div>


              <div>
                    <input
                        {...register("price", {
                        required: "Price is required",
                        })}
                        placeholder="Selling Price"
                        type="number"
                        className="input input-bordered input-success w-full max-w-xs"
                    />
                    {errors.price && (
                        <p className="text-accent" role="alert">
                        {errors.price?.message}
                        </p>
                    )}
              </div>
              <div>
                    <select {...register("condition", { required: "Password select an option",})} className="select select-success w-full max-w-xs">
                    
                    <option value="">Select Condition</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>                
                    <option value="Fair">Fair</option>                
                    </select>
                    {errors.condition && (
                    <p className="text-accent" role="alert">
                        {errors.condition?.message}
                    </p>
                    )}
              </div>
              <div>
                    <input
                        {...register("new_price", {
                        required: "Price is required",
                        })}
                        placeholder="Buying Price (new price)"
                        type="number"
                        className="input input-bordered input-success w-full max-w-xs"
                    />
                    {errors.new_price && (
                        <p className="text-accent" role="alert">
                        {errors.new_price?.message}
                        </p>
                    )}
              </div>
              <div>
                    <input
                        {...register("location", {
                        required: "Location is required",
                        })}
                        placeholder="Location to pickup"
                        type="text"
                        className="input input-bordered input-success w-full max-w-xs"
                    />
                    {errors.location && (
                        <p className="text-accent" role="alert">
                        {errors.location?.message}
                        </p>
                    )}
              </div>
              <div>
                    <input
                        {...register("description", {
                        required: "Description is required",
                        })}
                        placeholder="Product Description"
                        type="text"
                        className="input input-bordered input-success w-full max-w-xs"
                    />
                    {errors.description && (
                        <p className="text-accent" role="alert">
                        {errors.description?.message}
                        </p>
                    )}
              </div>
              <div>
                    <input
                        {...register("duration", {
                        required: "Years of purchase is required",
                        })}
                        placeholder="Years of purchase"
                        type="text"
                        className="input input-bordered input-success w-full max-w-xs"
                    />
                    {errors.duration && (
                        <p className="text-accent" role="alert">
                        {errors.duration?.message}
                        </p>
                    )}
              </div>           
              <div>
                    <input
                        {...register("phone", {
                        required: "Phone number is required",
                        })}
                        placeholder="Phone Number"
                        type="tel"
                        className="input input-bordered input-success w-full max-w-xs"
                    />
                    {errors.phone && (
                        <p className="text-accent" role="alert">
                        {errors.phone?.message}
                        </p>
                    )}
              </div>           
              <div>
                    <input
                        {...register("image", {
                        required: "image is required",
                        })}
                        placeholder="Product image"
                        type="file"
                        className="input input-bordered input-success w-full max-w-xs"
                    />
                    {errors.image && (
                        <p className="text-accent" role="alert">
                        {errors.image?.message}
                        </p>
                    )}
              </div>           

              
              <div>
                <input
                  className="btn btn-primary w-full"
                  value="Add Product"
                  type="submit"
                />               
              </div>
              
            </form>
            </div>

        </div>
    );
};

export default AddProduct;