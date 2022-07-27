import { useState } from "react";

export const useForm = ( initialObject = {}) => {
    const [form, setForm] = useState(initialObject);

    const serializerForm = (form) => {
        const formData = new FormData(form);

        const completeObject = {};

        for (let [name, value] of formData) {
            completeObject[name] = value;
        }

        return completeObject;
    };

    const sent = (e) => {
        e.preventDefault();

        let course = serializerForm(e.target);

        setForm(course);

        document.querySelector('.code').classList.add('sent');
    }

    const changed = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        })
    };

    return {
        form,
        sent,
        changed
    }
}