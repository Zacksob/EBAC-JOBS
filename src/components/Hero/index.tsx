import styled from 'styled-components'

const FormContainer = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* Centra horizontalmente */

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  color: #eee;
`

const HeroTitle = styled.h1`
  font-size: 48px;
  font-family: Gloock, serif;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const HeroForm = () => (
  <FormContainer>
    <ContentWrapper>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </ContentWrapper>
  </FormContainer>
)

export default HeroForm
