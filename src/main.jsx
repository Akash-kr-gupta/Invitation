import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, Heart, MapPin, Menu, Sparkles, X } from "lucide-react";
import "./styles.css";

const events = [
  { date: "26", month: "NOV", day: "Thursday", title: "Tilak Ceremony", note: "Auspicious beginnings & blessings", address: "near Pandra Road, Bazar Simiti, Thana, Pandra, Ranchi, Jharkhand 834005" },
  { date: "28", month: "NOV", day: "Saturday", title: "Haldi & Mehendi", note: "A day of colour, music & laughter" },
  { date: "29", month: "NOV", day: "Sunday", title: "Ghritdhari & Matri Pujan", note: "Rituals that bind two families" },
  { date: "30", month: "NOV", day: "Monday", title: "Baraat & Shubh Vivah", note: "The day our forever begins" },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>A<span>♥</span>R</a>
        <div className="nav-date"><CalendarDays size={14} /> 30 NOVEMBER 2026</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#story" onClick={closeMenu}>Our story</a><a href="#schedule" onClick={closeMenu}>Celebrations</a><a href="#details" onClick={closeMenu}>The details</a><a className="nav-rsvp" href="#rsvp" onClick={closeMenu}>RSVP <ArrowDown size={14} /></a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-image" /><div className="hero-wash" />
        <div className="sparkle-field" aria-hidden="true"><i>✦</i><i>✧</i><i>·</i><i>✦</i><i>·</i><i>✧</i><i>✦</i><i>·</i></div>
        <div className="hero-content"><p className="eyebrow">With the blessings of our families</p><p className="invitation-line">A beautiful beginning, a lifetime together</p><div className="hero-names"><span>Ankit</span><i>&</i><span>Riya</span></div><p className="hindi">Ankit sang Riya</p><div className="hero-rule"><span>✦</span></div><p className="date">30 <b>·</b> 11 <b>·</b> 2026</p><p className="hero-caption">Together with our families, we invite you<br />to celebrate our wedding festivities.</p><a className="scroll-cue" href="#story"><span>Scroll to discover</span><ArrowDown size={16} /></a></div>
        <div className="hero-corner corner-tl">✧</div><div className="hero-corner corner-br">✧</div><div className="hero-bottom-note">Ranchi · India <span>✦</span> Shubh Vivah Samaroh</div>
      </section>

      <section id="story" className="story section">
        <div className="section-label reveal">01 / OUR STORY <span>two souls, one story</span></div>
        <div className="story-grid"><div className="story-portrait reveal"><img className="portrait-groom" src="/groom-portrait.jpeg" alt="Ankit in traditional wedding attire" /><div className="portrait-badge"><Sparkles size={15} /> The groom</div><div className="photo-note">A new chapter<br /><em>begins here</em></div></div><div className="story-copy reveal"><p className="kicker">Ek nayi shuruaat</p><h2>Two hearts,<br /><em>one beautiful</em><br />journey.</h2><p>From two homes and two stories, a new family is being woven together. We would be honoured to have your warmth, blessings and laughter with us as we celebrate this beautiful beginning.</p><p className="hindi-copy">Your love and blessings are our greatest joy.</p><div className="signature">Ankit <span>&</span> Riya</div></div></div>
        <div className="story-divider reveal"><span>♥</span></div>
        <div className="bride-feature reveal"><div className="bride-copy"><p className="kicker">Meet the bride</p><h3>Grace, joy<br /><em>& a little magic.</em></h3><p>Every celebration is brighter with Riya in it. Here’s to the laughter, the rituals and all the little moments that led us here.</p></div><img src="/bride-portrait.jpeg" alt="Riya in traditional wedding attire" /></div>
      </section>

      <section id="schedule" className="schedule section"><div className="schedule-glow" /><div className="section-label light reveal">02 / THE CELEBRATIONS <span>come celebrate with us</span></div><div className="schedule-head reveal"><div><p className="kicker gold">Shubh vivah samaroh</p><h2>Four days of<br /><em>joy & rituals</em></h2></div><div className="schedule-intro"><p>Every celebration is a thread in our story. Come be part of the colour, the music, the traditions and the love.</p><img src="/couple-fireworks.jpeg" alt="Ankit and Riya celebrating together" /></div></div><div className="events reveal">{events.map((event, index) => <article className="event" key={event.title} style={{ "--delay": `${index * 80}ms` }}><div className="event-date"><strong>{event.date}</strong><span>{event.month}</span></div><div className="event-info"><p>{event.day}</p><h3>{event.title}</h3><span>{event.note}</span></div><div className="event-icon">✦</div></article>)}</div></section>

      <section id="details" className="details section"><div className="section-label reveal">03 / THE DETAILS <span>save the date</span></div><div className="details-grid"><div className="details-copy reveal"><p className="kicker">Join us in Ranchi</p><h2>Where memories<br /><em>will be made.</em></h2><div className="detail-row"><MapPin size={20} /><div><strong>Ranchi Darbar</strong><span>Friends Colony, Pandra<br />Ratu Road, Ranchi — 834005</span></div></div><div className="detail-row"><Clock3 size={20} /><div><strong>Wedding ceremony</strong><span>Monday, 30 November 2026<br />Baraat departure at 7:00 PM</span></div></div><a className="map-link" href="https://www.google.com/maps/search/Ranchi+Darbar+Ranchi" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a></div><div className="details-art reveal"><div className="art-ring"><img src="/couple-fireworks.jpeg" alt="Ankit and Riya at their celebration" /></div><div className="art-caption">A celebration<br /><em>of two families</em></div></div></div></section>

      <section className="memory-strip reveal"><img src="/groom-garden.jpeg" alt="Ankit in the garden" /><div><span>From this day</span><strong>our forever begins</strong><span>with love, laughter & blessings</span></div><img src="/bride-portrait.jpeg" alt="Riya in the garden" /></section>
      <section id="rsvp" className="rsvp section"><div className="rsvp-pattern" /><div className="rsvp-content reveal"><p className="eyebrow">We can’t wait to celebrate with you</p><Heart className="heart" size={25} fill="currentColor" /><h2>Will you join<br /><em>our forever?</em></h2><p>Kindly grace the occasion with your presence and blessings.</p><a className="rsvp-button" href="tel:+918757707497">RSVP with love <span>→</span></a><p className="contact">Arun & Sangeeta Gupta&nbsp; · &nbsp;+91 87577 07497</p></div></section>
      <footer><span>Ankit <b>♥</b> Riya</span><span>With love, Ankit & Riya · 2026</span><span>✦</span></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
