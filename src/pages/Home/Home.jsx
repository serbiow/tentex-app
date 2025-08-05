import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './home.css';

export default function Home() {
    return (
        <div className="home">
            <Navbar />

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Soluções para Indústria Têxtil</h1>
                    <div className="scroll-indicator">
                        <span>↓</span>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="services-grid">
                        <div className="services-content">
                            <h2 className="section-title">Serviços</h2>
                            <p className="section-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <button className="cta-button">Lista completa →</button>
                        </div>
                        <div className="services-images">
                            <div className="service-image-placeholder"></div>
                            <div className="service-image-placeholder"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
                <div className="container">
                    <div className="products-grid">
                        <div className="products-images">
                            <div className="product-image-placeholder"></div>
                            <div className="product-image-placeholder"></div>
                        </div>
                        <div className="products-content">
                            <h2 className="section-title">Produtos</h2>
                            <p className="section-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <button className="cta-button">Lista completa →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Representadas Section */}
            <section className="representadas-section">
                <div className="container">
                    <h2 className="section-title">Representadas</h2>
                    <p className="section-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="representadas-grid">
                        <div className="representada-logo"></div>
                        <div className="representada-logo"></div>
                        <div className="representada-logo"></div>
                        <div className="representada-logo"></div>
                        <div className="representada-logo"></div>
                        <div className="representada-logo"></div>
                        <div className="representada-logo"></div>
                    </div>
                    <button className="cta-button">Conhecer Representadas →</button>
                </div>
            </section>

            {/* Results Section */}
            <section className="results-section">
                <div className="container">
                    <div className="results-grid">
                        <div className="results-content">
                            <h2 className="section-title">Resultados Comprovados</h2>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <span className="stat-number">500M</span>
                                    <span className="stat-label">Receita completa anual/mensal em milhões</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">+2000</span>
                                    <span className="stat-label">Atendimentos realizados</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">500</span>
                                    <span className="stat-label">Projetos de modernização fabril executados</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">60%</span>
                                    <span className="stat-label">Aumento de produtividade em média</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">20</span>
                                    <span className="stat-label">Anos de experiência no mercado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="contact-cta-section">
                <div className="container">
                    <div className="contact-cta-content">
                        <h2>Entre em contato conosco para parcerias e soluções para sua indústria</h2>
                        <button className="cta-button primary">Contato</button>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="history-section">
                <div className="container">
                    <h2 className="section-title">Nossa História</h2>
                    <p className="section-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="history-image-placeholder"></div>
                </div>
            </section>

            <Footer />
        </div>
    );
}