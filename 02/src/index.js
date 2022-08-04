import React from 'react';
import ReactDOM from 'react-dom/client';
import { data } from './data';

const App = () => {
    return (
        <div>
            {data.map(({name, age}) => (
                <p key={name}>{name}, {age}</p>
            ))}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>)
