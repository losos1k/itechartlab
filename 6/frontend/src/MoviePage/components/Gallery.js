import React, { Component } from 'react'
import { Carousel, Glyphicon } from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            dialogOpen: false,
            pic: null
        }
    }

    handleOpen = (currentPhoto) => {
        this.setState({
            dialogOpen: true,
            pic: currentPhoto,
        });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    getGallery = (sliceStart, sliceEnd) => {
        return this.props.movieInfo.images.slice(sliceStart, sliceEnd).map((photo, index) => {
            return <span key={index}>
                <img src={photo} onClick={() => this.handleOpen(photo)} />
                <Dialog
                    modal={false}
                    className="movie-info__images-gallery"
                    open={this.state.dialogOpen}
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
