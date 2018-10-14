import React from 'react';

const cardStyle = {
    width: '150px',
    height: '150px',
    boxShadow: '0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)'
}

const cardImg = {
    width: '100%',
    height: '100%',
    padding: '5px'
}

class Card extends React.Component {

    render() {
        return (
            <div className="card m-3" 
                 style={cardStyle}
                 key = {this.props.id}
                 onClick = {() => this.props.handleClick(this.props.id, this.props.clicked)}
            >
                <img className="card-img-top" src={this.props.src} alt={this.props.alt} style={cardImg}/>
            </div>
        )
    }
}

export default Card;