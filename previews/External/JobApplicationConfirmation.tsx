import JobApplicationConfirmation from '../../src/templates/External/JobApplicationConfirmation';

const props = {
  position: 'Senior Software Engineer',
  jobCode: 'MR-2026-00847',
  name: 'Michael Torres',
  email: 'michael.torres@example.com',
  submittedAt: 'June 13, 2026',
};

export const English = () => <JobApplicationConfirmation locale="en" {...props} />;

export default English;
