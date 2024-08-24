import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const Register = () => {
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
        role: Yup.string()
        .oneOf(['Seller', 'Consumer'], 'Invalid role selection')
        .required('Role is required'),
        terms: Yup.bool()
        .oneOf([true], 'You must accept the terms and conditions'),
    });

    const initialValues = {
        username: '',
        email: '',
        password: '',
        role: '',
        terms: false,
        newsletter: false,
    };

    const handleSubmit = (values) => {
        const formData = new FormData();
        formData.append('username', values.username);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('role', values.role);
        formData.append('terms', values.terms);
        formData.append('newsletter', values.newsletter);

        fetch('http://127.0.0.1:5000/register', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                router.push('/login');
            }, 3000); // Redirect after 3 seconds
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="min-h-screen flex">
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                        <h2 className="text-2xl font-semibold text-green-600">Register Successfully</h2>
                        <p className="mt-4">You will be redirected to the login page shortly.</p>
                    </div>
                </div>
            )}

            <div className="hidden lg:block w-1/2 bg-yellow-500">
                <img
                    src="assets/logo-color.png"
                    alt="localnect"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 lg:px-24 py-16">
                <h2 className="text-3xl font-semibold text-gray-900">Sign Up</h2>
                <p className="mt-4 text-gray-600">
                    Sign up for free to access to any of our products
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="mt-8">
                            <div className="mb-4">
                                <label className="block text-gray-700">Username</label>
                                <Field
                                    type="text"
                                    name="username"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="Username"
                                />
                                <ErrorMessage
                                    name="username"
                                    component="p"
                                    className="mt-1 text-red-600"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Email Address</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="designer@gmail.com"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="mt-1 text-red-600"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Role</label>
                                <Field
                                    as="select"
                                    name="role"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                >
                                    <option value="" label="Select role" />
                                    <option value="Seller" label="Seller" />
                                    <option value="Consumer" label="Consumer" />
                                </Field>
                                <ErrorMessage
                                    name="role"
                                    component="p"
                                    className="mt-1 text-red-600"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700">Password</label>
                                <div className="relative">
                                    <Field
                                        type="password"
                                        name="password"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        placeholder="Your password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    >
                                        {/* Add toggle password visibility logic here */}
                                        <svg
                                            className="h-6 w-6 text-gray-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0c-1.106 0-2.159.467-2.93 1.233C11.223 14.01 10.17 14.47 9 14.47M9 14.47c-1.106 0-2.159-.467-2.93-1.233C5.223 12.533 4.17 12.07 3 12.07M15 12a4.978 4.978 0 011.233 2.93c.156.771.313 1.306.42 1.733M5.007 12.007a4.978 4.978 0 011.233-2.93c.155-.77.313-1.305.42-1.733M15 12c1.106 0 2.159-.467 2.93-1.233C18.777 10.01 19.83 9.47 21 9.47"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="mt-1 text-red-600"
                                />
                            </div>

                            <div className="flex items-center mb-6">
                                <Field
                                    type="checkbox"
                                    name="terms"
                                    className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                                />
                                <label className="ml-2 text-gray-600">
                                    I agree to the{' '}
                                    <a href="#" className="text-purple-600">
                                        Terms of Use
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-purple-600">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                            <ErrorMessage
                                name="terms"
                                component="p"
                                className="mt-1 text-red-600"
                            />

                            <div className="flex items-center mb-6">
                                <Field
                                    type="checkbox"
                                    name="newsletter"
                                    className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                                />
                                <label className="ml-2 text-gray-600">
                                    Subscribe to our monthly newsletter
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                                disabled={isSubmitting}
                            >
                                Sign Up
                            </button>
                        </Form>
                    )}
                </Formik>

                <p className="mt-6 text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-purple-600">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;