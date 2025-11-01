import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

const anggotaList = [
    { nama: "Dewi Ariyani, S.Pd", jurusan: "Bahasa Indonesia" },
    { nama: "Rasimah, S.Pd", jurusan: "Kimia" },
    { nama: "Narmuli, S.Pd", jurusan: "Matematika (Wajib)" },
    { nama: "Hj. Samsidar, S.Pd", jurusan: "PPKN" },
    { nama: "Jaswadi, S.Si", jurusan: "Prakarya" },
    { nama: "Heria Minarti, S.Pd", jurusan: "Matematika (Peminatan)" },
    { nama: "Ariesmen Rahmat Y, S.Pd", jurusan: "Ekonomi" },
    { nama: "Devi Hariyanti, S.Pd", jurusan: "Bahasa Inggris" },
    { nama: "Irfandi Rahmat, S.Pd", jurusan: "Fisika" },
    { nama: "Bakrijas, S.Si", jurusan: "Biologi" },
    { nama: "M. Syuhada Fahmi, S.Pd", jurusan: "PJOK" },
    { nama: "Cut Lismayanti, S.Pd.I", jurusan: "PAI" },
    { nama: "Aniar, S.Pd", jurusan: "Seni Budaya" },
    { nama: "Asma Aini, S.Pd", jurusan: "Sejarah (Wajib)" }
];

const DaftarAnggota= () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="DaftarAnggota" className="flex flex-col items-center mb-36">
            {/* "Daftar Anggota" Title */}
            <h2 
                className="text-white mb-3 mx-[10%] self-start lg:mb-12 text-[1.5rem] font-medium font-[Poppins]"
            >
                Daftar Anggota 
            </h2>

            {/* Member List */}
            {anggotaList.map((Anggota, index) => (
                <div key={index} className="w-72">
                    <div 
                        className="border-b border-white text-white flex flex-col py-1 px-3"
                        data-aos="fade-up" 
                        data-aos-duration={600 + index * 100}
                    >
                        <span className="text-base font-medium">{anngota.nama}</span>
                        <span className="text-sm text-right">{anggota.jurusan}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DaftarAnggota;
