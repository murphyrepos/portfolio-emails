import JobApplicationInternal from '../../src/templates/Internal/JobApplicationInternal';

const props = {
  position: 'Senior Software Engineer',
  jobCode: 'MR-2026-00847',
  name: 'Michael Torres',
  email: 'michael.torres@example.com',
  phone: '+1 555 010 0199',
  links: 'https://michaeltorres.dev',
  coverLetter:
    'I have spent the last six years building design systems and production React applications, and I would love to bring that experience to your team.',
};

export const English = () => <JobApplicationInternal locale='en' {...props} />;

export default English;
