// Superclass Kapal
class Kapal {
  constructor(nama, panjang, lebar) {
    this.nama = nama;
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infokapal() {
    return `Kapal ${this.nama} berukuran ${this.panjang} m x ${this.lebar} m.`;
  }
}

// Superclass KapalPenumpang
class KapalPenumpang extends Kapal {
  constructor(nama, panjang, lebar, kapasitasPenumpang) {
    super(nama, panjang, lebar);
    this.kapasitasPenumpang = kapasitasPenumpang;
  }

  infokapal() {
    return `${super.infokapal()} Kapasitas penumpang: ${
      this.kapasitasPenumpang
    } orang.`;
  }
}

// Superclass KapalKargo
class KapalKargo extends Kapal {
  constructor(nama, panjang, lebar, kapasitasKargo) {
    super(nama, panjang, lebar);
    this.kapasitasKargo = kapasitasKargo;
  }

  infokapal() {
    return `${super.infokapal()} Kapasitas kargo: ${this.kapasitasKargo} ton.`;
  }
}

// Superclass KapalPesiar
class KapalPesiar extends Kapal {
  constructor(nama, panjang, lebar, fasilitas) {
    super(nama, panjang, lebar);
    this.fasilitas = fasilitas;
  }

  infokapal() {
    return `${super.infokapal()} Fasilitas: ${this.fasilitas.join(", ")}.`;
  }
}

// Superclass KapalTangkapan
class KapalTangkapan extends Kapal {
  constructor(nama, panjang, lebar, kapasitasTangkap) {
    super(nama, panjang, lebar);
    this.kapasitasTangkap = kapasitasTangkap;
  }

  infokapal() {
    return `${super.infokapal()} Kapasitas tangkap: ${
      this.kapasitasTangkap
    } kg.`;
  }
}

// Superclass KapalJelajah
class KapalJelajah extends Kapal {
  constructor(nama, panjang, lebar, ruteJelajah) {
    super(nama, panjang, lebar);
    this.ruteJelajah = ruteJelajah;
  }

  infokapal() {
    return `${super.infokapal()} Rute jelajah: ${this.ruteJelajah.join(", ")}.`;
  }
}

// Superclass KapalKesehatan
class KapalKesehatan extends Kapal {
  constructor(nama, panjang, lebar, kapasitasPasien) {
    super(nama, panjang, lebar);
    this.kapasitasPasien = kapasitasPasien;
  }

  infokapal() {
    return `${super.infokapal()} Kapasitas pasien: ${
      this.kapasitasPasien
    } orang.`;
  }
}

// Contoh penggunaan
const kapalList = [
  new KapalPenumpang("Ferry Merah", 200, 50, 600),
  new KapalKargo("Kargo Hebat", 150, 40, 1000),
  new KapalPesiar("Liburan Bahagia", 250, 60, [
    "Kolam Renang",
    "Restoran",
    "Spa",
  ]),
  new KapalTangkapan("Tangkapan Emas", 180, 70, 500),
  new KapalJelajah("Jelajah Laut", 300, 90, ["Karibia", "Pasifik"]),
  new KapalKesehatan("Kapal Medis", 220, 75, 100),
];

// Menggunakan polymorphism untuk mencetak informasi kapal
kapalList.forEach((kapal) => {
  console.log(kapal.infokapal());
});
