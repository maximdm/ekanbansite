import React, { Component } from 'react';
import Link from 'next/link';

class TeamTwo extends Component {
    render() {
        return (
            <section className="team-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Echipă</span>
                        <h2>Aceasta este echipa noastră</h2>
                        <p>Din pasiune și muncă acest proiect a luat ființă iar motivarea noastră supremă este finalizarea cu succes a fiecărui proiect pe care dumneavoastră îl începeți.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team5.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Darth Maul</h3>
                                    <span>The force</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-pinterest-alt"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team6.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Majestic Cat</h3>
                                    <span>Cat </span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-pinterest-alt"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team7.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Green Dude</h3>
                                    <span>Generic-I think Lacrosse player</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-pinterest-alt"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamTwo;