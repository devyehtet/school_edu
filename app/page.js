const modules = [
  {
    week: 'Week 1-2',
    title: 'Digital Marketing Fundamentals',
    lessons: ['Marketing funnel', 'Audience persona', 'Brand positioning'],
  },
  {
    week: 'Week 3-4',
    title: 'Content + SEO',
    lessons: ['Keyword research', 'On-page SEO', 'Content calendar planning'],
  },
  {
    week: 'Week 5-6',
    title: 'Social Media Growth',
    lessons: ['Reels/TikTok strategy', 'Community building', 'Performance metrics'],
  },
  {
    week: 'Week 7-8',
    title: 'Paid Ads + Analytics',
    lessons: ['Meta Ads basics', 'Google Ads setup', 'KPI dashboard & reporting'],
  },
];

const tools = ['Google Analytics', 'Google Ads', 'Meta Ads Manager', 'Canva', 'Mailchimp'];

const testimonials = [
  {
    name: 'Aung Ko',
    role: 'Small Business Owner',
    text: 'ဒီ course နဲ့ content plan + ads setup ကို ကိုယ်တိုင်လုပ်နိုင်သွားတယ်။',
  },
  {
    name: 'May Thu',
    role: 'Marketing Intern',
    text: 'Portfolio project တွေကြောင့် internship interview မှာ confidence တက်လာတယ်။',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar container">
        <strong>DM Learn Hub</strong>
        <nav>
          <a href="#modules">Modules</a>
          <a href="#tools">Tools</a>
          <a href="#reviews">Reviews</a>
        </nav>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="tag">Next.js + React Education Website</p>
            <h1>Digital Marketing ကို အစအဆုံး လေ့လာနိုင်မယ့် Website</h1>
            <p>
              Beginner ကစပြီး Campaign launch, Tracking, Optimization အထိ step-by-step
              သင်ခန်းစာတွေပါဝင်တဲ့ learning platform.
            </p>
            <div className="hero-buttons">
              <a className="btn primary" href="#modules">Course ကိုစမယ်</a>
              <a className="btn ghost" href="#reviews">Student Reviews</a>
            </div>
          </div>
          <aside className="hero-panel">
            <h3>Included</h3>
            <ul>
              <li>8 Weeks structured roadmap</li>
              <li>Hands-on mini projects</li>
              <li>Templates + KPI sheet</li>
              <li>Beginner-friendly Myanmar/English mix</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="modules" className="container section">
        <h2>Course Modules</h2>
        <div className="cards">
          {modules.map((module) => (
            <article className="card" key={module.title}>
              <span>{module.week}</span>
              <h3>{module.title}</h3>
              <ul>
                {module.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className="container section tools">
        <h2>Tools You Will Use</h2>
        <div className="chips">
          {tools.map((tool) => (
            <div className="chip" key={tool}>{tool}</div>
          ))}
        </div>
      </section>

      <section id="reviews" className="container section">
        <h2>Student Reviews</h2>
        <div className="reviews">
          {testimonials.map((item) => (
            <blockquote key={item.name}>
              <p>“{item.text}”</p>
              <footer>{item.name} — {item.role}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} DM Learn Hub. Built with Next.js + React.</p>
        </div>
      </footer>
    </main>
  );
}
