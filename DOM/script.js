

// =====================================
// 1. Menggunakan getElementById
// =====================================
const btnJudul = document.getElementById("btn-ubah-judul");

btnJudul .addEventListener("click", function(){
    // mencari 1 elemen spesifik berdasarkan id
    const  judulUtama = document.getElementById("judul-dashboard");
    judulUtama.textContent = "Dashboard  Super aktif";
    judulUtama.style.color = "#dd196b";
});

// 2. menggunakan getElementByClassName
// =====================================
const btnKartu = document.getElementById("btn-ubah-kartu");

btnKartu.addEventListener("click",function(){
    // mencari SEMUA element dengan class 'kartu-notifikasi'
    // hasilnya berupa HTMLCollection (seperti array)
    const semuaKartu = document.getElementsByClassName("kartu-notifikasi");

    // karena hasilnya banyak, kita pakai loop (perulangan)
    for(let i = 0; i < semuaKartu.length; i++) {
        semuaKartu[i].style.backgroundColor = "#ffcaddff" // latar
        semuaKartu[i].style.borderleftColor = "#e8619cff" // garis pinggir
    }
});

// 3. Menggunakan getElemenByTagName
// =================================

const btnTeks = document.getElementById("btn-ubah-teks");

btnTeks.addEventListener("Click", function(){
    //mencari SEMUA element berdasarkan nama tag HTML (<p>)
    const semuaParagraph = document.getElementsByTagName("p");

    for (let i= 0; i < semuaParagraph.length; i++) {
        semuaParagraph[i].style.fontStyle = "italic";
        semuaParagraph[i].style.color = "#bb1549ff";
    }
});

//4. Menggunakan queryselector 
//============================
 const btnPanel = document.getElementById("btn-ubah-panel");

 btnPanel.addEventListener("Click", function () {
    //Mencari  elemen PERTAMA yang cocok dengan pemilih CSS (.panel-kontrol)
    panel = document.querySelector(".panel-control");
    panel.style.border = "3px dashed #fd1471ff"; // garis putus putus biru
    panel.style.backgroundColor = "#ffcde2ff"; // latar biru muda
});
    


//5. menggunakan QueryselectorAll
//================================
const btnTombolGaya = document.getElementById("btn-ubah-judul");

btnTombolGaya.addEventListener("Click", function() {
    //mencari SEMUA elemen yang cocok dengan pemilih css (.tombol-aksi)
    //hasilnya berupa Nodelist, sehingga bisa menggunakan metode forEach()
     semuaTombol.forEach(function(tombol) {
        tombol.style.backgroundColor = "#fd147dff"; // warna biru gelap 
        tombol.style.borderRadius = "20px"; // membuat ujungnya bulat 
    });
});
