import React from 'react';
import { FaFacebookSquare, FaGoogle, FaPhoneAlt, FaUserCircle, } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 mt-20 bg-neutral text-neutral-content">
                <div>
                    <img className='rounded-full w-16 h-16 ml-4 bg-yellow-300' src="https://cdn-icons-png.flaticon.com/512/1129/1129120.png?w=740&t=st=1684430953~exp=1684431553~hmac=486a260954692ef0703b86181da1c49f8f076e53ff4e252a572a166cd83164a6" alt="" />
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