export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-medium text-slate-300">Yajat Mehta</p>
          <p className="mt-1">AI, data, and product systems builder.</p>
        </div>

        <a href="/#contact" className="font-medium text-slate-300 transition hover:text-white">
          Connect with me
        </a>

        <p>&copy; {year} Yajat Mehta. All rights reserved.</p>
      </div>
    </footer>
  );
}
