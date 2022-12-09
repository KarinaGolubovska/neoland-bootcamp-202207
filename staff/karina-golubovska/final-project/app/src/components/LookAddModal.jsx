// ALTERNATIVA 1
// Coger la image en el evento submit del formulario
// convertir la imagen en base64 -> es decir, en un string
// enviar el string a la api para que lo guarde en base de datos de mongo
// cuando quiero recuperar la imagen, hacer un get a la api pidiendo ese string
// en el front colocar ese string en el atributo src de la etiqueta img

// ALTERNATIVA 2
// Coger la imagen del front y mandarla como stream (formData) a la API
// La API vuelve a mandar como stream la imagen a algún servidor de imagenes
// La API guarda en base de datos (mongo) la dirección en la que el servidor de imágenes dejó almacenada la imagen
// Para recuperar la imagen desde el front, se realiza el proceso inverso
// Ejemplos de servidores de imágenes: Couldinary y Firebase Storage

import './LookAddModal.css'
import { useState, } from 'react'
import Loggito from '../utils/Loggito'
import Image from './Image'
function Add({ onClose }) {

    const logger = new Loggito('Add')
    const [origImage, setOrigImage] = useState(null)
    const [origImageFile, setOrigImageFile] = useState(null)
    const [modalAddLook, setModalAddLook] = useState(null)
    const handle = (e) => {
        const imageFile = e.target.files[0];
        setOrigImage(imageFile);
        setOrigImageFile(URL.createObjectURL(imageFile))


    }
    function showImage() {
        var element = document.getElementById('frame');
        element.innerHTML = '<img src="lafoto.jpg"/>';
    }
    const inputFile = document.querySelector('#input-foto');
        const image = document.querySelector('#previa');

        /**
         * Returns a file in Base64URL format.
         * @param {File} file
         * @return {Promise<string>}
         */
        async function encodeFileAsBase64URL(file) {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.addEventListener('loadend', () => {
                    resolve(reader.result);
                });
                reader.readAsDataURL(file);
            });
        };

        // Eventos
        inputFile.addEventListener('input', async (event) => {
            // Convierto la primera imagen del input en una ruta Base64
            const base64URL = await encodeFileAsBase64URL(inputFile.files[0]);
            // Anyado la ruta Base64 a la imagen
            image.setAttribute('src', base64URL);
        });


    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL();
        return dataURL;
    }

    var base64 = getBase64Image(document.getElementById("img"));
    console.log(base64);


    const handleCloseAddLook = () => {
        setModalAddLook(null)
    }
    // const handleAddClick = () => onAddClick()
    logger.info('render')
    return <form className='add-panel' onClose={handleCloseAddLook}>

        {/* <div>
            <image src='https://i.pinimg.com/564x/1b/de/b6/1bdeb64376208f546295da1e893464b6.jpg' />
            {
                origImageFile ? <Image src={origImageFile} /> : <Image src='https://i.pinimg.com/564x/1b/de/b6/1bdeb64376208f546295da1e893464b6.jpg' />
            }
        </div> */}

        <div>
        <img id="img" src="http://static.13.cl/7/sites/all/themes/portal/resources/images/logo_13cl-2x.png"/>
            <input
                type="file"
                accept="image/*"
                className='add_input'
                onChange={(e) => handle(e)}

            />
            {origImageFile && <button>Download Image</button>}
            <button className="close-button" onClick={onClose}>x</button>
            <button className="submit" onClick={showImage}>submit</button>
        </div>


    </form>





















    // <div className='add-panel'>
    //     <div className="add_input">
    //         {/* <label>Type</label>
    //         <select className="type" id="type">
    //             <option>Pantalones</option>
    //             <option>Gafas</option>
    //             <option>Camiseta</option>
    //             <option>Top</option>
    //             <option>Bambas</option>
    //         </select> */}
    //          <label>Description</label>
    //          <input type='text' className='description' id='description' /> 
    //         {/* <label>Brand</label>
    //         <select className="brand" id="brand">
    //             <option>Mango</option>
    //             <option>Zara</option>
    //             <option>Bershka</option>
    //             <option>Stradivarious</option>
    //             <option>Nike</option>
    //         </select> */}
    //         <label >URL</label>
    //         <input type="URL" className="" id="url" />
    //         <button className='add_photo'>add</button>
    //         <button className='submit_button'>Submit</button>

    //     </div>
    //     <IconButton text="close" onClick={onCloseAddClick} />
    // </div>
}

export default Add