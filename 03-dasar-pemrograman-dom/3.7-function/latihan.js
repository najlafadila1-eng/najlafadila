function totalBelanja(harga, jumlah) {
  return harga * jumlah;
}

const barangTersedia = [
  { nama: "Pensil", harga: 2000 },
  { nama: "Buku", harga: 5000 },
  { nama: "Penghapus", harga: 1500 }
];

function cariNama(nama) {
  return barangTersedia.find(barang => barang.nama === nama);
}

console.log(cariNama("Buku"));
console.log(totalBelanja(2000, 3));