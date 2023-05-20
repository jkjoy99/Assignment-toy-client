import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateToy = (props) => {
    const { user } = useContext(AuthContext);

    const {handleToyUpdate} = props;
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-5" className="btn">Update</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    {/* jkfhdjkfrhuiferyfiuerhfdjfu */}


                    <div className='mb-36 mx-auto bg-indigo-50 w-9/12 shadow-xl rounded-md' >
            <h2 className='text-center text-6xl text-purple-500 font-semibold pt-5'>Update Toys</h2>
            <form onSubmit={handleToyUpdate}>
                <div>
                    <div className="form-control pt-12 md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={props.toy.name} placeholder="Toy Name" className="input input-bordered w-1/2" />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={props.toy.quantity} placeholder='Quantity' className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' defaultValue={props.toy.price} placeholder='$price' className="input input-bordered w-1/2 " />
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
                            <input type="text" name='details' defaultValue={props.toy.details} placeholder="Toy Details" className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full pb-14 ml-64">
                        <label className="label">
                            <span className="label-text">Toy photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' defaultValue={props.toy.photo} placeholder="http/url" className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full pb-14 ml-64 block">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='_id' value={props?.toy?._id} className="input input-bordered w-1/2  " />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Toys" className="btn btn-block mb-14" />
            </form>
          
        </div>

                    {/* jkfiojfioufvudjxiosudfiefie */}
                    
                    
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">OK!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;