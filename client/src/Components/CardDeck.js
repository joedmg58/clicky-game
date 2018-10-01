import React from 'react';
import Card from './Card';
import './CardDeck.css';

class CardDeck extends React.Component {
    state = {
        imageSrc: './assets/images/',
        images: ['yoda.png', 'leia.jpeg', 'vader.png']
    }

    //Fisher-Yates algorithm
    shuffle() { 
        let i = 0, j = 0, tmp = null;

        for ( i = this.images.length - 1; i > 0; i = i - 1 ) {
            j = Math.floor( Math.random() * ( i+1 ) );
            tmp = this.images[i];
            this.images[i] = this.images[j];
            this.images[j] = tmp;
        }
    }

    render() {
        return (
            <div className="container deck">
                {
                    this.state.images.map( src => (
                        <Card 
                            key = {src}
                            src = { this.state.imageSrc + src } 
                            alt = { this.state.imageSrc + src }
                        />
                    ) )
                }
            </div>
        );
    }
}

export default CardDeck;