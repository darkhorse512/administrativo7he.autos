import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, Section } from "@/components/InfoPage";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PoliticaDePrivacidade,
  head: () => ({
    meta: [{ title: "Política de Privacidade — Efeito - AtivAr Tag" }],
  }),
});

function PoliticaDePrivacidade() {
  return (
    <InfoPage title="Política de Privacidade" updatedAt="21/05/2026">
      <Section title="1. Responsável pelo tratamento de dados">
        <p>
          Efeito Vida e Previdencia S.A.
          <br />
          CNPJ: 54.783.005/0001-67
          <br />
          E-mail: fcis.mendes@gmail.com
        </p>
      </Section>

      <Section title="2. Dados coletados">
        <p>
          Coletamos apenas os dados fornecidos voluntariamente pelo usuário via
          WhatsApp: nome, número de telefone e informações do veículo necessárias
          para o atendimento.
        </p>
      </Section>

      <Section title="3. Finalidade">
        <p>
          Os dados são utilizados exclusivamente para prestação do serviço de
          ativação e suporte de tags solicitado pelo próprio usuário.
        </p>
      </Section>

      <Section title="4. Compartilhamento">
        <p>Não compartilhamos, vendemos ou cedemos dados pessoais a terceiros.</p>
      </Section>

      <Section title="5. Direitos do titular">
        <p>
          Conforme a LGPD (Lei 13.709/2018), você tem direito a acessar, corrigir
          ou solicitar a exclusão dos seus dados. Entre em contato:
          fcis.mendes@gmail.com
        </p>
      </Section>

      <Section title="6. Cookies">
        <p>
          Este site pode utilizar cookies essenciais para funcionamento. Nenhum
          cookie de rastreamento é utilizado para fins publicitários de terceiros
          sem consentimento.
        </p>
      </Section>
    </InfoPage>
  );
}
