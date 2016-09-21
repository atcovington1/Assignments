var new_qty = 0;
function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    new_qty = parseInt(qty,10) + val;

  
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
function reset_qty(val) {
    var qty = document.getElementById('qty').value;
	document.getElementById('qty').value = "0";
    return new_qty;	
}

