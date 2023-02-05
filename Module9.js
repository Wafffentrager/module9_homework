// 1 task
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

function resultXml(strXml) {

    let parser = new DOMParser();

	let xmlDOM = parser.parseFromString(strXml, "text/xml");
	
	let list = xmlDOM.querySelector("list");
    let students = list.querySelectorAll("student");
	
	let result = {list: []};
 
	students.forEach((element) => {
		let student = new Object();
	    let Name = element.querySelector("first");
		let surname = element.querySelector("second");
	    let Age = element.querySelector("age");
	    let Prof = element.querySelector("prof");
	    let nameNode = element.querySelector("name");
	    let nameLang = nameNode.getAttribute("lang");
	    student.name = Name.textContent+ ' ' +surname.textContent; 
	    student.age = Age.textContent;
	    student.prof = studentProf.textContent;
	    student.lang = nameLang;
	
	    result.list.push(student);
	
    });
    console.log(result); 
}
resultXml(xmlString);

// 2 task

const JSONstr = `
  {
   "list": [
    {
     "name": "Petr",
     "age": "20",
     "prof": "mechanic"
    },
    {
     "name": "Vova",
     "age": "60",
     "prof": "pilot"
    }
   ]
  }
`;

function jsonStr(str){
  let data = JSON.parse(str);
  let list = data.list;
  let result = {list: []};
  let object = new Object();
  list.forEach(function(element){
    object = element;
    result.list.push(object);
  });
  console.log(result);
}
jsonStr(JSONstr); 
