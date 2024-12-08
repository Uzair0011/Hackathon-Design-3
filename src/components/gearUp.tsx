import Image from "next/image";

type Idata = {
  id: number;
  title: string;
  gender: string;
  price: string;
  type: string;
  imageURL: string;
};
const data: Idata[] = [
  {
    id: 1,
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    gender: "Men's Short-Sleeve ",
    price: " 3 895",
    type: "Running Top",
    imageURL: "g1",
  },
  {
    id: 2,
    title: "Nike Dri-FIT Challenger",
    gender: "Men's 18cm (approx.) 2-",
    price: " 2 495",
    type: "in-1 Versatile Shorts",
    imageURL: "g2",
  },
];

type Idata2 = {
  id2: number;
  title2: string;
  gender2: string;
  price2: string;
  type2: string;
  imageURL2: string;
};
const data2: Idata2[] = [
  {
    id2: 1,
    title2: "Nike Dri-FIT ADV TechKnit Ultra",
    gender2: "Men's Short-Sleeve ",
    price2: " 3 895",
    type2: "Running Top",
    imageURL2: "g3",
  },
  {
    id2: 2,
    title2: "Nike Dri-FIT Challenger",
    gender2: "Men's 18cm (approx.) 2-",
    price2: " 2 495",
    type2: "in-1 Versatile Shorts",
    imageURL2: "g4",
  },
];

export default function GearUp() {
  return (
    <div>
      <div>
        <h3 className="text-[23px] font-medium">Gear Up</h3>
      </div>
      <div className="hidden sm:flex">
        <div className="w-[50%] flex justify-end ">
          {/* 2 arrow  */}
          <div className=" flex gap-5">
            <div>
              <Image src="/LA.png" alt="logo" width={46} height={46} />
            </div>
            <div>
              <Image src="/RA.png" alt="logo" width={46} height={46} />
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-end">
          {/* 2 arrow  */}
          <div className=" flex gap-5">
            <div>
              <Image src="/LA.png" alt="logo" width={46} height={46} />
            </div>
            <div>
              <Image src="/RA.png" alt="logo" width={46} height={46} />
            </div>
          </div>
        </div>
      </div>

      {/* card  */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-6">
        {/* Column 1 */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {data.map((Idata, index) => (
            <div key={index} className="w-full max-w-[300px] h-auto">
              {/* Image */}
              <div className="w-full h-auto flex items-center justify-center mb-4 hover:scale-90 cursor-pointer">
                <Image
                  src={`/${Idata.imageURL}.png`}
                  alt="logo"
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              </div>
              {/* Title and Price */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[15px] font-medium">{Idata.title}</h3>
                <h3 className="font-bold">₹{Idata.price}</h3>
              </div>
              {/* Gender and Type */}
              <h3 className="text-[15px] text-[#757575]">{Idata.gender}</h3>
              <h3 className="text-[15px] text-[#757575]">{Idata.type}</h3>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 ">
          {data2.map((Idata2, index) => (
            <div key={index} className="w-full max-w-[300px] h-auto  ">
              {/* Image */}
              <div className="w-full h-auto flex items-center justify-center mb-4 hover:scale-90 cursor-pointer">
                <Image
                  src={`/${Idata2.imageURL2}.png`}
                  alt="logo"
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              </div>
              {/* Title and Price */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[15px] font-medium">{Idata2.title2}</h3>
                <h3 className="font-bold">₹{Idata2.price2}</h3>
              </div>
              {/* Gender and Type */}
              <h3 className="text-[15px] text-[#757575]">{Idata2.gender2}</h3>
              <h3 className="text-[15px] text-[#757575]">{Idata2.type2}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
