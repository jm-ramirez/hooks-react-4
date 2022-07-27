import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MyForm = () => {
    const { form, sent, changed } = useForm({});

    return (
        <div>
            <h1>Form</h1>
            <p>Form to save a course</p>
            <p>Course saved: {form.title}</p>
            <pre className='code'>{JSON.stringify(form)}</pre>

            <form onSubmit={sent} className='my-form'>
                <input type='text' name='title' onChange={changed} placeholder='Title' />
                <input type='number' name='year' onChange={changed} placeholder='Year of publication' />
                <textarea name='description' onChange={changed} placeholder='Description' />
                <input type='text' name='autor' onChange={changed} placeholder='Autor' />
                <input type='email' name='email' onChange={changed} placeholder='Email' />

                <input type='submit' value='Send' />
            </form>
        </div>
    )
}
