export type EmailAttachment = {
  name: string;
  url?: string;
  contentType?: string;
};

export type GenericEmailProps = {
  name: string;
  email: string;
  attachment?: EmailAttachment;
  locale?: string;
};

export type EmailProps<T extends object> = GenericEmailProps & {
  template: T;
};
