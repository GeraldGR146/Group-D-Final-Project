import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateStoreForm = () => {
    const [error, setError] = useState('');
    const router = useRouter();

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        storeName: Yup.string().required('Store name is required'),
        location: Yup.string().required('Location is required'),
        description: Yup.string(),
    });

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        const formData = new FormData();
        formData.append('store_name', values.storeName);
        formData.append('location', values.location);
        formData.append('description', values.description);

        try {
            const response = await axios.post('http://127.0.0.1:5000/stores', formData, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                console.log('Store created successfully:', response.data);
                router.push('/me');
            } else {
                setError(response.data.message || 'An error occurred while creating the store.');
            }
        } catch (error) {
            console.error('Error:', error.response || error);
            setError(error.response?.data?.message || 'An unexpected error occurred.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Create Store</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <Formik
                initialValues={{ storeName: '', location: '', description: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="storeName" className="block text-gray-700 font-bold mb-2">Store Name</label>
                            <Field
                                type="text"
                                id="storeName"
                                name="storeName"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ErrorMessage name="storeName" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
                            <Field
                                type="text"
                                id="location"
                                name="location"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ErrorMessage name="location" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                            <Field
                                as="textarea"
                                id="description"
                                name="description"
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="4"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500" />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creating...' : 'Create Store'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateStoreForm;
