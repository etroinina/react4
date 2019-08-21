import React, { useState } from 'react';
// import { noop } from 'lodash';

export const AddItem = ({ onAdd }) => {
    const [text, setText] = useState('');

    // const inputElement = useRef(null);

    const onSubmit = (ev) => {
        ev.preventDefault();

        onAdd(text);

        setText('');
    };

    return (
        <form className='NewItem' onSubmit={onSubmit}>
            <input type="text"
                   className='ItemTitle'
                   value={ text }
                   onChange={ ev => setText(ev.target.value) }
            />
            <button type="submit" className='SaveTitle'>+</button>
        </form>
    );
};

