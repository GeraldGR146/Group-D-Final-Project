import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

const ProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState({});
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/me', {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`,
                    },
                });
                
                // Directly set response data to variables
                setUserData(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className="bg-gray-100 flex justify-center items-center min-h-screen">
                <p className="text-lg font-medium text-gray-700">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gray-100 flex justify-center items-center min-h-screen">
                <p className="text-lg font-medium text-red-500">{error}</p>
            </div>
        );
    }

    const handleUpdateProfile = () => {
        router.push('/me/update_profile');
    };

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>

                <div className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <p className="mt-1 text-gray-900">{userData.username || 'No username available'}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-gray-900">{userData.email || 'No email available'}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <p className="mt-1 text-gray-900">{userData.role || 'No role available'}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Joined At</label>
                        <p className="mt-1 text-gray-900">{userData.created_at ? new Date(userData.created_at).toLocaleDateString() : 'No date available'}</p>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleUpdateProfile}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
