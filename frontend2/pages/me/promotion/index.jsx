import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const PromotionForm = () => {
    const router = useRouter();

    const initialValues = {
        code: '',
        discount_percentage: '',
        start_date: '',
        end_date: ''
    };

    const validationSchema = Yup.object({
        code: Yup.string().required('Promotion code is required'),
        discount_percentage: Yup.number()
            .min(0, 'Discount percentage must be at least 0')
            .max(100, 'Discount percentage must be at most 100')
            .required('Discount percentage is required'),
        start_date: Yup.date()
            .nullable()
            .transform((curr, orig) => orig === '' ? null : curr)
            .required('Start date is required'),
        end_date: Yup.date()
            .nullable()
            .transform((curr, orig) => orig === '' ? null : curr)
            .required('End date is required')
            
    });

    const onSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        const store_id = sessionStorage.getItem('store_id');
        const token = sessionStorage.getItem('access_token');

        try {
            const response = await axios.post(
                `http://127.0.0.1:5000/stores/${store_id}/promotions`,
                values,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.status === 201) {
                alert('Promotion created successfully');
                router.push('/me');
            }
        } catch (error) {
            console.error('Error creating promotion:', error);
            alert('Failed to create promotion');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-xl font-semibold mb-4">Create a New Promotion</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="code" className="block text-sm font-medium">
                                Promotion Code
                            </label>
                            <Field
                                type="text"
                                id="code"
                                name="code"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                            <ErrorMessage
                                name="code"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="discount_percentage" className="block text-sm font-medium">
                                Discount Percentage
                            </label>
                            <Field
                                type="number"
                                id="discount_percentage"
                                name="discount_percentage"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                            <ErrorMessage
                                name="discount_percentage"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="start_date" className="block text-sm font-medium">
                                Start Date
                            </label>
                            <Field
                                type="date"
                                id="start_date"
                                name="start_date"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                            <ErrorMessage
                                name="start_date"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="end_date" className="block text-sm font-medium">
                                End Date
                            </label>
                            <Field
                                type="date"
                                id="end_date"
                                name="end_date"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                            <ErrorMessage
                                name="end_date"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Create Promotion'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PromotionForm;
