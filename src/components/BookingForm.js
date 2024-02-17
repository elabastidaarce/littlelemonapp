import React from "react";
import { useState } from "react";
import BackButton from "./BackButton";

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <BackButton/>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Date:</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)}
                            type='date' required></input>
                        </div>
                        <div>
                            <label htmlFor='book-time'>Time:</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value=''>Select Time</option>
                                {
                                    props.availableTimes.availableTimes?.map(availableTimes => {return <option key=
                                    {availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion
                                (e.target.value)}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                    <option>Party</option>
                            </select>
                        </div>
                        <br />
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='Submit' value={'Make your reservation'}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;