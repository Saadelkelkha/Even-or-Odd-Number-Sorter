function f1(){
    var x = document.getElementById("sn").value;
    if(x % 2 == 0){
        var br = document.createElement('br');
        var p = document.createElement('p');

        p.innerText = x;
        document.getElementById("np").appendChild(p);
        document.getElementById("np").appendChild(br);
    }else{
        var br = document.createElement('br');
        var p = document.createElement('p');

        p.innerText = x;
        document.getElementById("ni").appendChild(p);
        document.getElementById("ni").appendChild(br);
    }
}