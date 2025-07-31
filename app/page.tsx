import Icon from "./components/Icon";

export default function Home() {
  return (
    <main>
      <section className="bg-white text-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-poppins text-[#1F2937] max-w-4xl mx-auto">
            Engenharia de Alta Performance para Ativos Complexos: Maximizando Eficiência, Reduzindo Custos.
          </h1>
          <h2 className="text-xl font-inter text-gray-600 mt-4 max-w-3xl mx-auto">
            Soluções especializadas em gestão de HVAC, Retrofit, Operações e Perícia Judicial para shoppings, aeroportos e grandes empreendimentos comerciais.
          </h2>
          <button className="bg-[#D97706] hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg mt-8 text-lg">
            Agende uma Análise Estratégica
          </button>
        </div>
      </section>

      {/* Augmented Engineering Section */}
      <section className="bg-[#F4F6F8] py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-poppins text-[#1F2937]">
            Engenharia de Precisão, Potencializada por Tecnologia
          </h2>
          <p className="text-lg font-inter text-gray-600 mt-4 max-w-3xl mx-auto">
            Além da experiência de campo, utilizo Inteligência Artificial para criar ferramentas sob medida, transformando seus desafios operacionais em vantagem competitiva.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Column 1: Engenharia */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Icon name="tools" className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold font-poppins text-[#1F2937] mb-3">
                Consultoria de Engenharia Especializada
              </h3>
              <p className="font-inter text-gray-600">
                Análise profunda de sistemas de HVAC, Retrofit, Operações e Perícia Judicial, com foco em eficiência e conformidade.
              </p>
            </div>
            {/* Column 2: IA */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Icon name="brain" className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold font-poppins text-[#1F2937] mb-3">
                Desenvolvimento de Ferramentas com IA
              </h3>
              <p className="font-inter text-gray-600">
                Criação de dashboards inteligentes e automações personalizadas para resolver seus problemas específicos de gestão e operação.
              </p>
            </div>
            {/* Column 3: Resultados */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Icon name="chart" className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold font-poppins text-[#1F2937] mb-3">
                Foco em Resultados Mensuráveis
              </h3>
              <p className="font-inter text-gray-600">
                Soluções que entregam ROI claro, com cases de redução de custos, otimização de CAPEX e aumento da eficiência operacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold font-poppins text-[#1F2937]">
              Projetos que Geram Resultados Mensuráveis
            </h2>
            <p className="text-lg font-inter text-gray-600 mt-4">
              Conheça na prática como a engenharia estratégica e a tecnologia impactam o resultado de grandes ativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1: AMFin */}
            <div className="border rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
              <div className="bg-gray-300 aspect-video"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-[#1F2937] mb-3">
                  Sistema de Gestão Financeira de Obras
                </h3>
                <p className="font-inter text-gray-600 mb-6 flex-grow">
                  Como um sistema customizado eliminou o caos financeiro e gerou uma economia de R$60.000/ano para uma holding.
                </p>
                <a href="#" className="font-bold text-[#1F2937] hover:text-[#D97706] transition-colors mt-auto">
                  Ver Estudo de Caso
                </a>
              </div>
            </div>

            {/* Project Card 2: PGM */}
            <div className="border rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
              <div className="bg-gray-300 aspect-video"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-[#1F2937] mb-3">
                  Plataforma de Gestão de Manutenção (PWA)
                </h3>
                <p className="font-inter text-gray-600 mb-6 flex-grow">
                  De 16 horas a 10 minutos: como um aplicativo web offline-first revolucionou a gestão de manutenção crítica.
                </p>
                <a href="#" className="font-bold text-[#1F2937] hover:text-[#D97706] transition-colors mt-auto">
                  Ver Estudo de Caso
                </a>
              </div>
            </div>

            {/* Project Card 3: GIP */}
            <div className="border rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
              <div className="bg-gray-300 aspect-video"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-[#1F2937] mb-3">
                  Plataforma de Inteligência Pericial
                </h3>
                <p className="font-inter text-gray-600 mb-6 flex-grow">
                  Como uma ferramenta digital reduziu o risco processual e gerou uma economia de R$48.000/ano em eficiência.
                </p>
                <a href="#" className="font-bold text-[#1F2937] hover:text-[#D97706] transition-colors mt-auto">
                  Ver Estudo de Caso
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
