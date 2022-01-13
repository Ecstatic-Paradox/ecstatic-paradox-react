import React, { Component } from 'react'
import { checkData } from '../reusable/checkData'
import { baseURL } from '../reusable/server'

export default class FoundingMembers extends Component {

    render() {

        const members = this.props.members.map((mem, index) => {
            return (
                <div className="core-member-item" key={index}>
                    <img className="member-image" src={`${baseURL}${mem.avatar}`} alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                    <div className="overlay">
                        <div className="core-member-info">
                            <h5>{checkData(mem.first_name)} {checkData(mem.last_name)}</h5>
                            <p className="small-text">{checkData(mem.designation)}, {checkData(mem.user_department)}</p>
                            <div className="core-member-icon">
                                <a href="linked.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
                                        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
                                    </svg>
                                </a>
                                <a href="website.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="36"/>
                                    </svg>
                                </a>
                                <a href="mail.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                                        <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/>
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
