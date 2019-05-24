import React, {Component} from 'react'
import Header from './Header'
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight'
import './App.css'

function App() {
    return (
        <div className="main">
            <div className="main-container">
                <Header />
                <section className="main-content">
                    <BodyLeft />
                    <BodyRight />
                </section>
            </div>
        </div>
    )
}

export default App