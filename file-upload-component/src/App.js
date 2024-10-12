import React, {useState} from 'react';
import FileUpload from './fileupload';

function App() {
  const [fileParams, setfileParams] = useState(null);

  const customButtonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px'
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const filename = file.name;
    const fileParams = {
      file,
      filename,
    }
    setfileParams(fileParams);
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileSelect} />
      <FileUpload 
        fileParams={fileParams}
        uploadUrl="http://localhost:6678/upload"
        buttonStyle={customButtonStyle}
        buttonText="upload choosen file"
      />
    </div>
  );
}

export default App;
