import assert from 'node:assert';

const mod = await import('../dist/index.js');

const required = [
  'ContactInquiryInternal',
  'ContactConfirmation',
  'JobApplicationInternal',
  'JobApplicationConfirmation',
  'getEmailMessages',
  'interpolate',
  'resolveEmailLocale',
  'defaultEmailLocale',
  'languages',
];

for (const name of required) {
  assert(name in mod, `dist/index.js is missing export "${name}"`);
}

const messages = mod.getEmailMessages();
assert(messages?.common?.brandName, 'getEmailMessages() did not return real message data');

console.log('Build output verified: all exports present and callable.');
