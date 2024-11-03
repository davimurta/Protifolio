import "./track.css";
import "../media.css";
import PropTypes from "prop-types";

const About = ({ isSidebarClosed, isDarkMode }) => {
  return (
    <section
      className={`${"project"} ${isSidebarClosed ? "close" : ""} ${
        isDarkMode ? "dark" : ""
      } ${"education"}`}
      id="track"
    >
      <h2 className="heading">
        My <span>Juourney</span>
      </h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">Education</h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> 2018 - 2022
                </div>
                <h3>Santa Maria Nova Suíça</h3>
                <p>
                  Estudar no Santa Maria Nova Suíça foi uma experiência
                  enriquecedora que moldou meu conhecimento e habilidades. O
                  ambiente acadêmico, repleto de desafios e oportunidades,
                  favoreceu meu crescimento pessoal e intelectual. Participei de
                  projetos inovadores e atividades extracurriculares que me
                  proporcionaram uma base sólida para o futuro. Sou grato por
                  todas as lições aprendidas e pelas amizades formadas durante
                  essa jornada.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> 2022 - 2025
                </div>
                <h3>Cotemig</h3>
                <p>
                  No Cotemig Barroca, tive a oportunidade de aprofundar meus
                  estudos em um ambiente dinâmico e estimulante. A instituição
                  ofereceu uma variedade de cursos e atividades que ampliaram
                  minha perspectiva sobre o mundo. Fui incentivado a desenvolver
                  habilidades críticas e criativas que são essenciais no mercado
                  de trabalho atual. Essa fase da minha vida foi crucial para
                  meu desenvolvimento e para a construção de uma carreira
                  sólida.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-column">
          <h3 className="title">Experience</h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> 2023 - Atualmente
                </div>
                <h3>Squadra Digital - company</h3>
                <p>
                  Atuando como estagiário de front-end na Squadra Digital, tenho
                  a oportunidade de participar de diversos projetos desafiadores
                  que ampliam meu conhecimento técnico e habilidades práticas.
                  Trabalhar em uma equipe talentosa e colaborativa me permitiu
                  aprender com profissionais experientes, além de contribuir
                  ativamente para o desenvolvimento de soluções inovadoras que
                  atendem às necessidades dos clientes.
                </p>
                <p>
                  Essa experiência me ensinou a
                  importância da comunicação e do trabalho em equipe,
                  fundamentais para o sucesso de cada projeto. A cultura da
                  Squadra Digital, que valoriza a inovação e a busca pela
                  excelência, é uma fonte constante de motivação, impulsionando
                  meu crescimento profissional e preparando-me para futuros
                  desafios na área de tecnologia.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  isSidebarClosed: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default About;
