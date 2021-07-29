import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import Container from '../components/Container/Container';

const ContactsPage = () => {
  return (
    <Container>
      <Form />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
