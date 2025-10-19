const Jumat = () => {
  return (
    <>
      <div
        className="border-t-2 border-b-2 border-white bg-yellow-500 text-white flex justify-between py-[0.50rem] w-72 px-3"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="w-[50%] text-base font-medium">
          Gema Qur'ani (Baca Yasin)
        </div>
        <div className="flex justify-center items-center text-sm">
          07.45-08.00
        </div>
      </div>
      <div
        className="flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="w-[50%] text-base font-medium">PAI</div>
        <div className="flex justify-center items-center text-sm">
          08.00-10.00
        </div>
      </div>
      <div
        className="border-t-2 border-b-2 border-white bg-blue-500 text-white flex justify-between py-[0.50rem] w-72 px-3"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="w-[50%] text-base font-medium">Istirahat</div>
        <div className="flex justify-center items-center text-sm">
          10.00-10.15
        </div>
      </div>
      <div
        className="border-b-2 flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="w-[50%] text-base font-medium">
          Matematika (Wajib)
        </div>
        <div className="flex justify-center items-center text-sm">
          10.15-11.35
        </div>
      </div>
    </>
  );
};

export default Jumat;
