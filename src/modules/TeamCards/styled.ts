import styled from '@emotion/styled';
import { Theme } from '@styles/colors';
import { MediaQuery } from '@styles/mediaQuery';

export const CircularImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const CircularImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid;
`;

export const TeamCardsStyled = styled.section`
  background: ${Theme.primary};
  padding-top: 90px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin: -43px 0 50px;
  z-index: 1;
  position: relative;
`;

export const TeamCardsHeading = styled.div`
  color: ${Theme.secondary};

  margin-bottom: 40px;
  max-width: 550px;

  p {
    color: ${Theme.tertiary};
  }

  h2 {
    font-size: 60px;
    line-height: 1.2;
    margin-bottom: 10px;

    ${MediaQuery.max('lg')} {
      font-size: 40px;
      line-height: 1.2;
    }
  }
`;

export const TeamCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  ${MediaQuery.max('lg')} {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  h3 {
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: -0.5px;
    opacity: 0.8;
  }
`;
