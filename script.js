// Ambil elemen-elemen yang diperlukan
const form = document.getElementById('contact-form');
const resultDiv = document.getElementById('form-result');
const welcomeDiv = document.getElementById('welcome-name');

// Pastikan form ditemukan sebelum menambah event listener (mencegah error jika salah ketik id)
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Supaya halaman tidak reload

        // Ambil nilai input berdasarkan atribut 'name'
        const nama = form.nama.value.trim();
        const email = form.email.value.trim();
        const pesan = form.pesan.value.trim();

        // ✅ Validasi sederhana
        if (!nama || !email || !pesan) {
            resultDiv.innerHTML = `<p class="error">⚠️ Semua field wajib diisi!</p>`;
            return;
        }

        // ✅ Tampilkan Welcoming Speech di Home
        if (welcomeDiv) {
            welcomeDiv.innerHTML = `<h2 style="color:#e75480; text-align: center;">Hi ${nama}! Welcome to my portfolio.</h2>`;
            
            // Otomatis scroll ke atas agar pengunjung tahu ucapan "Hi Nama" sudah muncul
            welcomeDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // ✅ Tampilkan hasil submit di bawah Contact
        resultDiv.innerHTML = `
            <div class="result-box">
                <p><strong>Status:</strong> Kirim Pesan Berhasil!</p>
                <p><strong>Nama:</strong> ${nama}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Pesan:</strong> ${pesan}</p>
            </div>
        `;

        // Reset form setelah submit
        form.reset();
    });
}