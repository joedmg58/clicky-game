import React from 'react';
import Card from './Card';
import './CardDeck.css';

class CardDeck extends React.Component {
    state = {
        imageSrc: './assets/images/',
        images: ['yoda.png', 
                 'leia.jpeg', 
                 'vader.png', 
                 'if_anakin_starfighter_15477.png',
                 'if_BobaFett_15478.png',
                 'if_clone-4_15482.png',
                 'if_clone-old_15483.png',
                 'if_Darth Mauls light-sabers_15781.png',
                 'if_DarthVader_15778 (1).png',
                 'if_Naboo Starfighter_15780.png',
                 'if_R2-D2_15783.png',
                 'if_X Wing_15784.png'
                ]
    }

    handleClick = (id, clicked) => {
        this.shuffle();
        this.render();
    }

    //Fisher-Yates algorithm
    shuffle() { 
        let i = 0, j = 0, tmp = null, tmpImages = this.state.images;

        for ( i = tmpImages.length - 1; i > 0; i = i - 1 ) {
            j = Math.floor( Math.random() * ( i+1 ) );
            tmp = tmpImages[i];
            tmpImages[i] = tmpImages[j];
            tmpImages[j] = tmp;
        }

        console.log('The deck of cards was shuffled.');

        return this.setState({
            images: tmpImages
        })

        
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
                            handleClick = {this.handleClick}
                        />
                    ) )
                }
            </div>
        );
    }
}

export default CardDeck;