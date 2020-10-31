import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TextContainer from '../components/Common/props_components/text_w_title';
import CardsText from '../components/Common/props_components/Cards_with_text';
import FullImage from '../components/Common/props_components/full_image';
import FullVideo from '../components/Common/props_components/full_video';
import Img_right_text_left from '../components/Common/props_components/img_right_text_left';
import Img_left_text_right from '../components/Common/props_components/img_left_text_right';

import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class Tutoriale extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Tutoriale" 
                    homePageUrl="/" 
                    homePageText="Acasă" 
                    activePageText="Tutoriale" 
                /> 
                <TextContainer 
                pageTitle="Cum să utilizezi sistemul Kan" 
                paragraphText_1="Plăcile Kanban folosesc Card, Column, Swimlanes și WIP Limits pentru a permite echipelor să vizualizeze și să gestioneze fluxurile lor de lucru în mod eficient. Permiteți-ne să vă prezentăm mai îndeaproape principalele componente:"
                paragraphText_2="Pentru o mapare mai detaliată a procesului dvs., aveți libertatea de a crea câte subsecțiuni aveți nevoie pentru a vă vizualiza fluxul de lucru cu precizie maximă. De exemplu, o echipă de dezvoltare poate avea un panou de activități Kanban care constă din mai multe coloane și benzi de înot."
                 
            />   <CardsText
            Card_1_Title="Carduri Kanban"
            Card_2_Title="Coloane Kanban "
            Card_3_Title="Limite de lucru "
            Card_4_Title="Culoare Kanban"
            Card_1_Text="Aceasta este reprezentarea vizuală a sarcinilor. Fiecare card conține informații despre sarcină și starea acesteia, cum ar fi termenul limită, cesionarul, descrierea etc."
            Card_2_Text=" - Fiecare coloană de pe tablă reprezintă o etapă diferită a fluxului dvs. de lucru. Cardurile trec prin fluxul de lucru până la finalizarea completă a acestora."
            Card_3_Text="Restricționează cantitatea maximă de sarcini în diferitele etape ale fluxului de lucru. "
            Card_4_Text="Acestea sunt benzi orizontale pe care le puteți utiliza pentru a separa diferite activități, echipe, clase de servicii și multe altele."
            Heading="Sistemul Kanban"
            Heading_small_1="Fiecare membru al echipei poate fi integrat"
            Image_1_src="/images/icons/img_2.png"
            Heading_small_2="Kanban aduce flexibilitate"
            Image_2_src="/images/icons/img_1.png"
            ParagraphText_1="Ideea de bază a Kanban este vizualizarea fiecărei lucrări pe o tablă. În acest fel, placa Kanban se transformă într-un hub informațional central. Toate sarcinile sunt vizibile și nu se pierd niciodată, ceea ce aduce transparență întregului proces de lucru. Fiecare membru al echipei poate avea o actualizare rapidă asupra stării fiecărui proiect sau sarcină.Odată ce construiți o placă Kanban și o umpleți cu cărți, veți vedea că unele coloane vor fi supraaglomerate cu sarcini. Acest lucru vă va ajuta să evidențiați blocajele în fluxul de lucru și să le abordați corect. De exemplu, vă puteți da seama cât de mari ar trebui să fie sarcinile, astfel încât echipa dvs. să le poată avansa cu promptitudine."
            ParagraphText_2="Dacă aruncați o privire asupra principiilor de bază Kanban, veți înțelege rapid că orice echipă o poate folosi în organizația dvs. de la cercetare și dezvoltare la resurse umane.

            Principalul motiv este că Kanban respectă starea actuală a organizației dvs. și nu necesită schimbări revoluționare. Dimpotrivă, aceasta sugerează că ar trebui să urmăriți schimbări progresive, evolutive și să vă îmbunătățiți continuu."
            Button_text="Contactează-ne"
            Button_link="/contact"
        /> <TextContainer 
        pageTitle="1. Vizualizați fluxul de lucru" 
        paragraphText_1="Primul și cel mai important lucru pentru dvs. este să înțelegeți ce este necesar pentru a obține un articol de la o cerere la un produs livrabil. Numai după ce înțelegeți modul în care funcționează fluxul de lucru în prezent, puteți aspira să îl îmbunătățiți, făcând ajustările necesare."
        paragraphText_2="Când începeți să lucrați la articolul X, îl trageți din coloana „De făcut”, iar când este finalizat, îl mutați la „Terminat”. În acest fel, puteți urmări cu ușurință progresul și observa blocaje." 
    />  
           
    <FullImage
    image_src="images/tutorial/img_1.png"
/>  <Img_right_text_left

image_src="images/tutorial/img_2.png"
image_alt="Imagine multitask"
page_title="2. Limitați lucrările în curs"
page_text_1="Una dintre funcțiile principale ale Kanban este de a asigura un număr ușor de gestionat de articole active în desfășurare la un moment dat. Dacă nu există limite de lucru în curs , nu faceți Kanban. Trecerea la jumătatea focalizării unei echipe va afecta în general procesul, iar multitasking-ul este o cale sigură de a genera deșeuri și ineficiență"
page_text_2="Limitarea WIP înseamnă implementarea unui sistem de tragere pe piese sau pe fluxul de lucru complet. Setarea numărului maxim de obiecte pe etapă asigură faptul că o carte este „trasă” în pasul următor doar când există capacitate disponibilă. Astfel de constrângeri vor ilumina rapid zonele cu probleme din fluxul dvs., astfel încât să le puteți identifica și rezolva."
/> <Img_left_text_right

image_src="images/tutorial/img_3.png"
image_alt="Imagine Flux"
page_title="3. Gestionați fluxul"
page_text_1="Gestionarea fluxului este despre gestionarea muncii, dar nu a oamenilor. Prin flux, înțelegem mișcarea articolelor de lucru prin procesul de producție."
page_text_2="Unul dintre obiectivele principale la implementarea unui sistem Kanban este de a crea un flux lin, sănătos. În loc să micro-gestionăm oamenii și să încercăm să-i ținem ocupați tot timpul, ar trebui să ne concentrăm pe gestionarea proceselor de lucru și înțelegerea modului de a obține acea muncă mai rapid prin sistem. Acest lucru ar însemna că sistemul nostru Kanban creează valoare mai rapid."
/> 
<TextContainer 
pageTitle="4. Faceți politicile de proces explicite" 
paragraphText_1="Nu poți îmbunătăți ceva ce nu înțelegi. Acesta este motivul pentru care procesul dvs. ar trebui să fie clar definit, publicat și socializat. Oamenii nu s-ar asocia și participa la ceva ce nu cred că ar fi util."
paragraphText_2="Atunci când toată lumea este familiarizată cu obiectivul comun, ar putea să lucreze și să ia decizii cu privire la o schimbare care va avea un impact pozitiv."
 
/> <TextContainer 
pageTitle="5. Bucle de feedback" 
paragraphText_1="Pentru echipele și companiile care doresc să fie mai agile, implementarea unor bucle de feedback este un pas obligatoriu. Acestea se asigură că organizațiile răspund în mod adecvat la schimbările potențiale și permit transferul de cunoștințe între părțile interesate. Un exemplu de astfel de buclă de feedback este întâlnirea zilnică de stand-up pentru sincronizarea echipei. Are loc în fața consiliului Kanban și fiecare membru le spune celorlalți ce au făcut în ziua precedentă și ce vor face astăzi."
paragraphText_2="Există, de asemenea, revizuirea furnizării de servicii, revizuirea operațiunilor, revizuirea strategiei și întâlnirile de revizuire a riscurilor. Frecvența depinde de mulți factori, dar ideea este că acestea sunt regulate, la o oră strict fixă, direct la obiect și niciodată inutile de lungi."
paragraphText_3="Durata medie ideală a unui stand up ar trebui să fie între 10-15 minute, iar altele pot ajunge până la o oră sau mai mult, în funcție de dimensiunea echipei și subiecte."
 
/> 
<FullImage
    image_src="images/tutorial/img_4.png"
/>
<TextContainer 
pageTitle="6. Îmbunătățirea în colaborare (folosind modele și metoda științifică)" 
paragraphText_1="Modul de a realiza o îmbunătățire continuă și o schimbare durabilă în cadrul unei organizații este printr-o viziune comună a unui viitor mai bun și o înțelegere colectivă a problemelor care trebuie rezolvate."
paragraphText_2="Echipele cu o înțelegere comună a obiectivelor, fluxului de lucru, procesului și riscurilor lor sunt mai susceptibile de a construi o înțelegere comună a unei probleme și de a lucra împreună în vederea îmbunătățirii."

 
/> 
<FullVideo
    video_src="images/tutorial/vid_1.mp4"
/>


             
                <div className="pb-50">
                    <Partner />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Tutoriale;