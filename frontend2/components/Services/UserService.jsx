import axios from 'axios';

export const fetchUserProfile = async () => {
    try {
        const access_token = sessionStorage.getItem('access_token');

        if (!access_token) {
            throw new Error("Access token is missing");
        }

        const { data } = await axios.get('http://127.0.0.1:5000/me', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        return data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
};

export const fetchStores = async () => {
    try {
        const access_token = sessionStorage.getItem('access_token');
        const storesResponse = await axios.get('http://127.0.0.1:5000/stores', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        // Assuming the storesResponse.data is an array of stores
        const stores = storesResponse.data;

        // Store each store's id in sessionStorage using the correct key
        stores.forEach(store => {
            if (store.store_id) {  // Ensure the store has an id
                sessionStorage.setItem('store_id', store.store_id); // Directly store the store_id as a string
            } else {
                console.error("Store ID is undefined for the following store:", store);
            }
        });

        return stores;
    } catch (error) {
        console.error("Error fetching stores:", error);
        throw error;
    }
};

// Function to fetch products by store_id
export const fetchProductsByStore = async () => {
    try {
        // Retrieve the store_id directly from sessionStorage
        const store_id = sessionStorage.getItem('store_id');

        // Check if store_id exists
        if (!store_id) {
            throw new Error("Store ID not found in sessionStorage");
        }

        // Use the store_id to fetch products
        const response = await axios.get(`http://127.0.0.1:5000/stores/${store_id}/products`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch products for store:", error);
        throw error;
    }
};

export const handleSaveProduct = async (product_id, updatedData) => {
    try {
        const response = await axios.put(`http://127.0.0.1:5000/products/${product_id}`, updatedData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        console.log('Product updated successfully:', response.data);
        return response.data; // Return the updated product data if needed
    } catch (error) {
        console.error('Error updating product:', error);
        throw error; // Throw the error so it can be caught by the calling component
    }
};

export const deleteProduct = async (product_id) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:5000/products/${product_id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

export const createProduct = async (productData) => {
        const accessToken = sessionStorage.getItem('access_token');
        const store_id = sessionStorage.getItem('store_id');
    
        const formData = new FormData();
        for (const key in productData) {
        formData.append(key, productData[key]);
        }
    
        try {
        const response = await axios.post(`http://127.0.0.1:5000/stores/${store_id}/products`, formData, {
            headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
            },
        });
    
        return response.data;
        } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.errors || 'Failed to create product.');
        } else {
            throw new Error('Failed to create product.');
        }
        }
    };