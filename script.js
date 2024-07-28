let items = []

window.onload = function() {
   var storedamount = localStorage.getItem('items')
    if (storedamount)
        items = JSON.parse(storedamount);
    totalamount()
    savedata()
}

function addItem() {
    const itemname = document.getElementById('itemName').value;
    const itemAmount = parseFloat(document.getElementById('itemAmount').value);

    if (itemname == '') {
        alert('item name is required')
        return;
    }
    if (isNaN(itemAmount === '')) {
        alert('item amount is required')
        return;
    }


    items.push({ name: itemname, amount: itemAmount });
    localStorage.setItem('items', JSON.stringify(items));

    totalamount()
    savedata()
}


function clearAll() {
    document.getElementById('itemName').value = ''
    document.getElementById('itemAmount').value = ''
}

function totalamount() {
    var totallist = items.reduce((total, items) => total + items.amount, 0)
    document.getElementById('totalAmount').innerText = totallist.toFixed(2)
}


function savedata() {
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';

    items.forEach(items => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item mb-2';
        itemElement.innerHTML = `${items.name}: $${items.amount.toFixed(2)}`;
        itemsList.appendChild(itemElement);
    });
}