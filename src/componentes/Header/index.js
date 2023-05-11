import React, {useContext} from 'react'
import logo from "../../imagenes/logo.png";
import { Link } from 'react-router-dom';
import { DataContext } from "../../context/Dataprovider";
export const Header = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;
    
    const toogleMenu = () => {
        setMenu(!menu)
    }

  return (
    <header>    
        <Link to="/">
            <div className='logo'>
                <img src={logo} alt="logo" width="100"></img>
            </div>
        </Link>
        <ul>
            <li>
                <Link to="/">INICIO</Link>
            </li>
            <li>
                <Link to="/productos">PRODUCTOS</Link>
            </li>
        </ul>
        <div className="cart" onClick={toogleMenu}>
            <box-icon name="cart"></box-icon>
            <spam className="item_total">{carrito.length} </spam>
        </div>
    </header>
    )
}