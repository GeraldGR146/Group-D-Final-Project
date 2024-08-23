import React from "react";

const ProfilePage = () => {
    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-800">My Info</h2>
                <p className="text-gray-500 mt-2">Add Address</p>

                <form className="mt-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name*</label>
                            <input type="text" id="first-name" name="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="First Name" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name*</label>
                            <input type="text" id="last-name" name="last-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Last Name" />
                        </div>
                        <div>
                            <label htmlFor="country-region" className="block text-sm font-medium text-gray-700">Region*</label>
                            <input type="text" id="country-region" name="country-region" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Country / Region" />
                        </div>
                        <div>
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Street Address*</label>
                            <input type="text" id="street-address" name="street-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="House number and street name" />
                        </div>
                        <div>
                            <label htmlFor="apt-suite-unit" className="block text-sm font-medium text-gray-700">Apt, suite, unit (optional)</label>
                            <input type="text" id="apt-suite-unit" name="apt-suite-unit" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Apartment, suite, unit, etc. (optional)" />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
                            <input type="text" id="city" name="city" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Town / City" />
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State*</label>
                            <select id="state" name="state" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option>State</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*</label>
                            <input type="text" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Phone" />
                        </div>
                        <div>
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal Code*</label>
                            <input type="text" id="postal-code" name="postal-code" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Postal Code" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="delivery-instruction" className="block text-sm font-medium text-gray-700">Delivery Instruction</label>
                        <textarea id="delivery-instruction" name="delivery-instruction" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Delivery instruction"></textarea>
                    </div>

                    <div className="mt-4">
                        <fieldset>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input id="default-shipping" name="default-shipping" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="default-shipping" className="font-medium text-gray-700">Set as default shipping address</label>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input id="default-billing" name="default-billing" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="default-billing" className="font-medium text-gray-700">Set as default billing address</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
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
