import ContactInquiryInternal from '../../src/templates/Internal/ContactInquiryInternal';
import { createContactInternalPreviewProps } from '../sampleData';

const props = createContactInternalPreviewProps(3001);

export const English = () => <ContactInquiryInternal {...props} locale="en" />;

const Preview = () => <English />;

export default Preview;
