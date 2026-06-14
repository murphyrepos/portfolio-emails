import { getEmailMessages, languages } from '../../src/i18n';
import ContactConfirmation, {
  ContactConfirmationContent,
} from '../../src/templates/External/ContactConfirmation';
import LocalizedEmailPreview from '../_components/LocalizedEmailPreview';
import { createContactPreviewProps } from '../sampleData';

const props = createContactPreviewProps(1001);

export const English = () => <ContactConfirmation {...props} locale="en" />;

const Preview = () => (
  <LocalizedEmailPreview
    languages={languages}
    getPreview={(locale) => getEmailMessages(locale).contactConfirmation.preview}
    getSubject={(locale) => getEmailMessages(locale).contactConfirmation.subject}
    getTitle={(locale) => getEmailMessages(locale).contactConfirmation.title}
    renderBody={(locale) => <ContactConfirmationContent {...props} locale={locale} />}
  />
);

export default Preview;
