import React, { useState } from 'react';

const TodoAdd = (props) => {
    const [value, setValue] = useState('');

    const inputChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className='todo-add'>
            <form>
                <input type='text' value={value}>
                </input>
            </form>
        </div>
    )
}