import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.instagram.com/xyms/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/sorriso.feliz/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Clinica Odontologica Sorriso Feliz. Todos os direitos reservados.</p>
            <p>Desvolvido por: Xyms </p>
        </footer>
    );
}