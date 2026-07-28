import { getPublicSettings } from "../admin-service";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { products as fallbackProducts } from "../site-content";

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
    id: product[0], name: product[1], category: product[2],
    description: product[3], price: "", image: "", active: true,
  }));
  try {
    const saved = JSON.parse(settings.store_products || "[]");
    if (Array.isArray(saved) && saved.length) products = saved;
  } catch {
    // Mantém o catálogo inicial quando a configuração ainda não é válida.
  }
  products = products.filter((product) => product.active);

  const paymentMethods = [
    ["Pix", settings.payment_pix_enabled === "true", settings.payment_pix_key],
    ["Crédito", settings.payment_credit_enabled === "true", settings.payment_credit_url],
    ["Débito", settings.payment_debit_enabled === "true", settings.payment_debit_url],
    ["Boleto", settings.payment_boleto_enabled === "true", settings.payment_boleto_url],
  ] as const;

  return <main>
    <PageHero eyebrow="Loja Aprisco" title="Leve a essência para além do domingo." description="Produtos da comunidade, retirada local e pagamentos configurados com segurança." compact/>
    <section className="inner-section section-pad">
      <div className="container store-title"><div><p className="eyebrow dark">Coleção Aprisco</p><h2>Produtos disponíveis</h2></div><div><Icon name="pin"/><span>Entregas locais primeiro<small>Preparado para ampliar ao RJ e outras regiões</small></span></div></div>
      <div className="container store-grid">
        {products.map((product, index) => <article key={product.id}>
          <div className="store-art copper" style={product.image ? { backgroundImage: `url(${product.image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}><span>{product.image ? "" : index === 0 ? "AU" : "AP"}</span><i/></div>
          <section><p>{product.category}</p><h2>{product.name}</h2><span>{product.description}</span>
            <div><strong>{product.price ? `R$ ${product.price}` : "Consulte"}</strong>
              <a className="store-buy" href="/contato"><Icon name="bag"/>Tenho interesse</a>
            </div>
          </section>
        </article>)}
        {!products.length && <article className="new-product"><b>+</b><h2>Catálogo em atualização</h2><p>Novos produtos serão publicados em breve.</p></article>}
      </div>
    </section>
    <section className="store-band"><div className="container">{[["01","Retirada local","Na igreja ou ponto definido."],["02","Entrega regional","Inicialmente nas redondezas de Itaguaí."],["03","Pagamento seguro",paymentMethods.filter((method) => method[1]).map((method) => method[0]).join(", ") || "Em configuração."]].map((item)=><article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></section>
    <SiteFooter/>
  </main>;
}
