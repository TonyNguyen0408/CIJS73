import { useState } from 'react';

const Button = (props) => {

    return (
        <div>
            <div
                className='btn'
                onClick={props.increment}>
                Increment
            </div>

            <div
                className='btn'
                onClick={props.decrement}>
                Decrement
            </div>
        </div>
    );
};

export default Button;