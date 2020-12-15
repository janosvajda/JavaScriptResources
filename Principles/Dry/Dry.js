/**
 * Example of DRY code.
 */
class Message {

  /**
   * @param name
   */
  create(title, message) {
    return title + ' ' + message;
  }
}

module.exports = Message;

