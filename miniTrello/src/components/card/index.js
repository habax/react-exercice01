import React from 'react';
import './index.css';

class Card extends React.Component {
    render() {
        return (
        <li className="card">
            <div>
                <div className="viewer">{this.props.message}</div>                
            </div>
        </li>
        )
    }
}

export default Card;
