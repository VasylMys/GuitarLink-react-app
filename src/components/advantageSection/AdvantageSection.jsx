import React from 'react';
import './style.css'; // Зробіть окремий CSS файл, або використайте існуючий

const AdvantageSection = () => {
  return (
    <section className="advantage-section bg-dark">
      <div className="whycm-container">
        <h1>Чому вибрати нас</h1>
        <p>Наші переваги, що роблять нас унікальними</p>
        <div className="adv-section">
              <div className="adv-card">
                <img src="images/pocketFriendlyCourses.webp" alt="" />
                <span className="adv-desc margin-0">Доступні курси для всіх бюджетів</span>
              </div>

              <div className="adv-card">
                <img src="images/highQualityLectures.webp" alt="" />
                <span className="adv-desc margin-0">HD Відео та чистий звук</span>
              </div>

              <div className="adv-card">
                <img src="images/detailedExplanations.webp" alt="" />
                <span className="adv-desc margin-0">Детальні та зрозумілі пояснення</span>
              </div>

              <div className="adv-card">
                <img src="images/practiceProblems.webp" alt="" />
                <span className="adv-desc margin-0">Практичні завдання з миттєвим зворотнім зв'язком</span>
              </div>

              <div className="adv-card">
                <img src="images/industryCurriculum.webp" alt="" />
                <span className="adv-desc margin-0">Курси, схвалені професіоналами галузі</span>
              </div>

              <div className="adv-card">
                <img src="images/lifetimeAccess.webp" alt="" />
                <span className="adv-desc margin-0">Довічний доступ, в будь-який час, будь-де</span>
              </div>

              <div className="adv-card">
                <img src="images/doubtSupport.webp" alt="" />
                <span className="adv-desc margin-0">Необмежена підтримка під час навчання</span>
              </div>

              <div className="adv-card">
                <img src="images/certificate.webp" alt="" />
                <span className="adv-desc margin-0">Сертифікат після завершення курсу</span>
              </div>
            </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
