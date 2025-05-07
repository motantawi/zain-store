export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "مكيّف جري AI‑PRO ‎34800 وحدة (بارد)",
    description: "تقنية Inverter | واي‑فاي | تبريد سريع",
    price: "4٬399 ر.س",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/air-conditioner-icon.svg",
  },
  {
    id: 2,
    title: "مكيّف جري AI‑PRO ‎24000 وحدة (بارد/حار)",
    description: "تنظيف تلقائي | فلتر مضاد للبكتيريا",
    price: "3٬599 ر.س",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/tools-equipment-construction/fan-blades-icon.svg",
  },
  {
    id: 3,
    title: "مكيّف جداري ذكي ‎18000 وحدة (بارد)",
    description: "دعم Wi‑Fi | توفير طاقة A++",
    price: "2٬999 ر.س",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/wifi-icon.svg",
  },
];
