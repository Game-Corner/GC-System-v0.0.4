var CronJob = require('cron').CronJob;
var run = require('bot/run.js');

new CronJob({
  cronTime: "0,0 6,22 * * *", // everyday, 6:00 am, 10:00 pm
  onTick: run.start(),
  start: true,
  timeZone: "America/Chicago"
});
