import FadeInSection from "../fade-in/FadeIn";

const PortfolioThoughtbank = () => {
  return (
    <FadeInSection>
      <div className="portfolio">
        <div className="container">
          <div className="wrapper">
            <div className="wrapper__item">
              <img
                src="https://static.dezeen.com/uploads/2020/03/chinese-brutalism-today-alberto-bologna-china-architecture-concrete_dezeen_1704_taizhou_hero-852x479.jpg"
                alt="Thoughtbank"
              />

              <p>
                A MERN stack art blog in which the user can login and post
                blogs. Showcases form validation, API build/integration, a
                custom animated nav, as well as a custom wrapper which you are
                viewing now.
              </p>
              <div className="wrapper__item__links">
                <a
                  href="https://github.com/TD142/thought-bank-client"
                  target="_blank"
                >
                  <p>Code</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default PortfolioThoughtbank;
