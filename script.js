document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Kamu cenderung menyukai hal-hal fiksi daripada non-fiksi.",
            name: "q1"
        },
        {
            question: "Kamu cenderung lebih mudah belajar dari catatan pelajaran yang dihias dan penuh warna.",
            name: "q2"
        },
        {
            question: "Kamu bisa menghabiskan Waktu berjam-jam untuk melakukan aktivitas seni seperti melukis dan bermusik.",
            name: "q3"
        },
        {
            question: "Ketika kamu pergi jalan-jalan, kamu cenderung spontan dalam memilih destinasi.",
            name: "q4"
        },
        {
            question: "Kamu tipe orang yang mudah membaca situasi, ekspresi, dan perubahan dalam perilaku seseorang.",
            name: "q5"
        },
        {
            question: "Kamu lebih sering membuat keputusan yang dipikirkan secara logika dan matang-matang daripada menggunakan intuisi ataupun firasat.",
            name: "q6"
        },
        {
            question: "Kamu sangat teorganisir.",
            name: "q7"
        },
        {
            question: "Kamu cenderung lebih menyukai mata pelajaran yang mengharuskan mu untuk berpikir keras dibandingkan mata pelajaran yang biasa saja.",
            name: "q8"
        },
        {
            question: "Kamu sangat fokus dan teliti pada hal-hal kecil.",
            name: "q9"
        },
        {
            question: "Kamu lebih senang tugas yang mengharuskan mu menganalisis data ataupun membuat tabel yang rumit.",
            name: "q10"
        }
    ];

    const likertOptions = [
        { label: "Sangat Tidak Setuju", value: 1 },
        { label: "Tidak Setuju", value: 2 },
        { label: "Netral", value: 3 },
        { label: "Setuju", value: 4 },
        { label: "Sangat Setuju", value: 5 }
    ];


    const mascots = {
        // Rentang skor: 10 - 24
        TheThinker: {
            image:'https://i.pinimg.com/736x/77/3b/00/773b00209466398812c60cf0222d939f.jpg',
            title: "Nana Si Logistik",
            message: "Kamu adalah individu yang sangat analitis dan cermat. Kamu suka memecah masalah menjadi bagian-bagian kecil dan menemukan solusi logis. Kekuatanmu ada pada kemampuan berpikir mendalam dan strategis.",
            tips: "Terus asah kemampuan analisis dan logika Anda. Jangan ragu untuk mendalami topik yang menarik perhatian Anda. Ingatlah bahwa tidak semua hal bisa dipecahkan dengan logika murni, terkadang intuisi juga diperlukan.",
            online: [
                "Ikuti forum diskusi atau komunitas online yang berfokus pada pemecahan masalah atau topik teknis, dan dengan aktif berpartisipasi dan menyalurkan ide serta mengembangkan kemampuan diri.",
                "Manfaatkan platform kursus online (Coursera, edX) untuk belajar lebih dalam tentang data science, pemrograman, atau filsafat.",
                "Membuat konten edukasi yang dapat membantu kemampuan nalar dan analisis mu. "
            ],
            realLife: [
                "Mengikuti komunitas di sekitarmuyang memfokuskan kamu untuk mengembangkan nalar kritismu",
                "Coba pecahkan masalah sehari-hari dengan pendekatan sistematis.",
                "Turut andil menyuarakan pendapat saat sedang diskusi dengan komunitas."
            ]
        },
        // Rentang skor: 25 - 39
        TheCollaborator: {
            image: 'https://i.pinimg.com/736x/40/0a/d4/400ad4a32f8ff0d6187d17d2059d70cb.jpg',
            title: "Cici Si Visioner",
            message: "Kamu adalah pribadi yang seimbang, mampu berkolaborasi dengan baik dan beradaptasi dengan berbagai situasi. Namun kamu lebih condong suka untuk bermimpi dan melakukan hal kreatif dibandingkan melakukan hal yang biasa-biasa saja dan tidak kreatif sama sekali",
            tips: "Terus kembangkan kemampuan komunikasi dan empati Anda. Jangan takut untuk mengambil peran kepemimpinan dalam proyek tim. Fleksibilitas adalah kunci, jadi teruslah belajar dan beradaptasi.",
            online: [
                "Bergabung ke dalam komunitas yang mendukung perkembangan ide kretif mu.",
                "Mengasah ide-ide kreatif yang anda miliki tersebut dan mulai merealisasikannya di media sosial.",
                "Membuat konten di media sosial yang dapat menjadi media untuk menyalurkan ide ide maupun hobi kreatif Anda."
            ],
            realLife: [
                "Mulai menunjukkan hasil karya mu kepada orang-orang terdekatmu sebagai langkah awal agar mendapat dorongan dari mereka.",
                "Mengasah ide-ide tersebut dengan bergabung dengan komunitas yang mendukung perkembangan karya mu.",
                "Terbuka terhadap kritik membangun dan gunakan sebagai kesempatan untuk tumbuh."
            ]
        },
        // Rentang skor: 40 - 50
        TheInnovator: {
            image: 'https://i.pinimg.com/736x/19/6b/70/196b709f8075ef70af676531373e2568.jpg',
            title: "Rio Si Strategis",
            message: "Selamat! Kamu adalah pribadi yang sangat Adaptif dan Inovatif! Kamu memiliki pandangan ke depan, tidak takut mengambil risiko, dan selalu mencari cara baru untuk meningkatkan sesuatu. Semangatmu menular dan mendorong perubahan positif.",
            tips: "Jangan pernah berhenti berinovasi! Teruslah bertanya 'mengapa tidak?' dan 'bagaimana jika?'. Kelilingi dirimu dengan orang-orang yang juga berpikiran maju dan berani bermimpi besar.",
            online: [
                "Eksplorasi tren yang ada saat ini dan kemudian mengembangkan tren tersebut menjadi sebuah karya yang unik melalui pemikiran yang matang..",
                "Ikuti kursus tentang desain berpikir (design thinking) atau kewirausahaan.",
                "Mulai blog atau channel YouTube untuk berbagi ide-ide inovatif Anda."
            ],
            realLife: [
                "Ambil inisiatif dalam proyek baru atau tantangan yang belum pernah dicoba.",
                "Mengikuti komunitas yang dapat mengasah kemampuan analisis serta ide-ide kreatif anda.",
                "Mulai menyuarakan ide-ide inovatif mu itu dalam sebuah pertemuan dengan perhitungan analisis yang tepat."
            ]
        }
    };

    // --- Bagian 3: Fungsi untuk Halaman Kuesioner (quiz.html) ---
    // Memeriksa apakah elemen 'quizForm' ada di halaman ini
    if (document.getElementById('quizForm')) {
        const questionsContainer = document.getElementById('questionsContainer');

        // Loop untuk membuat setiap pertanyaan secara dinamis
        questions.forEach((q, index) => {
            const questionBlock = document.createElement('div');
            questionBlock.classList.add('question-block');
            questionBlock.innerHTML = `<p>${index + 1}. ${q.question}</p>`; // Menampilkan teks pertanyaan

            const likertScaleDiv = document.createElement('div');
            likertScaleDiv.classList.add('likert-scale');

            // Loop untuk setiap opsi skala Likert (Sangat Tidak Setuju s/d Sangat Setuju)
            likertOptions.forEach(option => {
                const label = document.createElement('label');
                label.innerHTML = `
                    <input type="radio" name="${q.name}" value="${option.value}" required>
                    ${option.label}
                `;
                likertScaleDiv.appendChild(label); // Menambahkan opsi ke div skala Likert
            });

            questionBlock.appendChild(likertScaleDiv); // Menambahkan skala Likert ke blok pertanyaan
            questionsContainer.appendChild(questionBlock); // Menambahkan blok pertanyaan ke kontainer utama
        });

        const quizForm = document.getElementById('quizForm');
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Mencegah form untuk refresh halaman

            let totalScore = 0;
            let allAnswered = true; // Flag untuk memeriksa apakah semua pertanyaan sudah dijawab

            // Menghitung skor dari jawaban yang dipilih
            questions.forEach(q => {
                const selectedOption = document.querySelector(`input[name="${q.name}"]:checked`);
                if (selectedOption) {
                    totalScore += parseInt(selectedOption.value); // Menambahkan nilai numerik jawaban
                } else {
                    allAnswered = false; // Ada pertanyaan yang belum dijawab
                }
            });

            if (!allAnswered) {
                alert("Mohon jawab semua pertanyaan sebelum melihat hasil!");
                return; // Berhenti eksekusi jika ada yang belum dijawab
            }

            // Simpan skor ke Local Storage agar bisa diakses di halaman hasil
            localStorage.setItem('quizScore', totalScore);

            // Arahkan pengguna ke halaman hasil
            window.location.href = 'results.html';
        });
    }

    // --- Bagian 4: Fungsi untuk Halaman Hasil (results.html) ---
    // Memeriksa apakah elemen 'resultContent' ada di halaman ini
    if (document.getElementById('resultContent')) {
        const resultContent = document.getElementById('resultContent');
        const score = parseInt(localStorage.getItem('quizScore') || 0); // Ambil skor dari Local Storage, default 0 jika tidak ada

        let chosenMascot;

        // Logika penentuan maskot berdasarkan skor
        // Total skor maksimal: 10 pertanyaan * 5 (sangat setuju) = 50
        // Total skor minimal: 10 pertanyaan * 1 (sangat tidak setuju) = 10

        if (score >= 40) { // Skor tinggi: 40-50
            chosenMascot = mascots.TheInnovator;
        } else if (score >= 25) { // Skor menengah: 25-39
            chosenMascot = mascots.TheCollaborator;
        } else { // Skor rendah: 10-24
            chosenMascot = mascots.TheThinker;
        }

        // Menampilkan hasil dan detail maskot
        resultContent.innerHTML = `
            <div class="result-section">
                <h2>${chosenMascot.title}</h2>
                <img src="${chosenMascot.image}" alt="Maskot Hasil" class="result-maskot">
                <p class="result-message">${chosenMascot.message}</p>
                <p class="result-description"><strong>Deskripsi Karakter:</strong> ${chosenMascot.message}</p>
                <p class="result-tips"><strong>Tips untuk Anda:</strong> ${chosenMascot.tips}</p>
                <div class="result-application">
                    <strong>Penerapan di Kehidupan Online:</strong>
                    <ul>
                        ${chosenMascot.online.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <strong>Penerapan di Kehidupan Nyata:</strong>
                    <ul>
                        ${chosenMascot.realLife.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        // Opsi: Hapus skor dari Local Storage setelah ditampilkan agar kuis selalu baru
        // localStorage.removeItem('quizScore');
    }
});