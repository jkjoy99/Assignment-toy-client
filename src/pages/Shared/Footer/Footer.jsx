import React from 'react';
import { FaFacebookSquare, FaGoogle, FaPhoneAlt, FaUserCircle, } from 'react-icons/fa';
import webTitle from '../../WebTitle/WebTitle';

const Footer = () => {
    webTitle('home')
    return (
        <div>
            <footer className="footer p-10  bg-neutral text-neutral-content shadow-xl rounded-xl mt-80">
                <div>
                    <img className='rounded-full w-16 h-16 ml-4 bg-yellow-300' src="https://img.freepik.com/free-vector/stem-education-logo-banner-white-background_1308-58367.jpg?w=996&t=st=1684747400~exp=1684748000~hmac=66f2a9260c2d182afb696b47725e4320882e8ab6206f60195ee7aa984d6ff948" alt="" />
                    <p>Toy Engineering Tools<br />Website reels 2023.<br/>Web Dataloader @Joy</p>
                </div>
                <div>
                    <span className="footer-title ml-8">Social</span>
                    <div className="grid  gap-4">
                        <p className='flex gap-2'> <FaGoogle/> Gmail : jkjoy99@gmail.com </p>
                        <p className='flex gap-2'> <FaPhoneAlt/>  Whatsapp : +8801928895121 </p>
                        <p className='flex gap-2'> <FaFacebookSquare/> Facebook : Joy kundu </p>
                        <p className='flex gap-2'> <FaUserCircle/> Contact : +8801928895121</p>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;