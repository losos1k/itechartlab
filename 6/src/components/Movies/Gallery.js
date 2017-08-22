import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

class Gallery extends Component {
    getGallery = (sliceStart, sliceEnd) => {
        return this.props.movieInfo.images.slice(sliceStart, sliceEnd).map((photo, index) => {
            return <span key={index}>
                <img src={photo} />
            </span>
        });
    };

    render() {

        return (
            <Carousel indicators={false} interval={null}>
                <Carousel.Item className="movie-info__gallery">
                    {this.getGallery(0, 5)}
                </Carousel.Item>
                <Carousel.Item className="movie-info__gallery">
                    {this.getGallery(5, 10)}
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Gallery;
