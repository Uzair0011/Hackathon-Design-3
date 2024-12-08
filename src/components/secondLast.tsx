export default function SecondLast() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="w-full max-w-screen-xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* 1 */}
        <ul className="flex flex-col justify-between text-[15px] text-[#757575]">
          <li className="text-black font-medium">Icons</li>
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>

        {/* 2 */}
        <ul className="flex flex-col justify-between text-[15px] text-[#757575]">
          <li className="text-black font-medium">Shoes</li>
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>

        {/* 3 */}
        <ul className="flex flex-col justify-between text-[15px] text-[#757575]">
          <li className="text-black font-medium">Clothing</li>
          <li>All Clothing</li>
          <li>Huarache</li>
          <li>Hoodies & Pullovers</li>
          <li>Air Max 95</li>
        </ul>

        {/* 4 */}
        <ul className="flex flex-col justify-between text-[15px] text-[#757575]">
          <li className="text-black font-medium">Kids&apos;</li>
          <li>Infant & Toddler Shoes</li>
          <li>Kids&apos; Shoes</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
      </div>
    </div>
  );
}
