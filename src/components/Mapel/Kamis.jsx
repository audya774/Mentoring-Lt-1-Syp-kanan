const Kamis = () => {
    return (
        <>
            <div className="border-t-2 border-white"></div>
            <div className="border-b-2 border-white bg-yellow-500 text-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="w-[50%] text-base font-medium">Gema Literasi (Baca Al-Qur'an)</div>
                <div className="flex justify-center items-center text-sm">07.45-08.00</div>
            </div>
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="w-[50%] text-base font-medium">Biologi</div>
                <div className="flex justify-center items-center text-sm">08.00-09.05</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="700">
                <div className="w-[50%] text-base font-medium">PJOK</div>
                <div className="flex justify-center items-center text-sm">09.05-10.25</div>
            </div>
            <div className="border-t-2 border-b-2 border-white bg-blue-500 text-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="800">
                <div className="w-[50%] text-base font-medium">Istirahat</div>
                <div className="flex justify-center items-center text-sm">10.25-10.45</div>
            </div>
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="900">
                <div className="w-[50%] text-base font-medium">Fisika</div>
                <div className="flex justify-center items-center text-sm">10.45-12.05</div>
            </div>
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1000">
                <div className="w-[50%] text-base font-medium">Ekonomi</div>
                <div className="flex justify-center items-center text-sm">12.05-13.25</div>
            </div>
        </>
    );
}

export default Kamis;
