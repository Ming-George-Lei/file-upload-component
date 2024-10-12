import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileUpload = ({
    fileParams,
    uploadUrl,
    buttonStyle = {},
    buttonText = 'upload file',
  }) => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        setStatus('');
    }, [fileParams]);

    const handleUpload = async () => {
        if (!fileParams) {
            setStatus('Please select a file');
            return;
        }
        const form = new FormData();
        Object.entries(fileParams).forEach(([key, value]) => {
            form.append(key, value);
        });
        // upload a file
        try {
            const response = await axios.post(uploadUrl, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
            setStatus('Upload success');
            console.log(response.data);
        } catch (error) {
            setStatus('Upload failed');
            console.error('Error message:', error);
        }
    }

    return (
        <div>
            <button onClick={handleUpload} style={buttonStyle}>{buttonText}</button>
            {status && <p>{status}</p>}
        </div>
    );
  };

export default FileUpload;
