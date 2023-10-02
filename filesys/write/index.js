const fs = require("fs");

// Membuka file input.txt sebagai Readable Stream
const readableStream = fs.createReadStream("input.txt", "utf8");

// Membuka file output.txt sebagai Writable Stream
const writableStream = fs.createWriteStream("output.txt", "utf8");

// Event handler untuk mengirimkan data ke Writable Stream dengan pemisah baris baru
readableStream.on("data", (chunk) => {
  writableStream.write(chunk + "\n", (err) => {
    if (err) {
      console.error("Terjadi kesalahan saat menulis ke file output.txt:", err);
    }
  });
});

// Event handler untuk menangani ketika proses pembacaan selesai
readableStream.on("end", () => {
  console.log("Proses selesai. Data telah ditulis ulang ke output.txt.");
});

// Menangani kesalahan jika ada
readableStream.on("error", (err) => {
  console.error("Terjadi kesalahan saat membaca file input.txt:", err);
});

writableStream.on("error", (err) => {
  console.error("Terjadi kesalahan saat menulis ke file output.txt:", err);
});
