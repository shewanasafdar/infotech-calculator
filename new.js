let displayscreen = document.getElementById("display-screen");

    function display(num){
        displayscreen.value += num;
    }

    function Calculate(){
        try{
            displayscreen.value = eval(displayscreen.value);
        }
        catch(err)
        {
            alert("Invalid")
        }
    }

    function Clear(){
        displayscreen.value ="";
    }

    function del(){
        displayscreen.value = displayscreen.value.slice(0,-1);
    }