import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200/60 bg-white/70 py-10 dark:border-neutral-800 dark:bg-neutral-950/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 shadow" />
            <span className="font-semibold">SIFworld</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Creating Peace, Prosperity & Mindful Communities since 2019.
          </p>
        </div>
        <div>
          <p className="font-medium">Explore</p>
          <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              <Link className="hover:underline" to={"/meditation"}>
                Sunya Meditation
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={"/gallery"}>
                Activities
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={"/onedollar-onechild"}>
                ODOC
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={"/sunyatimes"}>
                Sunyatimes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Initiatives</p>
          <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Farmer Empowerment</li>
            <li>Women Empowerment</li>
            <li>CSR & Relief</li>
            <li>Agamas & Translations</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Contact</p>
          <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Hyderabad · Nagpur · Global</li>
            <li>
              <Link
                className="hover:underline"
                to={"mailto:hello@sifworld.com"}
              >
                hello@sifworld.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-4 text-xs text-neutral-500 sm:px-6">
        © {new Date().getFullYear()} Sunyatee International Foundation
      </div>
    </footer>
  );
};

export default Footer;
