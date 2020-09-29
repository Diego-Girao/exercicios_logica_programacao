// Verificando qual o maior número.

function verifyBigger(value1, value2){
    let message = "";
    if(value1 > value2){
        message = " " + value1 + " É maior que " + value2 + " ";    
     }else{
        message = " " + value2 + " É maior que " + value1 + " ";    
    }
  
    return message;
}
    // Verificando qual o menor número.

function verifySmaller(value1, value2){
    let message = "";
    if(value1 < value2){
        message = " " + value1 + " É menor que " + value2 + " ";    
     }else{
        message = " " + value2 + " É menor que " + value1 + " ";    
    }
  
    return message;
}
    //  Verificando se o divisor é PAR.

function isEven(value){
    let message = "";
    if(value % 2 === 0){
        message = " " + value + " é PAR ";    
     }else{
        message = " " + value + " é IMPAR ";    
    }
  
    return message;
}
    // Verificando se é maior de idade.

function verifyAge(age){
    let message = "";
    if(age >= 18){
        message = " " + age + " anos, é maior de Idade. ";    
     }else{
        message = " " + age + " anos, é menor de Idade. ";    
    }
  
    return message;
}
    // Verficando a média e atribuindo o conceito.

function verifyAverage(note1,note2,note3){
    let message = "";
    let average = (note1 + note2 + note3) / 3;
    
    if(average >= 9){
        message = " Conceito A ! ";
    }
    if(average >= 8 && average < 9){
        message = " Conceito B ! ";
    }

    if(average >= 7 && average < 8){
        message = " Conceito C ! ";
    }

    if(average >= 6 && average < 7){
        message = " Conceito D ! ";
    }
    
    if(average < 6){
        message = " Conceito I ! ";
    }
    return message;
}
    // Verificando o Desconto aplicado
    
function verifyDiscount(value1,value2){
    let message = "";
    let discount = (value1 * value2) / 100;
    let result = 100 - discount;

    if(result === 95){
        message = " R$ "+ result + " ";

    // if(result === 75){
    }else{  
    message = " Percentual de desconto excede o limite de nossa política de preço ! ";
    }
    return message;
}
    // Verificando se os números são iguais

function isEqual(value1,value2){
    let message = "";
    if(value1 === value2){
        message = " Os números " + value1 + " e " + value2 + " são iguais. ";
    // }else if(value1 != value2){
    //   message = " Os números " + value1 + " e " + value2 + " são diferentes. ";

    }else{
    message = " Os números " + value1 + " e " + value2 + " são diferentes. ";
}
    return message;
}
    //Verificando valor para dedução

function myFunction(value){
    const FIRST_RANGE_PERCENT = 0;
    const SECOND_RANGE_PERCENT = 0.075;
    const THIRD_RANGE_PERCENT = 0.15;   
    const BASE = 1800.0; 
    let deduction = 0;
    let valueForDeduction =  0;
    if(value > 3500.0){
        valueForDeduction = value - BASE;
        deduction = valueForDeduction * THIRD_RANGE_PERCENT;
    } else if(value > BASE && value <= 3500 ){
        valueForDeduction = value - BASE;
        deduction = valueForDeduction * SECOND_RANGE_PERCENT;    
    }else{
        valueForDeduction = 0;
        deduction = valueForDeduction * FIRST_RANGE_PERCENT;    
    }
  
    return deduction;
}

    // Verificando os dias da semana

function verifyDayOfWeek(value){
    let message = "";

    if(value === 1){
        message = " Domingo ";
    }else if(value === 2){
        message = " Segunda-Feira ";
    }else if(value === 3){
        message = " Terça-Feira ";
    }else if(value === 4){
        message = " Quarta-Feira ";
    }else if(value === 5){
        message = " Quinta-Feira ";
    }else if(value === 6){
        message = " Sexta-Feira ";
    }else if(value === 7){
        message = " Sábado ";
    //}else if(value < 1 || value > 7){
      //  message = " O número informado é inválido. ";
    // }
    }else{
        message = " O número informado é inválido. ";
    }
        return message;
    }

    module.exports = {
    verifyBigger,
    verifySmaller,
    isEven,
    verifyAge,
    verifyAverage,
    verifyDiscount,
    isEqual,
    myFunction,
    verifyDayOfWeek
}