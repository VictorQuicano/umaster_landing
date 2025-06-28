import { type FC } from 'react';
import * as S from './styled';
import { TextBox } from '@components/textBox';
import { FadeIn } from '@utils/animations/FadeIn';

export const Contact: FC = () => {
  return (
    <S.ContactStyled>
      <S.ContainerStyled>
        <S.ContactBox>
          <FadeIn delay={0.1}>
            <TextBox
              variant="background-text"
              bgText="Teléfono"
              boxAsLink={true}
              href="tel:+51 999 999 999"
              target="_blank">
              <h3>+51 999 999 999</h3>
              <p>Contáctanos para más información sobre nuestros planes para estudiantes e instituciones.</p>
            </TextBox>
          </FadeIn>

          <FadeIn delay={0.2}>
            <TextBox
              variant="background-text"
              bgText="Correo"
              boxAsLink={true}
              href="mailto:contacto@umaster.pe"
              target="_blank">
              <h3>contacto@umaster.pe</h3>
              <p>Escríbenos si tienes dudas o deseas conocer cómo implementar uMaster en tu institución.</p>
            </TextBox>
          </FadeIn>
        </S.ContactBox>

        <FadeIn delay={0.3}>
          <TextBox variant="background-text" bgText="Dirección">
            <h3>Dirección</h3>
            <p>Arequipa, Perú</p>
            <p>Incubadora Jaku – Universidad Nacional de San Agustín</p>
          </TextBox>
        </FadeIn>
      </S.ContainerStyled>
    </S.ContactStyled>
  );
};
