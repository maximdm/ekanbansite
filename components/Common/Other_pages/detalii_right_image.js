import React, { Component } from 'react';
import Link from 'next/link';

class Detalii_right_image extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/more-details/img1.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                
                                <h2>De unde provine Ekanban?</h2>
                                <p>Sistemul provine din cel mai simplu sistem de semnalizare vizuală de reaprovizionare a stocului, o cutie goală. Acest lucru a fost dezvoltat pentru prima dată în fabricile din Marea Britanie care produc Spitfires în timpul celui de- al doilea război mondial și a fost cunoscut sub numele de „sistemul cu două coșuri”. La sfârșitul anilor 1940, Toyota a început să studieze supermarketurilecu ideea de a aplica tehnici de depozitare pe raft la fabrica. Într-un supermarket, clienții recuperează în general ceea ce au nevoie la momentul necesar - nici mai mult, nici mai puțin. Mai mult, supermarketul stochează doar ceea ce se așteaptă să vândă într-un anumit timp, iar clienții iau doar ceea ce au nevoie, deoarece aprovizionarea viitoare este asigurată. Această observație a determinat Toyota să vadă un proces ca fiind client al unuia sau mai multor procese anterioare și să vadă procesele anterioare ca un fel de magazin.

                                Kanban aliniază nivelurile de inventar cu consumul real. Un semnal îi spune unui furnizor să producă și să livreze o nouă expediere atunci când un material este consumat. Acest semnal este urmărit prin ciclul de reaprovizionare, aducând vizibilitate furnizorului, consumatorului și cumpărătorului.
                                
                                Kanban folosește rata cererii pentru a controla rata producției, trecând cererea de la clientul final în sus prin lanțul proceselor de magazin-client. În 1953, Toyota a aplicat această logică în atelierul lor principal de utilaje. </p>
                               
                                

                                <Link href="/contact">
                                    <a className="default-btn">
                                        Contactează-ne
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Detalii_right_image;