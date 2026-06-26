import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, Section } from "@/components/InfoPage";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [{ title: "Quem Somos — Efeito - AtivAr Tag" }],
  }),
});

const dados: [string, React.ReactNode][] = [
  ["Razão Social", "Efeito Vida e Previdencia S.A."],
  ["Nome Fantasia", "Efeito"],
  ["CNPJ", "54.783.005/0001-67"],
  ["Situação Cadastral", "Ativa (Receita Federal)"],
  ["Data de Abertura", "06/06/2024"],
  ["Natureza Jurídica", "Sociedade Anônima Fechada"],
  [
    "Endereço",
    <>
      Av. Álvares Cabral, 397 — Sala 201
      <br />
      Lourdes — Belo Horizonte/MG
      <br />
      CEP: 30170-001
    </>,
  ],
  ["Telefone Fixo", "(31) 3199-0530"],
  ["WhatsApp", "(15) 98187-1744"],
  ["E-mail", "fcis.mendes@gmail.com"],
  ["Horário de Atendimento", "Segunda à sexta, das 09h às 19h"],
];

function Sobre() {
  return (
    <InfoPage title="Quem Somos">
      <Section title="Sobre a Efeito - AtivAr Tag">
        <p>
          A Efeito - AtivAr Tag é um canal independente especializado em
          orientação, ativação e suporte para usuários de tags de pedágio e
          estacionamento em todo o Brasil.
        </p>
        <p>
          Atuamos como facilitadores: ajudamos motoristas e empresas a ativarem e
          utilizarem seus dispositivos com rapidez, praticidade e atendimento
          humanizado.
        </p>
      </Section>

      <section>
        <h2 className="font-display text-lg font-extrabold text-veloe-purple">
          Dados da Empresa
        </h2>
        <dl className="mt-4 overflow-hidden rounded-2xl border border-veloe-purple/15">
          {dados.map(([label, value], i) => (
            <div
              key={label}
              className={`grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-3 ${
                i % 2 ? "bg-white" : "bg-veloe-purple/[0.03]"
              }`}
            >
              <dt className="text-sm font-bold text-veloe-purple">{label}</dt>
              <dd className="text-sm text-veloe-purple/80 sm:col-span-2">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section title="Aviso Legal Importante">
        <p>
          Este site (ativartag-vhloe.com) NÃO é afiliado, autorizado, patrocinado
          ou de qualquer forma vinculado a qualquer operadora de tags de pedágio.
        </p>
        <p>
          Somos um serviço independente de suporte e ativação. Todas as marcas
          citadas pertencem aos seus respectivos proprietários.
        </p>
      </Section>
    </InfoPage>
  );
}
