import '../css/app.scss';
import ko from 'knockout';
// import $ from 'jquery';
// $(document).ready(function () {

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

  trackingDependencies(self);

  delayLog(self);


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
    console.log(params, 'params');
    fetch(`https://jsonplaceholder.typicode.com/users/${params.selected}`)
      .then(res => res.json())
      .then(json => console.log(json, 'json'));
    return self.changeKey().toLowerCase();
  }, self).extend({ rateLimit: { timeout: 2000, method: "notifyWhenChangesStop" } });
  self.nextUser = () => {
    return self.selectedUser(self.selectedUser() + 1);
    // return self.idUser(self.idUser() + 1);
  };
}

function delayLog(self) {
  self.instantaneousValue = ko.observable();
  self.delayedValue = ko.pureComputed(self.instantaneousValue).extend({
    rateLimit: { method: "notifyWhenChangesStop", timeout: 500 }
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


ko.applyBindings(new MyViewModel());


// });