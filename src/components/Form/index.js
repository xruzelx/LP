import React, {Component} from 'react'
import './style.css'

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            value: 'rub',
            agreed: false,
            showErrorBlock: false
        }
    }
    
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
            console.log(value)
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch(fieldName) {
            case 'email':
                emailValid = value.length >= 2;
                fieldValidationErrors.email = emailValid ? '' : 'Неверный E-mail';
                break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldValidationErrors.password = passwordValid ? '': 'Неверный пароль';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                        }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.agreed});
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'input-item--invalid');
    }

    agreedClass(){
        return(this.state.agreed ? 'checkbox-block__checkbox--checked' : '' );
    }

    handleClick = () => {
        this.setState({
            agreed: !this.state.agreed,
        }, this.validateForm)
    }

    valClick = (e) => {
        let tag = e.currentTarget.dataset.tag;
        this.setState({value: tag,
        })
    }

    registerClick = () =>{
        const validData = {
            validEmail: this.state.email,
            validPassword: this.state.password,
            pickedValue: this.state.value
        }
        
        if (this.state.formValid){
            this.setState({
                showErrorBlock: false 
            })

            fetch(
            {
                method: "POST",
            })
            .then(function(res){ return console.log(validData); })
            .then(function(data){ alert( "Регистрация прошла успешно") })

        } else {
            this.setState({
                showErrorBlock: true
            })
        }
    }
    render () {
        const emailError = this.state.formErrors.email !== '' ? <div className="input-block__error">{this.state.formErrors.email}</div> : ""
        const passwordError = this.state.formErrors.password !== '' ? <div className="input-block__error">{this.state.formErrors.password}</div> : ""
        const errorBlock = this.state.showErrorBlock == true ? <div className="error-block"><i className="error-block__icon"></i><span className="error-block__text">Заполните все поля</span></div> : ""
        const radioContain =  [{name:'P', value: 'rub', class: 'checked'}, 
                              {name:'S', value: 'dollar', class: ''}, 
                             { name:'E', value: 'euro', class: ''}]
      
        const radioButtons = radioContain.map(radioContain => 
        <div className={this.state.value == radioContain.value ? 'buttons-group__btn checked': 'buttons-group__btn'} key={radioContain.name} data-tag={radioContain.value} onClick={this.valClick} >
            <span>{radioContain.name}</span>
        </div>   
        )
      return (
        <div className='form-block'>
          <div className="input-block">

                
                <div className={"input-item " + this.errorClass(this.state.formErrors.email)} >
                    <input type='text' className="input-item__input" name='email' required 
                    value={this.state.email}
                    onChange={this.handleUserInput}
                    />
                    {emailError}
                    <span className="input-item__text">Ваш e-mail</span>
                </div>

                
                <div className={"input-item " + this.errorClass(this.state.formErrors.password)}>
                    <input type='password' className="input-item__input" name='password' required 
                    value={this.state.password}
                    onChange={this.handleUserInput}
                    />
                    {passwordError}
                    <span className="input-item__text">Придумайте пароль</span>
                </div>
            </div>
            <div className="buttons-block">
                <p className="buttons-block__title">Валюта для ввода и вывода средств</p>
                <div className="buttons-group">
                    {radioButtons}
                </div>
            </div>
            <div className="checkbox-block" onClick={this.handleClick}>
                <div className={"checkbox-block__checkbox " + this.agreedClass()}></div>
                <p className="checkbox-block__text">Я совершеннолетний, ознакомился и принимаю соглашение об оказании услуг.</p>
            </div>
            {errorBlock}
            <button className="submit-btn" onClick={this.registerClick}>Зарегистрироваться</button>
        </div>
      )
    }
   }
   export default Form;