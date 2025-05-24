const ejs = require('ejs');
const fs = require('fs');

const configs = [
  { filename: 'pushups.html', title: 'Push-up', storageKey: 'pushupLogData', unitKey: 'pushups', unitLabel: 'push-ups' },
  { filename: 'pullups.html', title: 'Pull-up', storageKey: 'pullupLogData', unitKey: 'pullups', unitLabel: 'pull-ups' },
  { filename: 'swimming.html', title: 'Swim', storageKey: 'swimLogData', unitKey: 'meters', unitLabel: 'meters' },
  { filename: 'running.html', title: 'Run', storageKey: 'runLogData', unitKey: 'km', unitLabel: 'km' }
];

const template = fs.readFileSync('logger-template.ejs', 'utf8');

configs.forEach(cfg => {
  const html = ejs.render(template, cfg);
  fs.writeFileSync(`public/cfg.filename`, html);
});
