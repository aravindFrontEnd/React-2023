import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './images/simbu.jpg';

import './index.css';

// import { books } from './books';
// import Book from './Book';

function Index() {


    const parent = {
      marginInline: 'auto',
      maxWidth: '700px',
    }

  return (
    <>
      <div style={parent}>
        <p>
          Inime <b>React la</b> ena panranu matum parunga
        </p>
        <img src={logo} alt='simbu' />
        <p style={{textAlign:'center'}}>vidave matan !! vidave matan!!</p>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Index />);
