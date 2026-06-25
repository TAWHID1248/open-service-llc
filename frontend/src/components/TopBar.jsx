import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-info">
          <span>📞 +1 (423) 432-7902</span>
          <span>✉️ contact@openservice.com</span>
          <span>📍 17001 Rodhen Berg Lake 250, Miami, CA 192881</span>
        </div>
        <div className="topbar-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Twitter">t</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>
      </div>
    </div>
  );
}
