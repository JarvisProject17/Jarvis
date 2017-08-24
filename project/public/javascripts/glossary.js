"use strict";

function getGlossary() {
    
//Overall container for tables, same as the container used for map
//Table used for category definitions/information
    var table1 = document.getElementById("table1");
    table1.innerHTML="";

    //Create header row
    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-inverse");

    var headerRow = document.createElement("tr");
    var header1 = document.createElement("th");
    header1.innerText = "Category";
    var header2 = document.createElement("th");
    header2.innerText = "Guidelines";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    thead.appendChild(headerRow);
    table1.appendChild(thead);

    //Begin creating rows for each category including description
    //of each category
    var row1 = document.createElement("tr");
    var desc1 = document.createElement("td");
    desc1.innerText = "1";
    var desc2 = document.createElement("td");
    desc2.innerText = "Broad rule, no algorithm on file";
    row1.appendChild(desc1);
    row1.appendChild(desc2);

    table1.appendChild(row1);

    var row1 = document.createElement("tr");
    var desc1 = document.createElement("td");
    desc1.innerText = "2";
    var desc2 = document.createElement("td");
    desc2.innerText = "Broad rule, algorithm on file";
    row1.appendChild(desc1);
    row1.appendChild(desc2);

    table1.appendChild(row1);

    var row1 = document.createElement("tr");
    var desc1 = document.createElement("td");
    desc1.innerText = "3";
    var desc2 = document.createElement("td");
    desc2.innerText = "Broad rule on paper, filed algorithm and difficult to file";
    row1.appendChild(desc1);
    row1.appendChild(desc2);

    table1.appendChild(row1);

    var row1 = document.createElement("tr");
    var desc1 = document.createElement("td");
    desc1.innerText = "4";
    var desc2 = document.createElement("td");
    desc2.innerText = "Narrower rule, filed algorithm";
    row1.appendChild(desc1);
    row1.appendChild(desc2);

    table1.appendChild(row1);

    var row1 = document.createElement("tr");
    var desc1 = document.createElement("td");
    desc1.innerText = "5";
    var desc2 = document.createElement("td");
    desc2.innerText = "RT does not exist, potentially core RT exists";
    row1.appendChild(desc1);
    row1.appendChild(desc2);

    table1.appendChild(row1);


//Create general table for programs
    var table2 = document.getElementById("table2");
    table2.innerHTML="";

    var thead2 = document.createElement("thead");
    thead2.setAttribute("class", "thead-inverse");

    //Create header row for products/programs
    var headerRow2 = document.createElement("tr");
    var header3 = document.createElement("th");
    header3.innerText = "Program";
    var header4 = document.createElement("th");
    header4.innerText = "Technology";
    var header5 = document.createElement("th");
    header5.innerText = "Try Before You Buy (TBYB)";
    var header6 = document.createElement("th");
    header6.innerText = "Post-Bind";

    headerRow2.appendChild(header3);
    headerRow2.appendChild(header4);
    headerRow2.appendChild(header5);
    headerRow2.appendChild(header6);

    thead2.appendChild(headerRow2);

    table2.appendChild(thead2);

    
    //Table entry for Right Track
    var row2_1 = document.createElement("tr");
    var desc2_1 = document.createElement("td");
    desc2_1.innerText = "Core Right Track (RT)";
    
    var RTinfo = document.createElement("td");

    var RTgroup1 = document.createElement("div");
    var RTimage1 = document.createElement("img");
    RTimage1.setAttribute("src", "images/RT-1.png");
    RTimage1.setAttribute("alt", "tag device");

    //text to describe images???
    var RTtext = document.createElement("div");
    
    RTgroup1.appendChild(RTtext);
    RTgroup1.appendChild(RTimage1);

    RTinfo.appendChild(RTgroup1);

    row2_1.appendChild(desc2_1);

    var RTgroup2 = document.createElement("div");
    var RTimage2 = document.createElement("img");
    RTimage2.setAttribute("src", "images/RT-2.png");
    RTimage2.setAttribute("alt", "mobile application");

    var RTtext2 = document.createElement("div");

    RTgroup2.appendChild(RTtext2);
    RTgroup2.appendChild(RTimage2);

    RTinfo.appendChild(RTgroup2);

    var empty = document.createElement("td");
    
    var RTdiscount = document.createElement("td");
    RTdiscount.innerText = "90 day trial, 5-30% discount";

    row2_1.appendChild(RTinfo);
    row2_1.appendChild(empty);
    row2_1.appendChild(RTdiscount);

    //Table entry for Highway Hero
    var row2_2 = document.createElement("tr");
    var desc2_2 = document.createElement("td");
    desc2_2.innerText = "Highway Hero (HH)";
    
    var HHinfo = document.createElement("td");

    var HHgroup1 = document.createElement("div");
    var HHimage1 = document.createElement("img");
    HHimage1.setAttribute("src", "images/HH-1.png");
    HHimage1.setAttribute("alt", "mobile application");

    //text to describe images???
    var HHtext = document.createElement("div");
    
    HHgroup1.appendChild(HHtext);
    HHgroup1.appendChild(HHimage1);

    HHinfo.appendChild(HHgroup1);

    row2_2.appendChild(desc2_2);

    var empty2 = document.createElement("td");

    var HHdiscount = document.createElement("td");
    HHdiscount.innerText = "14 days, 5-25% discount";

    row2_2.appendChild(HHinfo);
    row2_2.appendChild(HHdiscount);
    row2_2.appendChild(empty2);
    
    //Table entry for SDA
    var row2_3 = document.createElement("tr");
    var desc2_3 = document.createElement("td");
    desc2_3.innerText = "SDA / GM OnStar";
    
    var SDAinfo = document.createElement("td");

    var SDAgroup1 = document.createElement("div");
    var SDAimage1 = document.createElement("img");
    SDAimage1.setAttribute("src", "images/SDA-1.png");
    SDAimage1.setAttribute("alt", "connected car with wifi");

    //text to describe images???
    var SDAtext = document.createElement("div");
    
    SDAgroup1.appendChild(SDAtext);
    SDAgroup1.appendChild(SDAimage1);

    SDAinfo.appendChild(SDAgroup1);

    row2_3.appendChild(desc2_3);

    var empty3 = document.createElement("td");

    var SDAdiscount = document.createElement("td");
    SDAdiscount.innerText = "90 days, 8-30% discount";

    row2_3.appendChild(SDAinfo);
    row2_3.appendChild(SDAdiscount);
    row2_3.appendChild(empty3);

    //Table entry for Subaru
    var row2_4 = document.createElement("tr");
    var desc2_4 = document.createElement("td");
    desc2_4.innerText = "Subaru";
    
    var Subinfo = document.createElement("td");

    var Subgroup1 = document.createElement("div");
    var Subimage1 = document.createElement("img");
    Subimage1.setAttribute("src", "images/Sub-1.png");
    Subimage1.setAttribute("alt", "mobile application");

    //text to describe images???
    var Subtext = document.createElement("div");
    
    Subgroup1.appendChild(Subtext);
    Subgroup1.appendChild(Subimage1);

    var Subgroup2 = document.createElement("div");
    var Subimage2 = document.createElement("img");
    Subimage2.setAttribute("src", "images/Sub-2.png");
    Subimage2.setAttribute("alt", "On-board vehicle application");

    var Subtext2 = document.createElement("div");

    Subgroup2.appendChild(Subtext2);
    Subgroup2.appendChild(Subimage2);

    Subinfo.appendChild(Subgroup1);
    Subinfo.appendChild(Subgroup2);

    row2_4.appendChild(desc2_4);

    var Subdiscount1 = document.createElement("td");
    Subdiscount1.innerText = "30 days, 5-20% discount"

    var Subdiscount2 = document.createElement("td");
    Subdiscount2.innerText = "30 days, 5-20% discount";

    row2_4.appendChild(Subinfo);
    row2_4.appendChild(Subdiscount1);
    row2_4.appendChild(Subdiscount2);

    //Table entry for Mercedes Tag
    var row2_5 = document.createElement("tr");
    var desc2_5 = document.createElement("td");
    desc2_5.innerText = "Mercedes Tag";
    
    var MTinfo = document.createElement("td");

    var MTgroup1 = document.createElement("div");
    var MTimage1 = document.createElement("img");
    MTimage1.setAttribute("src", "images/Tag-1.png");
    MTimage1.setAttribute("alt", "tag device");

    //text to describe images???
    var MTtext = document.createElement("div");
    
    MTgroup1.appendChild(MTtext);
    MTgroup1.appendChild(MTimage1);

    MTinfo.appendChild(MTgroup1);

    row2_5.appendChild(desc2_5);

    var empty4 = document.createElement("td");

    var MTdiscount = document.createElement("td");
    MTdiscount.innerText = "30 days, 5-20% discount";

    row2_5.appendChild(MTinfo);
    row2_5.appendChild(empty4);
    row2_5.appendChild(MTdiscount);

    //Table entry for Connected (Tesla/FCA)
    var row2_6 = document.createElement("tr");
    var desc2_6 = document.createElement("td");
    desc2_6.innerText = "Connected (Tesla/FCA)";
    
    var Coninfo = document.createElement("td");

    var Congroup1 = document.createElement("div");
    var Conimage1 = document.createElement("img");
    Conimage1.setAttribute("src", "images/SDA-1.png");
    Conimage1.setAttribute("alt", "tag device");

    //text to describe images???
    var Context = document.createElement("div");
    
    Congroup1.appendChild(Context);
    Congroup1.appendChild(Conimage1);

    Coninfo.appendChild(Congroup1);

    row2_6.appendChild(desc2_6);

    var Condiscount1 = document.createElement("td");
    Condiscount1.innerText = "14 days, 5-25% discount"

    var Condiscount2 = document.createElement("td");
    Condiscount2.innerText = "90 days, 5-30% discount";

    row2_6.appendChild(Coninfo);
    row2_6.appendChild(Condiscount1);
    row2_6.appendChild(Condiscount2);

    table2.appendChild(row2_1);
    table2.appendChild(row2_2);
    table2.appendChild(row2_3);
    table2.appendChild(row2_4);
    table2.appendChild(row2_5);
    table2.appendChild(row2_6);
    
}