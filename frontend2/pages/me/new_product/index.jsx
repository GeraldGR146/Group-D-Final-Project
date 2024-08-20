import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createProduct } from '../../../components/Services/UserService';

const ProductForm = () => {
  const initialValues = {
    name: '',
    description: '',
    price: '',
    category: 'standard',
    quantity: 0,
    image_url: '',  // Image URL as a text field
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    description: Yup.string(),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    category: Yup.string().required('Category is required'),
    quantity: Yup.number().required('Quantity is required').min(0, 'Quantity cannot be negative'),
    image_url: Yup.string().url(),  // Validate as URL
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    const formData = new FormData();

    // Append all fields to formData
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('product_type', values.category); // Ensure this matches the backend's expected field
    formData.append('quantity', values.quantity);
    formData.append('image_url', values.image_url);  // Append the image URL

    console.log('Form Values:', values);
    console.log('FormData entries:');
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    try {
        const response = await createProduct(formData);
        console.log('Product created:', response);
        // Handle success, e.g., redirect to product list page
    } catch (error) {
        setErrors({ submit: error.message });
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
              name="category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500 text-xs mt-2" />
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
