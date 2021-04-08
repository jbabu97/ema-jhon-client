import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {

    const handleAddProduct = () => {
        console.log('add product clicked');
        fetch(`https://peaceful-shore-47513.herokuapp.com/addProduct`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(fakeData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div>
            <h1>Inventory coming soon...</h1>
            <button onClick={handleAddProduct} className="btn btn-success">Add Product</button>
        </div>
    );
};

export default Inventory;