import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function JupiterStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <div id="struc-jupiter">
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Yupiterin sıxlaşmış Heliumla əhatələnmiş metal Hidrogendən ibarət
            qatı daxili nüvəyə malik olduğu düşünülür. Planetin qaz nəhəngi
            olması və aşağı sıxlığı nüvənin tərkibi ilə bağlı
            qeyri-müəyyənliklərin qalmasına səbəb olur. Yupiterin daxili
            quruluşu ilə bağlı modellərdə tez-tez nüvənin bərk maddələrdən
            təşkil olunduğu qeyd olunsa da, maddələrin yüksək temperatur və
            təzyiq altında hansı formada olması ilə bağlı dəqiq təsəvvür yoxdur.
            Planetin nüvəyə sahib olması ilə bağlı 1997-ci ildə aparılan
            qravitasiya əsaslı müşahidələrə görə, planetin ümumi kütləsinin
            4-14%-i qədərində, yəni Yerin kütləsindən 12-45 dəfə daha ağır olan
            nüvəyə sahib olduğu ehtimal olunur.
          </p>
          <p>
            Yupiterin daxili quruluşu ilə bağlı modellərdə qeyri-müəyyənliyin
            səbəbi planetin qravitasiya momenti, ekvator radiusu və 1 bar təzyiq
            dərinliyindəki istilik göstəricilərindəki xəta payının olmasıdır.
            Yuno missiyasından əldə olunan göstəricilər bu modellərin
            təkmilləşdirilməsinə imkan yaradır.
          </p>
          <p>
            <h3>Atmosferi </h3>
            upiter Günəş sistemində ən böyük planetar atmosferə sahibdir və
            qalınlığı 5000 kilometrə çatır.Yupiter səthə malik olmadığı üçün
            atmosfetin alt qatı təzyiqin 100 kPa göstəriciyə bərabər olduğu
            sərhəd hesab olunur.Bulud qatının qalınlığı təqribən 50 kilometrə
            çatır və iki hissəyə ayrılır: daha qalın olan olan əsas hissə və
            aydınlıq olan üst hissə. Bununla yanaşı, Ammonyak qatının altında
            sudan təşkil olunmuş kiçik qatın da olması ehtimal olunur. Sudan
            təşkil olunmuş buludların olması ideyasını Yupiterin atmosferində
            ildırımların çaxması dəstəkləyir.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://i.imgur.com/WZH9i7j.jpeg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://cdn.hipwallpaper.com/i/64/38/jq0RBG.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://image.winudf.com/v2/image/Y29tLndvbWNkLmp1cGl0ZXJsaXZld2FsbHBhcGVyX3NjcmVlbl84XzE1Mjc1NTMwODBfMDAy/screen-8.jpg?fakeurl=1&type=.jpg"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JupiterStruc;
