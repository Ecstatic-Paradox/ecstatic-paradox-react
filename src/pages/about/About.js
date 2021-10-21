import React, { Component } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../css/index.css'


function createData(name, country, spectrum, email) {
    return { name, country, spectrum, email };
}

const rows = [
    createData('John Doe', 'Nepal', 'Web Department', 'ohndoe@gmail.com'),
    createData('Pratik Bashyal', 'Nepal', 'Web Department', 'ohndoe@gmail.com'),
    createData('Suman Acharya', 'Nepal', 'Web Department', 'ohndoe@gmail.com'),
    createData('Sudarshan Chapagain', 'Nepal', 'Web Department', 'ohndoe@gmail.com'),
];

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <!-- HERO --> */}
                <section id="wrapper">
                    <div className="about-hero hero-section">
                        <h1 className="big-text">HOW WE REACH HERE</h1>
                        <p className="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
                        </p>
                    </div>
                </section>
                {/* <!-- HERO --> */}


                {/* <!-- MISSION --> */}
                <section id="wrapper">
                    <div className="about-cta container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="about-details">
                                    <h1 className="title mb-5">Our Mission</h1>
                                    <h6>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum.
                                        Massa vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas
                                        viverra mi, nec morbi ac. Vehicula tortor nibh nunc, aliquam tincidunt in egestas sit nibh. Bibendum nisl.vulputate malesuada in
                                        sit commodo velit dictum. Urna, proin lorem non lectus consequat.“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                                        morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum. Massa vulputate malesuada in sit commodo velit dictum. Urna, proin
                                        lorem non lectus consequat. Amet at lacus, maecenas egestas viverra mi, nec morbi ac. Vehicula tortor nibh nunc, aliquam tincidunt in
                                        egestas sit nibh. Bibendum nisl.vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat.“
                                    </h6>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-12 col-lg-6">
                                <div className="about-img">
                                    <img src="https://images.pexels.com/photos/325135/pexels-photo-325135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mission" />
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- MISSION --> */}


                {/* <!-- ABOUT --> */}
                <section id="wrapper">
                    <div className="about-cta container-fluid">
                        <h1 className="title text-center mb-5">Know About Us</h1>
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="about-img">
                                    <img src="https://images.pexels.com/photos/325135/pexels-photo-325135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mission" />
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-12 col-lg-6">
                                <div className="about-details pe-5">
                                    <h6>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum.
                                        Massa vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas
                                        viverra mi, nec morbi ac. Vehicula tortor nibh nunc, aliquam tincidunt in egestas sit nibh. Bibendum nisl.vulputate malesuada in
                                        sit commodo velit dictum. Urna, proin lorem non lectus consequat.“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum.
                                        Massa vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas
                                        viverra mi, nec morbi ac. Vehicula tortor nibh nunc, aliquam tincidunt in egestas sit nibh. Bibendum nisl.vulputate malesuada in
                                        sit commodo velit dictum. Urna, proin lorem non lectus consequat.“
                                    </h6>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- ABOUT --> */}


                {/* <!-- SPONSOR --> */}
                <section id="wrapper">
                    <div className="container-fluid sponsors">
                        <h1 className="title text-center">Our Collaborators</h1>
                        <div className="sponsor-wrap row justify-content-center">
                            <div className="col-md-3">
                                <div className="sponsor-img">
                                    <h1 className="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-3">
                                <div className="sponsor-img">
                                    <h1 className="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-3">
                                <div className="sponsor-img">
                                    <h1 className="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-3">
                                <div className="sponsor-img">
                                    <h1 className="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-3">
                                <div className="sponsor-img">
                                    <h1 className="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-3">
                                <div className="sponsor-img">
                                    <h1 className="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-3">
                                <div className="sponsor-img">
                                    <h1 className="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- SPONSOR --> */}

                {/* <!-- Core members --> */}
                <section id="wrapper">
                    <div className="about-cta container-fluid">
                        <h1 className="title text-center exception">MEET THE CREW</h1>
                        <h3 className="medium-text mb-5">Founding Members</h3>
                        <div className="core-member-wrap exception">
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bnNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bnNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bnNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bnNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                            <div className="core-member-item">
                                <img className="member-image" src="https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHN1bnNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                                <div className="overlay">
                                    <div className="core-member-info">
                                        <h4>John Doe</h4>
                                        <p className="small-text">Managing Director</p>
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
                        </div>
                        <h3 className="medium-text mb-5">General Members</h3>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 500 }} size="medium" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="center">Spectrum</TableCell>
                                        <TableCell align="center">Country</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center">{row.spectrum}</TableCell>
                                            <TableCell align="center">{row.country}</TableCell>
                                            <TableCell align="center">{row.email}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}