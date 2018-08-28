import '../css/app.scss';
import ko from 'knockout';
// import $ from 'jquery';
// $(document).ready(function () {


/**
 * @Description: Part 1 Knockout JS
 * @Author: Chau Nguyen
 */
function MyViewModel() {
  const self = this;
  this.changeKey = ko.observable('Enter ...').extend({
    notify: 'always'
  });
  this.showState = ko.pureComputed(() => {
    return this.changeKey().toUpperCase();
  }, this).extend({
    rateLimit: 500
  });
  this.textTransform = function () {
    return this.changeKey().toLowerCase();
  };
  
  // trackingDependencies(self);
  // delayLog(self);
  appData(self);
}

function trackingDependencies(self) {
  self.idUser = ko.observable(1);
  self.selectedUser = ko.observable(1);
  self.getData = ko.pureComputed(() => {
    const params = {
      id: self.idUser(),
      selected: self.selectedUser.peek(),
    };
    // console.log(params, 'params');
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => res.json())
      .then(json => console.log(json, 'json'));
    return self.changeKey().toLowerCase();
  }, self).extend({ rateLimit: { timeout: 1000, method: "notifyWhenChangesStop" } });
  self.nextUser = () => {
    return self.selectedUser(self.selectedUser() + 1);
    // return self.idUser(self.idUser() + 1);
  };
}

function delayLog(self) {
  self.instantaneousValue = ko.observable();
  self.delayedValue = ko.pureComputed(self.instantaneousValue).extend({
    rateLimit: { method: "notifyWhenChangesStop", timeout: 1000 }
  });
  self.loggedValues = ko.observableArray([]);
  self.delayedValue.subscribe((value) => {
    if (value !== '')
      self.loggedValues.push(value);
  }, self);
}

function appData(self) {
  self.firstName = ko.observable('Chau');
  self.lastName = ko.observable('Nguyen');
  self.prefix = ko.observable('Dr.');
  self.computedLog = ko.observable('Log: ');
  self.fullName = ko.pureComputed(() => {
    const valueName = `${self.prefix()} ${self.firstName()} ${self.lastName()}`;
    self.computedLog(`${self.computedLog.peek()} ${valueName};`);
    return valueName;
  }, self);
  // self.fullName.subscribe((value) => {
  // console.log(value, 'start');
  // }, self, 'awake');
  // }, self, 'asleep');
  self.step = ko.observable(0);
  self.nextStep = () => {
    self.step(self.step() === 2 ? 0 : self.step() + 1);
  };
}


// const myObject = new MyViewModel();
// let result = {};
// for (let prop in myObject) {
//   if (myObject.hasOwnProperty(prop) && !ko.isComputed(myObject[prop])) {
//     result[prop] = myObject[prop];
//   }
// }
// console.log(result);

// ko.applyBindings(new MyViewModel());
/**
 * @Description: Part 2 Knockout JS
 * @Author: Chau Nguyen
 */

function SeatReservation(name, initialMeal) {
  const self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);
  self.formattedPrice = ko.computed(() => {
    const { price } = self.meal();
    return price ? `$ ${price.toFixed(2)}` : 'None';
  });
}

function ReservationsViewModel() {
  const self = this;
  self.isEmpty = (object) => {
    for (let key in object) {
      if (object.hasOwnProperty(key))
        return false;
    }
    return true;
  };
  
  self.availabelMeals = [
    { mealName: 'Standar (sandwich)', price: 0 },
    { mealName: 'Premium (lobster)', price: 34.95 },
    { mealName: 'Ultimate (whole zebra)', price: 105 },
  ];
  
  self.seats = ko.observableArray([
    new SeatReservation('Steve', self.availabelMeals[1]),
    new SeatReservation('Bert', self.availabelMeals[2]),
  ]);
  
  self.addSeat = () => {
    self.seats.push(new SeatReservation('name...', self.availabelMeals[0]))
  };
  
  self.totalSurcharge = ko.pureComputed(() => {
    let total = 0;
    // for (let i = 0; i < self.seats().length; i++)
    //   total += self.seats()[i].meal().price;
    self.seats().forEach(seat => total += seat.meal().price);
    return total;
  });
  
  self.removeSeat = (seat) => {
    console.log(seat, 'seat');
    self.seats.remove(seat);
  };
  
  self.result = ko.observable({});
  
  self.orderReservation = () => {
    const result = {
      name: '',
      totalSurcharge: self.totalSurcharge(),
      seats: [],
      totalSeats: 0,
    };
    self.seats().forEach((item) => {
      const { name, meal } = item;
      result.name = name;
      result.seats = [...result.seats, meal()];
    });
    self.seats.removeAll();
    self.result(result);
    return result;
  };
}

// ko.applyBindings(new ReservationsViewModel());

/**
 * @Description: Part 3 Knockout JS
 * @Author: Chau Nguyen
 */

// ko.applyBindings(new ReservationsViewModel());

// });