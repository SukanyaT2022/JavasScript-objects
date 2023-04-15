function department(name2,locate, numofEmp){
    this.name = name2,
    this.location = locate,
    this.numberofEmployee = numofEmp
}
 var dep1 = new department ("IT", "NY", 10)
 var dep2 = new department ("HR", "NJ", 20)
 
 function check(){
    var num = document.getElementById("findHowmany").value
    if (num == dep1.name){
        alert(dep1.numberofEmployee)
    }else if (num == dep2.name) {
        alert(dep2.numberofEmployee)
    }else{
            alert ("can not find")
        }

        }
  