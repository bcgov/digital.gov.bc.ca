let EVENTBRITE_CRON_IN_PROCESS = false;

const eventbriteCronStarted = () => {
  EVENTBRITE_CRON_IN_PROCESS = true;
  strapi.log.info("The Eventbrite CronJob is triggered.")
}

const eventbriteCronCompleted = () => {
  EVENTBRITE_CRON_IN_PROCESS = false;
  strapi.log.info("The Eventbrite CronJob is Completed.")
}

const isEventbriteCronInProgress = () => {
  return EVENTBRITE_CRON_IN_PROCESS
}

exports.eventbriteCronStarted = eventbriteCronStarted;
exports.eventbriteCronCompleted = eventbriteCronCompleted;
exports.isEventbriteCronInProgress = isEventbriteCronInProgress;