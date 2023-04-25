import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL

const VerAlumnos = () => {

    const [estudiantes, setEstudiantes] = useState([]);   //state para guardar las categorias

    useEffect(() =>{
        getEstudiantes();
    }, []);

    const getEstudiantes = async () => {
        const respuesta = await axios.get(baseUrl);
        setEstudiantes(respuesta.data);
    }

    const deleteAlumnos = async(id) => {
        await axios.delete(baseUrl+'/eliminar/'+id);
        getEstudiantes();
    }

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-md-4 offset-md-4'>
            <div className='d-grid mx-auto'>
                <Link to='/crear' className='btn btn-primary'>Añadir</Link>
            </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
            <table className='table table-hover'>
                <thead className='table-dark text-center'>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Genero</th>
                        <th>Telefono</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider text-center'>
                    {estudiantes.map((estudiante) => (
                        <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.correo}</td>
                            <td>{estudiante.genero}</td>
                            <td>{estudiante.telefono}</td>
                            <td>{estudiante.edad}</td>
                            <td>
                                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                                    <Link to={`/editar/${estudiante.id}`} className='btn btn-warning'>Editar</Link>
                                    <button className='btn btn-danger' onClick={() => deleteAlumnos(estudiante.id)}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default VerAlumnos
