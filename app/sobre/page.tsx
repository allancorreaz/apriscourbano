import { getPublishedMedia } from "../admin-service";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { VideoPlayer } from "../components/VideoPlayer";
import { beliefs, documentaries } from "../site-content";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Sobre nós",
  description: "História, visão e valores da Aprisco Urbano.",
};

export default async function Page() {
  const mediaItems = await getPublishedMedia();

  return (
    <main>
      <PageHero
        eyebrow="Nossa casa"
        title="Uma igreja urbana. Uma fé vivida de perto."
        description="Existimos para conectar pessoas a Jesus, formar discípulos e servir a cidade com amor e verdade."
        image="/media/hero-noite-pertencimento.png"
      />

      <section className="inner-section section-pad">
        <div className="container story">
          <div className="story-mark">
            <span>A</span>
            <i />
            <span>U</span>
          </div>
          <div>
            <p className="eyebrow dark">Sobre nós</p>
            <h2 className="display">
              Chamados para ser
              <br />
              <em>casa na cidade.</em>
            </h2>
            <p>
              A história oficial da Aprisco Urbano poderá ser publicada aqui
              com seus marcos, testemunhos e o chamado que deu origem à igreja.
            </p>
            <p>
              Mais do que datas, esta página revela por que existimos, como
              cuidamos e o futuro que estamos construindo juntos.
            </p>
          </div>
        </div>
      </section>

      <section className="beliefs section-pad">
        <div className="container">
          <p className="eyebrow">O que nos move</p>
          <h2 className="display light">
            Convicções que
            <br />
            <em>ganham vida.</em>
          </h2>
        </div>
        <div className="container belief-grid">
          {beliefs.map((belief) => (
            <article key={belief[0]}>
              <span>{belief[0]}</span>
              <h3>{belief[1]}</h3>
              <p>{belief[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-section section-pad">
        <div className="container page-intro">
          <div>
            <p className="eyebrow dark">Liderança pastoral</p>
            <h2 className="display">
              Pastores que servem
              <br />
              <em>caminhando perto.</em>
            </h2>
          </div>
          <p>
            Um espaço para apresentar a história, o chamado e as fotografias
            oficiais dos pastores sêniores da Aprisco Urbano.
          </p>
        </div>
        <div className="container pastors">
          {["Pastor sênior", "Pastora sênior"].map((role, index) => (
            <article key={role}>
              <div className={`pastor p${index}`}>
                <span>Foto oficial</span>
              </div>
              <p>{role}</p>
              <h3>Nome em atualização</h3>
              <span>Biografia e testemunho em atualização.</span>
            </article>
          ))}
        </div>
      </section>

      <section className="documentaries section-pad">
        <div className="container documentary-heading">
          <div>
            <p className="eyebrow">Memória, chamado e legado</p>
            <h2 className="display light">
              Histórias que merecem
              <br />
              <em>ser preservadas.</em>
            </h2>
          </div>
          <p>
            Os documentários produzidos pela equipe de mídia podem ser exibidos
            aqui pelo YouTube, Vimeo ou por um arquivo MP4/WebM.
          </p>
        </div>

        <div className="container documentary-grid">
          {mediaItems.map((media) => (
            <article key={`media-${media.id}`} className="documentary-card">
              <div className="documentary-player">
                <VideoPlayer
                  title={media.title}
                  url={media.url}
                  poster={media.thumbnailUrl || undefined}
                />
              </div>
              <span>
                {media.mediaType === "DOCUMENTARY"
                  ? "Documentário"
                  : "Vídeo Aprisco"}
              </span>
              <h3>{media.title}</h3>
              <p>{media.description}</p>
            </article>
          ))}

          {mediaItems.length === 0 &&
            documentaries.map((documentary) => (
              <article key={documentary.id} className="documentary-card pending">
                <div
                  className="documentary-placeholder"
                  style={{
                    backgroundImage: `linear-gradient(135deg,rgba(3,17,22,.88),rgba(3,17,22,.34)),url(${documentary.image})`,
                  }}
                >
                  <Icon name="camera" size={36} />
                  <span>{documentary.status}</span>
                </div>
                <span>Documentário Aprisco</span>
                <h3>{documentary.title}</h3>
                <p>{documentary.description}</p>
              </article>
            ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

