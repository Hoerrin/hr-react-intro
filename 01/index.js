'use strict';

const Paragraph = () => {
  return <p className='paragraph' id='first-paragraph'>Lorem Ipsum</p>
};

const appContainer = document.querySelector('#app');

ReactDOM.render(<Paragraph/>, appContainer);
