import { useContext, useState } from 'react';
import { Form } from '../components';
import { FooterContainer, HeaderContainer } from '../containers';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = emailAddress === '' || password === '';

  const handleSignin = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title> Sign In </Form.Title>

          {error && <Form.Error> {error} </Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix ? <Form.Link to="/signup"> Signup </Form.Link>{' '}
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCaptcha to ensure you're not a
            bot. Learn more.{' '}
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer> test </FooterContainer>
    </>
  );
}
