import React from 'react'
import axios from 'axios'
import {Form, Input, Button} from 'antd'

import style from './index.less'

const {Item: FormItem} = Form

@Form.create()
export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
              console.log(err);
              return;
            }
            const {userName, userPassword} = values
            this.setState({
                loading: true
            })
            axios.post('/api/register', {
                userName,
                userPassword
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              }).finally(() => {
                this.setState({
                    loading: false
                })
              });

          });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const firstInputValue = this.props.form.getFieldValue('userPassword');
        if (value !== firstInputValue) {
            return callback('密码不匹配')
        }
        callback()
    }
    render () {
        const {loading} = this.state
        const { getFieldDecorator } = this.props.form;

        return <Form>
            <FormItem label="新用户账号">
            {getFieldDecorator('userName', {
                rules: [{ 
                    required: true, 
                    message: '必填，英文，数字，中文',
                    pattern: /^[\da-zA-Z\u4e00-\u9fa5]{1,6}$/
                }],
            })(
            <Input></Input>
            )}
            </FormItem>
            <FormItem label="密码">
            {getFieldDecorator('userPassword', {
                rules: [{ 
                    required: true, 
                    message: '仅限英文',
                    pattern: /^[a-zA-Z]*$/
                }],
            })(
                <Input type="password"></Input>
            )}
            </FormItem>
            <FormItem label="确认密码">
            {getFieldDecorator('userConfirmPassword', {
                rules: [{ 
                    required: true,
                    message: '必填'
                }, {
                    validator: this.compareToFirstPassword
                }],
            })(
                <Input type="password"></Input>
            )}
            </FormItem>
            <FormItem className={style.formBtnContainer}>
                <Button onClick={this.onSubmit} type="primary" disabled={loading}>注册</Button>
            </FormItem>
        </Form>
    }
}