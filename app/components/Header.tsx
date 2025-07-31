import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#0D2C4D] text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Tardivo Zanetti Logo" width={180} height={60} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/sobre" className="hover:text-gray-300">Sobre</Link>
          <Link href="/servicos" className="hover:text-gray-300">Serviços</Link>
          <Link href="/projetos" className="hover:text-gray-300">Projetos</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          <Link href="/contato" className="bg-[#D97706] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Contato
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Hamburger Menu Icon */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
