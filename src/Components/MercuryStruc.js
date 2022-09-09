import React, { useEffect } from "react";
import AOS from "aos";
import {Link} from "react-scroll"
import "aos/dist/aos.css";
function MercuryStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <div id="struc-mercury">
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Merkuri Günəş sistemindəki dörd Yer qrupu planetlərdən biridir. O,
            qayalıq quruluşu ilə Yeri xatırladır. Merkuri Günəş sistemindəki ən
            kiçik planetdir. Onun radiusu 2439,7 km-dir. Günəş sisteminin ən
            böyük iki təbii peyki olan Qanimed və Titan ölçüsünə görə Merkuridən
            daha böyükdür. Merkurinin təxminən 70%-i metal, 30%-i isə silikat
            materiallarından ibarətdir. Merkuri Günəş sistemində 5,427 g/sm³
            sıxlıq göstəricisi ilə 5,515 g/sm³ sıxlığa malik olan Yerdən sonra
            ikinci yerdədir. Əgər cazibə qüvvəsinin təzyiq effekti nəzərə
            alınmasa, təzyiqsiz sıxlıq Merkuridə 5,3 g/sm³, Yerdə isə 4,4 g/sm³
            olardı.
          </p>
          <p>
            Merkurinin sıxlığı onun daxili quruluşu haqqında nəticə çıxarmağa
            imkan verir. Yerin yüksək sıxlığa malik olmasına (xüsusən də nüvə)
            cazibə qüvvəsi təzyiqinin əsaslı təsiri olsa da, Merkuri çox
            kiçikdir və daxili zonaları təzyiq səbəbindən o qədər də sıxışmır.
            Buna görə də onun belə bir yüksək sıxlığa sahib olması üçün böyük və
            dəmirlə zəngin nüvəsinin olması lazımdır.
          </p>
          <p>
            <h3> Merkuri'də həyat </h3>
            Merkurinin nüvəsində Günəş sisteminin digər böyük planetlərinin
            nüvəsində olandan daha çox dəmir tərkibi vardır. Bunun səbəbi bir
            sıra nəzəriyyələrlə izah olunmuşdur. Ən çox qəbul olunan nəzəriyyəyə
            görə Merkuri əvvəllər Günəş sisteminin qayalıq maddələrindən olan
            silikat-metal tərkibli kondrit meteorlarla eyni nisbətdə maddələrə
            malik idi və indiki kütləsindən təqribən 2,25 dəfə artıq kütləsi
            vardı. Günəş sisteminin ilkin dövrlərində Merkuri təqribən
            kütləsinin 6-da 1-i qədər kütləyə malik olan bir neçə min kilometr
            ölçüsündə planetlə toqquşmuşdur.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA.jpg"
              alt="over"
            />   
          </div>
          <div className="nasa-planet">
            <img
              src="https://images.theconversation.com/files/79353/original/image-20150426-14581-1w1t17o.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://i.pinimg.com/originals/62/a6/a3/62a6a3755ed8cc477cb91ee0c979a6b8.jpg"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MercuryStruc;
