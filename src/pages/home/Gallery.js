import React, { Component } from 'react'

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
                `http://localhost:8000/api/gallery/`
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
                    <img className="gallery-image" src={`http://localhost:8000${item.thumbnail.meta.download_url}`} alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                </div>
            )
        })

        return (
            <section id="wrapper">
                <h1 className="title text-center mb-5">Shots From Special Moments </h1>
                <div className="container-fluid">
                    <div className="gallery-wrap">
                        {content}

                    </div>
                </div>
            </section>

        )
    }
}
