'use strict';

const Paragraph = () => {
    return React.createElement(
        'p',
        {
            id: 'firs-paragraph',
            className: 'paragraph'
        },
        'Lorem Ipsum'
    )
}

const appContainer = document.querySelector('#app');

ReactDOM.render(React.createElement(Paragraph), appContainer)