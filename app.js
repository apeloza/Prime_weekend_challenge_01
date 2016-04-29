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
  $('.employeecontainer').append('<tr class="empRow"></tr>');
  var $employeeCell = $('.employeecontainer').children().last();
  $employeeCell.append('<td> ' + empInfo.employeefirstname + '</td><td> ' + empInfo.employeelastname + '</td><td> ' + empInfo.employeeID + '</td><td> ' + empInfo.employeetitle + '</td><td> ' + empInfo.employeesalary + '<td> <button class="delbtn btn btn-default">Delete!</button></td>');
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
  $(this).closest('.empRow').remove();
}
});
