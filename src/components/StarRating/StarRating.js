import React, { Component } from 'react';
import Star from '../Star/Star';
import '../Star/Star.css';

class StarRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: props.starsSelected || 0,
            starsPicked: props.starsSelected || 0,
        }
        this.pick = this.pick.bind(this) 
    }

    pick(starsSelected) {
        this.setState({ starsSelected, starsPicked: starsSelected })
    }

    hover(starsSelected) {
        this.setState({ starsSelected })
    }

    hoverOut() {
        this.setState({ starsSelected: this.state.starsPicked })
    }

    render() {
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i} selected={ i<starsSelected } hover={ () => this.hover(i+1) } out={() => this.hoverOut()} onClick={ () => this.pick(i+1) }/> )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}    

export default StarRating;