import React, { type FC } from 'react';

import * as S from './styled';
import { TextBox } from '@components/textBox';
import { Container } from '@components/Container';
import { FadeIn } from '@utils/animations/FadeIn';

type CardItem = {
  title: string;
  description: string;
  image?: string; // New optional image property
  imageAlt?: string; // Optional alt text for the image
};

type TeamCards = {
  title?: string;
  description?: string;
  cards?: CardItem[];
};

export const TeamCards: FC<TeamCards> = ({ cards, description, title }) => {
  // do not render if there are no cards
  if (!cards || !cards.length) {
    return null;
  }

  const cardsElements = cards.map((card, index) => {
    return (
      <FadeIn key={index}>
        <TextBox>
          {card.image && (
            <S.CircularImageContainer>
              <S.CircularImage src={card.image} alt={card.imageAlt || card.title} />
            </S.CircularImageContainer>
          )}
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </TextBox>
      </FadeIn>
    );
  });

  return (
    <S.TeamCardsStyled>
      <Container>
        {title && description && (
          <FadeIn>
            <S.TeamCardsHeading>
              {description && <p>{description}</p>}
              {title && <h2>{title}</h2>}
            </S.TeamCardsHeading>
          </FadeIn>
        )}
        <S.TeamCardsGrid>{cardsElements}</S.TeamCardsGrid>
      </Container>
    </S.TeamCardsStyled>
  );
};
