import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Link href="/web-development" className="nav-link flex items-center">
        <span>Web制作</span>
        <Image 
          src="/stellarium-logo.png" 
          alt="Stellarium Logo" 
          width={20} 
          height={20} 
          className="ml-2" 
        />
      </Link>
      {/* その他のコード */}
    </header>
  );
} 