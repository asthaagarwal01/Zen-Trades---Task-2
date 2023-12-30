import './App.css';
import React from 'react';
import Upload from './Components/Upload';
import FileDetails from './Components/FileDetails';

function App() {
  return (
    <>
      <h2>Import Products</h2>
      <div className='step12'>
        <Upload/>
        <FileDetails/>
      </div>
    </>
  );
}

export default App;
