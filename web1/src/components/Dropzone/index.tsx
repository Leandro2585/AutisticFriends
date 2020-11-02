import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { Container } from './style';

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [ selectedFileURL, setSelectedFileURL ] = useState('');
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileURL = URL.createObjectURL(file);
        setSelectedFileURL(fileURL);
        onFileUploaded(file);
    }, [onFileUploaded]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    });
    return(
        <Container {...getRootProps()}>
            <input {...getInputProps()} accept="image/*"/>
            {
                selectedFileURL
                ? <img src={selectedFileURL} alt="Photo"/>
                : (
                    <p>
                        <FiUpload/>
                        Foto
                    </p>
                )
            }
        </Container>
    );
}
export default Dropzone;