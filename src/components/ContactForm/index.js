import React, { useState } from 'react';
import axios from 'axios';
import { ContactFormContainer, ContactFormFieldsContainer, FormField, FormButton, ContactContainer, ContactTitleContainer, ContactTitle} from './ContactFormElements';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
      axios
        .post('/send', { ...state })
        .then(response => {
          setResult(response.data);
          setState({ 
            name: '',
            email: '',
            subject: '', 
            message: '' 
          });
        })
        .catch(() => {
          setResult({ 
            success: false, 
            message: 'Something went wrong. Try again later'
          });
        });
  }

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
<>
  {result && (
    <p className={`${result.success ? 'success' : 'error'}`}>
      {result.message}
    </p>
  )}

  <ContactContainer>
    <ContactTitleContainer>
      <ContactTitle>
        Contact Us!
      </ContactTitle>
      
    </ContactTitleContainer>
 
    <ContactFormContainer>
    <ContactFormFieldsContainer>
      <form onSubmit={sendEmail}>
        <label>
          Full Name *
          <FormField 
            name="name"
            type="text"
            value={state.name}
            onChange={onInputChange}
          />
        </label>
        <label>
          Email Address *
          <FormField
            type="text"
            name="email"
            value={state.email}
            onChange={onInputChange}
          />
        </label>
        <label>
          Subject
          <FormField
            type="text"
            name="subject"
            value={state.subject}
            onChange={onInputChange}
          />
        </label>
        <label>
          Message *
          <FormField
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            onChange={onInputChange}
          />
        </label>
        <FormButton type="submit">
          Submit
        </FormButton>
      </form>
    </ContactFormFieldsContainer>
    </ContactFormContainer>
  </ContactContainer>
</>
  );
};

export default ContactForm;