import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 3425362,
  name: 'mkmark/gkd-subscription',
  version: 0,
  author: 'mkmark',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/mkmark/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
