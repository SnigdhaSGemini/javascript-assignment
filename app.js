var table = document.createElement('table');

var heading = document.createElement('caption');

heading.style.fontSize="400%";
heading.style.fontWeight="bold";
heading.style.textDecoration="underline";
heading.style.fontFamily="Impact,Charcoal,sans-serif"
heading.style.marginBlockEnd="2%";

heading.appendChild(document.createTextNode("Employee Details"));
table.appendChild(heading);

(function () {

   //Self invoking function

   const fields = ["Name", "Age", "D.O.B.", "Email Id", "Company"];

   table.style.borderCollapse = "collapse";
   table.style.border="1.5px solid black";
   table.style.margin="2%";
   table.style.fontFamily="Helvetica, sans-serif"

var thead = document.createElement("thead");

for(let i=0; i<5; i++){

    let th = document.createElement("th");
    let h = document.createTextNode(fields[i]);

    th.appendChild(h);

    th.style.borderBlockEnd = "1px solid black";
    th.style.textAlign = "center";
    th.style.padding="10px";
    th.style.fontSize="110%";
    th.style.backgroundColor="bisque";

    thead.append(th);

}

table.appendChild(thead)

let tabledata=[

    {name:"Anna Cruze",age:"22",dob:"29-05-2000",email:"anna@gmail.com",company:"ABC Company"},
    {name:"Daisy Louis",age:"25",dob:"24-07-1998",email:"daisyy@gmail.com",company:"ABC Company"},
    {name:"Max Tank",age:"27",dob:"16-04-1996",email:"tankmax@gmail.com",company:"XYZ Company"},
    {name:"Robin Den",age:"29",dob:"05-11-1994",email:"drobin@gmail.com",company:"PQR Company"},
    {name:"Peter Jordan",age:"35",dob:"10-06-1988",email:"pjordan@gmail.com",company:"MNQ Company"}
]

for (var i= 0; i< tabledata.length; i++) {

    var tbody = document.createElement("tbody");

    if(i%2!==0) tbody.style.backgroundColor="orange";

    var element=tabledata[i];

    for (var key in element) {

        var td=document.createElement("td");

        td.appendChild(document.createTextNode(element[key]));
        tbody.appendChild(td);

       td.style.padding='2%';
    }
    
    table.appendChild(tbody); 
}

  })();

  document.body.appendChild(table);
