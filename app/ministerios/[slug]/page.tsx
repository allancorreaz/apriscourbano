import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../components/Icons";
import { PageHero } from "../../components/PageHero";
import { SiteFooter } from "../../components/SiteFooter";
import { ministries } from "../../site-content";

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

  return (
    <main>
      <PageHero
        eyebrow="Ministérios Aprisco Urbano"
        title={ministry.name}
        description={ministry.summary}
        image="/media/hero-noite-pertencimento.png"
      />

      <section className="ministry-detail section-pad">
        <div className="container ministry-detail-intro">
          <div>
            <p className="eyebrow dark">Por que existimos</p>
            <h2 className="display">
              Pessoas servindo
              <br />
              <em>com propósito.</em>
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
          <p className="eyebrow">Quem cuida deste ministério</p>
          <h2 className="display light">
            Liderança presente.
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
                {!ministry.leader.photo && <span>Foto do líder</span>}
              </div>
              <p>{ministry.leader.title}</p>
              <h3>{ministry.leader.name}</h3>
              <span>
                Apresentação e testemunho da liderança em atualização.
              </span>
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
                {!ministry.pastor.photo && <span>Foto pastoral</span>}
              </div>
              <p>{ministry.pastor.title}</p>
              <h3>{ministry.pastor.name}</h3>
              <span>
                Mensagem e apresentação pastoral em atualização.
              </span>
            </article>
          </div>
        </div>
      </section>

      <section className="ministry-detail-cta">
        <div className="container">
          <p className="eyebrow">Há um lugar para servir</p>
          <h2>Quer conhecer este ministério de perto?</h2>
          <Link href="/contato" className="button ivory">
            Falar com a Aprisco <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

