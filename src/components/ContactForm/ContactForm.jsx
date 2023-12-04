import { Component } from "react";
import css from './ContactForm.module.css';

export class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getContacts(this.state)
        this.reset();
    }

    reset = () => {
        this.setState({name:'', number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label className={css.formLabel}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    /> 
                </label>
                <label className={css.formLabel}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        required
                    /> 
                </label>
                <button type="submit" className={css.btnForm}>Add contact</button>      
            </form>
        )
    }
}

