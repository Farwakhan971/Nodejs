function add(a, b){
    return a+b; 
}
function sub(a, b){
    return a-b;
}
// It is single and default export
module.exports = {
    addfn: add,
    subfn: sub, 
}
// It is multiple export and return functions anonymous function
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
