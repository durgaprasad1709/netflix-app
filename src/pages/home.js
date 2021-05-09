import {
  HeaderContainer,
  FaqsContainer,
  FooterContainer,
  JumbotronContainer,
  OptFormContainer,
} from '../containers';
import { Feature } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.{' '}
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.{' '}
          </Feature.SubTitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FooterContainer />
      <FaqsContainer />
    </>
  );
}
