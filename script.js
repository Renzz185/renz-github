// ==========================================================
// File: script.js
// JavaScript untuk interaksi di Blog Narendra Warih Kusuma
// ==========================================================

// 1. Fungsi untuk mengubah warna latar belakang artikel saat mouse masuk (onmouseover)
function ubahWarna(element) {
    // Mengubah warna latar belakang menjadi sedikit lebih terang atau aksen
    element.style.backgroundColor = '#e9ecef'; // Sesuai dengan --hover-color di CSS
    
    // Menambahkan bayangan untuk kesan "pop out"
    element.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
}

// 2. Fungsi untuk mengembalikan warna latar belakang artikel saat mouse keluar (onmouseout)
function kembalikanWarna(element) {
    // Mengembalikan ke warna latar belakang kartu default
    element.style.backgroundColor = '#ffffff'; // Sesuai dengan --card-background di CSS
    
    // Menghapus bayangan
    element.style.boxShadow = 'none';
}

// 3. Fungsi untuk menampilkan pesan (alert) saat mengklik "Baca Selengkapnya" pada artikel pertama
function tampilkanPesan() {
    alert("Anda akan diarahkan ke halaman artikel Laptop! Selamat membaca dan belajar finansial.");
}


