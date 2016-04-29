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
  $employeeCell.append('<td> ' + empInfo.employeefirstname + '</td><td> ' + empInfo.employeelastname + '</td><td> ' + empInfo.employeeID + '</td><td> ' + empInfo.employeetitle + '</td><td class= "individualSalary">$' + empInfo.employeesalary + '<td> <button class="delbtn btn btn-default">Delete!</button></td>');
  $('#employeeinfo').find('input[type=text]').val('');
  $('#employeeinfo').find('input[type=number]').val('');
}
function addSalary(empInfo){
  var employeeSalary = Number(empInfo.employeesalary);
totalSalary += employeeSalary;
updateSalary();
}

function deleteEmployee(){
  lowerSalary($(this).closest('.empRow').find('.individualSalary').text());
  $(this).closest('.empRow').remove();
}
function lowerSalary(empInfo){
  console.log(empInfo.substring(1));
  var employeeSalary = Number(empInfo.substring(1));
  totalSalary -= employeeSalary;
  updateSalary();
}
function updateSalary(){
  $('.salary').remove();
  $('.salarycontainer').append('<p class="salary">Total Monthly Salary: $' + totalSalary + '</p>');
}
});
