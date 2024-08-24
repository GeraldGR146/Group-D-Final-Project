import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
// import jwt_decode from 'jwt-decode'

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const initialValues = {
        email: '',
        password: '',
    };
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', values, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
    
            const { access_token } = response.data;

            sessionStorage.setItem('access_token', access_token);
    
            router.push('/me');
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            alert('Login failed: Invalid credentials');
        }
        setSubmitting(false);
    };
    

    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:block w-1/2 bg-yellow-500">
                <img
                    src="assets/logo-color.png"
                    alt="localnect"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 lg:px-24 py-16">
                <h2 className="text-3xl font-semibold text-gray-900">Sign In</h2>

                <button
                    className="mt-8 w-full flex items-center justify-center py-3 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100"
                    onClick={() => alert('Continue with Google')}
                >
                    <img
                        src="google-logo-url"
                        alt="Google logo"
                        className="w-5 h-5 mr-2"
                    />
                    Continue With Google
                </button>

                <button
                    className="mt-4 w-full flex items-center justify-center py-3 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100"
                    onClick={() => alert('Continue with Twitter')}
                >
                    <img
                        src="twitter-logo-url"
                        alt="Twitter logo"
                        className="w-5 h-5 mr-2"
                    />
                    Continue With Twitter
                </button>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="mt-8">
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

                            <div className="mb-6">
                                <label className="block text-gray-700">Password</label>
                                <div className="relative">
                                    <Field
                                        type={passwordVisible ? 'text' : 'password'}
                                        name="password"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        placeholder="Your password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                    >
                                        {passwordVisible ? (
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
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3.98 8.23a10.927 10.927 0 00-.992 4.25c0 2.026.79 3.88 2.09 5.27m1.58 1.51c1.39 1.3 3.23 2.08 5.26 2.08 2.027 0 3.876-.78 5.26-2.08m1.58-1.51c1.3-1.39 2.09-3.243 2.09-5.27a10.92 10.92 0 00-.992-4.25M9.465 5.465a10.929 10.929 0 015.07 0m2.438 1.305a10.927 10.927 0 012.066 3.93M3.512 13.012a10.927 10.927 0 01.992-4.25m3.466-2.439a10.927 10.927 0 013.93-2.067"
                                                />
                                            </svg>
                                        ) : (
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
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm4.286-3.75A9.994 9.994 0 0121 12.07c0 2.026-.79 3.88-2.09 5.27m-1.58 1.51c-1.39 1.3-3.23 2.08-5.26 2.08-2.027 0-3.876-.78-5.26-2.08m-1.58-1.51c-1.3-1.39-2.09-3.243-2.09-5.27 0-2.026.79-3.88 2.09-5.27m1.58-1.51c1.39-1.3 3.23-2.08 5.26-2.08 2.027 0 3.876.78 5.26 2.08m1.58 1.51c1.3 1.39 2.09 3.243 2.09 5.27"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="mt-1 text-red-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                                disabled={isSubmitting}
                            >
                                Sign In
                            </button>
                        </Form>
                    )}
                </Formik>

                <p className="mt-6 text-gray-600">
                    Don't have an account?{' '}
                    <a href="/register" className="text-purple-600">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
