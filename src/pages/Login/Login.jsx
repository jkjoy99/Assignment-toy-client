import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        login(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }

    return (
        <div className='mb-36 mx-auto bg-indigo-50 w-9/12 shadow-xl rounded-md' >
        <h2 className='text-center text-6xl text-purple-500 font-semibold pt-5'>Place Login</h2>
        <form onSubmit={handleLogin}>
            <div>
                <div className="form-control pt-12 md:w-full ml-64">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='email' required placeholder="Your Email" className="input input-bordered w-1/2" />
                    </label>
                </div>
                {/*  */}
                <div className="form-control md:w-full ml-64">
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

            <input type="submit" value="Login" className="btn mb-4 ml-80 w-80" />
        </form>
        <p className='text-center pb-8'>New User <Link to="/signup" className='text-lime-600'>Sign Up</Link> </p>
    </div>
    );
};

export default Login;