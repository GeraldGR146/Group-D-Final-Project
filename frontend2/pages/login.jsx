import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
        terms: Yup.bool()
        .oneOf([true], 'You must accept the terms and conditions'),
    });

    const initialValues = {
        email: '',
        password: '',
        terms: false,
        newsletter: false,
    };

    const handleSubmit = (values) => {
        console.log(values);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen flex">
        <div className="hidden lg:block w-1/2 bg-yellow-500">
            <img
            src="your-image-source-here.jpg"
            alt="Group of people"
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
