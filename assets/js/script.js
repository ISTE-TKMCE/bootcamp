function showTable(clickBtn){
    const table = clickBtn.parentElement.parentElement.parentElement.querySelector(".showTable");
    table.style.backgroundColor = "black";

    if(table.style.top != `${100}%`){
        table.style.height = "max-content";
    table.style.top = `${100}%`;
    clickBtn.querySelector('i').style.transform = "rotate(90deg)";
    clickBtn.querySelector('i').style.transitionDuration = "0.6s";

    }else{
    table.style.top = `${-100}%`;
    table.style.height = `${0}`;
    clickBtn.querySelector('i').style.transform = "rotate(0deg)";
    clickBtn.querySelector('i').style.transitionDuration = "0.6s";

    }
  
    
}

function codeblock(clickBtn){
    const dis = clickBtn.parentElement.parentElement.querySelector(".code-block");
    if(dis.style.display != 'none'){
        dis.style.display = "none";
    }else{
        dis.style.display = "block";
    }
}




