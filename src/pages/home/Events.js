import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { baseURL } from '../reusable/server';
import { truncate } from '../reusable/truncate';
import researchpaper from "../../assests/researchpaper.jpg";


export default class Events extends Component {
    state = {
        papers: []
    }

    componentDidMount() {
        this.fetchPapers();
    }

    fetchPapers = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/researchpapers/`
            )
            const items = await data.json()
            this.setState({ papers: items.items })
        } catch (err) {
            console.log('some error occured')
        }
    }
    render() {
        var items = this.state.papers.splice(0, 2)
        const contents = items.map(item => {
            return (
                <div key={item.meta.id} className="col-md-6">

                    <div className="event-card">
                        <Link to={`research-papers/${item.slug}`}>
                            <h4>{item.meta.title}</h4>
                            {/* <p>{truncate(item.description, 20)}</p> */}
                        </Link>
                    </div>
                </div>
            )
        })
        return (
            < section id="wrapper" >
                <div className="cover text-center justify-content-center" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${researchpaper})`, backgroundAttachment: 'unset' }}>
                    <div className="w-100">
                        <h1 className="big-text mb-4">Our Research Papers</h1>
                        <Link to="/research-papers">
                            <button type="button" className="btn filled-btn">View Researches</button>
                        </Link>
                        <div className="row event-wrap">
                            {contents}
                        </div>
                    </div>
                </div>
            </section >

        )
    }
}
