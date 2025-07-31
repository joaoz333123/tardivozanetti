import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0D2C4D] text-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand Name */}
          <div>
            <h3 className="text-xl font-bold">Tardivo Zanetti</h3>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="hover:text-gray-300">Sobre</Link></li>
              <li><Link href="/servicos" className="hover:text-gray-300">Serviços</Link></li>
              <li><Link href="/contato" className="hover:text-gray-300">Contato</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact and Social */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p>contato@tardivozanetti.com.br</p>
            <p>(XX) XXXX-XXXX</p>
            <div className="flex mt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© 2025 Tardivo Zanetti. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
