//Html ve Javascript Bağlantılar
let alinti = document.getElementById('alinti');
let yazar = document.getElementById('yazar');
let btnTwitter = document.getElementById('twitter');
let yenibtn = document.getElementById('yeni-alinti');


const yeniAlinti = () => {
    const rastgeleSayi = Math.random();
    //RastgeleSayi 
    const num = Math.floor(rastgeleSayi * lokalApi.length);
    // Lokal Api
    const alintim = lokalApi[num];
    // Alinti ve Yazar web sayfasinda göstermek
    alinti.textContent = alintim.text;
    yazar.textContent = alintim.author;
}
//Sayfa Yükleme İşlemi Alıntı
window.addEventListener('load',yeniAlinti);
// Yeni Alıntı
yenibtn.addEventListener('click',yeniAlinti);
//Twitter Paylaşma
const twitterAlinti = () =>{
    //Twitter Url
    let twitterURL = `https://twitter.com/intent/tweet?text= ${alinti.textContent} - ${yazar.textContent}`;
    window.open(twitterURL ,'_blank');
}
btnTwitter.addEventListener('click',twitterAlinti);