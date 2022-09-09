import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Universe() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
  <div id="over-solar">
    <section className="universe-beginning" data-aos="fade-up">
      <div className="container">
        <div className="section-heading">
          <h2> Günəş Sistemi </h2>
        </div>
        <div className="solar-meaning">
          <div className="solar-txt">
            <p id="paragraph-left">
              Kainatda bir çox planet sistemi vardır hansi ki, planetlər bir ana
              ulduzun ətrafında dövr edir.Planet sistemimiz Samanyolu
              qalaktikasının xarici spiral qolunda yerləşir. Günəş sisteminin
              mərkəzində sistemin bilinən kütləsinin 99,86%-ni təşkil edən və
              cazibə qüvvəsi ilə sistemi ətrafında saxlayan G2V tipli bir sarı
              cırtdan ulduz olan <span style={{ color: "#bb86fc" }}>
                Günəş
              </span>
              yerləşir. Sistemin qalan kütləsinin 90%-ni isə Günəşin ətrafında
              hərəkət edən ən böyük iki cisim olan Yupiter və Saturn təşkil
              edir. Günəş və ətrafındakı bütün planetlər Samanyolu Qalaktikası
              olaraq bilinən qalaktikanın bir hissəsidir. Qalaktika cazibə
              qüvvəsi ilə bir-birinə bağlanan böyük bir ulduz, qaz və toz
              qrupudur. Müxtəlif forma və ölçülərdə olurlar. Samanyolu böyük bir
              barmaqlı spiral qalaktikadır.<span style={{display:"block", marginTop:"10px"}}> Gecə səmada gördüyümüz bütün
              ulduzlar öz Samanyolu Qalaktikamızdadır. Qalaktikamız Milky Way
              adlanır, çünki onu həqiqətən qaranlıq bir ərazidə gördükdə göydə
              südlü bir işıq zolağı kimi görünür.Günəş sistemində yerləşən ilk
              dörd planetə Yer qrupu planetlər, digər dörd planetə isə Nəhəng
              planetlər deyilir. Koyper qurşağından kənarda isə seyrək disk
              şəklində olduğu düşünülən Oort buludunun yerləşdiyi təxmin olunur.</span>
              Dörd daxili planet yüksək sıxlığa və qaya səthə sahibdir. Təbii
              peykləri ya çox azdır, ya da heç yoxdur. Bu planetlərin halqaları
              yoxdur. Daxili planetlər yüksək ərimə nöqtəsinə sahib olan
              elementlərdən formalaşmışdır. Silikatlar qatı yer qabığını və yarı
              qatı olan mantiyanı meydana gətirir. Dəmir və nikel kimi
              metallarsa planetlərin nüvəsini meydana gətirir. Daxili
              planetlərdən Venera, Yer və Marsın atmosferləri vardır. Daxili
              planetlərin hamısında göy cismlərinin toqquşması nəticəsində
              meydana gələn kraterlər, vulkanlar və vadilər kimi relyef
              formaları vardır.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Universe;
