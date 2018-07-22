$("#c1Btn").click(function(){
  alert("The Tesla Model X is listed at $79,500. After .08% tax ($63.60), total cost = 79,563.60.");
});
$("#c2Btn").click(function(){
  alert("The Dodge Hellcat is listed at $61,900. After .08% tax ($49.52), total cost = 61,949.52.");
});
$("#c3Btn").click(function(){
  alert("The Volvo 1800ES is listed at $27,800. After .08% tax ($22.24), total cost = 27,822.24.");
});
$("#c4Btn").click(function(){
  alert("The Jaguar Roadster is listed at $117,450. After .08% tax ($93.96), total cost = 117,543.96.");
});
$("#c5Btn").click(function(){
  alert("The Pontiac Trans Am is listed at $125,000. After .08% tax ($100.00), total cost = 125,100.00");
});




function search() {
  var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("invTable");
    tr = table.getElementsByTagName('tr');


    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";

        };
    };
};
