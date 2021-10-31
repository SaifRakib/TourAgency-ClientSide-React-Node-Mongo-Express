import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
       
        axios.post('https://haunted-goosebumps-18178.herokuapp.com/addService',data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    };
   
    return (
        <div className="container my-5">

            <h2 className="text-center my-5">Add New Service</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("title", { required: true })} placeholder="Tour Title" className="mb-2 p-2" /> <br />
                <input {...register("img", { required: true })} placeholder="Tour Place Image Link" className="mb-2 p-2" /> <br />
                <input type="number" {...register("days", { required: true })} placeholder="Tour days" className="mb-2 p-2" /> <br />
                <input {...register("place",{ required: true })} placeholder="Tour Place" className="mb-2 p-2" /> <br />
                <input type="number" {...register("money",{ required: true })} placeholder="Tour Spend" className="mb-2 p-2" /> <br />
                <input {...register("description",{ required: true })} placeholder="Description" className="mb-2 p-2" />  <br />
                <input {...register("short_desc",{ required: true })} placeholder="Short Description" className="mb-2 p-2" />  <br />
                
                {(errors.title,errors.img,errors.days,errors.place,errors.money,errors.description,errors.short_desc) && <span>This field is required</span>} <br />
                
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;