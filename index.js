
const employee = {
   name:"caroline", streetAddresse:"Mukuyu Road"}


//defined and assigned a function that updates the employee with a key and a value (non-destructively)
function updateEmployeeWithKeyAndValue(employee, key, value){
  return {...employee,[key]:value};
}
//defined and assigned a function that updates the employee with a key and a value (destructively)
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee [key] = value
  return employee
}

// delete key from the call of the employee 
function nonDestructivedeleteEmployeeByKey(employee, key){
 
   delete {...employee,[key]:value}
   return employee
  
  

}



