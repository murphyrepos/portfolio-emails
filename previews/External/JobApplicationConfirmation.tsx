import { getEmailMessages, languages } from '../../src/i18n';
import JobApplicationConfirmation, {
  JobApplicationConfirmationContent,
} from '../../src/templates/External/JobApplicationConfirmation';
import LocalizedEmailPreview from '../_components/LocalizedEmailPreview';
import { createJobApplicationPreviewProps } from '../sampleData';

const props = createJobApplicationPreviewProps(2001);

export const English = () => <JobApplicationConfirmation {...props} locale="en" />;

const Preview = () => (
  <LocalizedEmailPreview
    languages={languages}
    getPreview={(locale) => getEmailMessages(locale).jobApplicationConfirmation.preview}
    getSubject={(locale) => getEmailMessages(locale).jobApplicationConfirmation.subject}
    getTitle={(locale) => getEmailMessages(locale).jobApplicationConfirmation.title}
    renderBody={(locale) => <JobApplicationConfirmationContent {...props} locale={locale} />}
  />
);

export default Preview;
