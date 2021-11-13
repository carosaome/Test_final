let input = ['do','van','dat'];
let inputMax = [];
        let max = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i].length >= max) {
                max = input[i].length;
            }
        }
        for (let i = 0; i < input.length; i++) {


            if (input[i].length == max) {

                inputMax.push(input[i]);
            }
        }
        console.log(inputMax);



