import React from 'react';

const ProjectsPage = () => {
  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-4">
            Projetos que Geram Resultados Mensuráveis
          </h1>
          <p className="text-lg text-gray-600">
            Conheça na prática como a engenharia estratégica e a tecnologia impactam o resultado de grandes ativos.
          </p>
        </div>

        <div className="space-y-16">
          {/* Project Card 1: SGF-Obras */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <div className="bg-gray-300 aspect-video rounded-lg"></div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-charcoal-gray mb-6">
                  Sistema de Gestão Financeira de Obras (SGF-Obras)
                </h2>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">O Problema</h3>
                  <p className="text-gray-600 mb-6">
                    Uma holding de investimentos imobiliários gerenciava o CAPEX de suas obras de forma descentralizada, usando planilhas de Excel. Isso resultava em falta de padronização, retrabalho, dificuldade de consolidação e alto risco de erros humanos, comprometendo a tomada de decisão e a previsão de custos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">A Solução</h3>
                  <p className="text-gray-600 mb-6">
                    Desenvolvi uma aplicação web customizada que centralizou e padronizou todo o fluxo de medição e pagamento. A ferramenta automatizou a geração de relatórios, unificou o controle de saldos contratuais e forneceu um dashboard em tempo real para a diretoria, integrando dados de forma segura e eficiente.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">Resultados</h3>
                  <p className="text-gray-600">
                    A implementação do sistema eliminou a necessidade de uma função administrativa dedicada à consolidação de dados, gerando uma economia direta de R$60.000 por ano. Além disso, reduziu a zero os erros de cálculo e forneceu insights estratégicos que melhoraram a alocação de capital e a previsibilidade financeira dos projetos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 2: PGM */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <div className="bg-gray-300 aspect-video rounded-lg"></div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-charcoal-gray mb-6">
                  Plataforma de Gestão de Manutenção (PGM)
                </h2>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">O Problema</h3>
                  <p className="text-gray-600 mb-6">
                    Uma equipe de manutenção crítica em um grande ativo comercial gastava 16 horas por mês em tarefas administrativas, preenchendo e transcrevendo ordens de serviço em papel. O processo era lento, propenso a falhas, e dificultava a análise de dados e o cumprimento de SLAs (Service Level Agreements).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">A Solução</h3>
                  <p className="text-gray-600 mb-6">
                    Criei um Progressive Web App (PWA) offline-first, permitindo que os técnicos preenchessem ordens de serviço diretamente em seus celulares, mesmo em áreas sem conexão. Os dados eram sincronizados automaticamente, alimentando um dashboard que fornecia indicadores de performance, controle de SLA e um histórico digital completo para auditorias.
                  p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">Resultados</h3>
                  <p className="text-gray-600">
                    O tempo gasto com tarefas administrativas foi reduzido de 16 horas para apenas 10 minutos por mês. A digitalização completa dos processos eliminou erros de transcrição, melhorou a gestão de SLAs e criou uma base de dados robusta para análises futuras e otimização contínua da operação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 3: GIP */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <div className="bg-gray-300 aspect-video rounded-lg"></div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-charcoal-gray mb-6">
                  Plataforma de Inteligência Pericial (GIP)
                </h2>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">O Problema</h3>
                  <p className="text-gray-600 mb-6">
                    A gestão de processos de perícia judicial em engenharia era realizada manualmente, com alto volume de documentos e informações dispersas. Isso aumentava o risco de inconsistências, dificultava o cumprimento de prazos e consumia um tempo valioso na elaboração de laudos e pareceres técnicos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">A Solução</h3>
                  <p className="text-gray-600 mb-6">
                    Desenvolvi uma ferramenta digital para centralizar e automatizar a gestão dos processos periciais. A plataforma organiza documentos, controla prazos, automatiza a geração de peças processuais e utiliza análise de dados para identificar padrões e riscos, fornecendo uma visão 360º de todas as ações em andamento.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray mb-2">Resultados</h3>
                  <p className="text-gray-600">
                    A ferramenta reduziu significativamente o risco de falhas processuais e otimizou o tempo de trabalho do perito, resultando em uma economia estimada de R$48.000 por ano em horas de trabalho. A centralização das informações também fortaleceu a qualidade e a consistência dos laudos, aumentando a eficiência e a assertividade das análises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
