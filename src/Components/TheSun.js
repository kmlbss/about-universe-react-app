import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function TheSun() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (<div id="over-sun">
    <div className="the-sun" data-aos="fade-up">
      <div className="container">
        <div className="section-heading">
          <h2> Günəş </h2>
        </div>
        <div className="over-paragraph "> 
          <p>
            Günəş sistemin kütləsinin 99,8% -ni təşkil edən günəş sistemimizdəki
            ən böyük obyektdir.Günəş günəş sistemimizin mərkəzində yerləşir və
            dünya ondan 93 milyon mil uzaqlıqda dövr edir.Kütləvi olsa da, Günəş
            hələ digər ulduz növləri qədər böyük deyil. Sarı cırtdan ulduz kimi
            təsnif edilir.Günəşin maqnit sahəsi günəş küləyi vasitəsilə Günəş
            sisteminə yayılır.
          </p>
          <p>
            <h3> Günəşin tarixi </h3>
            Günəşin ulduz inkişafının kompüter modelləşdirməsi və nüvə
            kosmoxronologiyası metodlarından[8] istifadə olunaraq Baş
            ardıcıllıqda hesablanan yaşının 4,57 milyard il olduğu düşünülür.
            Günəşin hidrogen molekulyar buludun çökməsi ilə üçüncü nəsil T Tauri
            ulduzu kimi meydana gəldiyi düşünülür. Bu yeni yaranan ulduzun Bizim
            Qalaktikanın mərkəzindən 25-28 min işıq ili uzaqlıqdakı demək olar
            ki, dairəvi orbitinə daxil olduğu ehtimal olunur.
          </p>
          <p>
            <h3>Daxili quruluşu </h3>
            Günəş, hazırda təxminən 70% hidrogen və
            kütlə% 28 helyumdur ("metal" lar)% 2-dən azdır. Günəş hidrogenü
            nüvəsində helium halına gətirəndə bu zamanla yavaşca dəyişir.
            1968-ci ildə belçikalı alim Litium, Berillium və Borun pay
            nisbətinin əvvəl düşünülən miqdardan daha çox olduğunu
            aşkarlamışdır. 2005-ci ildə üç alim Neon miqdarının əvvəl düşünülən
            miqdardan daha çox olduğunu helioseysmik müşahidələrə əsaslanaraq
            iddia etmişdir . 1986-cı ilə qədər Günəşin helium tərkibinin Y=0,25
            olduğu düşüncəsi geniş kütlə tərəfindən qəbul olunmuşdu, ancaq bu
            tarixdə iki alim Y=0,279 miqdarının daha doğru olduğunu iddia
            etmişdir. 1970-ci illərdə bir çox elmi tədqiqatda diqqət Günəşdəki
            metal elementlərinin nisbətən çox olmasına cəmləndi. Tək ionlu metal
            elementlərinin gf dəyərləri ilk dəfə 1962-ci ildə kəşf olundu və
            dəqiqləşdirilmiş f dəyərləri 1976-cı ildə hesablandı.[50] Kobalt və
            Manqan kimi bəzi metal elementlərinin miqdar tədqiqatları çox incə
            quruluşa sahib olmaları səbəbindən çətindir.
          </p> 
        </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default TheSun;
