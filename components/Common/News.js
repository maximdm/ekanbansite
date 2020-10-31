import React, { Component } from 'react';
import Link from 'next/link';

class News extends Component {
    render() {
        return (
            <section className="news-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Ultimele articole</span>
                        <h2>Citește mai mult</h2>
                        <p>Află aici mai multe informații despre managmentul de proiect</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog1.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>20 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Managmentul de proiect</h3>
                                        </a>
                                    </Link>

                                    <p>De ce ai nevoie de managment de proiect</p>
                                    
                                    <Link href="/news-details">
                                        <a className="read-more">
                                          Citește mai mult<i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog2.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>21 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Sistemul Kan</h3>
                                        </a>
                                    </Link>

                                    <p>Află istoria acestui sistem de managment de proiect</p>
                                    
                                    <Link href="/news-details">
                                        <a className="read-more">
                                          Citește mai mult<i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog3.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>22 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 4 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Managmentul de proiect în istorie</h3>
                                        </a>
                                    </Link>

                                    <p> Cum a contribuit managmentul de proiect în a scrie istorie</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                          Citește mai mult<i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;