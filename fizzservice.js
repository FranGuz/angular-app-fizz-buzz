(function(){
    function fizzService(){
        var fizzInfo = {}

        return {
    getFizzInfo:getFizzInfo, 
        }
    }
function getFizzInfo(number){
    fizzInfo=number;
    console.log(fizzInfo);
};


angular
.module("app")
.service("fizzService",fizzService)


})();