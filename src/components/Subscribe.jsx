export const Subscribe = () => {
  return (
    <>
      <div className="wrap relative top-[-90px]">
        <div className=" px-16 py-[35px] rounded-2xl bg-black text-white flex justify-between gap-[210px]">
          <p className="font-[Integral-CF-Bold] text-[40px] leading-[45px] uppercase max-w-[610px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS 
          </p>
          <div className="font-[Satoshi-Medium] text-black flex flex-col gap-3.5">
            <label className="relative before:absolute before:w-6 before:h-4 before:block before:bg-[url('src/assets/letter.svg')] before:bg-no-repeat before:top-4 before:left-4">
              <input
                type="text"
                className="bg-white pl-[52px] py-3 rounded-full"
                placeholder="Enter your email address"
              ></input>
            </label>
            <button className="rounded-full bg-white py-3">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
