import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const phoneRegExp = /^[6-9]\d{9}$/;

const validationSchema = Yup.object({
    fullName: Yup.string()
        .min(3, "Minimum 3 characters")
        .max(50, "Maximum 50 characters")
        .required("Full Name is required"),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone number is required"),

    gender: Yup.string().required("Gender is required"),

    country: Yup.string().required("Country is required"),

    acceptTerms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("Required"),
});

const countries = ["India", "USA", "Canada", "Australia"];

function FormSubmissionOne() {
    const inputStyle = 'rounded-lg bg-white w-70 py-2 px-3 bg-white/19 backdrop-blur-lg'
    const buttonStyle = 'flex items-center justify-center bg-blue-500 text-white rounded-lg py-2 px-4 cursor-pointer flex-grow hover:bg-blue-600 transition-colors duration-300'

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            gender: "",
            country: "",
            acceptTerms: false,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Submitted Data:", values);
        },
    });

    return (
        <div class="bg-[url('https://cdn.pixabay.com/photo/2023/08/29/18/01/rainbow-8221835_1280.jpg')] bg-cover bg-center h-screen w-screen ">
            <div className='flex flex-col items-center justify-center h-screen bg-white/1 backdrop-blur-2xl'>
                <form className='flex flex-col gap-4 p-4 rounded-2xl shadow-md bg-white/15 backdrop-blur-sm'>
                    <div>
                        <input type="text" placeholder='Enter Username' className={inputStyle} />
                    </div>
                    <div>
                        <input type="email" placeholder='Enter e-mail' className={inputStyle} />
                    </div>
                    <div>
                        <input type="number" placeholder='Enter Phone Number' className={inputStyle} />
                    </div>
                    <div>
                        <select className={inputStyle}>
                            <option value="">Select Country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div className={inputStyle}>
                            <div className='flex gap-1'>
                                <input id='male' type="radio" name='gender' value="Male" onChange={formik.handleChange} checked={formik.values.gender === "Male"} />
                                <label htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className='flex gap-1'>
                                <input id='female' type="radio" name='gender' value="Female" onChange={formik.handleChange} checked={formik.values.gender === "Female"} />
                                <label className='flex gap-1' htmlFor="female">
                                    Female
                                </label>
                            </div>
                            <div className='flex gap-1'>
                                <input id='other' type="radio" name='gender' value="Other" onChange={formik.handleChange} checked={formik.values.gender === "Other"} />
                                <label className='flex gap-1' htmlFor="other">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <div className={buttonStyle}>
                            <input type="submit" />
                        </div>
                        <div className={buttonStyle}>
                            <input type="submit" />
                        </div>
                    </div>

                </form>
            </div>
        </div>


    )
}

export default FormSubmissionOne
