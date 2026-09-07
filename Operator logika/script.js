// OPERATOR LOGIKA AND
let kondisi1 = true;
let kondisi2 = false;
let hasil = kondisi1 && kondisi2; 
console.log(hasil);
//hasilnya false karena kedua kondisi harus benar untuk menghasilkan true

// OPERATOR LOGIKA OR
let kondisi3 = true;
let kondisi4 = false;
let hasilOR = kondisi3 || kondisi4; 
console.log(hasilOR);

// OPERATOR LOGIKA NOT
let kondisi = true;
let hasilNOT = kondisi; // HASILNYA FALSE KARENA OPERATOR NOT MEMBALIK KONDISI
console.log(hasilNOT);

// GABUNGAN OPERATOR LOGIKA
let usia = 25;
let memilikiKartu = true;
let hasilKARTU = (usia >= 18) && memilikiKartu; // HASILNYA TRUE KARENA KEDUA KONDISI BENAR
console.log(hasilKARTU);
