let input = [40,20,550,455,50,];
let input2 = [];       
        let suma = 0;
        let sumb = 0;
        for (let i = 0; i < input.length; i++) {
            if (i % 2 == 0) {
                suma += input[i];
            }
            else {
                sumb += input[i];
            }
        }
        input2.push(suma);
        input2.push(sumb);       
        console.log(input2);