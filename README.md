# Showroom Motor Server

#### nama saya ✨ahmad sofi sidik✨, mahasiswa jurusan teknologi informasi di universitas bina sarana informatika. projek ini adalah use case yang saya buat kurang dari sebulan dalam rangka mengikuti lomba di salah satu platform pembelajaran di indonesia. dalam case ini saya mendapatkan client langsung dari teman saya yang mempunyai SHOWROOM MOTOR dan berkeinginan ingin mengembangkan bisnisnya pada platform digital supaya lebih gampang untuk diakses. oleh karena itu saya berharap dengan adanya projek ini bisa menunjukan kemampuan saya dalam mengembangkan perangkat lunak dan bisa memberi efek positif kepada khalayak umum dan terkhusus pada diri saya.

## 🚀 Teknologi yang digunakan:

- TypeScript
- Express
- Prisma
- MySQL
- JSON Web Token (JWT)
- bcrypt
- Joi

## 🚀 Fitur:

### 🌟 Manajemen Pengguna:

- Register dan login pengguna
- Mengelola profil pengguna

### 🌟 Manajemen Motor:

- Menambahkan motor baru
- Mengubah informasi motor
- Menghapus motor
- Mencari motor berdasarkan merek, model, atau harga

### 🌟 Manajemen Transaksi:

- Menambahkan transaksi baru
- Menghapus transaksi
- Menampilkan transaksi berdasarkan user yang login

## 🚀 Instalasi:

- Clone repositori ini.
- Install dependensi:

```bash
npm install
```

- Konfigurasi database MySQL di file .env
- generate prisma migrate

```bash
npx prisma migrate dev --name init
```

- Jalankan server:

```bash
npm run dev
```
