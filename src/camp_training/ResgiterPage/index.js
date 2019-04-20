import React from 'react'

import {Card} from 'antd'

import RegisterForm from '../RegisterForm'

import style from './index.less'

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return <div className={style.dialogContainer}>
            <Card className={style.dialog}>
                <RegisterForm></RegisterForm>
            </Card>
        </div>
    }
}