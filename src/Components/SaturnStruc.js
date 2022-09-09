import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function SaturnStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    < div id="struc-saturn">
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Saturn əsasən hidrogen və heliumdan təşkil olunmasına baxmayaraq, bu
            maddələrin çox hissəsi qaz halında deyildir. Çünki hidrogenin
            sıxlığı 0,01 q/sm3-dən çox olduğu halda ideal olmayan maye halına
            keçir və Saturnun kütləsinin 99,9 %-ni təşkil edir. Saturnun
            daxilinə doğru getdikcə istilik, sıxlıq və təzyiq artır və bu da
            nüvənin ətrafında hidrogenin metal xüsusiyyətləri daşımasına səbəb
            olur.
          </p>
          <p>
            Saturnun nüvəsində 11.700 °C-yə çatan istilik vardır və ətrafa
            Günəşdən qəbul etdiyindən 2,5 dəfə çox enerji yayır. Yupiterin
            termal enerjisi yavaş qravitasiya sıxışdırmasının Kelvin-Helmholtz
            mexanizmi tərəfindən meydana çıxır, ancaq Saturnun kütləsi nisbətən
            az olduğundan bu planetin daxili istiliyini açıqlamaq üçün kifayət
            deyildir. Saturnun daxilində helium damcılarının yağış olaraq
            yağması kimi alternativ və ya əlavə mexanizmin isinmənin qaynağı
            olduğu düşünülür. Helium damcıları daha az sıxlıqlı hidrogenə doğru
            enərkən sürtünmə nəticəsində istiliyi sərbəst buraxır və xarici
            təbəqələrdəki helium azalır.
          </p>
          <p>
            <h3> Atmosferi</h3>
            Saturnun xarici atmosferinin tərkibi 96,3 % molekulyar hidrogen və
            3,25 % heliumdan ibarətdir. Günəşdəki heliumun bolluğu ilə
            müqayisədə Saturnda heliumun nisbəti önəmli dərəcədə azdır.
            Heliumdan daha ağır (metal) maddələrinin nisbəti bilinməsə də,
            onların Günəş sisteminin yaranmasının ilkin mərhələlərindəki
            miqdarına uyğun olduğu düşünülür. Bu ağır elementlərin ümumi
            kütləsinin Yerdən 19-31 dəfə daha ağır olduğu düşünülür və önəmli
            hissəsinin nüvə ətrafında olduğu düşünülür.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://solarsystem.nasa.gov/system/resources/detail_files/17631_Saturn_Poster_FullRez1d_2000.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PIA18354-Saturn-MethaneBands-20150906.jpg/220px-PIA18354-Saturn-MethaneBands-20150906.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIm835P6d0yoFflO9chbCAK5H3x-ewKz9TOA&usqp=CAU"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaturnStruc;
