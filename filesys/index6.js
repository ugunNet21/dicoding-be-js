const fs = require('fs');

// Nama file yang akan dibaca
const namaFile = './file.txt';

// Membaca isi file teks
fs.readFile(namaFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Terjadi kesalahan dalam membaca file:', err);
    return;
  }

  // Memisahkan setiap baris dalam file
  const baris = data.split('\n');

  // Menghasilkan output
  console.log('Di hari minggu saya akan:');
  baris.forEach((kegiatan, index) => {
    console.log(`${index + 1}. ${kegiatan}`);
  });
});
