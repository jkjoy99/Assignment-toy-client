import React from 'react';

const AddToy = () => {
    return (
        <form >
            <div className='mb-36 mx-auto bg-indigo-50 w-9/12 shadow-xl rounded-md '>
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
                <div className="form-control md:w-full pb-14 ml-64">
                    <label className="label">
                        <span className="label-text">Toy photo url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' placeholder="http/url" className="input input-bordered w-1/2 " />
                    </label>
                </div>
            </div>
        </form>
    );
};

export default AddToy;