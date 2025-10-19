const Senin = () => {
    return (
        <>
            <div className="border-t-2 border-b-2 border-white bg-yellow-500 text-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="600">
                <div className="w-[50%] text-base font-medium">Upacara</div>
                <div className="flex justify-center items-center text-sm">07.45-08.25</div>
            </div>
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="700">
                <div className="w-[50%] text-base font-medium">Bahasa Indonesia</div>
                <div className="flex justify-center items-center text-sm">08.25-09.45</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="800">
                <div className="w-[50%] text-base font-medium">Kimia</div>
                <div className="flex justify-center items-center text-sm">09.45-10.25</div>
            </div>
            <div className="border-t-2 border-b-2 border-white bg-blue-500 text-white flex justify-between py-[0.50rem] w-72 px-3 opacity-60" data-aos="fade-up" data-aos-duration="900">
                <div className="w-[50%] text-base font-medium">Istirahat</div>
                <div className="flex justify-center items-center text-sm">10.25-10.45</div>
            </div>
            <div className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1000">
                <div className="w-[50%] text-base font-medium">Kimia</div>
                <div className="flex justify-center items-center text-sm">10.45-11.25</div>
            </div>
            <div className="flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1100">
                <div className="w-[50%] text-base font-medium">Matematika (Wajib)</div>
                <div className="flex justify-center items-center text-sm">11.25-12.45</div>
            </div>
            <div className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="1200">
                <div className="w-[50%] text-base font-medium">Mulok</div>
                <div className="flex justify-center items-center text-sm">12.45-14.05</div>
            </div>
        </>
    );
}

export default Senin;
