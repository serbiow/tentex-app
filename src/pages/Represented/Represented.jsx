import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './represented.css';

export default function Represented() {
    return (
        <div className="representadas-page">
            <Navbar />

            {/* Hero Section */}
            <section className="representadas-hero">
                <h1 className="page-title">Representadas</h1>
            </section>

            {/* Representadas Grid */}
            <section className="representadas-content">
                <div className="container">
                    <div className="representadas-grid-full">
                        <div className="representada-card">
                            <div className="representada-image-placeholder"></div>
                            <h3 className="company-name">Empresa</h3>
                            <p className="company-description">
                                Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="representada-card">
                            <div className="representada-image-placeholder"></div>
                            <h3 className="company-name">Empresa</h3>
                            <p className="company-description">
                                Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="representada-card">
                            <div className="representada-image-placeholder"></div>
                            <h3 className="company-name">Empresa</h3>
                            <p className="company-description">
                                Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="representada-card">
                            <div className="representada-image-placeholder"></div>
                            <h3 className="company-name">Empresa</h3>
                            <p className="company-description">
                                Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="representada-card">
                            <div className="representada-image-placeholder"></div>
                            <h3 className="company-name">Empresa</h3>
                            <p className="company-description">
                                Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="representada-card">
                            <div className="representada-image-placeholder"></div>
                            <h3 className="company-name">Empresa</h3>
                            <p className="company-description">
                                Breve descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}