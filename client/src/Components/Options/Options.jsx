import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Options.css';  // Import the CSS file

function DropDown() {
    const [division, setDivision] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [subject, setSubject] = useState('');
    
    const navigate = useNavigate();

    const nextPage = () => {
        navigate('/capture', {
            state:{
                division: division,
                timeSlot: timeSlot,
                subject: subject
            }
        });
    };

    return (
        <div className="container">
            <label>
                <span>Division : </span>
                <select value={division} onChange={(e) => setDivision(e.target.value)}>
                    <option value="">Select division</option>
                    <option value="division1">Division 1</option>
                    <option value="division2">Division 2</option>
                    <option value="division3">Division 3</option>
                </select>
            </label>
            <br />
            <label>
                <span>Time Slot : </span>
                <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                    <option value="">Select time slot</option>
                    <option value="9:45-10:45">9:45 to 10:45</option>
                    <option value="10:45-11:45">10:45 to 11:45</option>
                    <option value="11:45-12:45">11:45 to 12:45</option>
                </select>
            </label>
            <br />
            <label>
                <span>Subject : </span>
                <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                    <option value="">Select subject</option>
                    <option value="subject1">Subject 1</option>
                    <option value="subject2">Subject 2</option>
                    <option value="subject3">Subject 3</option>
                </select>
            </label>
            <br />
            <button onClick={nextPage}>
                Next
            </button>
        </div>
    );
}

export default DropDown;