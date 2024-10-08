import React from "react";
import Phone from "../assets/contact image/Vector (2).png";
import Whatsapp from "../assets/contact image/whatsapp.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24 mx-auto  w-[550px]  sm:w-[350px]">
      <h2 className="font-bold text-center sm:px-0 sm:text-5xl px-10 text-6xl mb-4">
        We’d love to hear from you
      </h2>
      <p className="text-center  leading-9 font-normal text-2xl">
        Kindly reach out to us using any of the medium and we will be sure to
        get back to you.
      </p>
      <div className="border-[1px] mt-10 border-solid border-[#FFD942] bg-[#FFFDF5] w-[550px] sm:w-[350px]  flex-col flex items-center justify-center">
        <div className="flex sm:mr-[9.5rem] sm:flex-col sm:gap-0 gap-20 mt-8">
          <div>
            <h2 className="font-semibold text-lg">Telephone</h2>
            <div className="flex items-center justify-center gap-0">
              <svg
              className="mt-4 sm:mt-3 mr-1 sm:w-5"
                width="16"
                height="26"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3200_1375)">
                  <path
                    d="M14.665 11.2827V13.2827C14.6657 13.4683 14.6277 13.6521 14.5533 13.8222C14.479 13.9924 14.3699 14.1451 14.233 14.2706C14.0962 14.3961 13.9347 14.4917 13.7588 14.5511C13.5829 14.6106 13.3966 14.6327 13.2117 14.616C11.1602 14.3931 9.18966 13.6921 7.45833 12.5693C5.84755 11.5458 4.48189 10.1801 3.45833 8.56934C2.33165 6.83014 1.63049 4.85 1.41166 2.78934C1.395 2.60498 1.41691 2.41918 1.47599 2.24375C1.53508 2.06833 1.63004 1.90713 1.75484 1.77042C1.87964 1.6337 2.03153 1.52448 2.20086 1.44968C2.37018 1.37489 2.55322 1.33618 2.73833 1.336H4.73833C5.06187 1.33282 5.37552 1.44739 5.62084 1.65836C5.86615 1.86933 6.02638 2.1623 6.07166 2.48267C6.15608 3.12271 6.31263 3.75115 6.53833 4.356C6.62802 4.59462 6.64744 4.85395 6.59427 5.10326C6.5411 5.35257 6.41757 5.58141 6.23833 5.76267L5.39166 6.60934C6.3407 8.27837 7.72263 9.6603 9.39166 10.6093L10.2383 9.76267C10.4196 9.58343 10.6484 9.4599 10.8977 9.40673C11.1471 9.35356 11.4064 9.37297 11.645 9.46267C12.2498 9.68837 12.8783 9.84492 13.5183 9.92934C13.8422 9.97502 14.1379 10.1381 14.3494 10.3877C14.5608 10.6372 14.6731 10.9557 14.665 11.2827Z"
                    stroke="#5B5B5B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3200_1375">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-normal text-xl text-[#5B5B5B] mt-3">
                +234 802 564 4212
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold font-lg">Whatsapp</h2>
            <div className="flex items-center justify-center gap-1">
              <img className="w-5 h-6 mt-3 sm:w-8 sm:h-9" src={Whatsapp} alt="" />
              <p className="font-normal text-xl text-[#5B5B5B] mt-3">
                +234 818 265 7665
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col text-left mr-36 sm:mr-10 mt-3">
          <div>
            <h2 className="font-semibold text-lg mb-3 mt-10">Email</h2>
            <p className="font-normal text-xl text-[#5B5B5B] mb-2">
              hello@chessinslumsafrica.com
            </p>
            <p className="font-normal text-xl text-[#5B5B5B] mb-2">
              partnerships@chessinslums.com
            </p>
            <p className="font-normal text-xl text-[#5B5B5B]">
              scholarships@chessinslums.com
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3 mt-10">Address</h2>
            <p className="font-normal text-xl text-[#5B5B5B] mb-2">
              1st floor Block C Adebowale House
              <br />
              150 Ikorodu Road,Onipanu - Lagos
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-5 mb-6 mr-[19.5rem] sm:ml-24">
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.338 6.16968C18.2322 5.44867 17.434 4.29505 17.185 2.95023C17.1313 2.65968 17.1017 2.36064 17.1017 2.05469H13.5723L13.5667 16.1992C13.5073 17.7831 12.2037 19.0544 10.6055 19.0544C10.1088 19.0544 9.64113 18.9302 9.22933 18.7135C8.285 18.2166 7.63875 17.2267 7.63875 16.0877C7.63875 14.4517 8.96972 13.1207 10.6055 13.1207C10.9109 13.1207 11.2038 13.1711 11.4809 13.2579V9.65481C11.1942 9.61576 10.9028 9.59136 10.6055 9.59136C7.02348 9.59136 4.10938 12.5056 4.10938 16.0877C4.10938 18.2854 5.20743 20.2304 6.88263 21.4064C7.93781 22.1472 9.22131 22.5838 10.6055 22.5838C14.1876 22.5838 17.1017 19.6697 17.1017 16.0877V8.91518C18.486 9.90872 20.1819 10.4942 22.012 10.4942V6.96483C21.0262 6.96483 20.108 6.67177 19.338 6.16968Z"
              fill="#0D101C"
            />
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0516 6.16228C22.2612 6.52154 21.4092 6.75763 20.5265 6.87054C21.4298 6.32652 22.1278 5.4643 22.4562 4.42758C21.6043 4.9408 20.6599 5.30006 19.6643 5.50535C18.8534 4.6226 17.714 4.10938 16.4207 4.10938C14.0085 4.10938 12.0377 6.08017 12.0377 8.51287C12.0377 8.86186 12.0788 9.20059 12.1506 9.51879C8.49643 9.33403 5.24257 7.57879 3.07675 4.92027C2.69696 5.56694 2.48141 6.32652 2.48141 7.12715C2.48141 8.65657 3.25125 10.0115 4.44193 10.7813C3.71315 10.7813 3.03569 10.576 2.44035 10.2681V10.2989C2.44035 12.4339 3.9595 14.22 5.97135 14.6203C5.32543 14.797 4.64732 14.8216 3.99029 14.6921C4.26909 15.5672 4.81509 16.3328 5.55155 16.8815C6.28801 17.4301 7.1779 17.7342 8.09611 17.751C6.53963 18.9832 4.61027 19.6492 2.62511 19.6396C2.27611 19.6396 1.92712 19.6191 1.57812 19.5781C3.52839 20.8303 5.84818 21.5591 8.3322 21.5591C16.4207 21.5591 20.8652 14.8461 20.8652 9.02609C20.8652 8.83107 20.8652 8.64631 20.8549 8.45128C21.7172 7.83541 22.4562 7.0553 23.0516 6.16228Z"
              fill="#0D101C"
            />
          </svg>
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1942 2.09375C7.54874 2.09375 2.92969 6.70253 2.92969 12.3788C2.92969 17.5111 6.68651 21.7709 11.593 22.5407V15.3555H8.98577V12.3788H11.593V10.1104C11.593 7.53396 13.1224 6.11745 15.473 6.11745C16.5918 6.11745 17.762 6.31248 17.762 6.31248V8.84782H16.4686C15.1958 8.84782 14.7955 9.63819 14.7955 10.4491V12.3788H17.6491L17.1871 15.3555H14.7955V22.5407C17.2143 22.1587 19.4168 20.9246 21.0055 19.0611C22.5942 17.1976 23.4643 14.8276 23.4588 12.3788C23.4588 6.70253 18.8397 2.09375 13.1942 2.09375Z"
              fill="#0D101C"
            />
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.6846 5.55983C21.5674 5.797 22.2658 6.49537 22.503 7.37819C22.9378 8.98573 22.951 12.3194 22.951 12.3194C22.951 12.3194 22.951 15.6663 22.5161 17.2606C22.279 18.1435 21.5806 18.8418 20.6978 19.079C19.1034 19.5138 12.6864 19.5138 12.6864 19.5138C12.6864 19.5138 6.26943 19.5138 4.67507 19.079C3.79224 18.8418 3.09388 18.1435 2.8567 17.2606C2.42188 15.6531 2.42188 12.3194 2.42188 12.3194C2.42188 12.3194 2.42188 8.98573 2.84352 7.39137C3.0807 6.50854 3.77906 5.81018 4.66189 5.57301C6.25626 5.13817 12.6732 5.125 12.6732 5.125C12.6732 5.125 19.0902 5.125 20.6846 5.55983ZM15.9542 12.3194L10.6309 15.4027V9.23609L15.9542 12.3194Z"
              fill="#0D101C"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contact;
