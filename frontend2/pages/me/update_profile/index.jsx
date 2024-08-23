import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router"; // Import useRouter from Next.js

const ProfilePage = () => {
    const router = useRouter(); // Initialize the router

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address'),
            password: Yup.string().min(6, 'Password must be at least 6 characters'),
        }),
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                formData.append('username', values.username);
                formData.append('email', values.email);
                formData.append('password', values.password);

                const response = await axios.put('http://127.0.0.1:5000/me/update', formData, {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`,
                    }
                });

                alert('Profile updated successfully');
                router.push('/me'); // Redirect to the /me page after success
            } catch (error) {
                if (error.response && error.response.data) {
                    console.error('Backend Error:', error.response.data);
                    alert(error.response.data.message || 'Failed to update profile');
                } else {
                    console.error('Error:', error.message);
                    alert('An error occurred. Please try again.');
                }
            }
        },
    });

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>

                <form className="mt-6" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div className="text-red-500 text-sm">{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500 text-sm">{formik.errors.password}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg">Save</button>
                        <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfilePage;
