export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "تطوير الويب",
    description: "نطوّر مواقع تفاعلية متوافقة مع أحدث المعايير العالمية.",
    image: "https://www.svgrepo.com/download/4087/web-development.svg",
  },
  {
    id: 2,
    title: "حلول التجارة الإلكترونية",
    description: "نبني متاجر إلكترونية آمنة وسهلة الاستخدام تعزّز مبيعاتك.",
    image: "https://www.svgrepo.com/download/250757/ecommerce.svg",
  },
  {
    id: 3,
    title: "التسويق الرقمي",
    description: "ندير حملات تسويق رقمي فعّالة لزيادة ظهور علامتك التجارية.",
    image: "https://www.svgrepo.com/download/489242/digital-marketing.svg",
  },
];
