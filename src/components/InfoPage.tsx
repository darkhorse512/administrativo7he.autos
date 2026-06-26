import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Shared shell for the static info/legal pages (Sobre, Política, Termos). */
export function InfoPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50">
        <div className="h-2.5 bg-veloe-purple" />
        <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link to="/" className="text-2xl font-black text-veloe-purple">
              Efeito - AtivAr Tag
            </Link>
            <Link to="/" className="text-sm font-bold text-veloe-purple underline">
              Voltar ao início
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="font-display text-3xl font-black text-veloe-purple md:text-4xl">
          {title}
        </h1>
        {updatedAt && (
          <p className="mt-2 text-sm font-semibold text-veloe-purple/70">
            Última atualização: {updatedAt}
          </p>
        )}
        <div className="mt-8 space-y-8">{children}</div>
      </main>

      <footer className="bg-veloe-purple text-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-xs opacity-75">
          <p>© {new Date().getFullYear()} Efeito. Todos os direitos reservados.</p>
          <p className="mt-1">Este canal não é afiliado a qualquer operadora de tags.</p>
        </div>
      </footer>
    </div>
  );
}

/** A titled section block used within the legal pages. */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lg font-extrabold text-veloe-purple">{title}</h2>
      <div className="mt-2 space-y-2 text-[15px] leading-relaxed text-veloe-purple/80">
        {children}
      </div>
    </section>
  );
}
