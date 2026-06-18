import JobApplicationInternal from '../../src/templates/Internal/JobApplicationInternal';
import { createJobApplicationInternalPreviewProps } from '../sampleData';

const props = createJobApplicationInternalPreviewProps(4001);

export const English = () => <JobApplicationInternal {...props} locale="en" />;

const Preview = () => <English />;

export default Preview;
