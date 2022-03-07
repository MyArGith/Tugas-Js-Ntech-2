function dropRight(array) {    
const nomor = array.filter (no => {
    return no <= 2 ;
})
console.log(nomor);
}
dropRight([1,2,3]);

