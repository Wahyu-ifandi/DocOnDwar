import React, { useEffect, useRef, useState, useMemo } from 'react';
import './InfoCardsSection.css';

const cardIcons = {
  shagun: '🎁',
  elder: '👵',
  icu: '🏥',
  default: 'ℹ️'
};

const Card = ({ icon, title, description, linkText, isVisible }) => {
  return (
    <div className={`info-card ${isVisible ? 'visible' : ''}`}>
      <div className="info-card-icon">{icon || cardIcons.default}</div>
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
      <a href="#!" className="info-card-link">
        {linkText || 'Know More'} <span className="arrow">&rarr;</span>
      </a>
    </div>
  );
};

const InfoCardsSection = () => {
  const cardsData = useMemo(() => [
    {
      id: 'c1',
      icon: cardIcons.shagun,
      title: 'Sehat Ka Shagun | Happy Diwali',
      description: "A festival is truly joyous when health illuminates every celebration. This Diwali, let's go beyond the traditional exchange...",
    },
    {
      id: 'c2',
      icon: cardIcons.elder,
      title: 'Elder Care Program',
      description: "DocOnDwaar's Elder Care Programme gives your loved ones an empowering plan for their golden years.",
    },
    {
      id: 'c3',
      icon: cardIcons.icu,
      title: 'e-ICU',
      description: 'Bringing expert intervention to critically unwell patients even in the remotest parts of India.',
    },
  ], []);

  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = cardRefs.current;

    currentRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [cardsData]);

  return (
    <section className="info-cards-section container">
      <h2 className="section-title">Updates & Programs</h2>
      <div className="info-cards-grid">
        {cardsData.map((card, index) => (
          <div key={card.id} ref={(el) => cardRefs.current[index] = el} data-id={card.id}>
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
              isVisible={visibleCards[card.id]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCardsSection;
