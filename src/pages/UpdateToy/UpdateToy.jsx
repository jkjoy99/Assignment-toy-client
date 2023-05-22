import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import webTitle from '../WebTitle/WebTitle';

const UpdateToy = () => {
    const navigate = useNavigate()
    webTitle('updateToy')

    const { user } = useContext(AuthContext);

    const toy = useLoaderData();
    const {_id,name,supplier, quantity, details, photo,price}=toy

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newToy = { name, quantity, price, supplier, details, photo };
        console.log(newToy);

        fetch(`https://assignment-11-toy-server.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount >0){
                    Swal.fire({
                        title: 'Success',
                        text: ' Updated Toy Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })
                }

                navigate('/mytoys')
            })

    }
    
    return (
        <div className='mb-36 mx-auto bg-indigo-50 w-9/12 shadow-xl rounded-md' >
        <h2 className='text-center text-6xl text-purple-500 font-semibold pt-5'>Updated Toys: {name}</h2>
        <hr className='border-y-2 w-96 bg-orange-300 mx-auto mt-4'/>
        <form onSubmit={handleUpdate}>
            <div>
                <div className="form-control pt-12 md:w-full ml-64">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' defaultValue={name} placeholder="Toy Name" className="input input-bordered w-1/2" />
                    </label>
                </div>
                {/*  */}
                <div className="form-control md:w-full ml-64">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='quantity' defaultValue={quantity} placeholder='Quantity' className="input input-bordered w-1/2 " />
                    </label>
                </div>
                {/*  */}
                <div className="form-control md:w-full ml-64">
                    <label className="label">
                        <span className="label-text">Toy Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='price' defaultValue={price} placeholder='$price' className="input input-bordered w-1/2 " />
                    </label>
                </div>
                {/*  */}
                <div className="form-control md:w-full ml-64">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name='supplier' required
                        value={user?.email}
                        placeholder="Your email @" className="input input-bordered w-1/2 " />
                    </label>
                </div>
                {/*  */}
                <div className="form-control md:w-full ml-64">
                    <label className="label">
                        <span className="label-text">Toy Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='details' defaultValue={details} placeholder="Toy Details" className="input input-bordered w-1/2 " />
                    </label>
                </div>
                {/*  */}
                <div className="form-control md:w-full pb-14 ml-64">
                    <label className="label">
                        <span className="label-text">Toy photo url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' defaultValue={photo} placeholder="http/url" className="input input-bordered w-1/2 " />
                    </label>
                </div>
            </div>

            <input type="submit" value="Updated Toys" className="btn btn-block mb-14" />
        </form>
        
    </div>
    );
};

export default UpdateToy;