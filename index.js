function employee(empName,dName, Sal){
    this.name = empName,
    this.department = dName,
    this.salary = Sal

}
var emp1 = new employee("John","IT",10000)
var emp2 = new employee("Kate","HR",20000)

console.log(emp1.name)

// it shows john

function check(){

    var name = document.getElementById("findName").value
    if (emp1.name == name){
        alert(emp1.salary)

    }else if(emp2.name == name){
        alert (emp2.salary)
    }else{
        alert("invalid value")
    }
}



