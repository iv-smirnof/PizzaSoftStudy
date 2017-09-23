import React, { Component } from 'react'
import './styles/style.css';

export default class App extends Component {
    render() {
        return (
            <section>
                <header>
                    шапка
             </header>
                <main>
                    <section className="container-workers">
                        <div className="row-workers">
                            <div className="block-name">Kirill0</div>
                            <div className="block-role">driver</div>
                            <div className="block-phone">23-23-23</div>
                        </div>
                        <div className="row-workers">
                            <div className="block-name">Kirill1</div>
                            <div className="block-role">cook</div>
                            <div className="block-phone">23-23-23</div>
                        </div>
                        <div className="row-workers">
                            <div className="block-name">Kirill2</div>
                            <div className="block-role">developer</div>
                            <div className="block-phone">23-23-23</div>
                        </div>
                    </section>
                </main>
                <footer>
                    подвал
             </footer>
            </section>
        )
    }
}
