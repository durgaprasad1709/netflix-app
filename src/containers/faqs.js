import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';
import { OptFormContainer } from '../containers';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title> Frequently Asked Questions </Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header> {item.header} </Accordion.Header>
          <Accordion.Body> {item.body} </Accordion.Body>
        </Accordion.Item>
      ))}

      <OptFormContainer />
    </Accordion>
  );
}
