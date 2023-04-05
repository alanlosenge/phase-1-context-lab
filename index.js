/* Your Code Here */
function createEmployeeRecord(employee){
    let employeeRecords={
        firstName : employee[0],
        familyName: employee[1],
        title : employee[2],
        payPerHour : employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecords
}

function createEmployeeRecords(array){
    // an array that stores new record
    let map= array.map(x=> createEmployeeRecord(x))
    map.length
    return map
}

function createTimeInEvent(dateStamp){
    let [date, hour] =dateStamp.split(" ");
    this.timeInEvents.push({
        type : 'TimeIn',
        hour :parseInt(hour,10 ),
        date: date
    })
    return this
}

function createTimeOutEvent(dateStamp){
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvent.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });
  return this;
}

function hoursWorkedOnDate(date){
    let timeInEvent = this.timeInEvents.find(event => event.date === date);
    let timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
    let totalTimeWorked =(timeOutEvent.hour -  timeInEvent.hour) /100;
    return parseInt(totalTimeWorked, 10);
}
function wagesEarnedOnDate(date){
    return parseInt(hoursWorkedOnDate.apply(this, [date])* this.payPerHour.toString())
}
const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};


function findEmployeeByFirstName(sourceArray, firstName){
    return sourceArray.find(findfirst=>findfirst.firstName ===firstName)
}
function calculatePayroll(employeeArray){
        let wages =employee.reduce((prev,employee) =>{
            return prev + allWagesFor.call(employee)
        }, o)
        return wages
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
