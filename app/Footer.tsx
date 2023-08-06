import { CSSProperties } from "react";

interface FooterProps {
    style: CSSProperties;
}


export default function Footer({ style }: FooterProps) {
    return (
        <footer className="page-footer-section secondary background-image-secondary" style={{ marginTop: "auto", ... style }}>
            <div className="mx-4">
                <div className="row">
                    <div className="col-12 py-2 d-flex justify-content-between align-items-center">
                        <div>© {new Date().getFullYear()} by Karl Oskar Anderson, Powered by NextJS</div>
                        <div>
                            <a href="https://github.com/oskar-anderson/" className="btn" style={{ borderRadius: "50%", backgroundColor: "#266DD3", color: "white" }}>
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/karl-oskar-anderson" className="btn" style={{ borderRadius: "50%", backgroundColor: "#266DD3", color: "white" }}>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="mailto:andersonkarloskar@gmail.com" className="btn btn-fab btn-primary fg-white" style={{ borderRadius: "50%", backgroundColor: "#266DD3", color: "white" }}>
                                <i className="fa-regular fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}