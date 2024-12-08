import Image from "next/image";
export default function Footer() {
  return (
    <div id="FooterLast" className="w-full h-auto sm:h-[267px] bg-black flex items-center justify-between text-white px-6 py-5 sm:py-0 ">
      <div className="w-full  flex flex-wrap justify-between">
      <div className="w-full sm:w-[590px] h-auto flex flex-wrap justify-center sm:justify-between text-center sm:text-start">
  {/* <!-- Column 1 --> */}
  <ul className="w-full sm:w-auto h-auto sm:h-[170px] flex flex-col justify-between mb-6 sm:mb-0">
    <li>Find A Store</li>
    <li>Become A Member</li>
    <li>Sign Up for Email</li>
    <li>Send Us Feedback</li>
    <li>Student Discounts</li>
  </ul>

  {/* <!-- Column 2 --> */}
  <ul className="w-full sm:w-auto text-[#7E7E7E] h-auto sm:h-[170px] flex flex-col justify-between px-5 sm:px-0 mb-6 sm:mb-0">
    <li className="text-white">Get Help</li>
    <li>Become A Member</li>
    <li>Sign Up for Email</li>
    <li>Send Us Feedback</li>
    <li>Student Discounts</li>
    <li>Student Discounts</li>
  </ul>

  {/* <!-- Column 3 --> */}
  <ul className="w-full sm:w-auto h-auto sm:h-[120px] text-[#7E7E7E] flex flex-col justify-between">
    <li className="text-white">About Nike</li>
    <li>News</li>
    <li>Career</li>
    <li>Investors</li>
  </ul>
</div>

        {/* logo  */}
        <div className="w-full sm:w-[177px] h-[auto]  flex  justify-between py-5 sm:py-0">
          <div className="w-[30px] h-[30px]">
            <Image src="/f1.png" alt="logo" width={30} height={30} />
          </div>
          <div className="w-[30px] h-[30px]">
            <Image src="/f2.png" alt="logo" width={30} height={30} />
          </div>
          <div className="w-[30px] h-[30px]">
            <Image src="/f3.png" alt="logo" width={30} height={30} />
          </div>
          <div className="w-[30px] h-[30px]">
            <Image src="/f4.png" alt="logo" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
