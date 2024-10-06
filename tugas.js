class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }
  infokapal() {
    return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
  }
  luas() {
    return this.panjang * this.lebar;
  }
  jenisKapal() {
    return this.jenis;
  }
  detail() {
    return `${this.infokapal()} Luas kapal: ${this.luas()} m².`;
  }
}

class KapalPenumpang extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
    super(nama, jenis, panjang, lebar);
    this.kapasitasPenumpang = kapasitasPenumpang;
  }

  infokapal() {
    return `${super.infokapal()} Kapal ini memiliki kapasitas ${
      this.kapasitasPenumpang
    } orang.`;
  }

  rasioLuasPerPenumpang() {
    return this.luas() / this.kapasitasPenumpang;
  }
  apakahPenuh(jumlahPenumpang) {
    return jumlahPenumpang >= this.kapasitasPenumpang;
  }
  kapasitasTersisa(jumlahPenumpang) {
    return this.kapasitasPenumpang - jumlahPenumpang;
  }
  infoKapasitas() {
    return `Kapasitas total: ${
      this.kapasitasPenumpang
    } orang, Kapasitas tersisa: ${this.kapasitasTersisa(0)} orang.`;
  }
}

class KapalKargo extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitasKargo) {
    super(nama, jenis, panjang, lebar);
    this.kapasitasKargo = kapasitasKargo;
  }
  infokapal() {
    return `${super.infokapal()} Kapal ini memiliki kapasitas kargo ${
      this.kapasitasKargo
    } ton.`;
  }
  infoKargo() {
    return `Kapal ${this.nama} dapat mengangkut ${this.kapasitasKargo} ton barang.`;
  }
  kargoTersisa(jumlahKargo) {
    return this.kapasitasKargo - jumlahKargo;
  }
  apakahKargoPenuh(jumlahKargo) {
    return jumlahKargo >= this.kapasitasKargo;
  }
  detailKargo() {
    return `${this.infokapal()} Kapasitas kargo tersisa: ${this.kargoTersisa(
      0
    )} ton.`;
  }
}

class KapalPesiar extends Kapal {
  constructor(nama, jenis, panjang, lebar, fasilitas) {
    super(nama, jenis, panjang, lebar);
    this.fasilitas = fasilitas;
  }
  infokapal() {
    return `${super.infokapal()} Kapal ini dilengkapi dengan fasilitas: ${this.fasilitas.join(
      ", "
    )}.`;
  }
  infoFasilitas() {
    return `Fasilitas di kapal ${this.nama}: ${this.fasilitas.join(", ")}.`;
  }
  tambahFasilitas(fasilitasBaru) {
    this.fasilitas.push(fasilitasBaru);
  }
  hapusFasilitas(fasilitasHapus) {
    this.fasilitas = this.fasilitas.filter((f) => f !== fasilitasHapus);
  }
  apakahFasilitasTersedia(fasilitasCek) {
    return this.fasilitas.includes(fasilitasCek);
  }
}
const kapalferry = new KapalPenumpang("milik khansa", "Ferry", 200, 100, 600); // Contoh penggunaan
console.log(kapalferry.infokapal());
console.log(kapalferry.infoKapasitas());
console.log(
  `Rasio luas per penumpang: ${kapalferry
    .rasioLuasPerPenumpang()
    .toFixed(2)} m²/orang`
);

const kapalkargo = new KapalKargo("Kargo Hebat", "Kargo", 150, 50, 1000);
console.log(kapalkargo.infokapal());
console.log(kapalkargo.infoKargo());
console.log(kapalkargo.detailKargo());

const kapalpesiar = new KapalPesiar("Liburan Bahagia", "Pesiar", 250, 60, [
  "Kolam Renang",
  "Restoran",
  "Spa",
]);
console.log(kapalpesiar.infokapal());
console.log(kapalpesiar.infoFasilitas());
kapalpesiar.tambahFasilitas("Gym");
console.log(kapalpesiar.infoFasilitas());
kapalpesiar.hapusFasilitas("Restoran");
console.log(kapalpesiar.infoFasilitas());
console.log(
  `Apakah fasilitas Spa tersedia? ${
    kapalpesiar.apakahFasilitasTersedia("Spa") ? "Ya" : "Tidak"
  }`
);
