import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Receta = ({ receta }) => {

    //configuracion modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    //extraer los valores del context
    const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);

    //muestra y formatea los ingredientes
    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (informacion[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img className="card-img-top" src={receta.strDrinkThumb} alt={`imagen de ${receta.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            handleShow();
                        }}
                    >Ver Receta</button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{informacion.strDrink}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{informacion.strInstructions}</p> <hr />
                            <img className="img-fluid" src={informacion.strDrinkThumb} alt={`${informacion.strDrink}`} /> <hr />
                            <h3>ingredientes y cantidades</h3>
                            <ul>
                                {mostrarIngredientes(informacion)}
                            </ul>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        </div>
    );
}

export default Receta;