const bh_notification = {};

/**
 * Notification success
 * @param {*} value
 */
bh_notification.bh_success = (value) => {
  this.$notify({
    title: value.title ? value.title : "Success",
    message: value.message,
    type: value.type,
    position: value.position,
  });
};

/**
 * Notification warning
 * @param {*} value
 */
bh_notification.bh_warning = (value) => {
  this.$notify({
    title: value.title ? value.title : "Warning",
    message: value.message,
    type: value.type,
    position: value.position,
  });
};

/**
 * Notification error
 * @param {*} value
 */
bh_notification.bh_error = (value) => {
  this.$notify({
    title: value.title ? value.title : "Error",
    message: value.message,
    type: value.type,
    position: value.position,
  });
};
export default bh_notification;
