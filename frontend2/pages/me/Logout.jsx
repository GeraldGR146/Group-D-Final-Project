import axios from 'axios';

const HandleLogout = async () => {
    try {
        await axios.post('http://127.0.0.1:5000/logout', {}, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
            },
        });

        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');

        console.log('Logout successful');

        window.location.href = '/login';
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

export default HandleLogout;
