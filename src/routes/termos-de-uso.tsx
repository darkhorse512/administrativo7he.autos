import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, Section } from "@/components/InfoPage";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermosDeUso,
  head: () => ({
    meta: [{ title: "Termos de Uso — Efeito - AtivAr Tag" }],
  }),
});

function TermosDeUso() {
  return (
    <InfoPage title="Termos de Uso" updatedAt="21/05/2026">
      <Section title="1. Do serviço">
        <p>
          A Efeito - AtivAr Tag (operada pela Efeito Vida e Previdencia S.A., CNPJ
          54.783.005/0001-67) é um canal independente de suporte e ativação de
          tags de pedágio. Não somos uma operadora de tags e não emitimos,
          fabricamos ou administramos tags diretamente.
        </p>
      </Section>

      <Section title="2. Do atendimento">
        <p>
          O atendimento é realizado via WhatsApp no horário de segunda a sexta,
          das 09h às 19h. Mensagens fora desse horário serão respondidas no
          próximo dia útil.
        </p>
      </Section>

      <Section title="3. Isenção de responsabilidade">
        <p>
          Este site não possui vínculo com qualquer operadora de tags de pedágio.
          Todas as marcas citadas pertencem aos seus respectivos proprietários.
        </p>
      </Section>

      <Section title="4. Lei aplicável">
        <p>
          Estes termos são regidos pela legislação brasileira. Foro: comarca de
          Belo Horizonte/MG.
        </p>
      </Section>
    </InfoPage>
  );
}
