var names = ["ranjith","ramm"]

var imgs = [
    { img :"neelangarai.png"},
    {img:"ram.jpg"}
]

var pwd = ["12345","54321"]

   
function validate(){
    var userName = prompt("enter user name")
    console.log(typeof userName, userName);
    var indx = names.indexOf(userName);

    var password = prompt("enter password")
    console.log(indx);


    if(names[indx]==userName){

        if(pwd[indx]==password){

        var imag = document.createElement("img");
        imag.setAttribute("src",imgs[indx].img)
        imag.setAttribute("width","400px")
        imag.setAttribute("height","400px")

        //console.log(imgs[indx].ramm);
        imag.setAttribute("alt",userName)
        document.body.appendChild(imag)

        console.log(`${names[indx] +" "+"logged"}`);

    }

 else{
    alert("enter valid user name or password")
 }
   
 
    }
}
validate()