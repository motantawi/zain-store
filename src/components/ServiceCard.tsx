import Image from "next/image";
import type { Service } from "@/lib/servicesData";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col h-full rounded-2xl bg-white shadow-[0_0_16px_rgba(0,0,0,0.1)] hover:shadow-[0_0_24px_rgba(0,0,0,0.15)] transition-shadow duration-300">
      <div className="flex items-center justify-center h-44">
        <Image
          src={service.image}
          alt={service.title}
          width={150}
          height={150}
          className="p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between grow p-6">
        <h3 className="mb-3 text-xl font-semibold text-primary">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 grow">
          {service.description}
        </p>
      </div>
    </article>
  );
}
