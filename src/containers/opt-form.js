import { OptForm } from '../components';

export default function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Input placeholder="Email Address" />
      <OptForm.Button> Try it Now </OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your memebership
      </OptForm.Text>
    </OptForm>
  );
}
