document.addEventListener('DOMContentLoaded', function(){
    
    var buttonOne = document.getElementById('button1');
    var buttonTwo = document.getElementById('button2');
    var buttonThree = document.getElementById('button3');
    var buttonFour = document.getElementById('button4');
    
    buttonOne.onclick = function(){
        var num1 = document.getElementById('op1').value;
        var num2 = document.getElementById('op2').value;
        davidsLib.add(num1, num2, function callback(err, result)
        {
            if (err){
                alert("I can't add!");
            } else {
                    alert(result);
                }
            });
    }
 
    buttonTwo.onclick = function(){
        var num1 = document.getElementById('op1').value;
        var num2 = document.getElementById('op2').value;
        davidsLib.subtract(num1, num2, function callback(err, result)
        {
            if (err){
                alert("I can't subtract!");
            } else {
                    alert(result);
                }
            });
    }
    
    buttonThree.onclick = function(){
        var num1 = document.getElementById('op1').value;
        var num2 = document.getElementById('op2').value;
        davidsLib.multiply(num1, num2, function callback(err, result)
        {
            if (err){
                alert("I can't multiply!");
            } else {
                    alert(result);
                }
            });
    }
 
    buttonFour.onclick = function(){
        var num1 = document.getElementById('op1').value;
        var num2 = document.getElementById('op2').value;
        davidsLib.divide(num1, num2, function callback(err, result)
        {
            if (err){
                alert("I can't divide!");
            } else {
                    alert(result);
                }
            });
    }
    
});