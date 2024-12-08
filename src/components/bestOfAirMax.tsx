import Image from "next/image";

type Idata = {
  id: number;
  title: string;
  gender: string;
  price: string;
  imageURL: string;
};
const data: Idata[] = [
  {
    id: 1,
    title: "Nike Air Max Pulse",
    gender: "Women's Shoes",
    price: "13,995",
    imageURL: "s1",
  },
  {
    id: 2,
    title: "Nike Air Max Pulse",
    gender: "Men's Shoes",
    price: "13,995",
    imageURL: "s2",
  },
  {
    id: 3,
    title: "Nike Air Max Pulse",
    gender: "Men's Shoes",
    price: "13,995",
    imageURL: "s3",
  },
];

export default function BestOfAirMax() {
  return (
    <div id="Air" className="h-auto flex flex-col items-center justify-between px-4 sm:px-6 py-8 sm:py-11">
      {/* Header Section */}
      <div className="w-full mb-6">
        <div className="flex justify-between items-center">
          {/* Left */}
          <h3 className="text-[20px] sm:text-[22px] font-medium">
            Best of Air Max
          </h3>

          {/* Right Arrows */}
          <div className="flex gap-3 sm:gap-5">
            <Image src="/LA.png" alt="left arrow" width={36} height={36} />
            <Image src="/RA.png" alt="right arrow" width={36} height={36} />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-wrap justify-center sm:justify-between gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[280px] sm:w-[300px] md:w-[350px] flex flex-col items-center overflow-hidden mx-2 my-4"
          >
            {/* Image */}
            <div className="w-full h-[300px] flex items-center justify-center bg-gray-100">
              <Image
                src={`/${item.imageURL}.png`}
                alt={item.title}
                width={1000}
                height={1000}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-full  py-3 ">
              <h3 className="text-[16px] font-medium pt-5 ">{item.title}</h3>
              <h3 className="text-[14px] text-gray-600">{item.gender}</h3>
              <h3 className="text-[16px] font-bold mt-1">₹{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
