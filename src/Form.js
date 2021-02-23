import { useState } from 'react';

export const Form = ({onAddLang}) => {
    const [ text, setText ] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        onAddLang(text);
        setText('');
    }
    return (
        <div>
        <h1>add language</h1>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    )
}
