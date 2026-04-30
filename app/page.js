const learningPaths = [
  {
    title: 'Foundation Path',
    duration: '4 weeks',
    level: 'Beginner',
    topics: ['Marketing Basics', 'Customer Persona', 'Content Planning'],
  },
  {
    title: 'Growth Path',
    duration: '6 weeks',
    level: 'Intermediate',
    topics: ['SEO + Blog Strategy', 'Social Media Systems', 'Email Funnels'],
  },
  {
    title: 'Performance Path',
    duration: '8 weeks',
    level: 'Advanced',
    topics: ['Google Ads', 'Meta Ads', 'Analytics & Optimization'],
  },
];

const features = [
  'Practical lessons with real campaign examples',
  'Weekly assignments to build a marketing portfolio',
  'Templates for content calendar and KPI dashboard',
  'Progress tracking for each learning path',
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="pill">Digital Marketing Academy</p>
            <h1>Learn Digital Marketing and Build Real-World Skills</h1>
            <p className="subtitle">
              A modern education website built with Next.js + React to help learners master SEO,
              content, social media, and paid ads step by step.
            </p>
            <div className="hero-actions">
              <a href="#paths" className="btn btn-primary">Explore Paths</a>
              <a href="#features" className="btn btn-secondary">Why This Course?</a>
            </div>
          </div>
          <div className="hero-card">
            <h3>What You&apos;ll Achieve</h3>
            <ul>
              <li>Create end-to-end digital strategy</li>
              <li>Run ad campaigns with budget control</li>
              <li>Measure KPIs and improve conversions</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="paths" className="container section">
        <div className="section-head">
          <p>Learning Paths</p>
          <h2>Choose Your Track</h2>
        </div>
        <div className="path-grid">
          {learningPaths.map((path) => (
            <article key={path.title} className="path-card">
              <div className="path-meta">
                <span>{path.level}</span>
                <strong>{path.duration}</strong>
              </div>
              <h3>{path.title}</h3>
              <ul>
                {path.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="container section">
        <div className="feature-box">
          <div className="section-head">
            <p>Platform Features</p>
            <h2>Designed for Practical Learning</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature} className="feature-item">{feature}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
