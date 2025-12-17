import {} from 'react';
import "./Footer.scss";

function Footer() {
  return (
    <footer id="footer">
        <div className="footer-links">
            <ul className="links">
                <h3 className="links-h">HELP & INFORMATION</h3>

                <li className="link">Help</li>
                <li className="link">Track order</li>
                <li className="link">Delivery & returns</li>
                <li className="link">Sitemap</li>
            </ul>

            <ul className="links">
                <h3 className="links-h">ABOUT TRUST-BUY</h3>

                <li className="link">About</li>
                <li className="link">Careers at trust-buy</li>
                <li className="link">Corporate Responsibility</li>
                <li className="link">Investor's site</li>
            </ul>

            <ul className="links">
                <h3 className="links-h">MORE FROM TRUST-BUY</h3>
                <li className="link">Mobile and apps</li>
                <li className="link">Gift vouchers</li>
                <li className="link">Black Friday</li>
                <li className="link">TRUST-BUY X Thrift+</li>
            </ul>
        </div>

        <div className="footer-bottom">
            © 2025 TRUST-BUY
        </div>
    </footer>
  )
}

export default Footer