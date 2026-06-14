import { getEmailMessages, interpolate, languages } from '../../src/i18n';
import JobApplicationInternal, {
  JobApplicationInternalContent,
} from '../../src/templates/Internal/JobApplicationInternal';
import LocalizedEmailPreview from '../_components/LocalizedEmailPreview';
import { createJobApplicationInternalPreviewProps } from '../sampleData';

const props = createJobApplicationInternalPreviewProps(4001);

export const English = () => <JobApplicationInternal {...props} locale="en" />;

const Preview = () => (
  <LocalizedEmailPreview
    languages={languages}
    getPreview={(locale) =>
      interpolate(getEmailMessages(locale).jobApplicationInternal.preview, {
        name: props.name,
        position: props.template.position,
      })
    }
    getSubject={(locale) =>
      interpolate(getEmailMessages(locale).jobApplicationInternal.subject, {
        position: props.template.position,
        jobCode: props.template.jobCode,
      })
    }
    getTitle={(locale) => getEmailMessages(locale).jobApplicationInternal.title}
    renderBody={(locale) => <JobApplicationInternalContent {...props} locale={locale} />}
  />
);

export default Preview;
