import JobApplicationConfirmation from '../../src/templates/External/JobApplicationConfirmation';
import { createJobApplicationPreviewProps } from '../sampleData';

const props = createJobApplicationPreviewProps(2001);

export const English = () => <JobApplicationConfirmation {...props} locale="en" />;

const Preview = () => <English />;

export default Preview;
