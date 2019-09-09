import React from 'react';
import classes from './FormContact.module.scss';

class FormContact extends React.Component{
    state={
        userName: '',
        email: '',
        telephone: '',
        address: '',
        subject: '',
        message: ''
    }
    updateInput = (e) =>{
        this.setState({[e.target.name] : e.target.value});
    }
    submitHandler = (e) =>{
        e.preventdefault();
        
    }
    render(){
        return(
            <form className={classes.formContact} onSubmit={this.submitHandler}>
                <input type="text" name="userName" placeholder="Name *"  value={this.state.userName} onChange={this.updateInput} />
                <input type="text" name="email" placeholder="Email *" value={this.state.email} onChange={this.updateInput} />
                <input type="text" name="telephone" placeholder="Telephone" value={this.state.telephone} onChange={this.updateInput} />
                <input type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.updateInput} />
                <input type="text" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.updateInput} />
                <textarea rows="4" name="message" placeholder="Message" value={this.state.message} onChange={this.updateInput} />
                <input type="submit" value="Senden" />
            </form>
        );
    }
}

export default FormContact;