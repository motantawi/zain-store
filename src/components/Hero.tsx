export default function Hero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mb-6 text-4xl md:text-5xl font-extrabold leading-tight">
          حلول تقنية <span className="text-primary">تعزّز</span> نمو أعمالك
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          شركة <span className="font-semibold">زين التنموية</span> متخصصة في
          تقديم خدمات تطوير البرمجيات، الاستشارات التقنية، وحلول الأعمال الرقمية
          لعملائنا في مختلف القطاعات. نعمل بشغف لتمكين شركائنا من تحقيق النجاح
          والتميّز.
        </p>
      </div>
    </section>
  );
}
