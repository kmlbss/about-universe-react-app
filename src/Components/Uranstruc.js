import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function UranStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <div id="struc-uranus">
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Uranın kütləsi 14,5 Yer kütləsi qədərdir və 4 nəhəng planet arasında
            ən az kütləli planetdir. Onun diametri Neptunun diametrindən azca
            böyük, Yerin diametrindən isə 4 dəfə böyükdür. 1,27 q/sm3 olan
            yoğunluğu ilə Saturndan sonra ən az yoğunluğa sahib planetdir. Bu
            qiymət onu göstərir ki, planet su, metan və ammonyak kimi müxtəlif
            buzlarından təşkil olunmuşdur.
          </p>
          <p>
            Uranın strukturunun standart modelinə əsasən, o üç təbəqədən meydana
            gəlir: mərkəzdə qayalı (silikat/dəmir-nikel) nüvə, ortada buzlu
            mantiya və qaz halında olan helium/hidrogen xarici təbəqə. Nüvə 0,55
            Yer kütləsinə sahib və radiusu Uranın radiusunun 20%-dən azdır.
            Mantiyasının kütləsi 13,4 Yer kütləsi qədərdir. Üst atmosferi 0,5
            Yer kütləsi qədərdir və Uranın radiusunun 20%-nə qədər genişlənir.
          </p>
          <p>
            <h3>Atmosferi </h3>
            Uranın daxili hissələrinin yaxşı təyin edilmiş bərk səthi olmamasına
            rəğmən, Uranın məsafədən zondlamağa əlverişli olan ən xaricdəki
            qazvari təbəqəsi atmosfer adlandırılır. Məsafədən zondlamaq
            əlverişliliyi 1 bar (100 kPa) səviyyəsinin təxminən 300 km-ə qədər,
            müvafiq olaraq, 100 barlıq (10MPa) təzyiq və 320 K (47 °C; 116 °F)
            temperatura qədər uzanır.1 bar təzyiq səviyyəsi altında olan
            incə termosfer, nominal səthdən iki planet radiusu qədər genişlənir.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1807a-f-3200x4000.png"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uranus_clouds.jpg/220px-Uranus_clouds.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://media.visualstories.com/uploads/images/1/9219318/9219318-3314653-696_uranus_p.png"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UranStruc;
