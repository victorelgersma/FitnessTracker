const ejs = require('ejs');
const fs = require('fs');

const configs = [
  { filename: 'pushups.html', title: 'Push-ups', storageKey: 'pushupLogData', unitKey: 'pushups', unitLabel: 'push-ups', color: 'lime-400' },
  { filename: 'pullups.html', title: 'Pull-ups', storageKey: 'pullupLogData', unitKey: 'pullups', unitLabel: 'pull-ups', color: 'blue-400' },
  { filename: 'swimming.html', title: 'Swimming', storageKey: 'swimLogData', unitKey: 'meters', unitLabel: 'meters', color: 'teal-400' },
  { filename: 'running.html', title: 'Running', storageKey: 'runLogData', unitKey: 'km', unitLabel: 'km', color: 'orange-400' }
];

const indexTemplate = fs.readFileSync('index-template.ejs', 'utf8');
const indexHtml = ejs.render(indexTemplate, { configs });
fs.writeFileSync('public/index.html', indexHtml);

const template = fs.readFileSync('logger-template.ejs', 'utf8');

configs.forEach(cfg => {
  const html = ejs.render(template, cfg);
  fs.writeFileSync(`public/${cfg.filename}`, html);
});