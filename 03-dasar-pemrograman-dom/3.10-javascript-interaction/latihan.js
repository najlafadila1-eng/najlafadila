function kategoriNilai(nilai) {
  if (nilai >= 90) return "Sangat baik";
  if (nilai >= 75) return "Lulus";
  return "Belajar lagi";
}

console.log(kategoriNilai(85));