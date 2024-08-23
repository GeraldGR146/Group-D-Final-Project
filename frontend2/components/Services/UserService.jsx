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

        const stores = storesResponse.data;

        stores.forEach(store => {
            if (store.store_id) {  
                sessionStorage.setItem('store_id', store.store_id); 
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

export const fetchProductsByStore = async () => {
    try {
        
        const store_id = sessionStorage.getItem('store_id');

        if (!store_id) {
            throw new Error("Store ID not found in sessionStorage");
        }

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
        return response.data; 
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const deleteProduct = async (productData) => {
    const storedProductId = sessionStorage.getItem('product_id');
    const accessToken = sessionStorage.getItem('access_token');

    try {
        // Introduce a delay before the Axios request
        await new Promise((resolve) => setTimeout(resolve, 500)); 

        const response = await axios.delete(`http://127.0.0.1:5000/products/${storedProductId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            data: productData // Pass product data in the `data` field
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

    try {
        const response = await axios.post(`http://127.0.0.1:5000/stores/${store_id}/products`, productData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
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

export const updateProduct = async (payload) => {
        const token = sessionStorage.getItem('access_token'); 
        const productId = sessionStorage.getItem('product_id'); 
    
        try {
        const response = await axios.put(
            `http://127.0.0.1:5000/products/${productId}`,
            payload,
            {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
            }
        );
        return response.data;
        } catch (error) {
        throw error;
        }
    };