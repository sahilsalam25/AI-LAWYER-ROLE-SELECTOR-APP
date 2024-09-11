import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

function AiLawyerForm() {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const handleSubmit = (event) => {
        // event.preventDefault();
        if (selectedOption) {
            // Replace '/next-page' with your target route
            navigate('/next-page');
        } else {
            alert('Please select an option before continuing.');
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm">
                <div className="mb-1 ">
                    <img
                        src="./asstes_img/image 22.png"
                        alt="AI Lawyer"
                        className="mx-auto mb-4 w-16 h-16 rounded-half"
                    />
                    <h2 className="text-white text-3xl ">Ai Lawyer</h2>
                </div>
                <br></br>
                <form>
                    <div className="flex justify-between mb-4 border-2 border-gray-100 border-opacity-25 rounded-lg p-1 ">

                        <label className="block text-left text-gray-400 hover:cursor-pointer">
                            <input
                                type="radio"
                                name="userType"
                                value="legalConsumer"
                                checked={selectedOption === 'legalConsumer'}
                                onChange={handleOptionChange}
                                className="mr-2"
                            />
                            I'm a legal consumer
                        </label>
                        <img src='./asstes_img/icon1.png' alt='legal' className=' flex justify-start w-8 h-8 pr-2 ' />
                    </div>
                    <div className="flex justify-between mb-4 border-2 border-gray-100 border-opacity-25 rounded-lg p-1">
                        <label className="block text-left text-gray-400 hover:cursor-pointer">
                            <input
                                type="radio"
                                name="userType"
                                value="lawyer"
                                checked={selectedOption === 'lawyer'}
                                onChange={handleOptionChange}
                                className="mr-2"
                            />
                            I'm a lawyer
                        </label>
                        <img src='./asstes_img/icon2.png' alt='legal' className=' flex justify-start w-8 h-8 pr-2 ' />
                    </div>
                    <div className="flex justify-between mb-4 border-2 border-gray-100 border-opacity-25 rounded-lg  p-1">
                        <label className="block text-left text-gray-400 hover:cursor-pointer">
                            <input
                                type="radio"
                                name="userType"
                                value="lawStudent"
                                checked={selectedOption === 'lawStudent'}
                                onChange={handleOptionChange}
                                className="mr-2"
                            />
                            I'm a law student
                        </label>
                        <img src='./asstes_img/icon3.png' alt='legal' className=' flex justify-start w-8 h-8 pr-2 ' />
                    </div>
                    <div className="flex justify-between mb-6 border-2 border-gray-100 border-opacity-25 rounded-lg p-1 ">
                        <label className="block text-left text-gray-400 hover:cursor-pointer">
                            <input
                                type="radio"
                                name="userType"
                                value="other"
                                checked={selectedOption === 'other'}
                                onChange={handleOptionChange}
                                className="mr-2 "
                            />
                            Other

                        </label>
                        <img src='./asstes_img/icon4.png' alt='legal' className=' flex justify-start w-8 h-8 pr-2 ' />
                    </div>




                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition duration-300"
                        onClick={handleSubmit}
                    >
                        Choose and continue
                    </button>
                </form>
                <div className="mt-4 text-gray-600 text-xs">
                    <p>
                        By starting the symptom checker, you agree to the{' '}
                        <a href="#" className="underline">
                            Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="#" className="underline">
                            Terms of Use
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AiLawyerForm;
