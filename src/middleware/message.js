const bh_messages = {};

/**
 * Thông báo success
 * @param {*} value
 */
bh_messages.bh_success = (value) => {
  this.$message({
    message: value.title,
    type: "success",
    showClose: value.statusClose,
  });
};

/**
 * Thông báo warning
 * @param {*} value
 */
bh_messages.bh_warning = (value) => {
  this.$message({
    message: value.title,
    type: "warning",
    showClose: value.statusClose,
  });
};

/**
 * Thông báo error
 * @param {*} value
 */
bh_messages.bh_error = (value) => {
  this.$message({
    message: value.title,
    type: "error",
    showClose: value.statusClose,
  });
};

export default bh_messages;
