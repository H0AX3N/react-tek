import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { countries } from "countries-list";

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

    yearOfPassing: Yup.string().required("Year of Passing is required"),


    acceptTerms: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("Required"),
});

// const countries = ["India", "USA", "Canada", "Australia"];   
const yearOfPassing = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];

function FormSubmissionOne() {
    const countryNames = Object.values(countries).map(country => country.name);

    const inputStyle = 'rounded-lg bg-white w-70 py-2 px-3 bg-white/19 backdrop-blur-lg outline-none'
    const buttonStyle = 'flex items-center justify-center bg-blue-500 text-white rounded-lg py-2 px-4 cursor-pointer flex-grow hover:bg-blue-600 transition-colors duration-300'

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            gender: "",
            country: "",
            yearOfPassing: "",
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
                        <input
                            type="text"
                            name='fullName'
                            placeholder='Enter Username'
                            className={inputStyle}
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                            <div style={{ color: "red" }}>{formik.errors.fullName}</div>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name='email'
                            placeholder='Enter e-mail'
                            className={inputStyle}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div style={{ color: "red" }}>{formik.errors.email}</div>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name='phone'
                            placeholder='Enter Phone Number'
                            className={inputStyle}
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <div style={{ color: "red" }}>{formik.errors.phone}</div>
                        )}
                    </div>

                    <div>
                        <select
                            className={inputStyle}
                            name="country"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            {countryNames.map((name, index) => (
                                <option key={index} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        {formik.touched.country && formik.errors.country && (
                            <div style={{ color: "red" }}>{formik.errors.country}</div>
                        )}
                    </div>

                    <div>
                        <select
                            className={inputStyle}
                            name='yearOfPassing'
                            value={formik.values.yearOfPassing}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Year of Passing</option>
                            {yearOfPassing.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </select>
                        {formik.touched.yearOfPassing && formik.errors.yearOfPassing && (
                            <div style={{ color: "red" }}>{formik.errors.yearOfPassing}</div>
                        )}
                    </div>

                    <div>
                        <div className={inputStyle}>
                            <div className='flex gap-1'>
                                <input
                                    id='male'
                                    type="radio"
                                    name='gender'
                                    value="Male"
                                    onChange={formik.handleChange}
                                    checked={formik.values.gender === "Male"}
                                />
                                <label htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className='flex gap-1'>
                                <input
                                    id='female'
                                    type="radio"
                                    name='gender'
                                    value="Female"
                                    onChange={formik.handleChange}
                                    checked={formik.values.gender === "Female"}
                                />
                                <label className='flex gap-1' htmlFor="female">
                                    Female
                                </label>
                            </div>
                            <div className='flex gap-1'>
                                <input
                                    id='other'
                                    type="radio"
                                    name='gender'
                                    value="Other"
                                    onChange={formik.handleChange}
                                    checked={formik.values.gender === "Other"}
                                />
                                <label className='flex gap-1' htmlFor="other">
                                    Other
                                </label>
                            </div>
                        </div>
                        {formik.touched.gender && formik.errors.gender && (
                            <div style={{ color: "red" }}>{formik.errors.gender}</div>
                        )}
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            className='mr-2'
                            id='acceptTerms'
                            checked={formik.values.acceptTerms}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="acceptTerms">I accept the Terms and Conditions</label>
                        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                            <div style={{ color: "red" }}>{formik.errors.acceptTerms}</div>
                        )}
                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <button className={buttonStyle}>
                            <input type="submit" />
                        </button>
                        {/* <button className={buttonStyle}>
                            <input type="submit" />
                        </button> */}
                    </div>


                </form>
            </div>
        </div>


    )
}

export default FormSubmissionOne
