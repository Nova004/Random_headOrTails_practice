let numeloop =prompt("รอบที่ต้องการเล่น")

for(let i = 1; i <= numeloop; i++){
    var nume = prompt("หัวหรือก้อย")
    var random = Math.floor(Math.random()*10)
    if(random<5){
        random="หัว"
    }else{
       random="ก้อย"
    }

    if(nume==random){
        document.getElementById("random").innerHTML+="รอบที่ "+i+" ถูกต้อง "+"<br>" 
    }else{
        document.getElementById("random").innerHTML+="รอบที่ "+i+" ผิด "+"<br>" 
    }
    
    document.getElementById("loop").innerHTML+="รอบที่ "+i+" ออก "+random+"<br>"
    
}
