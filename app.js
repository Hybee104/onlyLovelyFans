function clickme() {
        alert("Insufficient fund kindly fund your wallet")
}

function SendToWhatsapp(){
        let number = "+2348146038346";

        let name = document.getElementById('name').value;
        let select = document.getElementById('select').value;
        let amount = document.getElementById('amount').value;

        var url = "https://wa.me/" + number + "?text="
        + "Name : "  +name+ "%0a"
        + "Name : "  +name+ "%0a"
        + "Payment : "  +select+ "%0a"
        + "Amount : "  +amount+ "%0a";

        window.open(url, '_blank').focus();
}