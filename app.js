let x = $(`#result`);

function insertNumber(number){
    let existingNumber = x.val();
    x.val(existingNumber + number)

}
function clearResult(){
    x.val(" ")
}
function calculate(){
    let result = eval(x.val());
    x.val(result)
}
function deleteNumber(){
    let presentValue = x.val();
    if(presentValue!=""){
        x.val(x.val().slice(0,-1));
    }
}