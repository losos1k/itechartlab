import React, { Component } from 'react'
import { Carousel, Glyphicon } from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            open: false,
            pic: null
        }
    }

    handleOpen = (currentPhoto) => {
        this.setState({
            open: true,
            pic: currentPhoto,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    getGallery = (sliceStart, sliceEnd) => {
        return this.props.movieInfo.images.slice(sliceStart, sliceEnd).map((photo, index) => {
            return <span key={index}>
                <img src={photo} onClick={() => this.handleOpen(photo)} />
                <Dialog
                    modal={false}
                    className="movie-info__images-gallery"
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={this.state.pic} />
                </Dialog>
            </span>
        });
    };

    render() {
        return (
            <Carousel indicators={false} interval={null}>
                <Carousel.Item className="movie-info__gallery">
                    <Glyphicon glyph="chevron-left" />
                    {this.getGallery(0, 5)}
                    <Glyphicon glyph="chevron-right" />
                </Carousel.Item>
                <Carousel.Item className="movie-info__gallery">
                    <Glyphicon glyph="chevron-left" />
                    {this.getGallery(5, 10)}
                    <Glyphicon glyph="chevron-right" />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Gallery;
