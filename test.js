const add= require('./index');
if (add(5,10)===15){
    console.log('Test passes');
    ProcessingInstruction.exit(0);
}else{
    console.log('Test fails');
    process.exit(1);
}