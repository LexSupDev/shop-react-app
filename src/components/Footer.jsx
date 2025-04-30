import logo from "/src/assets/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#F0F0F0] mt-42">
        <div className="wrap pt-35 pb-20">
          <div className="flex flex-row justify-between border-b-1 border-gray-400 pb-12.5 mb-6">
            <div className="max-w-[298px] flex flex-col justify-between">
              <img src={logo} alt="" className="w-[167px]" />
              <p className="text-sm opacity-60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <ul className="flex gap-3">
                <li>
                  <a
                    href=""
                    className="w-7 h-7 rounded-full bg-white border-1 border-gray-400 hover:bg-black flex justify-center"
                  >
                    <svg
                      className="w-4 fill-black hover:fill-white text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      //height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="w-7 h-7 rounded-full bg-white border-1 hover:bg-black border-gray-400 flex justify-center"
                  >
                    <svg
                      className="w-5 text-gray-800 hover:fill-white dark:text-white fill-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="26"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="w-7 h-7 rounded-full bg-white hover:bg-black border-1 border-gray-400 flex justify-center"
                  >
                    <svg
                      className="w-5 fill-black hover:fill-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      //height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        //fill="currentColor"
                        fill-rule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="w-7 h-7 rounded-full bg-white hover:bg-black border-1 border-gray-400 flex justify-center"
                  >
                    <svg
                      className="w-5 fill-black hover:fill-white text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      //height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-[Satoshi-Medium] uppercase tracking-[3px] mb-6">
                Company
              </p>
              <ul className="opacity-60">
                <li className="mb-4 last:mb-0">
                  <a href="">About</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Features</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Works</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Career</a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-[Satoshi-Medium] uppercase tracking-[3px] mb-6">
                Help
              </p>
              <ul className="">
                <li className="mb-4 last:mb-0">
                  <a href="">Customer Support</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Delivery Details</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Terms & Conditions</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-[Satoshi-Medium] uppercase tracking-[3px] mb-6">
                FAQ
              </p>
              <ul className="">
                <li className="mb-4 last:mb-0">
                  <a href="">Account</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Manage Deliveries</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Orders</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Payments</a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-[Satoshi-Medium] uppercase tracking-[3px] mb-6">
                Resources
              </p>
              <ul className="">
                <li className="mb-4 last:mb-0">
                  <a href="">Free eBooks</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Development Tutorials</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">How-to Blog</a>
                </li>
                <li className="mb-4 last:mb-0">
                  <a href="">Youtube Playlist</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="opacity-60">Shop.co © 2000-2023, All Rights Reserved</p>
            <ul className="flex flew-row gap-3">
              <li><a href="" className="w-[46px] h-[30px] bg-white flex justify-center items-center"><img src="src/assets/visa.png" alt="" /></a></li>
              <li><a href="" className="w-[46px] h-[30px] bg-white flex justify-center items-center"><img src="src/assets/mastercard.png" alt="" /></a></li>
              <li><a href="" className="w-[46px] h-[30px] bg-white flex justify-center items-center"><img src="src/assets/paypal.png" alt="" /></a></li>
              <li><a href="" className="w-[46px] h-[30px] bg-white flex justify-center items-center"><img src="src/assets/apay.png" alt="" /></a></li>
              <li><a href="" className="w-[46px] h-[30px] bg-white flex justify-center items-center"><img src="src/assets/gpay.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
