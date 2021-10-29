import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:8080/addService',{
            method: "POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
    };
    return (
        <div className="container">
             <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("title")} placeholder="Tour Title" /> <br />
                <input {...register("img")} placeholder="Tour Place Image Link" /> <br />
                <input type="number" {...register("days")} placeholder="Tour days" /> <br />
                <input {...register("place")} placeholder="Tour Place" /> <br />
                <input type="number" {...register("money")} placeholder="Tour Spend" /> <br />
                <input {...register("description")} placeholder="Description" />  <br />
                
                {errors.exampleRequired && <span>This field is required</span>} 
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;