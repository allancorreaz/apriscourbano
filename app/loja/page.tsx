import { getPublicSettings } from "../admin-service";
import { BookCarousel } from "../components/BookCarousel";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { bookGallery, products as fallbackProducts } from "../site-content";

export const dynamic = "force-dynamic";
export const metadata = { title: "Loja", description: "Loja Aprisco Urbano." };

type StoreProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  active: boolean;
};

export default async function Page() {
  const settings = await getPublicSettings();
  let products: StoreProduct[] = fallbackProducts.map((product) => ({
    id: product[0],
    name: product[1],
    category: product[2],
    description: product[3],
    price: "",
    image: "",
    active: true,
  }));
  try {
    const saved = JSON.parse(settings.store_products || "[]");
    if (Array.isArray(saved) && saved.length) products = saved;
  } catch {
    // Mantem o catalogo inicial quando a configuracao ainda nao e valida.
  }
  products = products.filter((product) => product.active);

  const paymentMethods = [
    ["Pix", settings.payment_pix_enabled === "true", settings.payment_pix_key],
    ["Credito", settings.payment_credit_enabled === "true", settings.payment_credit_url],
    ["Debito", settings.payment_debit_enabled === "true", settings.payment_debit_url],
    ["Boleto", settings.payment_boleto_enabled === "true", settings.payment_boleto_url],
  ] as const;

  return (
    <main>
      <PageHero eyebrow="Loja Aprisco" title="Leve a essencia para alem do domingo." description="Produtos da comunidade, retirada local e pagamentos configurados com seguranca." compact />
      <section className="inner-section section-pad">
        <div className="container store-title"><div><p className="eyebrow dark">Colecao Aprisco</p><h2>Produtos disponiveis</h2></div><div><Icon name="pin" /><span>Entregas locais primeiro<small>Preparado para ampliar ao RJ e outras regioes</small></span></div></div>
        <div className="container featured-book-card store-book-highlight"><article><BookCarousel images={bookGallery} title="Livro do pastor Glaucio" /><section><p>Livro em destaque</p><h3>Cumpra plenamente o seu ministerio</h3><span>Livro de Glaucio Muniz em um unico card com fotos reais em carrossel.</span></section></article></div>
        <div className="container store-grid">
          {products.map((product, index) => <article key={product.id}>
            <div className="store-art copper" style={product.image ? { backgroundImage: `url(${product.image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}><span>{product.image ? "" : index === 0 ? "AU" : "AP"}</span><i /></div>
            <section><p>{product.category}</p><h2>{product.name}</h2><span>{product.description}</span>
              <div><strong>{product.price ? `R$ ${product.price}` : "Consulte"}</strong>
                <a className="store-buy" href="/contato"><Icon name="bag" />Tenho interesse</a>
              </div>
            </section>
          </article>)}
          {!products.length && <article className="new-product"><b>+</b><h2>Catalogo em atualizacao</h2><p>Novos produtos serao publicados em breve.</p></article>}
        </div>
      </section>
      <section className="store-band"><div className="container">{[["01","Retirada local","Na igreja ou ponto definido."],["02","Entrega regional","Inicialmente nas redondezas de Itaguai."],["03","Pagamento seguro",paymentMethods.filter((method) => method[1]).map((method) => method[0]).join(", ") || "Em configuracao."]].map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></section>
      <SiteFooter />
    </main>
  );
}
