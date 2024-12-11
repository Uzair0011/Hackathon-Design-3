import Image from "next/image";
import Link from "next/link";
import { data } from "../../data/allProductData";
export default function AllProducts() {
  return (
    <div className="px-6">
      <div className="w-full h-auto  flex justify-between ">
        <div>
          <h1 className="text-[24px] font-medium ">New (500)</h1>
        </div>
        <div className="flex gap-5">
          {/* 1  */}
          <div className="flex items-center gap-2 text-[16px]">
            <div>
              <Link href="/" className="hover:underline">
                Hide Filters
              </Link>
            </div>

            <div className="w-[18px] h-[16px] flex ">
              <Image
                src="/filter1.png"
                alt="image"
                width={20}
                height={20}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
          {/* 2  */}
          <div className="flex items-center gap-2">
            <div>
              <Link className="hover:underline" href="/">
                Sort By
              </Link>
            </div>

            <div className="w-[18px] h-[16px] flex ">
              <Image
                src="/filter2.png"
                alt="image"
                width={20}
                height={20}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        {/* new list  */}

        {/* left Side bar */}
        <div className="hidden w-[1850px]  h-auto  sm:flex sm:flex-col ">
          {/* 1  */}
          <ul className="py-5 border-r-2 ">
            {[
              "Shoes",
              "Sports Bras",
              "Tops & T-Shirts",
              "Hoodies & Sweatshirts",
              "Jackets",
              "Trousers & Tights",
              "Shorts",
              "Tracksuits",
              "Jumpsuits & Rompers",
              "Skirts & Dresses",
              "Socks",
              "Accessories & Equipment",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-600 leading-loose hover:cursor-pointer hover:underline"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <br />
          <hr />
          {/* Gender  */}

          <div className="flex justify-between items-center pt-11">
            <div className="font-bold">Gender</div>
            <div>
              <Image src="/AA.png" alt="arrow" width={15} height={15} />
            </div>
          </div>
          <ul className=" py-5">
            {["Male", "Women", "Unisex"].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-600 leading-loose hover:cursor-pointer hover:underline  "
              >
                <div>
                  <input
                    className="hover:cursor-pointer"
                    type="checkbox"
                    id="men"
                    name="options"
                    value="men"
                  />
                  <label htmlFor="item" className="pl-2">
                    {item}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <br />
          <hr />
          {/* Kids  */}

          <div className="flex justify-between items-center pt-11">
            <div className="font-bold">Kids</div>
            <div>
              <Image src="/AA.png" alt="arrow" width={15} height={15} />
            </div>
          </div>
          <ul className=" py-5">
            {["Boys", "Girls"].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-600 leading-loose hover:cursor-pointer hover:underline  "
              >
                <div>
                  <input
                    className="hover:cursor-pointer"
                    type="checkbox"
                    id="men"
                    name="options"
                    value="men"
                  />
                  <label htmlFor="item" className="pl-2">
                    {item}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <br />
          <hr />
          {/* Shop  */}

          <div className="flex justify-between items-center pt-11">
            <div className="font-bold">Gender</div>
            <div>
              <Image src="/AA.png" alt="arrow" width={15} height={15} />
            </div>
          </div>
          <ul className=" py-5">
            {["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00"].map(
              (item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-slate-600 leading-loose hover:cursor-pointer hover:underline  "
                >
                  <div>
                    <input
                      className="hover:cursor-pointer"
                      type="checkbox"
                      id="men"
                      name="options"
                      value="men"
                    />
                    <label htmlFor="item" className="pl-2">
                      {item}
                    </label>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        {/* right side bar  */}
        {/* shoes  */}
        <div>
          <div className="h-auto flex flex-col items-center justify-between px-4 sm:px-6 py-8 sm:py-11">
            {/* Cards Section */}
            <div className="w-full flex flex-wrap justify-center sm:justify-between gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-[280px]  sm:w-[300px] md:w-[350px] flex flex-col items-center    overflow-hidden mx-2 my-4"
                >
                  {/* Image */}
                  <div className="w-full h-[340px] flex items-center justify-center bg-gray-100 hover:scale-90 cursor-pointer">
                    <Link href="/Detail">
                      <Image
                        src={`/${item.imageURL}.png`}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="object-contain"
                      />
                    </Link>
                  </div>

                  {/* Text */}
                  <div className="w-full px-4 py-3">
                    <p className="text-[15px] font-medium text-[#9E3500]">
                      Just In
                    </p>
                    <h3 className="text-[16px] font-medium">{item.title}</h3>
                    <h3 className="text-[14px] text-gray-600">{item.type}</h3>
                    <h3 className="text-[14px] text-gray-600">{item.typeC}</h3>
                    <h3 className="text-[16px] font-bold mt-1">
                      ₹{item.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
