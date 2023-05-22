
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import webTitle from '../WebTitle/WebTitle';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const AddToy = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    webTitle('AddToy')

    const handleAddtoy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newToy = { name, quantity, category, price, supplier, details, photo };
      

        fetch('https://assignment-11-toy-server.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: ' Updated Toy Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })
                }

                navigate('/alltoys')

            })

    }


    return (
        <div className='mb-36 mx-auto bg-indigo-50 w-9/12 shadow-xl rounded-md' >
            <h2 className='text-center text-6xl text-purple-500 font-semibold pt-5'>Add Toys</h2>
            <form onSubmit={handleAddtoy}>
                <div>
                    <div className="form-control pt-12 md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Toy Name" className="input input-bordered w-1/2" />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder='Quantity' className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder='$price' className="input input-bordered w-1/2 " />
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
                    
                    <div className="form-control md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' required
                            placeholder="Implement /EngTools / Architecture" className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Toy Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Toy Details" className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full pb-14 ml-64">
                        <label className="label">
                            <span className="label-text">Toy photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="http/url" className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Toys" className="btn btn-block mb-14" />
            </form>
        </div>
    );
};

export default AddToy;