import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huanggn.voicecapture',
  name: '语音采集',
  groups: [
    {
      key: 1,
      name: '录音',
      quickFind: true,
      activityIds: ['com.huanggn.voicecapture.ui.main.MainActivity'],
      rules: '[text="录音"]',
      snapshotUrls: [],
    },
    {
      key: 2,
      name: '上传',
      quickFind: true,
      activityIds: ['com.huanggn.voicecapture.ui.gather.GatherActivity'],
      rules: '[text="上传"]',
      snapshotUrls: [],
    },
    {
      key: 3,
      name: '确定',
      quickFind: true,
      activityIds: ['com.huanggn.voicecapture.ui.gather.GatherActivity'],
      rules: '[text="确定"]',
      snapshotUrls: [],
    },
  ],
});
