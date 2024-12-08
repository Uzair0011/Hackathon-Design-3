import Image from "next/image";
import Link from "next/link";
type Idata = {
  id: number;
  title: string;
  type: string;
  typeC: string;
  price: string;
  imageURL: string;
};
const data: Idata[] = [
  {
    id: 1,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a1",
  },
  {
    id: 2,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a2",
  },
  {
    id: 3,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a3",
  },
  {
    id: 4,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a4",
  },
  {
    id: 5,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a5",
  },
  {
    id: 6,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a6",
  },
  {
    id: 7,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a7",
  },
  {
    id: 8,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a8",
  },
  {
    id: 9,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a9",
  },
  {
    id: 10,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a10",
  },
  {
    id: 11,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a11",
  },
  {
    id: 1,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a1",
  },
  {
    id: 2,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a2",
  },
  {
    id: 3,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a3",
  },
  {
    id: 4,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a4",
  },
  {
    id: 5,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a5",
  },
  {
    id: 6,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a6",
  },
  {
    id: 7,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a7",
  },
  {
    id: 8,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a8",
  },
  {
    id: 9,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a9",
  },
  {
    id: 10,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a10",
  },
  {
    id: 11,
    title: "Nike Air Force 1 Mid '07",
    type: "Men's Shoes",
    typeC: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imageURL: "a11",
  },
];

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
        {/* left  */}
        <div className="hidden sm:flex sm:flex-col w-[180px]  h-auto">
          {/* 1  */}
          <ul className="w-[180px] h-[390px]  text-[15px] font-medium flex flex-col justify-between pb-11 border-r-4 border-black rounded">
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Shoes
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Tops & T-Shirts
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Hoodies & Sweatshirts
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Jackets
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Trousers & Tights
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Shorts
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Tracksuits
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Jumpsuits & Rompers
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Skirts & Dresses
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Socks
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/"></Link>Accessories & Equipment
            </li>
            <br />
            <br />

            <hr />
          </ul>
          {/* 2  */}
          <div className="w-[160px] h-[590px]  text-[15px] font-medium flex flex-col justify-between pb-11">
            {/* gender  */}
            <div>
              <div className="flex items-center justify-between pb-5">
                <div>Gender</div>
                <div className="w-[15px] h-[15px] ">
                  <Image
                    src="/AA.png"
                    alt="image"
                    width={15}
                    height={15}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>
              <form>
                <div>
                  <input type="checkbox" id="men" name="options" value="men" />
                  <label htmlFor="men" className="pl-2">
                    Men
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="women"
                    name="options"
                    value="women"
                  />
                  <label htmlFor="women" className="pl-2">
                    Women
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="unisex"
                    name="options"
                    value="unisex"
                  />
                  <label htmlFor="unisex" className="pl-2">
                    Unisex
                  </label>
                </div>
                <br />
                <br />

                <hr />
              </form>
            </div>
            {/* Kids  */}
            <div>
              <div className="flex items-center justify-between pb-5">
                <div>Kids</div>
                <div className="w-[15px] h-[15px]">
                  <Image
                    src="/AA.png"
                    alt="image"
                    width={15}
                    height={15}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>
              <form>
                <div>
                  <input
                    type="checkbox"
                    id="Boys"
                    name="options"
                    value="Boys"
                  />
                  <label htmlFor="Boys" className="pl-2">
                    Boys
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Girls"
                    name="options"
                    value="Girls"
                  />
                  <label htmlFor="Girls" className="pl-2">
                    Girls
                  </label>
                </div>

                <br />
                <br />

                <hr />
              </form>
            </div>
            {/* Shop by Price  */}
            <div>
              <div className=" flex items-center justify-between pb-5">
                <div>Shop By Price</div>
                <div className="w-[15px] h-[15px]">
                  <Image
                    src="/AA.png"
                    alt="image"
                    width={15}
                    height={15}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>
              <form>
                <div>
                  <input
                    type="checkbox"
                    id="Rate"
                    name="options"
                    value="Rate"
                  />
                  <label htmlFor="Rate" className="pl-2">
                    Under ₹ 2 500.00
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Rate2"
                    name="options"
                    value="Rate2"
                  />
                  <label htmlFor="Rate2" className="pl-2">
                    ₹ 2 501.00 - ₹ 7 500.00
                  </label>
                </div>

                <br />
                <br />

                <hr />
              </form>
            </div>
          </div>
        </div>
        {/* right  */}
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
