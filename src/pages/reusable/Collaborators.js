import React, { Component } from 'react'

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
                'http://localhost:8000/api/about/collaborators/'
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
                        <h1 className="title">{colb.title}</h1>
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
