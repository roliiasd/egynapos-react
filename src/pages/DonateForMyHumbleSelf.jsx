import '/src/styles/DonateForMyHumbleSelf.min.css'
export default function DonateForMyHumbleSelf() {
  const project = {
    name: "Első projektem",
    tagline: "Egyszerű kis weboldal, amit főleg tanulásra és kísérletezésre használtam.",
    description:
      "A projekt nagy része AI segítségével készült, de végigpróbáltam megérteni a kódot, \
és saját igényeimhez alakítani. A célom az volt, hogy legyen egy működő oldal, \
amin keresztül gyakorolhatom a front-end alapokat.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "https://pelda-oldal.hu", // ← ide tedd a saját linked
    codeUrl: "https://github.com/felhasznalonev/projekt", // ← ide a GitHub link
  };

  return (
    <div className="portfolioPage">
      <main className="projectContent">
        {/* Felső rész */}
        <header className="projectHero">
          <div>
            <p className="projectHero-badge">portfólió v1 • tanuló front‑end fejlesztő</p>
            <h1>
              Helló, Roland vagyok,
              <span> épp Reactet tanulok</span>.
            </h1>
            <p className="projectHero-text">
              Ez az első egyszerű portfólióm. Nincs száz projektem, de szeretném
              megmutatni, mivel gyakorlok, és hova szeretnék eljutni.
            </p>
          </div>

          <div className="projectHero-side">
            <p className="projectHero-side-title">Mit keresek?</p>
            <p className="projectHero-side-text">
              Lehetőséget, ahol tovább tanulhatok, kapok visszajelzést,
              és hasznos lehetek egy csapatban – akár gyakornokként is.
            </p>
          </div>
        </header>

        {/* Rólam blokk */}
        <section className="projectSection about" id="about">
          <h2>Röviden rólam</h2>
          <p className='aboutP'>
            Önállóan tanulom a webfejlesztést, főleg modern JavaScript /
            React irányba. Első körben az a célom, hogy stabilan megértsem az
            alapokat: komponensek, állapotkezelés, egyszerű stílusozás.
          </p>
          <p className='aboutP'>
            Ebben a szakaszban még sokat használok AI‑t segítségnek, de
            szándékosan lassabban haladok, hogy átlássam, <em>mi miért</em>
            történik a kódban.
          </p>
        </section>

        {/* Projekt szekció */}
        <section className="projectSection projects" id="projects">
          <div className="projectSection-header">
            <h2>Projektem</h2>
            <p className="projectSection-subtitle">
              Egy projekt, amin keresztül tanulok – őszintén, AI segítségével.
            </p>
          </div>

          <article className="project-card">
            <div className="project-image-wrapper">
              <img
                src="https://via.placeholder.com/900x450.png?text=Projekt+screen"
                alt="A projektem képernyőképe"
                className="project-image"
              />
            </div>

            <div className="project-content">
              <p className="project-label">tanuló projekt</p>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item} className="project-tech-pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  Élő demó
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn ghost"
                >
                  Forráskód
                </a>
              </div>

              <p className="project-note">
                Megjegyzés: a projekt nagy része AI segítségével készült. A tervem az,
                hogy idővel saját ötletekkel és saját kóddal bővítsem.
              </p>
            </div>
          </article>
        </section>

       

        <footer className="footer">
          <span>© {new Date().getFullYear()} Roland • portfólió első verzió</span>
        </footer>
      </main>
    </div>
  );
}
