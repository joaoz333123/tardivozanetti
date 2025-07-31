import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | João Vítor Costa",
  description: "Engenharia que Gera Valor e Segurança.",
};

export default function Sobre() {
  return (
    <main className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Engenharia que Gera Valor e Segurança
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Coluna Principal */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold mb-8">
              A Jornada: Da Técnica à Estratégia
            </h2>
            <div className="space-y-6 text-lg">
              <p>
                Minha carreira foi construída sobre um pilar sólido: a
                Engenharia Mecânica pela Universidade Estadual de Maringá (UEM).
                Desde o início, busquei aplicar o conhecimento técnico onde ele
                gera mais impacto: em operações de alta complexidade.
              </p>
              <p>
                Na BRMalls, um dos maiores players de shopping centers da
                América Latina, mergulhei na gestão de operações e manutenção,
                liderando projetos e equipes que eram a espinha dorsal do
                funcionamento dos ativos. Foi lá que provei ser possível,
                através de uma gestão de engenharia inteligente e proativa,
                alcançar uma redução de 25% nos custos condominiais, otimizando
                desde contratos de manutenção até a eficiência energética.
              </p>
              <p>
                Assumi a liderança como Gerente de Operações e,
                posteriormente, como Gerente de Engenharia na AM FOODS,
                responsável pela infraestrutura de dezenas de restaurantes em
                ambientes críticos como os aeroportos de Guarulhos, Londrina e
                Foz do Iguaçu. Gerenciei projetos de HVAC, elétricos e
                hidráulicos, e implantei o departamento de engenharia do zero,
                garantindo compliance total em ambientes de altíssima
                regulamentação.
              </p>
              <p>
                Hoje, consolido toda essa experiência de campo e gestão, somada
                aos MBAs pela FGV e USP/ESALQ, para atuar em duas frentes
                cruciais: como consultor estratégico para ativos complexos e
                como Perito Judicial em Engenharia Mecânica em Curitiba,
                nomeado pelo TJPR.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-300 aspect-square rounded-lg mb-8"></div>
            <h3 className="text-2xl font-semibold mb-4">Minha Missão</h3>
            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-600 mb-8">
              "Traduzir desafios complexos de engenharia em resultados
              financeiros e operacionais para meus clientes, com integridade,
              precisão e foco na valorização do ativo a longo prazo."
            </blockquote>
            <h3 className="text-2xl font-semibold mb-4">
              Credenciais e Formação
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Perito Judicial - TJPR</li>
              <li>MBA Gestão Estratégica - USP/ESALQ</li>
              <li>MBA Gestão de Projetos - FGV</li>
              <li>Engenharia Mecânica - UEM</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
