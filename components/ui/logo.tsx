import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo4.gif";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Inventive4it">
      <Image src={logo} alt="Inventive4it Logo" width={225} height={0} />
    </Link>
  );
}
