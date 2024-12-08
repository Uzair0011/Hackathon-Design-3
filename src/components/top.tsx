import Image from "next/image";
import Link from "next/link";
export default function Top() {
  return (
    <div className="w-full h-auto bg-primary flex justify-between items-center font-sans font-normal px-4 sm:px-6">
      {/* Logo */}
      <div>
        <Image src="/man.png" alt="logo" width={24} height={24} />
      </div>
   
      {/* Right */}
      <ul className="flex flex-wrap justify-end items-center gap-2 text-[10px] sm:text-[11px] font-bold">
       <li className="hover:underline"><Link href="/AllProducts">Find a Store</Link></li>
        <div className="hidden sm:block">|</div>
        <li className="hover:underline"><Link href="/">Help</Link></li>
        <div className="hidden sm:block">|</div>
        <li className="hover:underline"><Link href="/joinUs">Join Us</Link></li>
        <div className="hidden sm:block">|</div>
        <li className="hover:underline"><Link href="/login">Sign In</Link></li>
      </ul>
    </div>
  );
}
