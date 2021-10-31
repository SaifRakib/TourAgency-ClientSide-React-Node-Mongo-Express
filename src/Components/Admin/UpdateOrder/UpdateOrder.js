import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const [order, setOrder] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:8080/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);


    // handle status change
    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const updateOrder = { status: updateStatus };
        setOrder(updateOrder);
    }

    // // handle update 
    const handleUpdateOrder = (e) => {
        const url = `http://localhost:8080/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setOrder({});
                    e.target.reset();
                    
                }
            })
            e.preventDefault();
    }


    return (
        <div>
            <div className="container text-center my-5">

                <h2 className="text-center my-5">Update status for Shipping</h2>
                <form onSubmit={handleUpdateOrder}>

                <input type="text" onChange={handleStatusChange} value={order.status || ''} /><br />
                <input className="btn btn-primary my-4" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateOrder;