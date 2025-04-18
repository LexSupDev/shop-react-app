export const PromoLine = () => {
  return (
    <div className="bg-black">
      <div className="wrap flex justify-center">
        <p className="mx-auto p-[9px] text-xs sm:text-sm text-white">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline underline-offset-2 font-[Satoshi-Medium]">
            Sign Up Now
          </span>
        </p>
        <button>
          <img src="assets/close.png" alt="Close Promo" />
        </button>
      </div>
    </div>
  );
};
