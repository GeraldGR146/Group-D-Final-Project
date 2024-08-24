import React from 'react';
import { useRouter } from 'next/router'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createProduct } from '../../../components/Services/UserService';

const ProductForm = () => {
  const router = useRouter(); 

  const initialValues = {
    name: '',
    description: '',
    price: '',
    product_type: 'Standard',
    quantity: 0,
    image_url: '',  
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    description: Yup.string(),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    product_type: Yup.string().oneOf(['Standard', 'Premium'], 'Product type must be either "Standard" or "Premium"').required('Category is required'),
    quantity: Yup.number().required('Quantity is required').min(0, 'Quantity cannot be negative'),
    image_url: Yup.string().url('Invalid URL'),  
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    
    const payload = {
      name: values.name,
      description: values.description,
      price: values.price,
      product_type: values.product_type, 
      quantity: values.quantity,
      image_url: values.image_url,
    };

    console.log('Payload being sent:', payload);

    try {
      const response = await createProduct(payload);
      console.log('Product created successfully:', response);
      
      
      router.push('/me');
    } catch (error) {
      console.error('Error during product creation:', error.response ? error.response.data : error.message);
      setErrors({ submit: error.response ? error.response.data.errors : error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, errors }) => (
        <Form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <Field
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-2" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <Field
              type="text"
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-xs mt-2" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
            <Field
              type="number"
              name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name="price" component="div" className="text-red-500 text-xs mt-2" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
            <Field
              as="select"
              name="product_type"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </Field>
            <ErrorMessage name="product_type" component="div" className="text-red-500 text-xs mt-2" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Available Quantity:</label>
            <Field
              type="number"
              name="quantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name="quantity" component="div" className="text-red-500 text-xs mt-2" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Product Image URL:</label>
            <Field
              type="text"
              name="image_url"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name="image_url" component="div" className="text-red-500 text-xs mt-2" />
          </div>

          {errors.submit && (
            <div className="mb-4 text-red-500 text-sm">{errors.submit}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;