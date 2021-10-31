import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';


const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();

    const onSubmit = data => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        data.date = today;

        const status = "Pending";
        data.status = status;


       
        axios.post('https://haunted-goosebumps-18178.herokuapp.com/orders',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Your Order Process.Thank You.');
                reset();
            }
        })
    };
    return (
        <div>
             <div className="container text-center my-5">

            <h2 className="text-center my-5">Add Your Information for Shipping</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" className="mb-2 p-2" /> <br />
                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your email address" className="mb-2 p-2" /> <br />
                <input type="number" {...register("phone", { required: true })} placeholder="Your Phone Number" className="mb-2 p-2" /> <br />
                <input {...register("address",{ required: true })} placeholder="Address" className="mb-2 p-2" /> <br />
                <input {...register("comment")} placeholder="Your Opinion" className="mb-2 p-2" />  <br />
            
                
                {(errors.name,errors.email,errors.phone,errors.address) && <span>This field is required</span>} <br />
                
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    </div>
    );
};

export default Shipping;