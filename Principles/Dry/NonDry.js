/**
 * Example of non DRY code.
 */
class Message {

  /**
   * @param message
   */
  showWelcome(message) {
    return 'Hello' + ' ' + message;
  }

  /**
   *
   * @param message
   */
  showWarning(message) {
    return 'Warning!' + ' ' + message;
  }

  /**
   *
   * @param message
   */
  showInfo(message) {
    return 'Info:' + ' ' + message;
  }
}

module.exports = Message;
