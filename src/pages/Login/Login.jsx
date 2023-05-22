import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import webTitle from '../WebTitle/WebTitle';

const Login = () => {
    
    webTitle('Login')
    const {login} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

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
            if (user.providerId) {
                toast.success('user login successfully', { position: 'top-center' })
                form.reset();
                navigate(from, {replace: true})
            }
            
        })
        .catch(error => console.error(error));
    }

    const handelGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            if (loggedUser.providerId) {
                toast.success('user login successfully', { position: 'top-center' })
                navigate(from, {replace: true})
            }
          })
          .catch((error) => {
            console.error(error.message);
          });
      };

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

            <input type="submit" value="Login" className="btn mb-4 ml-80 w-80 text-white" />

            <button
          onClick={handelGoogleLogin}
          className="text font-bold text-white btn mb-4 ml-80 w-80"
        >
          <FaGoogle className="text-2xl mr-2"></FaGoogle>
          Login with Google
        </button>


        </form>
        <p className='text-center pb-8'>New User <Link to="/signup" className='text-lime-600'>Sign Up</Link> </p>
        <ToastContainer />
    </div>
    );
};

export default Login;