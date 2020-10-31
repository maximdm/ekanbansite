import React, { Component } from 'react';
import Link from 'next/link';

class Detalii_left_image extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-6">
                            <div className="about-content">
                                
                                <h2>Ce este Ekanban?</h2>
                                <p>Kanban (看板) ( panou sau panou publicitar în japoneză ) este unsistem de programare pentru fabricarea slabă și fabricarea just-in-time (JIT). [2] Taiichi Ohno , inginer industrial la Toyota , a dezvoltat kanban pentru a îmbunătăți eficiența producției. Kanban este o metodă de realizare a JIT. [3] Sistemul își ia numele de pe cardurile care urmăresc producția într-o fabrică. Pentru mulți din sectorul auto, kanban este cunoscut sub numele de „sistemul de plăci de identificare Toyota”. [ clarificare necesară ]

                                Kanban a devenit un instrument eficient pentru a sprijini rularea unui sistem de producție în ansamblu și un mod excelent de a promova îmbunătățirea. Zonele cu probleme sunt evidențiate prin măsurarea timpului de plumb și a ciclului întregului proces și a etapelor procesului. [ clarificare necesară ] [4] Unul dintre principalele beneficii ale kanban este de a stabili o limită superioară pentru a lucra în inventarul proceselor pentru a evita supracapacitatea. Există și alte sisteme cu efect similar, de exemplu CONWIP . [5] Un studiu sistematic al diverselor configurații ale sistemelor kanban, dintre care CONWIP este un caz special important, poate fi găsit în Tayur (1993), printre alte lucrări. [6] [7] [8] [9]
                                
                                Un obiectiv al sistemului kanban este de a limita acumularea excesului de inventar în orice moment al producției. Limitele privind numărul de articole care așteaptă la punctele de aprovizionare sunt stabilite și apoi reduse pe măsură ce ineficiențele sunt identificate și eliminate. Ori de câte ori este depășită o limită, aceasta indică o ineficiență care ar trebui soluționată. </p>
                               
                                

                            </div>
                        </div><div className="col-lg-6">
                        <div className="about-img">
                            <img src="/images/more-details/img2.png" alt="Image" />
                        </div>
                    </div>

                    </div>
                </div>
                
            </section>
        );
    }
}

export default Detalii_left_image;