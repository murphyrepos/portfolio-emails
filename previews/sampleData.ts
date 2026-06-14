import { faker } from '@faker-js/faker';

const formatDate = (date: Date, includeTime = false) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...(includeTime ? { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' } : {}),
  }).format(date);

const createPerson = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
  };
};

const createAttachment = () => ({
  name: faker.system.fileName({ extensionCount: 1 }),
  url: faker.internet.url(),
  contentType: 'application/pdf',
});

export const createContactPreviewProps = (seed: number) => {
  faker.seed(seed);

  return {
    ...createPerson(),
    locale: 'en',
    template: {
      inquiryType: faker.helpers.arrayElement([
        'General consultation',
        'Repository management',
        'Platform integration',
        'Technical discovery',
      ]),
      company: faker.company.name(),
      budget: `$${faker.number.int({ min: 5, max: 25 })},000 to $${faker.number.int({
        min: 30,
        max: 100,
      })},000`,
      message: faker.lorem.paragraphs(2, '\n\n'),
    },
  };
};

export const createContactInternalPreviewProps = (seed: number) => {
  faker.seed(seed);
  const baseProps = createContactPreviewProps(seed);

  return {
    ...baseProps,
    template: {
      ...baseProps.template,
      submittedAt: formatDate(faker.date.recent({ days: 3 }), true),
    },
  };
};

export const createJobApplicationPreviewProps = (seed: number) => {
  faker.seed(seed);

  return {
    ...createPerson(),
    locale: 'en',
    template: {
      position: faker.helpers.arrayElement([
        'Senior Software Engineer',
        'Product Designer',
        'Engineering Manager',
        'Developer Advocate',
      ]),
      jobCode: `MR-${faker.date.future().getFullYear()}-${faker.string.numeric(5)}`,
      submittedAt: formatDate(faker.date.recent({ days: 5 })),
    },
  };
};

export const createJobApplicationInternalPreviewProps = (seed: number) => {
  faker.seed(seed);
  const baseProps = createJobApplicationPreviewProps(seed);

  return {
    ...baseProps,
    attachment: createAttachment(),
    template: {
      ...baseProps.template,
      phone: faker.phone.number(),
      links: faker.internet.url(),
      coverLetter: faker.lorem.paragraphs(2, '\n\n'),
    },
  };
};
