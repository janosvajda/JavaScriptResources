const employePrototype = {

  //Employes ID
  id: Math.floor(Math.random() * 10000),

  //Date record of employe's starting date
  getStartDate() {
    return new Date();
  },

  //Salary of the employe
  getSalary() {
    return Math.floor(Math.random() * 1000);
  },
};

class Employe {

  /**
   * @param firstName
   * @param lastName
   * @returns {{getStartDate(): Date, id: number, getSalary(): number}}
   */
  constructor(firstName, lastName) {
    return Object.create(employePrototype,
      {
        firstName: {value: firstName},
        lastName: {value: lastName}
      }
    );
  }
}

module.exports = Employe;


