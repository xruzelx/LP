import React, {Component} from 'react'
import './style.css'


class Header extends Component {
    render() {
       return(
           <section className="main-header">
               <span className="main-header__logo">Logo</span>
               <button className="main-header__button">Войти</button>
           </section>
       )
    }
}


export default Header