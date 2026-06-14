import { getEmailMessages, interpolate, languages } from '../../src/i18n';
import ContactInquiryInternal, {
  ContactInquiryInternalContent,
} from '../../src/templates/Internal/ContactInquiryInternal';
import LocalizedEmailPreview from '../_components/LocalizedEmailPreview';
import { createContactInternalPreviewProps } from '../sampleData';

const props = createContactInternalPreviewProps(3001);

export const English = () => <ContactInquiryInternal {...props} locale="en" />;

const Preview = () => (
  <LocalizedEmailPreview
    languages={languages}
    getPreview={(locale) =>
      interpolate(getEmailMessages(locale).contactInquiryInternal.preview, {
        name: props.name,
      })
    }
    getSubject={(locale) =>
      interpolate(getEmailMessages(locale).contactInquiryInternal.subject, {
        inquiryType: props.template.inquiryType,
      })
    }
    getTitle={(locale) => getEmailMessages(locale).contactInquiryInternal.title}
    renderBody={(locale) => <ContactInquiryInternalContent {...props} locale={locale} />}
  />
);

export default Preview;
