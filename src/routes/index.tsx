import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import logo from "@/assets/logo-kn.png";
import heroImg from "@/assets/hero.png";
import aboutImg from "@/assets/about.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.jpg";
import { Reveal } from "@/components/Reveal";
import {
  catalog,
  differentials,
  services,
  site,
  testimonials,
  whatsappLink,
  whatsappModelLink,
} from "@/lib/site-config";

// Imagens do catálogo: arquivos estáticos em /public/images/.
// Para trocar uma foto, basta substituir o arquivo mantendo o mesmo nome.
const catalogImages = [
  "/images/lash-brasileiro.png",
  "/images/lash-egipcio.png",
  "/images/lash-glamour.png",
];

const title = `${site.brandName} | ${site.role} — Extensão de Cílios`;
const description =
  "Extensão de cílios com acabamento delicado e resultado natural. Atendimento personalizado, ambiente reservado e agendamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const galleryImages = [
  { src: gallery1, alt: "Alongamento clássico fio a fio com resultado natural" },
  { src: gallery2, alt: "Volume com fios preenchidos e olhar marcante" },
  { src: gallery3, alt: "Aplicação de extensão de cílios durante o atendimento" },
  { src: gallery4, alt: "Materiais profissionais organizados no estúdio" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <img src={logo} alt={`Logo ${site.brandName}`} width={512} height={512} className={className} />
  );
}

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useParallax(speed = 0.15) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * speed}px) scale(1.08)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);
  return ref;
}

function Index() {
  const scrolled = useScrolled();
  const heroImgRef = useParallax(0.12);

  return (
    <div className="min-h-screen bg-background">
      <header
        data-scrolled={scrolled ? "true" : "false"}
        className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
      >
        <nav
          aria-label="Principal"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8"
        >
          <a href="#topo" className="flex items-center gap-3">
            <Logo className="h-10 w-10 rounded-full object-cover transition-transform duration-500 hover:scale-105" />
            <span className="hidden text-sm tracking-[0.28em] uppercase text-muted-foreground sm:block">
              {site.brandName}
            </span>
          </a>
          <div className="hidden items-center gap-8 text-xs tracking-[0.2em] uppercase text-muted-foreground md:flex">
            <a className="nav-link transition-colors hover:text-gold" href="#sobre">
              Sobre
            </a>
            <a className="nav-link transition-colors hover:text-gold" href="#servicos">
              Serviços
            </a>
            <a className="nav-link transition-colors hover:text-gold" href="#catalogo">
              Catálogo
            </a>
            <a className="nav-link transition-colors hover:text-gold" href="#galeria">
              Galeria
            </a>
            <a className="nav-link transition-colors hover:text-gold" href="#depoimentos">
              Depoimentos
            </a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-ghost-gold h-11 min-h-11 px-4 text-[0.65rem] sm:px-6"
          >
            Agendar
          </a>
        </nav>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden pt-24">
          <img
            ref={heroImgRef}
            src={heroImg}
            alt="Olhar feminino com extensão de cílios em luz dourada"
            width={1600}
            height={1808}
            className="absolute inset-0 h-full w-full object-contain object-center opacity-70 will-change-transform"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40"
          />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
            <Reveal className="max-w-xl">
              <Logo className="floating mb-8 h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28" />
              <p className="eyebrow">{site.role}</p>
              <h1 className="mt-4 text-4xl leading-[1.08] sm:text-6xl">{site.brandName}</h1>
              <p className="mt-5 font-display text-2xl text-gold-soft sm:text-3xl">
                O olhar é o primeiro detalhe que revela cuidado.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                Extensão de cílios desenhada fio a fio para o seu rosto — com acabamento delicado,
                técnica precisa e um resultado que parece seu desde o primeiro olhar.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-gold btn-shine w-full sm:w-auto"
                >
                  Agendar horário
                </a>
                <a href="#galeria" className="btn-base btn-ghost-gold w-full sm:w-auto">
                  Conhecer meu trabalho
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal variant="scale" className="img-frame">
              <img
                src={aboutImg}
                alt={`${site.brandName}, ${site.role}, em seu estúdio`}
                width={1200}
                height={1504}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Sobre mim</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Cada olhar merece um desenho próprio.</h2>
              <div className="gold-rule mt-6" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Sou {site.brandName}, {site.role.toLowerCase()}. Trabalho com técnica, tempo e
                atenção — porque acabamento delicado não se faz com pressa.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Antes de aplicar o primeiro fio, entendo o formato do seu olho, a saúde dos seus
                cílios e o resultado que você deseja. O objetivo nunca é mudar você, e sim revelar o
                que já é bonito naturalmente.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="border-y border-border/60 bg-surface/40 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-lg">
              <p className="eyebrow">Serviços</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Procedimentos com assinatura própria.</h2>
              <div className="gold-rule mt-6" />
            </Reveal>

            <ul className="mt-14 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
  {services.filter((service) => ["Manutenção", "Remoção"].includes(service.name)).map((service, i) => (
              {services.map((service, i) => (
                <Reveal
                  as="li"
                  key={service.name}
                  delay={i * 70}
                  className="card-lift flex flex-col bg-background p-8 transition-colors hover:bg-surface"
                >
                  <span aria-hidden="true" className="text-xs tracking-[0.3em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-2xl">{service.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-gold transition-opacity hover:opacity-70"
                  >
                    Agendar
                    <span aria-hidden="true">→</span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CATÁLOGO */}
        <section id="catalogo" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-lg">
            <p className="eyebrow">Catálogo</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Nosso catálogo de cílios.</h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Escolha o efeito que combina com você. Todos os valores incluem aplicação completa,
              com opções de manutenção.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.map((model, i) => (
              <Reveal
                as="li"
                key={model.name}
                delay={i * 90}
                className="card-lift flex flex-col overflow-hidden rounded border border-border bg-surface/50 transition-colors hover:border-gold/40"
              >
                <img
                  src={catalogImages[i]}
                  alt={`Exemplo do efeito ${model.name}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="text-2xl">{model.name}</h3>
                  <p className="mt-2 font-display text-3xl text-gold">{model.price}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {model.description}
                  </p>

                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-[0.65rem] tracking-[0.28em] uppercase text-muted-foreground">
                      Manutenção
                    </p>
                    <dl className="mt-3 space-y-2 text-sm">
                      {model.maintenance.map((item) => (
                        <div
                          key={item.period}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <dt className="text-muted-foreground">{item.period}</dt>
                          <dd className="text-gold-soft">{item.price}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <a
                    href={whatsappModelLink(model.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-gold btn-shine mt-8 w-full"
                  >
                    Quero esse modelo
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-lg">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Trabalhos recentes.</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {galleryImages.map((image, i) => (
              <Reveal
                key={image.alt}
                delay={i * 80}
                variant={i % 2 === 0 ? "left" : "right"}
                className="img-frame"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={1250}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="border-y border-border/60 bg-surface/40 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-lg">
              <p className="eyebrow">Experiência</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">O cuidado está nos detalhes.</h2>
              <div className="gold-rule mt-6" />
            </Reveal>
            <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {differentials.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 70} variant="scale">
                  <span aria-hidden="true" className="block text-lg leading-none text-gold">
                    ✦
                  </span>
                  <h3 className="mt-4 text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal className="max-w-lg">
            <p className="eyebrow">Depoimentos</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Quem já passou por aqui.</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal
                as="li"
                key={item.quote}
                delay={i * 90}
                className="card-lift rounded border border-border bg-surface/60 p-8"
              >
                <blockquote className="font-display text-xl leading-relaxed text-foreground/90">
                  “{item.quote}”
                </blockquote>
                <p className="mt-6 text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
                  {item.author}
                </p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-28 text-center sm:py-36">
          <div className="mx-auto max-w-2xl px-5 sm:px-8">
            <Reveal>
              <div className="gold-rule mx-auto" />
              <h2 className="mt-8 text-4xl leading-tight sm:text-5xl">
                Seu próximo olhar começa aqui.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                Agenda com vagas limitadas para garantir tempo e atenção a cada cliente. Envie uma
                mensagem e escolha o melhor horário.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold btn-shine mt-10 w-full sm:w-auto"
              >
                Agendar pelo WhatsApp
              </a>
            </Reveal>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow">Instagram</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-display text-2xl text-gold transition-opacity hover:opacity-75 sm:text-3xl"
            >
              Veja mais trabalhos no Instagram
            </a>
            <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {site.instagramHandle}
            </p>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border/60 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <Logo className="h-16 w-16 rounded-full object-cover" />
          <div>
            <p className="font-display text-xl">{site.brandName}</p>
            <p className="mt-1 text-[0.7rem] tracking-[0.28em] uppercase text-muted-foreground">
              {site.role}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            <a
              className="transition-colors hover:text-gold"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="transition-colors hover:text-gold"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            {site.address ? <span>{site.address}</span> : null}
            {site.city ? <span>{site.city}</span> : null}
          </div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground/70">
            © {new Date().getFullYear()} {site.brandName}
          </p>
        </div>
      </footer>
    </div>
  );
}
