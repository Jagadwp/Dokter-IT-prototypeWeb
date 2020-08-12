//alert("Terimakasih Dicoding");
//Tombol Rating Situs
const buttons = document.querySelectorAll(".star-section");
const nilai = document.querySelector("#nilai");
const nilai_2 = document.querySelector("#nilai_2");
const cheat = document.querySelector(".cheat");


cheat.addEventListener('click', function(event) {
    document.querySelector('.lima').innerText++;
});


for (let button of buttons) {
    button.addEventListener('click', function(event) {
  
        // mendapatkan objek elemen yang diklik
        const target = event.target;
        
        if (target.classList.contains('b1')) {
            nilai.innerText = "Terimakasih...";
            nilai_2.innerText = "Penilaian anda sangat berguna untuk evaluasi kami";
            return;
        }
        if (target.classList.contains('b2')) {
            nilai.innerText = "Terimakasih...";
            nilai_2.innerText = "Perbaikan akan segera kami lakukan";
            return;
        }
        if (target.classList.contains('b3')) {
            nilai.innerText = "Terimakasih...";
            nilai_2.innerText = "Kami akan meningkatkan kinerja situs kami";
            return;
        }
        if (target.classList.contains('b4')) {
            nilai.innerText = "Terimakasih...";
            nilai_2.innerText = "Kami akan berusaha menjadi lebih baik";
            return;
        }
        if (target.classList.contains('b5')) {
            nilai.innerText = "Terimakasih...";
            nilai_2.innerText = "Astonishing... Absolutely World Class!!";
            return;
        }
    });
 }