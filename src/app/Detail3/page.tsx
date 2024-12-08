import Image from "next/image";
export default function ProductDetail3() {
  return (
    <div className="w-full h-[960px] flex justify-between items-center">
      <div className="w-[50%] h-[653px]">
        <Image src="/a2.png" alt="logo" width={1000} height={1000} />
      </div>
      <div className="w-[50%] h-[653px] flex flex-col  items-center ">
        <div className="w-[373px] h-auto ">
          <h1 className="text-[48px] font-medium">
            {" "}
            Nike Air Kids 1 KLT.WF.ORM
          </h1>
          <p>
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its inside out inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </p>
          <p className="text-[36px] font-medium">₹ 8 695.00</p>
          <button className="w-[175px] h-[44px] bg-black flex items-center justify-center gap-2 text-white rounded-full">
            <Image src="/buy.png" alt="logo" width={29} height={20} />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
