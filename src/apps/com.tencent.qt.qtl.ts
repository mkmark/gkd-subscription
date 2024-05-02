import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 1,
      name: '开屏后中央广告',
      quickFind: true,
      activityIds: ['com.tencent.zone.main.MainZoneHomeActivity'],
      rules: '[id="com.tencent.qt.qtl:id/notice_close_pic"]',
      snapshotUrls: ['https://i.gkd.li/snapshot/1714630933969'],
    },
    {
      key: 2,
      name: 'QQ票据过期，请重新登录',
      quickFind: true,
      activityIds: ['com.tencent.zone.main.MainZoneHomeActivity'],
      rules: '[id="com.tencent.qt.qtl:id/iv_dialog_close"]',
      snapshotUrls: ['https://i.gkd.li/snapshot/1714631286349'],
    },
  ],
});
