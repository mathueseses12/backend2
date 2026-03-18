let nomes = ["Gabriel","Matheus","Hygor","triple-T"]

    console.log(nomes[1]);

    let numeros = [1,2,3,4];
    //             0 1 2 3 

    for(let i=0; i<numeros.length; i++){
    console.log(numeros)

    }
    let matriz=[
        [20,30,40,50],
        [10,45,77,28],
        [22,53,84,92]
    ];
    console.log(matriz[0][1]);
    for(let i=0;i<matriz.length; i++){
    for(let j=0; j<matriz[i].length;j++){
        console.log("minha matriz "+matriz[i][j]);

    }
    }



    let arreio=[20,"Meow",true,false];
    arreio[1]= "brr brr";

    arreio.push("orcalero"); // adiciona ao final
    arreio.pop(); // remove o ultimo elemento
    arreio.unshift(); // adiciona elemento na primeira posição
    arreio.shift(); // remove a primeira posição
