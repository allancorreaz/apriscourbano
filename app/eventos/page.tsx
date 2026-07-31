import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { events } from "../site-content";

export const metadata = {
  title: "Eventos",
  description: "Agenda e avisos da Aprisco Urbano.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Agenda Aprisco"
        title="Momentos que marcam a nossa caminhada."
        description="Cultos, encontros, campanhas e avisos importantes para viver a vida da igreja de forma proxima."
        image="/media/hero-glaucio-pregando.png"
      />
      <section className="inner-section section-pad">
        <div className="container page-intro">
          <div>
            <p className="eyebrow dark">Eventos e avisos</p>
            <h2 className="display">
              Escolha o proximo
              <br />
              <em>capitulo.</em>
            </h2>
          </div>
          <p>
            Aqui voce acompanha campanhas da casa, conferencias, comunhao e avisos
            especiais da vida da igreja.
          </p>
        </div>
        <div className="container event-list">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div
                className="event-image"
                style={{
                  backgroundImage: `linear-gradient(180deg,transparent,rgba(3,18,23,.66)),url(${event.image})`,
                }}
              >
                <span>{event.status}</span>
              </div>
              <div className="event-date">
                <strong>{event.date}</strong>
                <span>{event.day}</span>
              </div>
              <div className="event-body">
                <p className="eyebrow dark">{event.location}</p>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                {event.paymentMethods.length > 0 && (
                  <div className="methods">
                    {event.paymentMethods.map((method) => (
                      <span key={method}>{method}</span>
                    ))}
                  </div>
                )}
                <a href={event.href} className="button dark">
                  {event.action}
                  <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="detalhes" className="integration">
        <div className="container integration-layout">
          <div>
            <p className="eyebrow">Vivendo a agenda da casa</p>
            <h2>Da campanha ao encontro, tudo aponta para comunhao e discipulado.</h2>
          </div>
          <div>
            {[
              ["01", "Cultos e campanhas", "A vida da igreja tambem se fortalece no cuidado pratico e na generosidade."],
              ["02", "Conferencias e encontros", "Eventos especiais ampliam comunhao, ensino e mover do Espirito Santo."],
              ["03", "Contato simples", "Quando houver duvidas, o caminho mais rapido continua sendo falar com a igreja."],
            ].map((step) => (
              <article key={step[0]}>
                <span>{step[0]}</span>
                <div>
                  <strong>{step[1]}</strong>
                  <p>{step[2]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
