import React, {Component} from 'react'
import Form from '../Form'
import './style.css'


class BodyLeft extends Component {
    render() {
       return(
           <div className="left-block">
               <h1 className="left-block__header">Начните тороговать прямо сейчас</h1>
               <ul className="info-list">
                   <li className="info-list__item">Нет спреда — торгуйте с прозрачными и точными котировками</li>
                   <li className="info-list__item">Достаточно депозита в $10, чтобы начать торговать</li>
               </ul>
               <Form />
            </div>
       )
    }
}


export default BodyLeft