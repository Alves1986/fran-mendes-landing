/**
 * Design reminder — Editorial de casa aberta:
 * agradecer com acolhimento, respiro e uma assinatura visual reconhecível.
 */
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BrandLockup } from "@/components/BrandLockup";
import { SocialMeta } from "@/components/SocialMeta";
import { SITE_CONTACT_URL } from "@/lib/contact";

export default function ThankYou() {
  return (
    <div className="thanks-page">
      <SocialMeta
        title="Obrigada pela mensagem | Fran Mendes Geffer"
        description="Sua ideia chegou por aqui. A assessoria da Fran Mendes Geffer vai olhar cada detalhe com cuidado."
        image="/manus-storage/fran-social-share-thanks_3b5645c2.jpg"
        imageAlt="Fran Mendes Geffer em composição editorial de agradecimento"
      />
      <header className="thanks-header">
        <a className="wordmark" href="/" aria-label="Fran Mendes Geffer, início">
          <BrandLockup />
        </a>
        <a className="thanks-back" href="/">
          <ArrowLeft size={16} /> Voltar para a página inicial
        </a>
      </header>

      <main className="thanks-main">
        <span className="thanks-orbit thanks-orbit-large" aria-hidden="true" />
        <span className="thanks-orbit thanks-orbit-small" aria-hidden="true" />
        <div className="thanks-copy">
          <p className="eyebrow"><span /> OBRIGADA PELA MENSAGEM</p>
          <h1>Que bom ter sua ideia <em>por aqui.</em></h1>
          <p className="thanks-intro">A assessoria da Fran recebeu seu contato e vai olhar cada detalhe com o cuidado que uma boa parceria merece.</p>
          <p className="thanks-support">Enquanto a conversa ganha forma, você pode voltar para conhecer os formatos, as marcas parceiras e o universo da Fran.</p>
          <div className="thanks-actions">
            <a className="button button-coral" href="/">Conhecer a Fran <ArrowUpRight size={18} /></a>
            <a className="text-link" href={SITE_CONTACT_URL} target="_blank" rel="noreferrer">Falar com a assessoria <span>↗</span></a>
          </div>
        </div>

        <aside className="thanks-card" aria-label="Próximo passo">
          <div className="thanks-card-symbol" aria-hidden="true"><BrandLockup /></div>
          <p className="thanks-card-index">PRÓXIMA CENA</p>
          <h2>Uma boa parceria começa com uma conversa que faz sentido.</h2>
          <p>Obrigada por considerar a Fran para contar essa história.</p>
        </aside>
      </main>

      <footer className="thanks-footer">
        <span>FRAN MENDES GEFFER · MARCA PESSOAL</span>
        <span>Vida real, em boa companhia.</span>
      </footer>
    </div>
  );
}
