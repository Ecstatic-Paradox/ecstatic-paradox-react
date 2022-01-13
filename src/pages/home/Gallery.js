import React, { Component } from 'react'
import { baseURL } from '../reusable/server';
import ModalImage from "react-modal-image";

export default class Gallery extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/gallery/`
            )
            const item = await data.json()
            this.setState({ images: item.items })
        } catch (err) {
            console.log('some error occured')
        }
    }

    render() {
        const content = this.state.images.map(item => {
            return (

                <div key={item.thumbnail.id} className="gallery-item">
                    <ModalImage
                        className="gallery-image"
                        small={`${baseURL}${item.thumbnail.meta.download_url}`}
                        large={`${baseURL}${item.thumbnail.meta.download_url}`}
                        hideDownload={true}
                        alt=""
                    />;
                    {/* <img className="gallery-image" src={`${baseURL}${item.thumbnail.meta.download_url}`} alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" /> */}
                </div>
            )
        })

        return (
            <section id="wrapper">
                <h1 className="title text-center mb-5">Our Gallery</h1>
                <div className="container-fluid">
                    <div className="gallery-wrap">
                        {content}

                    </div>
                </div>
            </section>

        )
    }
}
