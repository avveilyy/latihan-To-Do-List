//array
//KALO MAU RUNNING COMMAND DLU YG GA KEPAKE BIAR BS RUNNING 
let mydata = ["icen" , "lisen" , "allisen"]
let mydata2 = new Array("icen" , "lisen" , "allisen");

//contoh penggunaan arrray
let fruits = ["apple" , "mango " , "strawberry"];
fruits.push("grape"); //menambahkan "grape" ke akhir array 
fruits.unshift("watermelon") //menambahkan "swatermelon" ke awal array 
fruits.pop(); //menghapus yang paling terakhir "grape"
fruits.shift(); //menghapus elemen pertama "watermelon"
fruits.sort(); // mengurutkan array secara alphabet
fruits.splice(2, 1); //menghapus 1 elemen dari indeks 2 "mango"


//mengubah string menjadi array 
let text = "hi , ini apaa yak";
let myArray = text.split (" ,"); // mengubah string menjadi array berdasarkan pemisah kom
//=======================
console.log(fruits); // menampilkan array yang telah dimodifikasi 
console.log(citrusFruits); //menampilkan array baru yang berisi "apple" "mango"
console.log(myArray); //menampilkan array yang dihasilkan dari string