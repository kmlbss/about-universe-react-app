import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function MarsStruc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <div id="struc-mars">
      <div className="container" data-aos="fade-up">
        <div className="section-heading">
          <h2> Daxili Quruluşu </h2>
        </div>
        <div className="over-paragraph">
          <p>
            Yer kimi bu planet də təbəqələrə ayrılmaya məruz qalıb və bu da sıx,
            metallik nüvə sferasının daha az sıx materiallarla örtülməsinə səbəb
            olub. Planetin interyerinin müasir modelləri nüvə sferasının
            radiusunu təqribən 1,794 ± 65 kilometr olaraq güman edir və onu
            təqribən 16–17% kükürdlə birlikdə, əsasən, dəmir və nikeldən təşkil
            edilmiş hesab edir. Bu dəmir sulfid nüvəsi qismən mayedir və onda
            mövcud olan yüngül elementlərinin konsentrasiyası Yerin nüvəsində
            olandan iki dəfə çoxdur. Nüvə planetdəki textonik və vulkanik
            cəhətlərin çoxunu formalaşdıran silikat mantiya təbəqəsi ilə əhatə
            edilmişdir, ancaq indi hərəkətsizdir. Silisium və oksigendən başqa
            Marsın qabığında ən çox yayılan elementlər dəmir, maqnezium,
            alüminium, kalsium və kaliumdur.
          </p>
          <p>
            Mars terrestrial planetdir, yəni silisium və oksigendən təşkil
            olunan minerallar, metallar və adətən süxuru əmələ gətirən başqa
            elementlərdən təşkil olunmuşdur. Marsın səthi başlıca olaraq
            toleyitik bazaltdan təşkil olunmuşdur, ancaq bəzi hissələr bazaltdan
            daha çox silisium oksidlə zəngindir. Bu da Yerdə və ya silisium
            oksid şüşəsində olan andezitik süxurlara oxşardır. Aşağı albedolu
            regionlarda plaqioklaz feldispat vardır. Şimali aşağı albedolu
            regionlar isə təbəqə silikatları və yüksək silisiumlu şüşənin normal
            miqdarından daha çoxuna sahibdir.
          </p>
          <p>
            <h3> Mars'da həyat </h3>
            Marsın səthində suyun mövcud olması ilə bağlı başqa bir dəlil isə
            bəzən su mövcud olanda formalaşan hematit və qotit kimi spesifik
            mineralların müəyyən edilməsidir. Qədim su hövzələri və
            axınlarını təyin etdiyinə inanılan bəzi dəlillər Mars Reconnaissance
            Orbiterin aparıldığı dəqiq tədqiqatlar tərəfindən inkar edilib.
            2004-cü ildə Opportunity yarosit mineralını müəyyən edib. Bu yalnız
            asidik suyun mövcudluğu zamanı formalaşır və bu da suyun nə vaxtsa
            Marsda mövcud olduğunu göstərir. Maye su üçün yeni sübutlar
            2011-ci ilin dekabrında NASA-ın Mars roveri tərəfindən səthdə
            mineral gipsin tapılmasından gəlir.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="nasa-planets">
          <div className="nasa-planet">
            <img
              src="https://mars.nasa.gov/system/downloadable_items/36195_PIA16078.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://media.wired.com/photos/5926adef7034dc5f91bec457/191:100/w_1280,c_limit/mars1.jpg"
              alt="over"
            />
          </div>
          <div className="nasa-planet">
            <img
              src="https://mars.nasa.gov/system/news_items/main_images/8836_insight-illustration-1200.jpg"
              alt="over"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarsStruc;
