import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function NeptuneStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <div id="struc-neptune">
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Neptunun daxili quruluşu Uranın daxili quruluşuna oxşardır. Neptunun
            atmosferi planetin ümumi kütləsinin 5-10%-ni, kənardan mərkəzə qədər
            olan məsafənin isə 10-20%-ni təşkil edir. Neptunda atmosfer təzyiqi
            10 GPa-ya bərabərdir ki, bu göstərici Yerdəki atmosfer təzyiqindən
            100000 dəfə çoxdur. Metan, Ammonyak və Su miqdarı atmosferin aşağı
            hissələrində daha yüksəkdir.
          </p>
          <p>
            Neptunun nüvəsi Dəmir, Nikel və Silikatlardan təşkil olunmuşdur və
            Yerin kütləsindən 1,2 dəfə çox kütləyə sahibdir.[51] Nüvənin
            mərkəzində təzyiq Yerin mərkəzində olanın iki qatı qədər, yəni 7
            Mbar (700 GPa), temperatur isə təqribən 5100 °C-dir.
          </p>
          <p>
            <h3> Atmosferi </h3>
            Neptunun atmosferinin 80%-ni Hidrogen, 19%-ni isə Helium təşkil
            edir. Atmosferdə az miqdarda Metana da rast gəlinir. Metanın
            görünən udulma zolaqlarının qırmızı və infraqırmızı spektrində 600
            nm-dən çox dalğa uzunluğu vardır. Neptunun atmosferində Metanın
            olması ona görünən göy rəngini vermişdir. Uran da eyni səbəbdən
            firuzəyi rəngdə görünür. Uran və Neptunun atmosferindəki Metan
            miqdarı çox yaxın olduğu üçün, rənglərin fərqlənməsinin səbəbinin
            hələ məlum olmayan atmosfer qarışıqlarının olması düşünülür.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://www.americanscientist.org/sites/americanscientist.org/files/2018-106-5-285-kraus-1-figrt.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Neptune_clouds.jpg/200px-Neptune_clouds.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfqxGfJbJ4xp4C1JYpbHPZX_H5hwx_VIKHg&usqp=CAU"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeptuneStruc;
