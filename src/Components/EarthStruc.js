import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../img/eaeth.jpeg";
function EarthStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    < div id="struc-earth">
      <div className="container" data-aos="fade-up" >
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Yer kürəsi digər daxili planetlər kimi kimyəvi və ya fiziki
            (reoloji) xüsusiyyətləri ilə təbəqələrə bölünür. Xarici təbəqə
            yüksək özlü bərk mantiya ilə örtülmüş olan kimyəvi cəhətdən
            fərqlənən silikatlı bir qabıqdan ibarətdir. Yer qabığı Moxoroviçiç
            sərhədi ilə mantiyadan ayrılır. Yer qabığının qalınlığı okeanlar
            üçün təxminən 6 kilometr (3,7 mil), materiklər üçün isə (30–50
            kilometr (19–31 mil) arasında dəyişir. Yer qabığı və soyuq, sərt,
            üst mantiya birlikdə litosfer adlanır və tektonik plitələr burada
            meydana gəlmişdir. Litosferin altında astenosfer, litosferin üstündə
            hərəkət etdiyi nisbətən aşağı özlü təbəqə yerləşir.
          </p>
          <p>
            Yerin daxili istiliyi planetar akkresiyadan yaranan qalıq istilik
            (təxminən 20%) və radioaktiv çürümə (80%) nəticəsində yaranan
            istiliyin birləşməsindən yaranır.[100] Yerdəki əsas istilik istehsal
            edən izotoplar kalium-40 (40K), uran-238 (238U) və torium-232
            (232Th)-dir.[101] Mərkəzdə temperatur 6 000 °C (10 830 °F)-ə
            qədər,[102] təzyiq isə 360 giqapaskal (52×106 psi)-a çata
            bilər.[103] İstiliyin çox hissəsi radioaktiv çürümə ilə təmin
            olunduğuna görə elm adamları Yer tarixinin əvvəlində, qısa yarım
            ömrü olan izotopların tükənməsindən əvvəl Yerin istilik istehsalının
            daha yüksək olduğunu bildirirlər. Təxminən 3 milyon il əvvəl
            bugünkünün iki qatı qədər istilik istehsal edilir, mantiyada
            konveksiya və tektonik plitələrin sürəti artır və bunlar bu gün
            nadir hallarda meydana gələn komatitlər kimi qeyri-adi süxurların
            istehsalına imkan verirdi.
          </p>
          <p>
            <h3>AY</h3>
            Ay nisbətən böyük, diametri Yer kürəsinin diametrinin dörddə birinə
            bərabər olan, planetə bənzər bir təbii peykdir. Cırtdan planet
            Plutona nisbətən daha böyük olan peyki Xaron istisna olmaqla, Günəş
            sistemində orbitalına daxil olduğu planetə nisbətən ən böyük peyk
            Aydır.Yer ilə Ay arasındakı cazibə cazibəsi Yer kürəsində qabarma və
            çəkilmələrə səbəb olur. Bu zaman Aya olunan eyni təsir onun orbit
            kilidlənməsinə səbəb olur: onun fırlanma müddəti Yerin orbitinə
            çıxması ilə eyniləşir. Nəticədə həmişə Ayın eyni üzü planetə tərəf
            dönmüş olur. Ay Yer kürəsi ətrafında fırlanarkən, üzünün müxtəlif
            hissələri Günəş tərəfindən işıqlandırılır və ay fazalarına səbəb
            olur.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://plustatic.com/1965/conversions/capas-tierra-large.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src={img}
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://i.pinimg.com/originals/9d/dd/93/9ddd9324e969b21fb1373263a80d9184.jpg"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarthStruc;
