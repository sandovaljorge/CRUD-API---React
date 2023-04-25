import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import VerAlumnos from './components/VerAlumnos';
import CrearAlumno from './components/CrearAlumno';
import EditarAlumno from './components/EditarAlumno';

const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerAlumnos/>}></Route>
          <Route path="/crear" element={<CrearAlumno/>}></Route>
          <Route path="/editar/:id" element={<EditarAlumno/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

