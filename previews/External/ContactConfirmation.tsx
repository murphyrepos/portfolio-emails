import ContactConfirmation from '../../src/templates/External/ContactConfirmation';
import { createContactPreviewProps } from '../sampleData';

const props = createContactPreviewProps(1001);

export const English = () => <ContactConfirmation {...props} locale="en" />;

const Preview = () => <English />;

export default Preview;
