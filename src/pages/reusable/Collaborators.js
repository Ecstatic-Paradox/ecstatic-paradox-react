import React, { Component } from 'react'
import { baseURL } from './server';

export default class Collaborators extends Component {
    state = {
        collaborators: [],
    }

    componentDidMount() {
        this.fetchProjects();
    }

    fetchProjects = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/about/collaborators/`
            )
            const items = await data.json()
            this.setState({ collaborators: items })
        } catch (error) {
            console.log("error occured")
        };

    }

    render() {
        const items = this.state.collaborators.map(colb => {
            return (
                <div className="col-md-3" key={colb.id}>
                    <div className="sponsor-img">
                        <img src={`${colb.icon}`} alt={colb.title} />
                    </div>
                </div>
            )
        })
        return (
            <section id="wrapper">
                <div className="container-fluid sponsors">
                    <h1 className="title text-center">Our Collaborators</h1>
                    <div className="sponsor-wrap row justify-content-center">
                        {items}
                    </div>
                </div>
            </section>
        )
    }
}
