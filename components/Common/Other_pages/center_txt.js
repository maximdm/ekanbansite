import React, { Component } from 'react';
import Link from 'next/link';

class Center_txt extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                 
                        <div className="col-lg-12">
                            <div className="about-content">
                                
                                <h2>Kanban Automatizat?</h2>
                                <p>Mulți producători au implementat sisteme electronice de kanban (uneori denumite și e-kanban [15] ). [16] Acestea ajută la eliminarea problemelor obișnuite, cum ar fi erorile de introducere manuală și cărțile pierdute. [17] Sistemele E-kanban pot fi integrate în sistemele de planificare a resurselor întreprinderii (ERP), permițând semnalizarea cererii în timp real pe întregul lanț de aprovizionare și o vizibilitate îmbunătățită. Datele extrase din sistemele E-kanban pot fi folosite pentru a optimiza nivelurile de inventar, urmărind mai bine termenii furnizorului și timpii de completare. [18]

                                E-kanban este un sistem de semnalizare care utilizează o combinație de tehnologii pentru a declanșa mișcarea materialelor într-o instalație de producție sau de producție. Kanbanul electronic diferă de kanbanul tradițional prin utilizarea tehnologiei pentru a înlocui elemente tradiționale precum cardurile kanban cu coduri de bare și mesaje electronice precum e-mailul sau schimbul electronic de date .
                                
                                Un sistem electronic tip kanban marchează inventarul cu coduri de bare, pe care lucrătorii le scanează în diferite etape ale procesului de fabricație pentru a semnaliza utilizarea. Scanările transmit mesaje către magazinele interne / externe pentru a asigura repopularea produselor. Kanbanul electronic folosește adesea internetul ca metodă de direcționare a mesajelor către furnizori externi [19] și ca mijloc de a permite o vizualizare în timp real a inventarului, prin intermediul unui portal, pe tot parcursul lanțului de aprovizionare.
                                
                                Organizații precum Ford Motor Company [20] și Bombardier Aerospace au folosit sisteme electronice kanban pentru a îmbunătăți procesele. Sistemele sunt acum răspândite de la soluții unic</p>
                               
                                

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

export default Center_txt;