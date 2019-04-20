import React from 'react'
import "antd/dist/antd.css";

import RegisterPage from '../ResgiterPage'

import style from './index.less';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style.app}>
                <RegisterPage />
            </div>
        )
    }
}