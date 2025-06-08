import React from 'react';
import patternImg from '../assets/patternpad.png';
import FormSubmissionOne from '../components/FormSubmissionOne';
import Blobs from '../components/Blobs';

function Contact() {
    return (
        <div className='relative flex flex-col items-center justify-start min-h-screen pt-29 overflow-hidden bg-[#fdfaf7]'>

            {/* Blurred floating background shapes */}
            <Blobs />

            {/* Existing card - unchanged */}
            <div className="card lg:card-side bg-[#3e1900] w-[80vw] shadow-sm z-10">
                <figure className="w-full lg:w-[550px] h-64 lg:h-auto">
                    <img
                        src={patternImg}
                        alt="Album"
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body flex flex-col items-center justify-center">
                    <FormSubmissionOne />
                </div>
            </div>
        </div>
    )
}

export default Contact;
