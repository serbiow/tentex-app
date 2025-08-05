import { Link } from "react-router-dom";
import './footer.css';
import logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Logo e Informações de Contato */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <div className="logo">
                                <img src={logo} alt="TenTEX Logo" style={{ height: 42 }} />
                            </div>
                        </div>

                        <div className="contact-info">
                            <h4>Contato & Endereço</h4>
                            <p>Rua Exemplo, 123 - São Paulo, SP</p>
                            <p>CEP: 01234-567 - São Paulo - SP</p>
                            <p>📞 +55 (11) 4252-4000</p>
                            <p>✉️ contato@tentex.com.br</p>
                        </div>

                        <div className="business-hours">
                            <h4>Atendimento</h4>
                            <p>Segunda a Sexta: 8h às 18h</p>
                            <p>📞 +55 (11) 4252-4000</p>
                        </div>
                    </div>

                    {/* Menu do Site */}
                    <div className="footer-section">
                        <h4>Site</h4>
                        <ul className="footer-links">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">A TENTEX</Link></li>
                            <li><Link to="/representadas">REPRESENTADAS</Link></li>
                            <li><Link to="/products">PRODUTOS</Link></li>
                            <li><Link to="/services">SERVIÇOS</Link></li>
                            <li><Link to="/contact">CONTATO</Link></li>
                        </ul>
                    </div>

                    {/* Redes Sociais */}
                    <div className="footer-section">
                        <h4>Redes Sociais</h4>
                        <div className="social-links">
                            <a href="#" className="social-link">📘 Facebook</a>
                            <a href="#" className="social-link">📷 Instagram</a>
                            <a href="#" className="social-link">💼 LinkedIn</a>
                            <a href="#" className="social-link">📧 E-mail</a>
                        </div>
                        <p className="email-contact">contato@tentex.com.br</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; 2024 TenTEX. Todos os Direitos Reservados.</p>
                    <p>Política de Privacidade e Proteção de Dados</p>
                </div>
            </div>
        </footer>
    );
}