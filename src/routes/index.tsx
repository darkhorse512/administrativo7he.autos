import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Tag, TrendingUp, Headphones, Car, Receipt, HandHeart,
  ChevronDown, ShieldCheck, MapPin, Menu, X,
} from "lucide-react";
import heroTag from "@/assets/hero-tag.jpg";
import logo from "@/assets/favicon.ico?url";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA = (msg: string) =>
  `https://wa.me/5515981871744?text=${encodeURIComponent(msg)}`;

const nav = [
  { label: "Início", href: "#top" },
  { label: "Planos", href: "#planos" },
  { label: "Onde Usar", href: "#onde" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const quickAccess = [
  { icon: Tag, title: "Solicitar Tag", desc: "Peça sua tag gratuita", msg: "Olá! Quero solicitar a minha tag gratuita. Pode me ajudar com o pedido?" },
  { icon: TrendingUp, title: "Meus Extratos", desc: "Histórico de passagens", msg: "Olá! Preciso de ajuda para consultar meus extratos e o histórico de passagens." },
  { icon: Headphones, title: "Suporte 24h", desc: "Central de ajuda", msg: "Olá! Preciso de suporte. Pode me atender pela central de ajuda?" },
  { icon: Car, title: "Cadastrar Veículo", desc: "Gerencie sua frota", msg: "Olá! Quero cadastrar um veículo na minha conta. Pode me orientar?" },
  { icon: Receipt, title: "2ª Via de Boleto", desc: "Emita sua 2ª via", msg: "Olá! Preciso da 2ª via do meu boleto. Pode me ajudar a emitir?" },
  { icon: HandHeart, title: "Renegociar Débitos", desc: "Acordo de pagamento", msg: "Olá! Quero renegociar meus débitos. Pode me orientar sobre as opções de acordo?" },
];

const steps = [
  { n: "1", title: "Adquira", desc: "Solicite sua tag pelo WhatsApp em poucos minutos." },
  { n: "2", title: "Ative", desc: "Nosso especialista te orienta na ativação da tag." },
  { n: "3", title: "Instale", desc: "Cole a tag no para-brisa seguindo o passo a passo." },
  { n: "4", title: "Pronto pra usar", desc: "Passe sem parar em pedágios e estacionamentos." },
];

const usage = [
  { title: "Free Flow", desc: "Passe sem precisar parar e com mais praticidade em todas as praças com cancela e Free Flow (cobrança eletrônica)." },
  { title: "Estacionamento", desc: "Passe direto em estacionamentos e dê adeus aos tickets para reembolso e filas de pagamento." },
  { title: "Vale digital", desc: "Receba o pagamento do vale de forma digital, dentro da lei e sem manuseio de dinheiro." },
];

const faqs = [
  { q: "O que é a Efeito - AtivAr Tag?", a: "Somos um canal independente especializado em ajudar você a solicitar, ativar e usar sua tag de pedágio com agilidade e atendimento humano pelo WhatsApp." },
  { q: "Vocês são uma operadora de tag?", a: "Não. Atuamos como um canal independente de suporte e ativação, orientando todo o processo junto à operadora." },
  { q: "Como funciona o processo de ativação?", a: "Você solicita pelo WhatsApp, recebe a tag e nosso especialista te guia passo a passo até deixar tudo ativo." },
  { q: "Em quanto tempo sou atendido?", a: "Atendimento imediato no horário comercial. Fora dele, respondemos em poucos minutos." },
  { q: "Como posso consultar meus extratos?", a: "Pelo aplicativo da operadora ou solicitando ajuda diretamente pelo nosso WhatsApp." },
];

function Smile() {
  return (
    <svg viewBox="0 0 86 14" className="mx-auto mt-2 h-3 w-[86px]" fill="none" aria-hidden>
      <path d="M2 2 C 20 14, 66 14, 84 2" stroke="oklch(0.78 0.13 195)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="inline-block font-display text-3xl font-extrabold text-primary md:text-4xl">
        {children}
      </h2>
      <Smile />
    </div>
  );
}

function TagLogo() {
  return (
    <a href="#top" aria-label="Início" className="text-primary">
      <img src={logo} alt="Logo" className="h-8 w-8" width={32} height={32} />
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const [menu, setMenu] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* gradient top bar */}
      <div className="h-1.5 w-full" style={{ background: "var(--gradient-top)" }} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <TagLogo />
          <nav className="hidden items-center gap-8 text-[15px] font-bold text-primary md:flex">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="transition hover:text-cta">{n.label}</a>
            ))}
          </nav>
          <a href={WA("Olá! Quero solicitar a minha tag agora.")} className="hidden rounded-full bg-cta px-6 py-2.5 text-sm font-bold text-cta-foreground shadow-[var(--shadow-card)] transition hover:opacity-90 md:inline-block">
            Quero a tag
          </a>
          <button onClick={() => setMenu(!menu)} className="text-primary md:hidden" aria-label="Menu">
            {menu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menu && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-bold text-primary">
              {nav.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setMenu(false)}>{n.label}</a>
              ))}
              <a href={WA("Olá! Quero solicitar a minha tag agora.")} className="mt-2 rounded-full bg-cta px-5 py-2.5 text-center text-cta-foreground">Quero a tag</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-primary md:text-[3.25rem]">
              Ative sua tag<br />
              com quem entende<br />
              do assunto.
            </h1>
            <Smile />
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-[17px]">
              Passe por free flow e estacionamentos sem parar e sem complicação. Uma tag para todas as rodovias do Brasil.
            </p>
            <div className="mt-7 flex items-center gap-6">
              <a href={WA("Olá! Estou no site e gostaria de pedir a minha tag agora. Pode me orientar?")} className="rounded-full bg-cta px-7 py-3 text-sm font-bold text-cta-foreground shadow-[var(--shadow-card)] transition hover:opacity-90">
                Quero a tag
              </a>
              <a href="#planos" className="text-sm font-bold text-primary underline underline-offset-4 transition hover:text-cta">
                Ver planos
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-primary">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cta" /> 100% das rodovias</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cta" /> +2.600 estacionamentos</div>
            </div>
          </div>
          <div>
            <img
              src={heroTag}
              alt="Carro passando por praça de pedágio ao pôr do sol com tag no painel"
              width={1280}
              height={1024}
              className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section id="acesso" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Heading>Acesso rápido</Heading>
          <p className="mt-4 text-center text-muted-foreground">Tudo o que você precisa em um clique.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickAccess.map((q) => (
              <a key={q.title} href={WA(q.msg)} className="group flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-0.5">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-icon-bg text-cta transition group-hover:scale-105">
                  <q.icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold text-primary">{q.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{q.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Como usar */}
      <section id="como" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Heading>Como usar</Heading>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-xl font-extrabold text-primary-foreground">{s.n}</div>
                <h3 className="mt-5 font-display text-lg font-extrabold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={WA("Olá! Quero pedir a minha tag pelo WhatsApp. Pode me ajudar?")} className="inline-block rounded-full bg-cta px-7 py-3 text-sm font-bold text-cta-foreground shadow-[var(--shadow-card)] transition hover:opacity-90">
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Onde usar */}
      <section id="onde" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Heading>Onde usar</Heading>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            Estamos em 100% das rodovias com cobrança — com cancela ou Free Flow — e em mais de 2.600 estacionamentos de shoppings, aeroportos e muito mais.
          </p>
          <div className="mt-8 text-center">
            <a href={WA("Olá! Quero ver o mapa de cobertura — rodovias e estacionamentos atendidos pela tag.")} className="inline-block rounded-full bg-cta px-7 py-3 text-sm font-bold text-cta-foreground shadow-[var(--shadow-card)] transition hover:opacity-90">
              Ver mapa
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {usage.map((u) => (
              <div key={u.title} className="rounded-2xl bg-card p-7 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-extrabold text-primary">{u.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{u.desc}</p>
                <a href="#" className="mt-4 inline-block text-sm font-bold text-primary underline underline-offset-4 hover:text-cta">Saiba mais</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Heading>Perguntas frequentes</Heading>
          <div className="mt-12">
            {faqs.map((f, i) => (
              <div key={f.q} className="border-b border-border">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                  <span className="font-display text-base font-extrabold text-primary md:text-lg">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <div className="pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Não encontrou o que procurava?{" "}
            <a href={WA("Olá! Tenho outras dúvidas, pode me atender?")} className="font-bold text-primary underline underline-offset-4">Acesse nosso FAQ</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h4 className="font-display text-lg font-extrabold text-primary-foreground">Canal Independente de Suporte e Ativação de Tags</h4>
            <div className="mt-5 space-y-1 text-sm opacity-90">
              <p>CNPJ: 54.783.005/0001-67</p>
              <p>Av. Álvares Cabral, 397 — Belo Horizonte/MG — CEP 30170-001</p>
              <p>Telefone: (31) 3199-0530 | WhatsApp: (15) 98187-1744</p>
              <p>Atendimento: Seg. a Sex., 09h às 19h</p>
            </div>
          </div>
          <div className="space-y-3 text-sm md:text-right">
            <a id="sobre" href="#" className="block font-semibold opacity-90 hover:opacity-100">Sobre Nós</a>
            <a href="#" className="block font-semibold opacity-90 hover:opacity-100">Política de Privacidade</a>
            <a href="#" className="block font-semibold opacity-90 hover:opacity-100">Termos de Uso</a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-5 text-xs opacity-75">
            <p>© {new Date().getFullYear()} Efeito. Todos os direitos reservados.</p>
            <p className="mt-1">Este canal não é afiliado a qualquer operadora de tags.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA("Olá! Quero falar com um especialista sobre a tag.")}
        aria-label="Fale com um especialista no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp py-2 pl-2 pr-4 text-xs font-extrabold leading-tight text-white shadow-[var(--shadow-soft)] transition hover:scale-105"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-whatsapp">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
            <path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 18a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.8.9.9-2.7-.2-.3A9.5 9.5 0 1 1 12 21.5Zm5.4-7.1c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-1 1.1-.4.2-.7 0a7.8 7.8 0 0 1-3.8-3.3c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3 3 0 0 0-1 2.3c0 1.4 1 2.7 1.2 2.9s2.1 3.2 5.1 4.4c1.9.8 2.6.8 3.5.7.6 0 1.7-.7 2-1.4s.3-1.3.2-1.4-.3-.2-.6-.3Z"/>
          </svg>
        </span>
        <span>Fale com um<br />ESPECIALISTA</span>
      </a>
    </div>
  );
}
