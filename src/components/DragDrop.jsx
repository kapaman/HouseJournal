import React from 'react';
import { useDropzone } from 'react-dropzone';

const DragDrop = (props) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({accept: 'image/jpeg, image/png'});

    const files = acceptedFiles.map(file => {
        //console.log(file);
        return (

        
        <li key={file.path}>
            {file.path.substring(0,Math.min(file.path.length-4,4))+file.path.substring(file.path.length-4,file.path.length)} - {(file.size/1000).toFixed(1)} kB
        </li>
        )
    });

    return (
        <section className="container" style={{cursor:'pointer'}}>
            <div {...getRootProps({ className: 'dropzone' })} style={{ border: '3px dashed #8D8D8D', borderRadius: '20px', padding: '20px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                    <input {...getInputProps()} />
                    <svg xmlns="http://www.w3.org/2000/svg" width={90} height={90} fill="rgba(11, 31, 223, 0.7)" className="bi bi-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <p id="dragndrop" style={{ alignSelf: 'center', marginLeft: '20px', marginBottom: '10px', marginTop: '0px',fontFamily:'Poppins' }}>Drag and drop image, or Upload(optional)</p>

                </div>
                {
                (files.length>0)? <div style={{ padding: '0px 20px 0px 20px' }}>
                    <p>{files.length > 0 ? files : null}</p>
                    {/* <ul>{files}</ul> */}
                </div>:null
                }
                {/* <div style={{padding:'10px'}}>
                    <h4>{files.length > 0 ? files : null}</h4>
                    <ul>{files}</ul>
                </div> */}

            </div>
        </section>
    );
}

export default DragDrop;