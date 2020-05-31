function clock(){
    setInterval(()=>{
    let date=new Date();
    let dates=date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let AmOrPm=hours>=12? "PM":"AM";

        document.getElementById("Clock").innerHTML=`
        <h6> DATE : ${dates}/${month+1}/${year}</h6>
    <h6> TIME : ${hours} : ${minutes} ${AmOrPm} </h6>`;
},1000)
};

clock();