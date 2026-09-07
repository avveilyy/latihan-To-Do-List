const readline = require ("readline");

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});
rl.question("Masukkan kondisi (laper,haus,cape): " , function (kondisiTB) {
switch (kondisiTB.toLowerCase()) {
        case "laper":
        console.log("Anda harus makan");
        break;
        case "haus" :
            console.log("Anda harus minum");
            break;
        case "cape":
            console.log("km harus bobo");
            break;
        default:
            console.log("Kondisi Anda Normal");
    }
    rl.close();
});
