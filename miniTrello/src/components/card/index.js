import React from 'react';
import './index.css';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.deleteItem(this.props.id);
    }

    render() {
        return (
        <li className="card" >
            <div draggable="true"
                id={this.props.id}
                onDragEnd={this.props.dragEndMthd}
                onDragStart={this.props.dragStartMthd}                     
                >
                <div className="viewer">
                    {this.props.message}
                    <a onClick={this.handleClick}>X</a>
                </div>                
            </div>
        </li>
        )
    }
}

export default Card;
