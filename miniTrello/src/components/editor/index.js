import React from 'react';
import './index.css';

class Editor extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            showForm:  false,
            value: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(){
        this.setState((oldState) => {
            return {
                showForm: !oldState.showForm
            }
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    } 

    handleSubmit(event){

        if(this.state.value.trim() !== ''){
            this.setState({value: ''});
            this.handleClick();
            this.props.updateItems( {id:0, message: this.state.value.trim() } );
        }
        
        event.preventDefault();
    }    

    render() {
        return (
            <div className="editor">
                <a className={( !this.state.showForm ? "show" :"hidden" )+" add-a-card" } 
                        onClick={this.handleClick} >  Add a card ... {this.state.showForm}</a>
                <div className={ this.state.showForm ? "show" :"hidden" }>        
                    <form  onSubmit={this.handleSubmit}>
                        <textarea value={this.state.value} 
                                    onChange={this.handleChange} 
                                    rows="3"
                                    required></textarea>
                        <br/>
                        <button type="submit">Add</button>
                        <a type="button" onClick={this.handleClick} >X</a>
                    </form>
                </div>                
            </div>
        )
    }
}

export default Editor;
