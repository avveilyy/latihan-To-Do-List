// Mengubah tulisan greeting
document.getElementById('greeting').innerText = 'HIII';


// ================= ALERT =================
document.getElementById('btnalert').addEventListener('click', function () {
    alert('Halo, ini adalah pesan peringatan dari alert.');
});


// ================= CONFIRM =================
document.getElementById('btnconfirm').addEventListener('click', function () {

    const yakin = confirm('Apakah kamu yakin ingin menghapus data ini?');

    if (yakin) {
        alert('Kamu menekan OK. Data dihapus!');
    } else {
        alert('Kamu menekan Cancel. Tindakan dibatalkan!');
    }

});


// ================= PROMPT =================
document.getElementById('btnprompt').addEventListener('click', function () {

    const nama = prompt('Siapa nama kamu?');

    if (nama === null) {
        alert('Kamu membatalkan pengisian nama.');
    } else if (nama.trim() === '') {
        alert('Nama tidak boleh kosong!');
    } else {
        alert('Halo ' + nama + ', selamat datang!');
    }

});


// ================= CONSOLE =================
document.getElementById('btnconsole').addEventListener('click', function () {

    // Membersihkan console terlebih dahulu
    console.clear();

    console.log('Ini adalah pesan dari console.log');
    console.warn('Ini adalah pesan peringatan dari console.warn');
    console.error('Ini adalah pesan kesalahan dari console.error');
    console.info('Ini adalah pesan informasi dari console.info');

    // Data siswa
    const dataSiswa = [
        { nama: 'Alice', umur: 25 },
        { nama: 'Bob', umur: 30 },
        { nama: 'Charlie', umur: 35 }
    ];

    // Menampilkan array sebagai tabel
    console.table(dataSiswa);
});