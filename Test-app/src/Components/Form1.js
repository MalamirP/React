import React, { useState } from "react";

export default function Form1() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isBoolean: true,
        employment: '',
        favColor: ''
    })

    function dataHandler(e) {
        const { name, value, type, checked } = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function submitHandler() {

        console.log(formData)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                placeholder="Enter your  first name"
                name="firstName"
                value={formData.firstName}
                onChange={dataHandler}
            />
            <input
                type='text'
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={dataHandler}
            />
            <input
                type='email'
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={dataHandler}
            />
            <textarea style={{ maxWidth: '150px', display: 'block' }}
                placeholder="Leave your comments here"
                name="comments"
                value={formData.comments}
                onChange={dataHandler}
            />
            <input
                type='checkbox'
                id="boolean"
                checked={formData.isBoolean}
                name='isBoolean'
                onChange={dataHandler}

            />
            <label htmlFor="boolean">Over 18</label>
            <br />
            <br />

            <input
                type='radio'
                id="part-time"
                name='employment'
                value={"part-time"}
                checked={formData.employment === 'part-time'}
                onChange={dataHandler}
            />
            <label htmlFor="part-time">Part-time</label>
            <br />

            <input
                type='radio'
                id="full-time"
                name='employment'
                value={"full-time"}
                checked={formData.employment === 'full-time'}
                onChange={dataHandler}
            />

            <label htmlFor="part-time">Full-time</label>
            <br />

            <input
                type='radio'
                id="unemployed"
                name='employment'
                value={"unemployed"}
                checked={formData.employment === 'unemployed'}
                onChange={dataHandler}
            />

            <label htmlFor="unemployed">Unemployed</label>
            <br />
            <br />


            <label htmlFor="favColor" > What is your fav color:</label>
            <br />

            <select
                id="favColor"
                value={formData.favColor}
                onChange={dataHandler}
                name='favColor'
            >
                <option value="">--Please Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <br />

            <button>Sumbit</button>
        </form>
    )

}