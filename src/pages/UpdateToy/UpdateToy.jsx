import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToy = ({toy}) => {
    const { user } = useContext(AuthContext);
    const {name,photo,price,quantity,supplier,_id,details} = toy

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedToy = { name, quantity, price, supplier, details, photo };
        console.log(updatedToy);

        fetch(`http://localhost:5000/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })
    
                }
            })

    }
   
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-5" className="btn">Update</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className='mb-36 mx-auto bg-indigo-50 w-9/12 shadow-xl rounded-md' >
            <h2 className='text-center text-6xl text-purple-500 font-semibold pt-5'>Update Toys</h2>
            <form onSubmit={handleUpdateToy}>
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
                            <input type="text" defaultValue={quantity} name='quantity'  placeholder='Quantity' className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={price} name='price' placeholder='$price' className="input input-bordered w-1/2 " />
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
                            <input type="text" defaultValue={details} name='details' placeholder="Toy Details" className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full pb-14 ml-64">
                        <label className="label">
                            <span className="label-text">Toy photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={photo} name='photo'placeholder="http/url" className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Toys" className="btn btn-block mb-14" />
            </form>
        </div>
           
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">OK!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;