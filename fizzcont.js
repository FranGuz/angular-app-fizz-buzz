(function(){
    function FizzNum(fizzService){
        var vm =this;
        var answer = null;
        vm.test = function(number){
            fizzService.getFizzInfo(number)
            console.log("yo")
            console.log(number)
            if (number % 5 === 0 && number % 3 === 0){
                answer = (number +" is fizz and buzz")

            } 
            else if (number % 3 === 0){
                answer = (number +" is fizz")

                }
            else if (number % 5 === 0){
                answer = (number +" is buzz")

                }
            else {
                answer = number + " is neither fizz or buzz"
            }

                console.log(answer)
        }


    }

angular
.module("app")
.controller("FizzNum",FizzNum)


})();