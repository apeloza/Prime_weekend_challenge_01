$(document).ready(function(){
var totalSalary= 0;

$('#employeeinfo').on('submit', function(event) {
  event.preventDefault();
  var employee = {};
  $.each($('#employeeinfo').serializeArray(), function(i, field) {
    employee[field.name] = field.value;
});

addEmployee(employee);
addSalary(employee);
});

$('.employeecontainer').on('click', '.delbtn', deleteEmployee);

function addEmployee(empInfo){
  $('.employeecontainer').append('<div class="empCell"></div>');
  var $employeeCell = $('.employeecontainer').children().last();
  $employeeCell.append('<p> First Name:' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + empInfo.employeeID + ' ' + empInfo.employeetitle + ' ' + empInfo.employeesalary + '<span class="delbtn">Delete!</span></p> ');
  $('#employeeinfo').find('input[type=text]').val('');
  $('#employeeinfo').find('input[type=number]').val('');
}
function addSalary(empInfo){
  var employeeSalary = empInfo.employeesalary;
totalSalary += Number(employeeSalary);
$('.salary').remove();
$('.salarycontainer').append('<p class="salary">Total Monthly Salary:' + totalSalary + '</p>');
}

function deleteEmployee(){
  console.log("Running!");
  $(this).closest('.empCell').remove();
}
});
