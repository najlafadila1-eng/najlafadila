const barang = ["Pensil", "Buku", "Penghapus", "Penggaris", "Spidol"];

const cari = "BUKU";

const hasil = barang.filter(nama =>
  nama.toLowerCase().includes(cari.toLowerCase())
);

if (hasil.length > 0) {
  console.log("Ditemukan:", hasil);
} else {
  console.log("Barang tidak ditemukan");
}