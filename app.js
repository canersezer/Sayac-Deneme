const dakika = document.getElementById('dakika');
const saniye = document.getElementById('saniye')

// secilen degerleri tutuma

const secilenDk = document.getElementById('secilenDakika')
const secilenSn = document.getElementById('secilenSaniye')


// Butonlari tutma

const baslat = document.getElementById('baslat')
const sifirla = document.getElementById('reset')

let reset= false;

//secilen dk dakikaya saniyeyi saniyeyeyle degistir
// bir tiklanma fonsiyonu olustur baslata tiklaninca setintervalle geri saysin
//buttona eris saniyeye -- yap -1 geldiginde dakikayi bir eksit
// reset ayari icin bir boolen deger ver tiklaninca false olsun
secilenDk.addEventListener ('change', ()=>{
    dakika.textContent = 
    secilenDk.value < 10 ? '0'+secilenDk.value : secilenDk.value

})
secilenSn.addEventListener('change', ()=>{
    saniye.textContent =
    secilenSn.value < 10 ? '0'+secilenSn.value : secilenSn.value
})

baslat.addEventListener('click',startTimer )


function startTimer() {
    let dk = secilenDk.value
    let sn = secilenSn.value
    const interval = setInterval(()=>{
        sn --;
        if(sn == -0-1){
            dk --;
            sn = 59;
           
         }

         saniye.textContent = sn;
         dakika.textContent = dk;
         
         sifirla.addEventListener('click',()=> {
            reset= true
            saniye.textContent = '00'
            dakika.textContent = '00'
            clearInterval(interval)
            secilenDk.value == '00'
            secilenSn.value == '00'
            return})
         
    },1000)}
    

