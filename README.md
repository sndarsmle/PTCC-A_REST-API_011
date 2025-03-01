# PTCC-A REST API 011 - Notes App

## 📌 Deskripsi
Ini merupakan project aplikasi notes berbasis **MySQL, Express, React, Node.js** dengan styling menggunakan **Bulma CSS**. Aplikasi ini memungkinkan pengguna untuk menambahkan, mengedit, dan menghapus catatan.

## 🚀 Teknologi yang Digunakan
- **Frontend:** React.js + Vite
- **Backend:** Node.js, Express.js, Sequelize, MySQL
- **Styling:** Bulma CSS
- **State Management:** useState & useEffect
- **Ikon:** React Icons
- **Live Reloading:** Nodemon untuk backend

## 📂 Struktur Folder
```
📦 PTCC-A_REST-API_011
 ┣ 📂 backend
 ┃ ┣ 📂 config
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routers
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 package-lock.json
 ┃ ┣ 📜 .gitignore
 ┣ 📂 frontend
 ┃ ┣ 📂 public
 ┃ ┣ 📂 src
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 package-lock.json
 ┃ ┣ 📜 vite.config.js
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 .gitignore
 ┃ ┗ 📜 README.md
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```

## 🛠️ Instalasi & Menjalankan Proyek

### **1️⃣ Clone Repository**
```sh
git clone https://github.com/sndarsmle/PTCC-A_REST-API_011.git
cd PTCC-A_REST-API_011
```

### **2️⃣ Setup Backend**
```sh
cd backend
npm install
```
**Konfigurasi Database:**
- Pastikan MySQL sudah terinstal dan buat database bernama `tcc_t2`.
- Buat file `.env` di dalam folder `backend` dan tambahkan:
```env
DB_NAME=tcc_t2
DB_USER=root
DB_PASS=
DB_HOST=localhost
DB_DIALECT=mysql
```
- Jalankan server backend dengan **Nodemon**
```
```
Backend akan berjalan di `http://localhost:5000`

### **3️⃣ Setup Frontend**
```sh
cd ../frontend
npm install
npm run dev
```
Frontend akan berjalan di `http://localhost:5173`

## 📌 API Endpoints
| Method | Endpoint              | Deskripsi              |
|--------|----------------------|------------------------|
| GET    | /notes               | Mendapatkan semua catatan |
| GET    | /notes/:id           | Mendapatkan satu catatan berdasarkan ID |
| POST   | /add-notes           | Menambahkan catatan baru |
| PUT    | /edit-notes/:id      | Mengedit catatan berdasarkan ID |
| DELETE | /delete-notes/:id    | Menghapus catatan berdasarkan ID |

## 🎨 UI Preview
Tampilan aplikasi dibuat menggunakan **Bulma CSS** dengan tampilan responsif dan clean.

## 🏆 Fitur
✅ Tambah, edit, dan hapus catatan.  
✅ Database MySQL dengan Sequelize ORM.  
✅ Frontend dengan React.js + Vite.  
✅ Styling menggunakan Bulma CSS.  
✅ Live reload di backend menggunakan Nodemon.  


