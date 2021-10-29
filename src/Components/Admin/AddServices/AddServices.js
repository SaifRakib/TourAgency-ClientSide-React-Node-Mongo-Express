import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container">
             <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("title")} placeholder="Tour Title" /> <br />
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