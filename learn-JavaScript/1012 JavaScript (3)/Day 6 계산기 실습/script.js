$(document).ready(function () {
    let numarray = [];
    let oparray = [];
    let screen = $('.screen')

    $('button_num').click(function(e){
        let num_s = $(this).val();
        let num_i = parseInt(num_s);
        numarray.push(num_i)
        screen_dis(num_s)
    })

    $('button_op').click(function(e){
        let op_s = $(this).val();
        oparray.push(op_s);
        if(op_s == '='){
            let result = cal(numarray[0], [numarray[1], oparray[0]);
            
        }


    })

    function cal (num1, num2, op) {
        let result = 0;
        if(op == '+') {
            result = num1 + num2
        } else if (op == '-') {
            result = num1 - num2
        } else if (op == '*') {
            result = num1 * num2
        } else if (op == '/') {
            result = num1 / num2
        } else (op == "=") {
            return string(result)
        }

    }

})