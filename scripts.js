 var elements = [],
     elementsDev = [],
     elementsTest = [],
     elementsCompl = [],
     selectedObject = [],
     backObject = [];
 var i = 1;

 function addTask() {
     alert("Task Added Succesfully!!");
     var task = $("#taskName").val();
     var id = task.replace(/\s/g, '');
     elements.push({
         'task': i + ". " + task,
         'id': id,
         'assignee': ''
     });
     var index = elements.length - 1;

     var ele = "<div>" + elements[index].task +
         "</p><br>" +
         "<select id=" + elements[index].id + " name=" + elements[index].id + ">" + ` <option value='volvo' select disabled>Select Enginner</option>
                <option value="john">John</option>
                <option value="abhi">Abhi</option>
                <option value="bharath">Bharath</option> ` + " </select>" + "<button class='btn1' onclick='addToDevelopment(\"" + index + "\")'>Assign</button>" + "</div>";
     $("#target").append(ele);
     i++;
 }

 function addToDevelopment(index) {



     var selectedAssigne = $('#' + elements[index].id + ' :selected').text();
     elementsDev.push({
         'task': elements[index].task,
         'selectedAssigne': selectedAssigne
     });


     for (var k = 0; k < elements.length; k++) {
         for (var t = 0; t < elementsDev.length; t++) {
             if (elements[k].task === elementsDev[t].task) {

                 elements.splice(k, 1);
             }
         }
     }

     var insertElemenet = elementsDev.length - 1;

     var ele = "<div><p>" + elementsDev[insertElemenet].task +
         "</p><br><p> Assigned to: " + elementsDev[insertElemenet].selectedAssigne +
         "<button class='btn1' onclick='addToTesting(\"" + insertElemenet + "\")'>Dev Complete</button> </div>";
     $("#devTarget").append(ele);

     var oldEle = "";
     for (var p = 0; p < elements.length; p++) {

         oldEle = oldEle + "<div>" + elements[p].task +
             "</p><br>" +
             "<select id=" + elements[p].id + " name=" + elements[p].id + ">" + ` <option value='volvo' select disabled>Select Enginner</option>
                <option value="john">John</option>
                <option value="abhi">Abhi</option>
                <option value="bharath">Bharath</option> ` + " </select>" + "<button class='btn1' onclick='addToDevelopment(\"" + p + "\")'>Assign</button>" + "</div>";

     }
     $("#target").html(oldEle);


 }

 function addToTesting(index) {
     if (backObject.length >= 1) {

         for (var o = 0; o < backObject.length; o++) {
             elementsDev.push({
                 'task': backObject[o].task,
                 'selectedAssigne': backObject[o].selectedAssigne
             });
         }
     }

     elementsTest.push({
         'task': elementsDev[index].task,
         'selectedAssigne': elementsDev[index].selectedAssigne
     });

     for (var m = 0; m < elementsDev.length; m++) {
         for (var n = 0; n < elementsTest.length; n++) {

             if (elementsDev[m].task === elementsTest[n].task) {

                 elementsDev.splice(m, 1);
             }
         }
     }

     var insertElemenet = elementsTest.length - 1;
     var ele = "<div><p>" + elementsTest[insertElemenet].task +
         "</p><br><p> Assigned to :" + elementsTest[insertElemenet].selectedAssigne +
         "<button class='btn3' onclick='addToComplete(\"" + insertElemenet + "\")'>Test Complete</button></p>" +
         "<button class='btn2' onclick='goBack(\"" + insertElemenet + "\")'>Back to Dev</button> </div>";

     $("#testTarget").append(ele);


     var oldEle = "";
     for (var p = 0; p < elementsDev.length; p++) {

         oldEle = oldEle + "<div><p>" + elementsDev[p].task +
             "</p><br><p> Assigned to :" + elementsDev[p].selectedAssigne +
             "<button class='btn1' onclick='addToTesting(\"" + p + "\")'>Dev Complete</button> </div>";

     }
     backObject.splice(0, backObject.length);
     $("#devTarget").html(oldEle);

 }

 function addToComplete(index) {

     elementsCompl.push({
         'task': elementsTest[index].task,
         'selectedAssigne': elementsTest[index].selectedAssigne
     });


     for (var g = 0; g < elementsTest.length; g++) {
         for (var h = 0; h < elementsCompl.length; h++) {
             if (elementsTest[g].task === elementsCompl[h].task) {
                 elementsTest.splice(g, 1);
             }
         }
     }
     var insertElemenet = elementsCompl.length - 1;
     var ele = "<div><p>" + elementsCompl[insertElemenet].task +
         "</p><br><p> Assigned to :" + elementsCompl[insertElemenet].selectedAssigne +
         "</div>";
     $("#compTarget").append(ele);


     var oldEle = "";
     for (var p = 0; p < elementsTest.length; p++) {
         oldEle = oldEle + "<div><p>" + elementsTest[p].task +
             "</p><br><p> Assigned to :" + elementsTest[p].selectedAssigne +
             "<button class='btn3' onclick='addToComplete(\"" + p + "\")'>Test" + " Complete</button></p>" +
             "<button class='btn2' onclick='goBack(\"" + p + "\")'>Back to Dev</button></div>";

     }

     $("#testTarget").html(oldEle);

 }

 function goBack(index) {
     backObject.push({
         'task': elementsTest[index].task,
         'selectedAssigne': elementsTest[index].selectedAssigne
     });


     for (var g = 0; g < elementsTest.length; g++) {
         for (var h = 0; h < backObject.length; h++) {
             if (elementsTest[g].task === backObject[h].task) {
                 elementsTest.splice(g, 1);
             }
         }
     }

     var backIndex = elementsDev.length;
     var insertElemenet = backObject.length - 1;
     var ele = "<div><p>" + backObject[insertElemenet].task +
         "</p><br><p> Assigned to :" + backObject[insertElemenet].selectedAssigne +
         "<button class='btn1' onclick='addToTesting(\"" + backIndex + "\")'>Dev Complete</button> </div>";
     $("#devTarget").append(ele);


     var oldEle = "";
     for (var p = 0; p < elementsTest.length; p++) {
         oldEle = oldEle + "<div><p>" + elementsTest[p].task +
             "</p><br><p> Assigned to :" + elementsTest[p].selectedAssigne +
             "<button class='btn3' onclick='addToComplete(\"" + p + "\")'>Dev Complete</button>" + "</p>" + "<button class='btn2' onclick='goBack(\"" + p + "\")'>Back to Dev</button></div>";

     }

     $("#testTarget").html(oldEle);

 }
