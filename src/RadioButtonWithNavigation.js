import React, { useState } from 'react';
import { FaUser, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RadioButtonWithNavigation = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (selectedOption) {
            navigate('/next-page');
        } else {
            alert('Please select an option before continuing.');
        }
    };

    return (
        <div className="p-4">
            <label className="flex items-center space-x-2 p-2 border rounded cursor-pointer">
                <FaUser className="text-blue-500" />
                <input
                    type="radio"
                    name="legalConsumer"
                    value="legalConsumer"
                    checked={selectedOption === 'legalConsumer'}
                    onChange={() => setSelectedOption('legalConsumer')}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">I am a legal consumer</span>
                <FaInfoCircle className="text-gray-500" />
            </label>
            <button
                onClick={handleContinue}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Choose and Continue
            </button>
        </div>
    );
};

export default RadioButtonWithNavigation;
