import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function VensStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <div id="struc-venus">
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Seysmik göstəricilər və ətalət momenti haqqında məlumatlar olmadan
            Veneranın daxili quruluşu və geokimyası haqqında birbaşa çoxlu
            məlumatlar əldə etmək mümkün deyildir. Venera ilə Yer arasında ölçü
            və sıxlığın oxşarlığı səbəbindən daxili quruluşlarının da oxşar
            olduğu düşünülür. Veneranın nüvəsinin də Yerin nüvəsi kimi qismən
            ərinti halında olduğu düşünülür, çünki hər iki planet də eyni
            dərəcədə soyuyur. Veneranın Yerdən bir az daha kiçik olması daxili
            hissələrindəki təzyiqin Yerdəkindən 24% daha az olmasına səbəb olur.
            İki planet arasındakı ən önəmli fərqlilik Venerada tektonik
            tavalarla bağlı sübutların tapılmamasıdır.
          </p>
          <p>
            Ehtimal olunur ki, Veneranın qabığı ərinti halında olan mantiyanın
            üzərində hərəkət etməsi mümkün olmayacaq qədər möhkəmdir. Bu da
            planetin istilik itkisinin azalmasına və soyumasının zəifləməsinə
            səbəb olur. Bunun planetin maqnit sahəsinin olmamasının səbəbi
            olduğu düşünülür.[46] Venerada periodik olaraq baş verən qabığın
            böyük şəkildə yeniləndiyi hadisələrdə daxili istilikdən itki baş
            verir.
          </p>
          <p>
            <h3> Atmosfer və iqlimi </h3>
            Aparılan tədqiqatlar nəticəsində milyardlarla il bundan əvvəl
            Veneranın atmosferinin indiki halından daha çox Yer atmosferi ilə
            oxşarlıq təşkil etdiyini və səthində maye şəklində su ola biləcəyi
            düşüncəsi formalaşmışdır. Buna baxmayaraq 600 milyon ildən bir neçə
            milyard iləcən keçən müddət ərzində Venera atmosferində təhlükəli
            həddə çatan qazlar istixana effektinin yaranmasına səbəb olmuşdur.
         
            İstilik ətaləti və atmosferin alt təbəqəsində əsən küləklər
            Veneranın öz oxu ətrafında çox yavaş dönməsinə baxmayaraq gündüz və
            gecə istiliyi arasında demək olar ki, fərqin olmamasına səbəb olur.
            Səthə yaxın olan küləklərin sürəti saatda bir neçə kilometr olmaqla
            olduqca azdır. Buna baxmayaraq atmosferin olduqca sıx olması
            səbəbindən küləklərin səthə göstərdiyi təsir nəticəsində kiçik
            daşlar və toz hissəcikləri küləklərlə birgə daşınır. Təkcə bu faktor
            istilik, təzyiq və oksigen çatışmazlığı kimi problemləri nəzərə
            almadıqda belə insanın yeriməsi üçün çətinliklər yarada bilər
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://i.pinimg.com/originals/28/d4/7c/28d47c88993c6cecbaa9a053cf6ee9b7.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Venuspioneeruv.jpg/220px-Venuspioneeruv.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://static.scientificamerican.com/sciam/cache/file/6E476326-47FA-49E3-B1518C505C023EBD_source.jpg"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VensStruc;
