import { Routes, Route, Link } from "react-router-dom";

//SE IMPORTAN TODAS LA HABITACIONES
import {Home} from "../Home/Home.js"
import {Habitaciones} from "../Habitaciones/Habitaciones.js"
import {Menu} from "../Menu/Menu.js";

export function Routers(){
    return (
        <div>
            <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="habitaciones" element={<Habitaciones />} />
          </Routes>
        </div>
      );
}