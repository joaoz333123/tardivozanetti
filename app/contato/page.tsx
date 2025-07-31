import React from 'react';

const ContactPage = () => {
  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
              Vamos Conversar
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estou à disposição para discutir seus desafios e como minhas soluções podem gerar valor para o seu projeto. Preencha o formulário ou entre em contato pelos canais abaixo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold text-charcoal-gray w-24">Email:</span>
                <a href="mailto:contato@tardivozanetti.com" className="text-gray-600 hover:text-burnt-orange">contato@tardivozanetti.com</a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-charcoal-gray w-24">Telefone:</span>
                <a href="tel:+5541999999999" className="text-gray-600 hover:text-burnt-orange">+55 (41) 99999-9999</a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-charcoal-gray w-24">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-burnt-orange">/seu-perfil</a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <form className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-burnt-orange hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
