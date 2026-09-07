
//variabel VAR

var nama = 'Allisenn'
function contohVar () {
    var x = 10 ;
    if (true) {
        var x = 20; //variabel x ini akan menggantikan variabel x diatas
 }
 console.log(x) //output : 20
}

// variabel LET

for (let i = 0; i <3; i ++) { 
    //kalo angka 3 nya diganti ke angka lain misalnya 4 itu angka di running bakal stop dari 0-3 tapi kalo angka 3 brrt running nya stop dari 0-2

    // angka 0 tu angka start nya dri 0-2 tapi kalo diubah ya bakal jd angka start
    

    console.log("angkaa : " + i); //output 0, 1, 2

} //output 0, 1, 2



//variabel const

const array = [1, 2, 3] ;
array.push(4); //ini diperbolehkan karena tidak 
console.log(array); // output [1, 2, 3, 4]






// CONTOH VAR ( data nya keluar seenak dia nya)

var nama = " Allisenn" ;

if (true) {
    var nama = " icenn " ; //ini menimpa variabel 'nama' yang di luar
    console.log('di dalam block: ' + nama ); // output icen
}
console.log("di luar block: " + nama); // output : andi ( ikut berubah karena tertimpa)



// CONTOH LET (bebass ganti asal ngerti caranya hhe )

let umur = 20;
if (true) {
    let umur = 25; // ini variabel baru, khusus untuk block ini saja
    console.log("di dalam blok: " + umur); // output: 25
}


// CONTOH CONST , gabisa di ubah (kekunci gabisaa di apaainn)
const kota = " Jakarta ";
if(true) {
    const kota = " Bandung "; // aman, variabel baru khusus blok yg ini
    console.log ("di dalam blok : " + kota); //output Bandung
}
 console.log("di luar blok: " + kota); // output:  Jakarta (aman, tidak tertimpa)
 // country = "surabaya": // JIKA BARIS INI DI JALANKAN, AKAN ERROR! 

