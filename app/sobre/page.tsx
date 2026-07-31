import { getPublishedMedia } from "../admin-service";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { VideoPlayer } from "../components/VideoPlayer";
import { beliefs, churchPurpose, documentaries } from "../site-content";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Sobre nos",
  description: "Historia, visao e valores da Aprisco Urbano.",
};

export default async function Page() {
  const mediaItems = await getPublishedMedia();

  return (
    <main>
      <PageHero
        eyebrow="Nossa casa"
        title="Uma igreja urbana. Uma fe vivida de perto."
        description="Existimos para conectar pessoas a Jesus, formar discipulos e servir a cidade com amor, verdade e poder do Espirito Santo."
        image="/media/hero-glaucio-pregando.png"
      />

      <section className="inner-section section-pad">
        <div className="container story">
          <div className="story-mark">
            <span>A</span>
            <i />
            <span>U</span>
          </div>
          <div>
            <p className="eyebrow dark">Sobre nos</p>
            <h2 className="display">
              Chamados para ser
              <br />
              <em>casa na cidade.</em>
            </h2>
            <p>
              O Aprisco Urbano nasceu para revelar Jesus em Itaguai, formar uma familia
              espiritual saudavel e construir uma igreja que discipula, treina, envia e
              sustenta pessoas atraves das celulas.
            </p>
            <p>
              Nossa missao e clara: cada membro um sacerdote, cada casa uma extensao da
              igreja. Nossa visao e viver como Jesus viveu e fazer as mesmas coisas que
              Ele fez, e coisas maiores, pelo poder do Espirito Santo.
            </p>
          </div>
        </div>
      </section>

      <section className="beliefs section-pad">
        <div className="container">
          <p className="eyebrow">O que nos move</p>
          <h2 className="display light">
            Conviccoes que
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
            <p className="eyebrow dark">Visao e missao</p>
            <h2 className="display">
              Uma igreja que quer ser
              <br />
              <em>igual a Jesus.</em>
            </h2>
          </div>
          <p>
            {churchPurpose.vision}
          </p>
        </div>
        <div className="container purpose-grid purpose-grid-inner">
          <article>
            <span>Missao da casa</span>
            <p>{churchPurpose.mission}</p>
          </article>
          <article>
            <span>Como fazemos</span>
            <p>
              Salvando, discipulando, treinando, enviando e sustentando pessoas por
              meio das celulas, da comunhao e do servico cristao.
            </p>
          </article>
        </div>
      </section>

      <section className="inner-section section-pad">
        <div className="container page-intro">
          <div>
            <p className="eyebrow dark">Lideranca pastoral</p>
            <h2 className="display">
              Pastores que servem
              <br />
              <em>caminhando perto.</em>
            </h2>
          </div>
          <p>
            Glaucio Muniz e Cintia Fernandes sao os fundadores do Aprisco Urbano. As
            fotos oficiais dos pastores seniores podem ser atualizadas aqui assim que
            voce me enviar o proximo material.
          </p>
        </div>
        <div className="container pastors">
          {[
            ["Pastor senior", "Glaucio Muniz"],
            ["Pastora senior", "Cintia Fernandes"],
          ].map((role, index) => (
            <article key={role[0]}>
              <div className={`pastor p${index}`}>
                <span>Foto oficial em atualizacao</span>
              </div>
              <p>{role[0]}</p>
              <h3>{role[1]}</h3>
              <span>Biografia e testemunho em atualizacao.</span>
            </article>
          ))}
        </div>
      </section>

      <section className="documentaries section-pad">
        <div className="container documentary-heading">
          <div>
            <p className="eyebrow">Memoria, chamado e legado</p>
            <h2 className="display light">
              Historias que merecem
              <br />
              <em>ser preservadas.</em>
            </h2>
          </div>
          <p>
            Os takes abaixo fazem parte dos documentarios produzidos pela equipe de
            midia com os pastores seniores Glaucio Muniz e Cintia Fernandes,
            fundadores do Aprisco Urbano.
          </p>
        </div>

        <div className="container documentary-grid">
          {documentaries.map((documentary) => (
            <article key={documentary.id} className="documentary-card">
              <div className="documentary-player">
                <VideoPlayer
                  title={documentary.title}
                  url={documentary.url}
                  poster={documentary.image}
                />
              </div>
              <span>Documentario Aprisco</span>
              <h3>{documentary.title}</h3>
              <p>{documentary.description}</p>
            </article>
          ))}

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
                {media.mediaType === "DOCUMENTARY" ? "Documentario" : "Video Aprisco"}
              </span>
              <h3>{media.title}</h3>
              <p>{media.description}</p>
            </article>
          ))}

          {mediaItems.length === 0 ? (
            <article className="documentary-card documentary-note">
              <div className="documentary-placeholder documentary-placeholder-note">
                <Icon name="camera" size={36} />
                <span>Espaco pronto para novos episodios</span>
              </div>
              <span>Proximos capitulos</span>
              <h3>Novos documentarios podem entrar aqui</h3>
              <p>
                Conforme a equipe de midia publicar novos links ou arquivos, esta grade
                pode crescer sem mudar a estrutura da pagina.
              </p>
            </article>
          ) : null}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
