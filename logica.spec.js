describe ('TESTE MODULO LÓGICO',()=>{

    it('Quando eu executo a função verifyBigger passando como parâmetros os valores 5 e 7 o resultado deve ser " 7 É maior que 5 " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyBigger(5,7)).toBe(' 7 É maior que 5 ');
    })

    it('Quando eu executo a função verifyBigger passando como parâmetros os valores 50 e 30 o resultado deve ser " 50 É maior que 30 " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyBigger(50,30)).toBe(' 50 É maior que 30 ');
    })

    it('Quando eu executo a função verifySmaller passando como parâmetros os valores 3 e 10 o resultado deve ser " 3 É menor que 10 " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifySmaller(3,10)).toBe(' 3 É menor que 10 ');
    })

    it('Quando eu executo a função verifySmaller passando como parâmetros os valores 15 e 13 o resultado deve ser " 13 É menor que 15 " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifySmaller(15,13)).toBe(' 13 É menor que 15 ');
    })

    it('Quando eu executo a função isEven passando como parâmetro o valor 6 o resultado deve ser " 6 é PAR " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.isEven(6)).toBe(' 6 é PAR ');
    })

    it('Quando eu executo a função isEven passando como parâmetro o valor 5 o resultado deve ser " 5 é IMPAR " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.isEven(5)).toBe(' 5 é IMPAR ');
    })

    it('Quando eu executo a função verifyAge passando como parâmetro a idade de 17 o resultado deve ser " 17 anos, é menor de Idade. " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyAge(17)).toBe(' 17 anos, é menor de Idade. ');
    })

    it('Quando eu executo a função verifyAge passando como parâmetro a idade de 18 o resultado deve ser " 18 anos, é maior de Idade. " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyAge(18)).toBe(' 18 anos, é maior de Idade. ');
    })

    it('Quando eu executo a função verifyAverage passando como parâmetros a nota 10, nota 9 e nota 8.5 o resultado deve ser " Conceito A ! " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyAverage(10,9,8.5)).toBe(' Conceito A ! ');
    })

    it('Quando eu executo a função verifyAverage passando como parâmetros a nota 8, nota 9 e nota 7.5 o resultado deve ser " Conceito B ! " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyAverage(8,9,7.5)).toBe(' Conceito B ! ');
    })

    it('Quando eu executo a função verifyAverage passando como parâmetros a nota 9, nota 8.5 e nota 5 o resultado deve ser " Conceito C ! " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyAverage(9,8.5,5)).toBe(' Conceito C ! ');
    })

    it('Quando eu executo a função verifyAverage passando como parâmetros a nota 7, nota 6 e nota 5.5 o resultado deve ser " Conceito D ! " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyAverage(7,6,5.5)).toBe(' Conceito D ! ');
    })

    it('Quando eu executo a função verifyAverage passando como parâmetros a nota 6, nota 4.5 e nota 7 o resultado deve ser " Conceito I ! " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyAverage(6,4.5,7)).toBe(' Conceito I ! ');
    })

    it('Quando eu executo a função verifyDiscount passando como parâmetros o valor 100 e o desconto de 5 % o resultado deve ser " R$ 95 " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDiscount(100,5)).toBe(' R$ 95 ');
    })

    it('Quando eu executo a função verifyDiscount passando como parâmetros o valor 100 e o desconto de 25 % o resultado deve ser " Percentual de desconto excede o limite de nossa política de preço ! " ',()=>{
       const moduloLogica = require('./logica');
       expect(moduloLogica.verifyDiscount(100,25)).toBe(' Percentual de desconto excede o limite de nossa política de preço ! ');
    })

    it('Quando eu executo a função isEqual passando como parâmetros os valores 22 e 22 o resultado deve ser " Os números 22 e 22 são iguais. " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.isEqual(22,22)).toBe(' Os números 22 e 22 são iguais. ');
     })

     it('Quando eu executo a função isEqual passando como parâmetros os valores 70 e 93 o resultado deve ser " Os números 70 e 93 são diferentes. " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.isEqual(70,93)).toBe(' Os números 70 e 93 são diferentes. ');
     })

     it('Quando eu executo a função myFunction passando como parâmetro o valor 800 o resultado deve ser "0" ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.myFunction(800)).toBe(0);
     })

     it('Quando eu executo a função myFunction passando como parâmetro o valor 1900 o resultado deve ser "7.5" ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.myFunction(1900)).toBe(7.5);
     })

     it('Quando eu executo a função myFunction passando como parâmetro o valor 2500 o resultado deve ser "52.5" ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.myFunction(2500)).toBe(52.5);
     })

     it('Quando eu executo a função myFunction passando como parâmetro o valor 3500.01 o resultado deve ser "255.00150000000002" ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.myFunction(3500.01)).toBe(255.00150000000002);
     })

     it('Quando eu executo a função myFunction passando como parâmetro o valor 3499.99 o resultado deve ser "127.49924999999998" ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.myFunction(3499.99)).toBe(127.49924999999998);
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 0 o resultado deve ser " O número informado é inválido. " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(0)).toBe(' O número informado é inválido. ');
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 1 o resultado deve ser " Domingo " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(1)).toBe(' Domingo ');
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 1 o resultado deve ser " Segunda-Feira " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(2)).toBe(' Segunda-Feira ');
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 1 o resultado deve ser " Terça-Feira " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(3)).toBe(' Terça-Feira ');
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 1 o resultado deve ser " Quarta-Feira " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(4)).toBe(' Quarta-Feira ');
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 1 o resultado deve ser " Quinta-Feira " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(5)).toBe(' Quinta-Feira ');
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 1 o resultado deve ser " Sexta-Feira " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(6)).toBe(' Sexta-Feira ');
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 1 o resultado deve ser " Sábado " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(7)).toBe(' Sábado ');
     })

     it('Quando eu executo a função verifyDayOfWeek passando como parâmetro o valor 8 o resultado deve ser " O número informado é inválido. " ',()=>{
        const moduloLogica = require('./logica');
        expect(moduloLogica.verifyDayOfWeek(8)).toBe(' O número informado é inválido. ');
     })
})