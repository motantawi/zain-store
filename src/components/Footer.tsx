export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 text-center text-base md:text-lg text-gray-600 font-medium">
        © {new Date().getFullYear()} زين التنموية. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
