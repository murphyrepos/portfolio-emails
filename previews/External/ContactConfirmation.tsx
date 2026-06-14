import ContactConfirmation from '../../src/templates/External/ContactConfirmation';

const props = {
  inquiryType: 'General consultation',
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  company: 'Acme Corp',
  budget: '$5,000 to $10,000',
  message:
    "Hi, I'm interested in learning more about your repository management services and how they might integrate with our current CI/CD pipeline.\n\nWe're looking for a scalable solution that can handle around 50 active developers.",
};

export const English = () => <ContactConfirmation locale="en" {...props} />;

export default English;
