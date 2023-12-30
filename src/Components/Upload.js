import React,{useState} from 'react'
import FileSelect from './FileSelect';

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
        <div className='left'>
            <p>Step 1:</p>
        </div>
        <div className='right'>
            <p>Select File</p>
            <input type="file" onChange={handleFileChange} />
            <p>Supported File type(S) : CSV,JSON</p>
            {selectedFile && <FileSelect file={selectedFile} />}
        </div>
    </>
  )
}

export default Upload