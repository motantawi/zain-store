import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-5">
        <div className="flex flex-row-reverse items-center gap-3">
          <Image
            src="https://www.svgrepo.com/download/396915/letter-z.svg"
            alt="شعار زين التنموية"
            width={48}
            height={48}
            priority
          />
          <span className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">
            زين التنموية
          </span>
        </div>

        <Link
          href="#services"
          className="inline-block rounded-full bg-primary px-6 py-2  font-medium text-black shadow-[0_0_12px_rgba(0,0,0,0.12)] hover:shadow-[0_0_20px_rgba(0,0,0,0.18)] transition-all duration-300"
        >
          خدماتنا
        </Link>
      </div>
    </header>
  );
}
