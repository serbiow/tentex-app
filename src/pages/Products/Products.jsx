import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './products.css';

export default function Products() {
    const categories = [
        "Biqueiras/Tubeiras", "Catreias", "Cerâmicas Refratárias", "Cilindros",
        "Correntes", "Dedos abre Pinça", "Escovas", "Guarda Correias", "Mancais",
        "Peças de Transmissão", "Pinos", "Pinhões e Engrenagens", "Queimadores",
        "Roscas Abridoras", "Sapatas e Patins", "Trilhos", "Vaporizadores"
    ];

    const products = Array.from({ length: 15 }, (_, i) => `Produto ${i + 1}`);

    return (
        <div className="products-page">
            <Navbar />

            {/* Hero Section */}
            <section className="products-hero">
                <div className="hero-content">
                    <h1 className="page-title">Produtos</h1>
                    <p className="page-subtitle">QUALIDADE NAS MATÉRIAS PRIMAS E FABRICAÇÃO</p>
                    <div className="scroll-indicator">
                        <span>↓</span>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="main-products-content">
                <div className="container">
                    <h2 className="section-heading">SOLUÇÕES COMPLETAS E PEÇAS ORIGINAIS</h2>
                    <p className="section-description">
                        Única capacitada e autorizada a fornecer peças originais Texima. As produções são de alta qualidade, pois contam com uma criteriosa seleção de matérias primas e absoluta precisão e controle de fabricação. O investimento em máquinas e produtos TenTEX proporciona notável performance e economia.
                    </p>

                    <div className="products-layout">
                        <div className="categories-sidebar">
                            <h3 className="categories-title">Categorias</h3>
                            <ul className="categories-list">
                                {categories.map((category, index) => (
                                    <li key={index}><a href="#">{category}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="products-grid-display">
                            {products.map((product, index) => (
                                <div key={index} className="product-card">
                                    <div className="product-image-placeholder"></div>
                                    <p className="product-name">{product}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}