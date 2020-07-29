


function backtohome(){
    firstdisplay.style.display="inline";
    seconddisplay.style.display="inline";
    selectheadqns.style.display="inline";
    answerdisplay.style.display="none"
    qns01.style.display= "none";
    
    
   
}








function qnsButtonfxn(){   
    
    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns01.style.display= "inline";

    

    
}





function submitSignin(){

    var userdata =document.getElementById("userNamedata").value;
    var passdata =document.getElementById("passworddata").value;
    

    if( (userdata ==="mavinthai") && (passdata ==="12345")){
        
        return true ;

    } else{
        alert("Incorrect Username OR Password")

        return false ;
       
    }

}

