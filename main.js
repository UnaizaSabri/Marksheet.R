var target= document.getElementById('btn');
target.addEventListener('click', function(){
    var eng= document.getElementById('eng').value;
    var mth= document.getElementById('mth').value;
    var urd= document.getElementById('urd').value;
    var isl= document.getElementById('isl').value;
    var pst= document.getElementById('pst').value;


    var total= Number(eng)+ Number(mth)+ Number(urd)+ Number(isl)+ Number(pst);
    var per =(total*100/500);

    if(per>=80 && per<100){
        var grade=" 'A' You Are Pass";
    }
    else if(per>=60 && per<100){
        var grade=" 'B' You Are Pass";
    }
    else if(per>=40 && per<100){
        var grade=" 'C' You Are Pass";
    }
    else{
        var grade="You Are 'Fail' ";
    }

    document.getElementById('text').innerHTML=`Your marks ${total} Out of 500 <br> Your Percentage is: ${per}% <br> Your Grade is ${grade}`;
    
})