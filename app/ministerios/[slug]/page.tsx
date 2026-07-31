import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../components/Icons";
import { PageHero } from "../../components/PageHero";
import { SiteFooter } from "../../components/SiteFooter";
import { ministries, siteConfig } from "../../site-content";

export function generateStaticParams() {
  return ministries.map((ministry) => ({ slug: ministry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ministry = ministries.find((item) => item.slug === slug);
  if (!ministry) return {};
  return {
    title: ministry.name,
    description: ministry.summary,
  };
}

export default async function MinistryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ministry = ministries.find((item) => item.slug === slug);
  if (!ministry) notFound();

  const heroImage = siteConfig.hero.image;

  return (
    <main>
      <PageHero
        eyebrow="Ministerios Aprisco Urbano"
        title={ministry.name}
        description={ministry.summary}
        image={heroImage}
      />

      <section className="ministry-detail section-pad">
        <div className="container ministry-detail-intro">
          <div>
            <p className="eyebrow dark">Por que existimos</p>
            <h2 className="display">
              Pessoas servindo
              <br />
              <em>com proposito.</em>
            </h2>
          </div>
          <div>
            <p>{ministry.description}</p>
            <ul>
              {ministry.focus.map((item) => (
                <li key={item}>
                  <Icon name="check" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ministry-leadership section-pad">
        <div className="container">
          <p className="eyebrow">Quem cuida deste ministerio</p>
          <h2 className="display light">
            Lideranca presente.
            <br />
            <em>Cobertura pastoral.</em>
          </h2>
          <div className="responsible-cards">
            <article>
              <div
                className="responsible-photo"
                style={
                  ministry.leader.photo
                    ? { backgroundImage: `url(${ministry.leader.photo})` }
                    : undefined
                }
              >
                {!ministry.leader.photo && <span>Aguardando foto oficial</span>}
              </div>
              <p>{ministry.leader.title}</p>
              <h3>{ministry.leader.name}</h3>
              <span>Apresentacao e testemunho da lideranca em atualizacao.</span>
            </article>
            <article>
              <div
                className="responsible-photo pastor-photo"
                style={
                  ministry.pastor.photo
                    ? { backgroundImage: `url(${ministry.pastor.photo})` }
                    : undefined
                }
              >
                {!ministry.pastor.photo && <span>Aguardando foto oficial</span>}
              </div>
              <p>{ministry.pastor.title}</p>
              <h3>{ministry.pastor.name}</h3>
              <span>Mensagem e apresentacao pastoral em atualizacao.</span>
            </article>
          </div>
        </div>
      </section>

      {ministry.teamPhoto ? (
        <section className="inner-section section-pad ministry-team-section">
          <div className="container ministry-team-layout">
            <div
              className="ministry-team-photo"
              style={{ backgroundImage: `url(${ministry.teamPhoto})` }}
            />
            <div>
              <p className="eyebrow dark">{ministry.teamTitle || "Equipe"}</p>
              <h2 className="display">
                Uma equipe que serve
                <br />
                <em>com alegria e excelencia.</em>
              </h2>
              <p>
                {ministry.teamDescription ||
                  "A equipe deste ministerio ajuda a construir um ambiente seguro, acolhedor e cheio de vida para cada encontro da igreja."}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="ministry-detail-cta">
        <div className="container">
          <p className="eyebrow">Ha um lugar para servir</p>
          <h2>Quer conhecer este ministerio de perto?</h2>
          <Link href="/contato" className="button ivory">
            Falar com a Aprisco <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
