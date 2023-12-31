import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import webTitle from '../WebTitle/WebTitle';

const SingUp = () => {

    webTitle('SingUp')

    const [error, setError] = useState(" ");

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError("");
        if (password.length < 6) {
            setError("It's should be 6 character");
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handelUpdate(user, name, photo);
                form.reset();
            })
            .catch(error => console.error(error))

    }

    const handelUpdate = (user, name, photo) => {
        updateProfile(user, { displayName: name, photoURL: photo });
    };

    return (
        <div className='mb-36 mx-auto bg-indigo-50 w-9/12 shadow-xl rounded-md' >
            <h2 className='text-center text-6xl text-purple-500 font-semibold pt-5'>Place Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <div className="form-control pt-12 md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' required placeholder="Your Name" className="input input-bordered w-1/2" />
                        </label>
                    </div>
                    <div className="form-control  md:w-full ml-64">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='email' required placeholder="Your Email" className="input input-bordered w-1/2" />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full ml-64">
                        <p className="text-orange-500 text-2xl my-2">{error}</p>
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='password' required placeholder='Your password' className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                    {/*  */}
                    <div className="form-control md:w-full pb-14 ml-64">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered w-1/2 " />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Sign Up" className="btn mb-4 ml-80 w-80" />
            </form>
            <p className='text-center pb-8'>Already Have An Account? <Link to="/login" className='text-lime-600'>Sign Up</Link> </p>
        </div>
    );
};

export default SingUp;