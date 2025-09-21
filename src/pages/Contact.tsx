import { ContactForm } from '@/components/ContactForm';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Contact = () => {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Contact;