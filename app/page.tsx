export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="hero-tag">Developer Portfolio</p>
          <h1 className="hero-title">
            안녕하세요,
            <br />
            <span style={{ color: "var(--accent)" }}>Tony</span>입니다.
          </h1>
          <p className="hero-desc">
            사용자 경험과 성능을 고려한 서비스를 만듭니다.
            AI 서비스 개발에 관심이 많습니다.
          </p>
          <a href="#contact" className="hero-cta">
            연락하기 →
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">소개</h2>
          <p className="about-text">
            서비스 기획자로서 사용자에게 가치 있는 서비스를 전달하는 일을 하고 있습니다.
            새로운 기술을 배우고, 깔끔한 코드와 재사용 가능한 컴포넌트를 지향합니다.
            협업과 소통을 중요하게 생각합니다.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">기술 스택</h2>
          <div className="skills-grid">
            {[
              "HTML / CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Git",
              "Figma",
            ].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">프로젝트</h2>
          <div className="projects-grid">
            {[
              {
                title: "프로젝트 A",
                desc: "설명을 입력하세요. 사용 기술, 담당 역할, 결과를 간단히 적을 수 있습니다.",
                href: "#",
              },
              {
                title: "프로젝트 B",
                desc: "설명을 입력하세요. 사용 기술, 담당 역할, 결과를 간단히 적을 수 있습니다.",
                href: "#",
              },
              {
                title: "프로젝트 C",
                desc: "설명을 입력하세요. 사용 기술, 담당 역할, 결과를 간단히 적을 수 있습니다.",
                href: "#",
              },
              {
                title: "프로젝트 D",
                desc: "설명을 입력하세요. 사용 기술, 담당 역할, 결과를 간단히 적을 수 있습니다.",
                href: "#",
              },
            ].map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image">이미지</div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <a href={project.href} className="project-link">
                    보기 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">연락처</h2>
          <p className="contact-desc">
            프로젝트 문의나 협업 제안이 있으시면 아래로 연락해 주세요.
          </p>
          <div className="contact-links">
            <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
              ✉ 이메일
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://blog.example.com" target="_blank" rel="noopener noreferrer">
              블로그
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
