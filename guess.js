function checker(){
    var userinput=document.getElementById("userinput").value;
    let message=document.getElementById("message");
    let button=document.getElementById("button");
    button.style.display="";
    
    
    if (userinput>10){
        message.innerHTML="it is bigger number";
        button.style.display="none";
    }
    else if(userinput=="0"){
        message.innerHTML="0 is not applicable";
        button.style.display="none";

    }
    else if(userinput==""){
        message.innerHTML="please input a number";
        button.style.display="none";
    }
    else if (userinput<0)
    {
        message.innerHTML="it is smallr number";
        button.style.display="none";
    }
    
    
    else{
        message.innerHTML="doing good"
    }
    

}


        



function guess()
{

   

    
        var userinput=document.getElementById("userinput").value;
    var output=document.getElementById("output");
    var guesscounter =document.getElementById("guesscounter");
    var random = Math.floor(Math.random()*10)+1;
    console.log(random);
    var clear="";
  
    
        {

        
            if (userinput==random ){
                output.innerHTML="you are right";
                guesscounter.innerHTML="you won";
                userinput=clear;
                
               
                
                
            }
        
            else if(userinput!=random  ){
                guesscounter.innerHTML="try again";
                output.innerHTML="you are wrong";
                
                
            }
            else{
                guesscounter.innerHTML="failed";
            }
        }




}


