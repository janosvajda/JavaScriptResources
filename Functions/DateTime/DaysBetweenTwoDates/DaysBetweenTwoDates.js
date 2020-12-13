class DaysBetweenTwoDates {

  /**
   * Converts date to UTC
   * @param date
   * @returns {number}
   */
  toUTC(date) {
    if (!date || !date.getFullYear) return 0;

    return Date.UTC(date.getFullYear(),
      date.getMonth(), date.getDate());
  }

  /**
   * Converts milliseconds to days
   * @param date
   * @returns {number}
   */
  toDays(date) {
    date = date || 0;
    return date / 24 / 60 / 60 / 1000;
  }

  /**
   * Returns by day counts between the two dates
   * @param date1
   * @param date2
   * @returns {number}
   */
  calculate(date1, date2) {
    return this.toDays(this.toUTC(date2) - this.toUTC(date1));
  }
}

module.exports = DaysBetweenTwoDates;
