import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './about.css';

export default function About() {
    return (
        <div className="about-page">
            <Navbar />

            {/* Hero Section with Video Placeholder */}
            <section className="about-hero">
                <div className="video-placeholder">
                    <div className="play-button"></div>
                </div>
                <h1 className="page-title">A TenTex</h1>
            </section>

            {/* Nossa Empresa Section */}
            <section className="nossa-empresa-section">
                <div className="container">
                    <div className="content-grid">
                        <div className="text-content">
                            <h2 className="section-subtitle">Nossa Empresa</h2>
                            <p>
                                Formada por um corpo técnico e de engenharia experiente, a TenTEX oferece todo suporte para máquinas Texima, peças originais e modernização dos equipamentos. Representa as maiores empresas do segmento de preparação à tecelagem, acabamento/beneficiamento do tecido, além de soluções para tecidos técnicos, impressões digitais e automação de sistema e processos.
                            </p>
                            <p>
                                A empresa está localizada em São Paulo, a 20 minutos do Aeroporto Internacional de Guarulhos, possui cerca de 2.000 m² de área construída e conta com uma equipe de profissionais comprometidos e qualificados que visam projetos inovadores em prol do avanço da Indústria Têxtil.
                            </p>
                        </div>
                        <div className="image-placeholder"></div>
                    </div>
                </div>
            </section>

            {/* Tecnologia Especializada Section */}
            <section className="tecnologia-section">
                <div className="container">
                    <div className="content-grid reverse">
                        <div className="image-placeholder"></div>
                        <div className="text-content">
                            <h2 className="section-subtitle">Tecnologia Especializada</h2>
                            <p>
                                A tecnologia das máquinas e sistemas autônomos da TenTEX estão em constante desenvolvimento para atender a crescente demanda por eficiência e qualidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipe Qualificada Section */}
            <section className="equipe-section">
                <div className="container">
                    <div className="content-grid">
                        <div className="text-content">
                            <h2 className="section-subtitle">Equipe Qualificada</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                        </div>
                        <div className="image-placeholder"></div>
                    </div>
                </div>
            </section>

            {/* Presença Internacional Section */}
            <section className="presenca-section">
                <div className="container">
                    <h2 className="section-subtitle">Presença Internacional</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}