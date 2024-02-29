function datatypes(a,b){
	if((a===NaN || b===NaN)){
		return true;
	}
    else if ((typeof a) === (typeof b)){
        return true;
    }	
    else{
        return false;
    }
}
// do not change the code below.
// let a = prompt("Enter Start of the Range.");
// let b = prompt("Enter End Of the Range.");
alert(datatypes(a,b));
