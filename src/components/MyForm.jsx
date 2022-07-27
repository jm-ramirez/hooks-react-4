import React, { useState } from 'react'

export const MyForm = () => {
    const [form, setForm] = useState({});

    const sent = (e) => {
        e.preventDefault();

        let course = {
            title: e.target.title.value,
            year: e.target.year.value,
            description: e.target.description.value,
            autor: e.target.autor.value,
            email: e.target.email.value
        }
        setForm(course);
    }

    return (
        <div>
            <h1>Form</h1>
            <p>Form to save a course</p>
            <p>Course saved:</p>
            <pre>{JSON.stringify(form)}</pre>

            <form onSubmit={sent} className='my-form'>
                <input type='text' name='title' placeholder='Title' />
                <input type='number' name='year' placeholder='Year of publication' />
                <textarea name='description' placeholder='Description' />
                <input type='text' name='autor' placeholder='Autor' />
                <input type='email' name='email' placeholder='Email' />

                <input type='submit' value='Send' />
            </form>
        </div>
    )
}
