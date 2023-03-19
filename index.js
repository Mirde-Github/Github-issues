
function main(){
fetch(`https://api.github.com/repositories/1296269/issues?page=${count}&per_page=5`)
.then((res)=>{return res.json()})
.then((data)=>{
    data.forEach(element => {
        const h1=document.createElement("h1")
        h1.innerText=`Title ${element.title}`
        document.getElementById("container").appendChild(h1)
  
    });
})
}
let count=0;
function next(){  //next button
    document.getElementById("container").innerHTML=""
    let page=document.getElementById("Page")
    count++;
    
    page.innerHTML=`Page Number is ${count}`
    main()
}

function prev(){  //previous button
    document.getElementById("container").innerText=""
   let Page=document.getElementById("Page");
   
    count--;
    Page.innerHTML=`Page Number is ${count}`
    main()
    
}