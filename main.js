var images =[
    "papa.jpg",
    "mom.jpg",
    "sister.jpg",
    "me.jpg"
];
var alphabets =[
    "Father",
    "Mother",
    "Sister",
    "Me"
]
i = 0;
function click(){
    document.getElementById("book").src=images[i];
    
    document.getElementById("text").innerHTML=alphabets[i];
    i++;
    if(i==4){
        i=1
    }
}