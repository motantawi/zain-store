import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { services } from "@/lib/servicesData";
import { products } from "@/lib/productsData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <Header />

      <Hero />

      <section id="services" className="py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">خدماتنا</h2>

        <div className="mx-auto flex flex-wrap justify-center gap-8 px-4 max-w-7xl">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] max-w-sm"
            >
              <ServiceCard service={svc} />
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">منتجاتنا</h2>

        <div className="mx-auto flex flex-wrap justify-center gap-8 px-4 max-w-7xl">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] max-w-sm"
            >
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
