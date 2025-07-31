import React from 'react';

const ServicesPage = () => {
  return (
    <main className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Soluções de Engenharia para o Ciclo de Vida Completo do seu Ativo
          </h1>
          <p className="text-lg text-gray-600">
            Da concepção estratégica ao desempenho operacional, estas são as frentes em que atuo para gerar valor e segurança para seu negócio.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F4F6F8] p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Gestão de Projetos de HVAC e Retrofit</h2>
            <p className="text-gray-600 mb-6">
              Liderança completa de projetos de modernização de sistemas de climatização, do planejamento ao comissionamento, com foco em eficiência energética, performance e retorno sobre o investimento.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Principais Entregáveis</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Análise de Viabilidade e ROI</li>
              <li>Engenharia de Valor e Especificação Técnica</li>
              <li>Gerenciamento da Execução &apos;Turnkey&apos;</li>
              <li>Comissionamento e Análise de Performance</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F4F6F8] p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Consultoria em Otimização de Operações</h2>
            <p className="text-gray-600 mb-6">
              Análise profunda de processos de manutenção, contratos e consumo energético para identificar e implementar melhorias que reduzem custos operacionais e aumentam a eficiência do ativo.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Principais Entregáveis</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Auditoria de Contratos e Processos</li>
              <li>Implementação de Programas de Manutenção Preditiva</li>
              <li>Projetos de Eficiência Energética</li>
              <li>Desenvolvimento de Ferramentas de Gestão com IA</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F4F6F8] p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Perícia Técnica Judicial em Engenharia</h2>
            <p className="text-gray-600 mb-6">
              Elaboração de laudos periciais de alta complexidade para sistemas mecânicos e instalações prediais, oferecendo clareza e embasamento técnico conclusivo para disputas judiciais.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Principais Entregáveis</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Análise de Conformidade Técnica e Normativa</li>
              <li>Desenvolvimento de Laudos Técnicos Precisos</li>
              <li>Elaboração de Pareceres e Resposta a Quesitos</li>
              <li>Uso de Ferramentas de Análise de Dados para Embasamento</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F4F6F8] p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Gestão Estratégica de CAPEX</h2>
            <p className="text-gray-600 mb-6">
              Planejamento e execução de investimentos multimilionários em infraestrutura, garantindo controle financeiro, cumprimento de prazos e excelência técnica em projetos de alta complexidade.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Principais Entregáveis</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Planejamento e Orçamentação de CAPEX</li>
              <li>Análise de Risco de Projetos</li>
              <li>Controle e Fiscalização de Obras</li>
              <li>Relatórios de Performance Financeira do Projeto</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-blue-900 text-white py-20 mt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">
            Vamos Iniciar seu Projeto?
          </h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Entre em contato para uma análise detalhada das suas necessidades e descubra como posso agregar valor ao seu negócio.
          </p>
          <a href="/contato" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg mt-8 inline-block text-lg transition-colors">
            Fale com um Especialista
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
