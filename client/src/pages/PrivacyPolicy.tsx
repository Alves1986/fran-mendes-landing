/**
 * Design reminder — Editorial de casa aberta:
 * transparência com acolhimento, leitura tranquila e linguagem direta.
 */
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { BrandLockup } from "@/components/BrandLockup";
import { SocialMeta } from "@/components/SocialMeta";
import "@/hero-stability.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <SocialMeta
        title="Privacidade | Fran Mendes Geffer"
        description="Como as informações do briefing são utilizadas no contato comercial com a assessoria da Fran Mendes Geffer."
        image="/manus-storage/fran-social-share-landing_84dc84ff.jpg"
        imageAlt="Fran Mendes Geffer em composição editorial"
      />
      <header className="privacy-header">
        <a className="wordmark" href="/" aria-label="Fran Mendes Geffer, início"><BrandLockup /></a>
        <a className="thanks-back" href="/"><ArrowLeft size={16} /> Voltar para a página inicial</a>
      </header>

      <main className="privacy-main">
        <div className="privacy-intro">
          <p className="eyebrow"><span /> PRIVACIDADE COM CLAREZA</p>
          <h1>A conversa começa com <em>confiança.</em></h1>
          <p>Esta política explica de forma simples como as informações compartilhadas no briefing são tratadas quando você entra em contato com a assessoria da Fran.</p>
        </div>

        <section className="privacy-card" aria-labelledby="privacy-title">
          <div className="privacy-symbol" aria-hidden="true"><ShieldCheck size={25} /></div>
          <h2 id="privacy-title">O que acontece com o seu briefing</h2>
          <div className="privacy-list">
            <article><strong>Dados informados</strong><p>Nome da marca, objetivo, formato de interesse e contexto da campanha. O formulário prepara uma mensagem no seu navegador para continuar a conversa pelo WhatsApp.</p></article>
            <article><strong>Uso da informação</strong><p>O conteúdo serve somente para entender a oportunidade comercial, responder ao contato e estruturar uma possível proposta de parceria.</p></article>
            <article><strong>Compartilhamento e medição</strong><p>As informações não são vendidas. A landing mede eventos de navegação e conversão sem incluir o nome da marca ou o contexto escrito no briefing.</p></article>
          </div>
          <p className="privacy-note">Ao optar por continuar no WhatsApp, você concorda com o uso dessas informações para o atendimento comercial da assessoria.</p>
          <a className="privacy-contact" href="/">Voltar para a página da Fran <ArrowUpRight size={16} /></a>
        </section>
      </main>

      <footer className="privacy-footer"><span>FRAN MENDES GEFFER · MARCA PESSOAL</span><span>Política resumida — revisar juridicamente antes de uso definitivo.</span></footer>
    </div>
  );
}
