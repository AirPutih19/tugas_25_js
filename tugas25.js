var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
function panggilsebelumnya(){
    
    var result = angka.join(",")
    return result
}
console.log("Sebelumnya : ",panggilsebelumnya())
function panggilascending(){
    var angka1 = angka.sort()
    return angka1.join(",")
}
console.log("Ascending : ",panggilascending())

function panggildescending(){
    var angka2 = angka.reverse()
    return angka2.join()
}
console.log("Descending : ",panggildescending())

let hasil = angka.filter(angka=>{
    return angka > 10
}); console.log("Filter > 10 : ",hasil.join());