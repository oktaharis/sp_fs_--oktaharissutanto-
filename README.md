# Aplikasi Manajemen Proyek

Aplikasi kolaborasi tim untuk mengelola proyek dengan fitur real-time, dibangun menggunakan Next.js dan Prisma.

## Fitur Utama

- 🔐 **Autentikasi Pengguna** - Login/register aman dengan NextAuth
- 🏗️ **Manajemen Proyek** - Buat dan kelola proyek tim
- 👥 **Kolaborasi Tim** - Undang anggota via email dengan autocomplete
- 📋 **Papan Tugas Kanban** - Drag & drop tugas antar kolom status
- 📊 **Analitik Tugas** - Grafik distribusi tugas
- 🔄 **Update Real-time** - Sinkronisasi perubahan tugas instan
- 📤 **Ekspor Data** - Ekspor proyek ke format JSON

## Cara Menjalankan Proyek

```bash
# 1. Clone repositori
git clone 
cd  sp_fs_--oktaharissutanto-

# 2. Install dependensi
npm install

# 3. Salin file environment
cp .env.example .env

# 4. Edit file .env (isi nilai sesuai kebutuhan)
#    - DATABASE_URL: URL database (default: PostgreSql)
#    - NEXTAUTH_SECRET: String acak yang aman

# 5. Inisialisasi database
npx prisma generate
npx prisma migrate dev --name init

# 6. Jalankan aplikasi
npm run dev