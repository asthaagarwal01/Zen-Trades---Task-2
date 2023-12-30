import React,{useState} from 'react'
import FileSelect from './FileSelect';
import './FileDeatils.css';

function Upload() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }

  };


  return (
    <>
        <div className='contain'>
        <div className='left'>
            <p>Step 1:</p>
        </div>
        <div className='right'>
            <p>Select File</p>
            <input type="file" onChange={handleFileChange} />
            <p>Supported File type(S) : CSV,JSON</p>
            
        </div>
    </div>
    {selectedFile && <FileSelect file={selectedFile} />}
    </>
  )
}

export default Upload