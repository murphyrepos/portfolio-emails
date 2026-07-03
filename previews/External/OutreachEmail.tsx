import OutreachEmail from '../../src/templates/External/OutreachEmail';

export const Default = () => (
  <OutreachEmail
    subject="A practical way to simplify your product workflow"
    body={`Hi Jordan,

I noticed your team is expanding its product offering. That usually brings more tools, handoffs, and review cycles along with it.

We help growing teams streamline that workflow so they can ship consistently without adding unnecessary process. I would be glad to share a few ideas tailored to your current setup.

Would a short conversation next week be useful?

Best,
Alex`}
  />
);

const Preview = () => <Default />;

export default Preview;
