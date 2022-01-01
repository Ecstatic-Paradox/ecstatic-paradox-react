import React, { Component } from 'react'

export default class FoundingMembers extends Component {

    render() {

        const members = this.props.members.map((mem, index) => {
            return (
                <div className="core-member-item" key={index}>
                    <img className="member-image" src={`http://localhost:8000${mem.avatar}`} alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                    <div className="overlay">
                        <div className="core-member-info">
                            <h4>{mem.first_name} {mem.last_name}</h4>
                            <p className="small-text">{mem.designation}</p>
                            <div className="core-member-icon">
                                <a href="facebook.com">
                                    <svg viewBox="0 0 16 16">
                                        <path d="M13.3375 2H2.6625C2.29687 2 2 2.29687 2 2.6625V13.3375C2 13.7031 2.29687 14 2.6625 14H8V9.25H6.56563V7.5H8V6.20625C8 4.65625 9.075 3.8125 10.4594 3.8125C11.1219 3.8125 11.8344 3.8625 12 3.88438V5.50313H10.8969C10.1438 5.50313 10 5.85938 10 6.38438V7.5H11.7937L11.5594 9.25H10V14H13.3375C13.7031 14 14 13.7031 14 13.3375V2.6625C14 2.29687 13.7031 2 13.3375 2Z"></path>
                                    </svg>
                                </a>
                                <a href="instagram.com">
                                    <svg viewBox="0 0 512 512">
                                        <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                        <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                                    </svg>
                                </a>
                                <a href="twitter.com">
                                    <svg viewBox="0 0 512 512">
                                        <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="core-member-wrap exception">
                {members}
            </div>
        )
    }
}
