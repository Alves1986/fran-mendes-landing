"use client";

/**
 * Design reminder — Editorial de casa aberta:
 * calor humano, narrativa visual assimétrica e conversão profissional.
 * A Fran é a protagonista; elementos gráficos apenas organizam sua história.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Instagram,
  Menu,
  Play,
  Send,
  X,
} from "lucide-react";

const AGENCY_URL = "https://wa.link/f8gtsj";
const PERSONAL_INSTAGRAM = "https://www.instagram.com/franmendesgeffer/";
const FITNESS_INSTAGRAM = "https://www.instagram.com/franmendes.fit/";
const REEL_URL = "https://www.instagram.com/reel/DZk2XmYJT-D/";
const ASSETS = {
  brandMark: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028544755/hkWkUUFVTpXlDWfF.png",
  caseTexture: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028544755/EFhGWqvfhDzWpryH.png",
  heroTexture: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028544755/iKqhoQrwcIhzJPsy.png",
  fitness: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028544755/qlYjLnVTmStuPYSU.png",
  lifestyle: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028544755/DVqDtKfKrgeBhOMY.png",
  motion: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028544755/HNGAJxfOexisoRYu.png",
  routine: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028544755/gOKFVjJHsGnzcZYT.png",
  heroPortrait: "/manus-storage/fran-mendes-hero-atual_4312ea47.png",
  portrait: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028544755/anRMVCviHEogSAQp.jpg",
} as const;

const offerings = [
  {
    index: "01",
    title: "Campanhas de influência",
    description:
      "Reels, Stories e narrativas que colocam sua marca dentro da rotina — com contexto, experiência e chamada para ação.",
  },
  {
    index: "02",
    title: "Conteúdo UGC",
    description:
      "Vídeos verticais e imagens com linguagem natural para os seus canais, campanhas e mídia paga.",
  },
  {
    index: "03",
    title: "Embaixadora de marca",
    description:
      "Presença contínua para construir lembrança, associação e confiança ao longo de uma parceria.",
  },
  {
    index: "04",
    title: "Eventos & ativações",
    description:
      "Uma presença que amplia a experiência da marca dentro e fora das telas, com energia e conexão real.",
  },
];

const steps = [
  ["01", "Escuta", "A agência recebe o briefing e entende o objetivo de negócio."],
  ["02", "Ideia", "A marca encontra um lugar verdadeiro na rotina e no repertório da Fran."],
  ["03", "História", "O conteúdo ganha forma com direção criativa, cuidado e entrega organizada."],
];

const verifiedPartners = [
  {
    name: "Volkswagen",
    category: "automotivo · T-Cross Highline",
    href: "https://www.instagram.com/reel/DcHiePxT5El/",
  },
  {
    name: "Lojas G",
    category: "casa & decoração",
    href: "https://www.tiktok.com/@lojasgbrasil/video/7660162515401198864",
  },
  {
    name: "Haskell",
    category: "beleza & cuidado capilar",
    href: "https://www.instagram.com/reel/Db6By58wOs4/",
  },
  {
    name: "Jurema Águas Quentes",
    category: "turismo & bem-estar",
    href: "https://www.instagram.com/franmendesgeffer/reel/DcKC4rFT1jg/",
  },
  {
    name: "99",
    category: "mobilidade & serviços urbanos",
    href: "https://www.instagram.com/reel/DZOExwfTd6L/",
  },
  {
    name: "GED Nutrition",
    category: "nutrição & performance",
    href: "https://www.instagram.com/reel/DMYmaOiyeiE/",
  },
  {
    name: "Teixeira Sorvetes",
    category: "alimentos & varejo",
    href: "https://www.instagram.com/reel/DJ-OE1cyonG/",
  },
  {
    name: "Natura",
    category: "beleza & perfumaria",
    href: "https://www.instagram.com/reel/DI9aEZkOxm-/",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src={ASSETS.brandMark} alt="" />
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#inicio" aria-label="Fran Mendes Geffer, início">
          <BrandMark />
          <span>
            <strong>Fran</strong>
            <small>MENDES GEFFER</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#parcerias">Parcerias</a>
          <a href="#historia">Conteúdo</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href="#contato">
          Trabalhe com a Fran <ArrowUpRight size={16} strokeWidth={2.2} />
        </a>

        <button
          className="mobile-menu-trigger"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#parcerias" onClick={closeMenu}>Parcerias</a>
        <a href="#historia" onClick={closeMenu}>Conteúdo</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
      </div>

      <main>
        <svg className="route-line" viewBox="0 0 1440 5900" preserveAspectRatio="none" aria-hidden="true">
          <path d="M1190 -50 C1360 180 1310 510 1090 710 C900 880 1010 1080 1255 1240 C1430 1350 1350 1620 1105 1780 C850 1945 948 2210 1260 2380 C1450 2480 1360 2760 1080 2930 C825 3080 940 3360 1240 3535 C1430 3650 1370 3940 1095 4090 C875 4210 935 4480 1200 4640 C1405 4760 1350 5050 1085 5210 C860 5350 925 5650 1190 5900" />
        </svg>
        <section className="hero" id="inicio">
          <div className="hero-texture" aria-hidden="true"><img src={ASSETS.heroTexture} alt="" /></div>
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span /> MARCA PESSOAL · PARCERIAS</p>
            <h1>Sua marca cabe<br /><em>na vida real.</em></h1>
            <p className="hero-description">Entre o café de casa, a correria, a risada e o treino, Fran transforma rotina, beleza, família e movimento em histórias que ficam na memória.</p>
            <div className="hero-actions">
              <a className="button button-coral" href="#contato">Quero contratar a Fran <ArrowDownRight size={19} /></a>
              <a className="text-link" href="#parcerias">Conhecer formatos <span>↘</span></a>
            </div>
          </div>
          <div className="hero-portrait-wrap reveal-up delay-1">
            <div className="hero-portrait-frame"><img className="hero-portrait hero-portrait-current" src={ASSETS.heroPortrait} alt="Fran Mendes Geffer sorrindo" /></div>
            <span className="portrait-note">VIVÊNCIA REAL<br />QUE CONECTA</span><span className="terracotta-orbit" aria-hidden="true" />
          </div>
          <div className="hero-bottomline"><span>Desde 2014, criando conexões.</span><span className="scroll-cue">deslize para descobrir <ArrowDownRight size={16} /></span></div>
        </section>

        <section className="proof-strip" aria-label="Presença digital">
          <div className="proof-intro"><span className="eyebrow"><span /> DUAS COMUNIDADES</span><p>Uma presença que transita entre rotina,<br />energia e conexão.</p></div>
          <div className="stat"><strong>+550K</strong><span>lifestyle &<br />vida real</span></div>
          <div className="stat"><strong>+100K</strong><span>movimento &<br />performance</span></div>
          <div className="proof-outro">Números apresentados nos perfis<br />e atualizados no mídia kit.</div>
        </section>

        <section className="about-section section-shell" id="sobre">
          <div className="about-heading reveal-up"><p className="eyebrow"><span /> QUEM É A FRAN</p><h2>O cotidiano é o<br /><em>melhor lugar</em><br />para uma boa história.</h2></div>
          <div className="about-content reveal-up delay-1"><p className="lead-copy">Fran não cria uma vida para caber no conteúdo. Ela transforma o que já vive em presença, humor e inspiração para uma comunidade que gosta de se reconhecer nas histórias.</p><p>Entre a rotina de casa, o autocuidado, as conversas em família e o treino, ela abre espaço para marcas entrarem de forma orgânica — com contexto, afeto e resultado.</p><a href={PERSONAL_INSTAGRAM} target="_blank" rel="noreferrer" className="profile-link"><Instagram size={17} /> Acompanhar @franmendesgeffer <ArrowUpRight size={16} /></a></div>
          <div className="about-art" aria-hidden="true"><img src={ASSETS.routine} alt="" /></div>
        </section>

        <section className="story-section" id="historia">
          <div className="story-header section-shell"><div><p className="eyebrow eyebrow-light"><span /> HISTÓRIAS EM MOVIMENTO</p><h2>Conteúdo que se<br /><em>vê, sente e compartilha.</em></h2></div><p>Tem dia de rotina, tem dia de treino e tem sempre alguma cena que merece virar história. É assim que a Fran conversa com a comunidade.</p></div>
          <div className="story-grid section-shell">
            <a className="story-card lifestyle-card" href={PERSONAL_INSTAGRAM} target="_blank" rel="noreferrer"><img src={ASSETS.lifestyle} alt="Imagem do Instagram pessoal de Fran Mendes Geffer" /><span className="story-gradient" /><span className="card-meta">@FRANMENDESGEFFER</span><strong>Vida real<br /><em>que inspira.</em></strong><span className="card-arrow"><ArrowUpRight size={19} /></span></a>
            <a className="story-card fitness-card" href={FITNESS_INSTAGRAM} target="_blank" rel="noreferrer"><img src={ASSETS.fitness} alt="Imagem do Instagram fitness de Fran Mendes Geffer" /><span className="story-gradient" /><span className="card-meta">@FRANMENDES.FIT</span><strong>Persistência<br /><em>também é performance.</em></strong><span className="card-arrow"><ArrowUpRight size={19} /></span></a>
            <div className="reel-card"><div className="reel-copy"><span className="eyebrow"><span /> CONTEÚDO EM VÍDEO</span><p>O melhor da rotina acontece em movimento.</p><a href={REEL_URL} target="_blank" rel="noreferrer" className="reel-action"><Play size={16} fill="currentColor" /> Assistir no Instagram</a></div><img src={ASSETS.motion} alt="" /></div>
          </div>
        </section>

        <section className="brands-section section-shell" aria-labelledby="brands-title">
          <div className="brands-heading reveal-up"><p className="eyebrow"><span /> PARCERIAS QUE JÁ VIRARAM CENA</p><h2 id="brands-title">Marcas que já<br /><em>entraram na rotina.</em></h2><p>Trabalhos recentes em que a presença da Fran ajudou a transformar produto, destino e experiência em conteúdo com contexto real.</p></div>
          <div className="brands-list reveal-up delay-1" aria-label="Marcas parceiras verificadas">
            {verifiedPartners.map((partner, index) => <a className="partner-row" href={partner.href} target="_blank" rel="noreferrer" key={partner.name} aria-label={`Ver publicação da parceria com ${partner.name}`}><span className="partner-index">0{index + 1}</span><strong>{partner.name}</strong><span className="partner-category">{partner.category}</span><ArrowUpRight size={20} aria-hidden="true" /></a>)}
            <div className="partner-invite"><span>PRÓXIMA CENA</span><p>A sua marca pode ser a próxima a entrar nessa história.</p><a href="#contato">Converse com a assessoria <ArrowDownRight size={16} /></a></div>
          </div>
        </section>

        <section className="offerings-section section-shell" id="parcerias">
          <div className="offerings-top"><div className="reveal-up"><p className="eyebrow"><span /> PARA MARCAS</p><h2>Marca boa não<br />interrompe.<br /><em>Entra na cena.</em></h2></div><p className="reveal-up delay-1">Do produto na bancada ao treino antes do story: a parceria encontra um momento real para acontecer — e o público sente quando faz sentido.</p></div>
          <div className="offerings-list">{offerings.map((offering) => <article className="offering-row" key={offering.index}><span className="offering-index">{offering.index}</span><h3>{offering.title}</h3><p>{offering.description}</p><a href="#contato" aria-label={`Solicitar proposta para ${offering.title}`}><ArrowDownRight size={23} /></a></article>)}</div>
        </section>

        <section className="process-section">
          <div className="process-art" aria-hidden="true"><img src={ASSETS.caseTexture} alt="" /></div>
          <div className="process-content"><p className="eyebrow"><span /> COMO ACONTECE</p><h2>Ideia boa começa<br />no <em>dia a dia.</em></h2><div className="steps">{steps.map(([number, title, copy]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div>
        </section>

        <section className="fit-section section-shell"><div className="fit-copy"><p className="eyebrow"><span /> O ENCAIXE CERTO</p><h2>Quando a marca<br />faz sentido, <em>todo<br />mundo percebe.</em></h2></div><div className="fit-tags" aria-label="Territórios de conteúdo">{["Lifestyle", "Família", "Beleza", "Casa", "Bem-estar", "Humor", "Fitness", "Eventos"].map((tag) => <span key={tag}>{tag}</span>)}</div><p className="fit-note"><Check size={18} /> Parcerias alinhadas com a rotina, a voz e a comunidade da Fran.</p></section>

        <section className="contact-section" id="contato">
          <div className="contact-visual" aria-hidden="true"><img src={ASSETS.heroPortrait} alt="" /><span className="contact-sun">✳</span></div>
          <div className="contact-copy"><p className="eyebrow eyebrow-light"><span /> VAMOS CONVERSAR</p><h2>Tem uma ideia na<br />cabeça? Vamos<br /><em>colocar em cena.</em></h2><p>Conte para a assessoria o que sua marca quer viver. A conversa começa por WhatsApp e o formato é desenhado a partir do objetivo da campanha.</p><p className="contact-note">Pode ter começado numa conversa de café. As boas histórias, quase sempre, começam assim.</p><div className="contact-actions"><a className="button button-light" href={AGENCY_URL} target="_blank" rel="noreferrer">Abrir conversa com a assessoria <Send size={18} /></a><a className="direct-contact" href={AGENCY_URL} target="_blank" rel="noreferrer">Prefere chamar agora? Fale com a assessoria <ArrowUpRight size={17} /></a></div></div>
        </section>
      </main>

      <footer className="footer"><a className="wordmark footer-wordmark" href="#inicio"><BrandMark /><span><strong>Fran</strong><small>MENDES GEFFER</small></span></a><p>Vida real, em boa companhia.</p><div className="footer-links"><a href={PERSONAL_INSTAGRAM} target="_blank" rel="noreferrer">Instagram pessoal</a><a href={FITNESS_INSTAGRAM} target="_blank" rel="noreferrer">Instagram fit</a><a href={AGENCY_URL} target="_blank" rel="noreferrer">Publicidade & assessoria</a></div></footer>
    </div>
  );
}
