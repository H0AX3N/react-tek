import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation Schema

const phoneRegExp = /^[6-9]\d{9}$/;

// const validationSchema = Yup.object({});

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

const ManualFormikForm = () => {
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
        <form
            onSubmit={formik.handleSubmit}
            style={{ padding: 20, maxWidth: 500, margin: "auto" }}
        >
            <h2 className="p-2">User Registration Form</h2>
            <div className="flex flex-col gap-4">
                {/* Full Name */}
                <div>
                    <label>Full Name:</label>
                    <input
                        className="border-1 "
                        name="fullName"
                        type="text"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <div style={{ color: "red" }}>{formik.errors.fullName}</div>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label>Email:</label>
                    <input
                        className="border-1"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div style={{ color: "red" }}>{formik.errors.email}</div>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label>Phone:</label>
                    <input
                        className="border-1"
                        name="phone"
                        type="text"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <div style={{ color: "red" }}>{formik.errors.phone}</div>
                    )}
                </div>

                {/* Gender */}
                <div>
                    <label>Gender:</label>
                    <div>
                        <label>
                            <input
                                className="border-1"
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={formik.handleChange}
                                checked={formik.values.gender === "Male"}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                className="border-1"
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={formik.handleChange}
                                checked={formik.values.gender === "Female"}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                onChange={formik.handleChange}
                                checked={formik.values.gender === "Other"}
                            />
                            Other
                        </label>
                    </div>
                    {formik.touched.gender && formik.errors.gender && (
                        <div style={{ color: "red" }}>{formik.errors.gender}</div>
                    )}
                </div>

                {/* Country */}
                <div>
                    <label>Country:</label>
                    <select
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option value={country} key={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    {formik.touched.country && formik.errors.country && (
                        <div style={{ color: "red" }}>{formik.errors.country}</div>
                    )}
                </div>

                {/* Accept Terms */}
                <div>
                    <label>
                        <input
                            name="acceptTerms"
                            type="checkbox"
                            checked={formik.values.acceptTerms}
                            onChange={formik.handleChange}
                        />
                        I accept the Terms and Conditions
                    </label>
                    {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                        <div style={{ color: "red" }}>{formik.errors.acceptTerms}</div>
                    )}
                </div>

                

                <button type="submit" style={{ marginTop: 15 }}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ManualFormikForm;
