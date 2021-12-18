
var str=`In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award.[8]`;


function getWordsData(str) {
    var wordCount = str.match(/(\w+)/g).length;
    console.log("word count : ", wordCount);
}

getWordsData(str);


function getBlankSpace(str) {
    var spaceCount = str.split(" ").length - 1;
    console.log("Blank Space Count : ", spaceCount);
}

getBlankSpace(str);

function getSpecialCharacter(str) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var spclCharCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (format.test(str[i])) {
            spclCharCount += 1;
        }
    }
    console.log("Special Character Count is  :", spclCharCount);
}

getSpecialCharacter(str);


function getStatement(str) {
    const statmentCount = str.split(". ").length - 1;
    console.log("Total Statement  is: ", statmentCount);
}

getStatement(str);

function isVowelInput(ch) {
    ch = ch.toUpperCase();
    return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
}
function countVowels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++)
        if (isVowelInput(str[i]))
            ++count;
    return count;
}

console.log("Total Vowels data is : ", countVowels(str))

function getOccurence(str) {
    let ofCount = 0;
    let string = str.split(" ");
    debugger
    for (let char in string) {
        if (char.includes("the")) {
            ofCount += 1;
        }
    }
    console.log(ofCount)
}
getOccurence(str);

function getOccurence(str) {

    let char = str.split(" ");
    let thecount = 0;
    let ofcount =0;
    let andcount =0;

    for (let i = 0; i < char.length; i++) {
        if ("the" == (char[i])) {
            thecount++;
        }else if("of" == (char[i])){

            ofcount++;

        }else if ("and" == (char[i])){
            andcount++;
        }
    }

    console.log("Occurence of 'of' : ", ofcount);

    console.log("Occurence of 'and' : ", andcount);

    console.log("Occurence of 'the' : ", thecount);
}

getOccurence(str);


var Employees = [
    { EmpNo: 101, EmpName: 'A', Salary: 12222, DeptName: 'D1' }, 
    { EmpNo: 102, EmpName: 'B', Salary: 22222, DeptName: 'D2' }, 
    { EmpNo: 103, EmpName: 'C', Salary: 32222, DeptName: 'D3' }, 
    { EmpNo: 104, EmpName: 'D', Salary: 42222, DeptName: 'D1' }, 
    { EmpNo: 105, EmpName: 'E', Salary: 52222, DeptName: 'D2' }, 
    { EmpNo: 106, EmpName: 'F', Salary: 62222, DeptName: 'D3' }];


function getAllEmpployee() {
        var employeeD1 = Employees.filter(function (e, i) {
            return e.DeptName === 'D1';
          });

          console.log("Result Department 'D1': ".concat(JSON.stringify(employeeD1)));
          var employeeD2 = Employees.filter(function (e, i) {
            return e.DeptName === 'D2';
          });

          console.log("Result Department 'D2': ".concat(JSON.stringify(employeeD2)));
          var employeeD3 = Employees.filter(function (e, i) {
            return e.DeptName === 'D3';
          });

          console.log("Result Department 'D3': ".concat(JSON.stringify(employeeD3)));   
          
          var employeeSalaryD1 = 0;
          ed1.forEach(e => { employeeSalaryD1 = e.Salary + employeeSalaryD1 })
          console.log("Total Salary of Department 'D1' is : ", employeeSalaryD1);
          var employeeSalaryD2 = 0;
          ed2.forEach(e => { employeeSalaryD1 = e.Salary + employeeSalaryD2 })
          console.log("Total Salary of Department 'D2' is : ", ed2S);
          var employeeSalaryD3 = 0;
          ed3.forEach(e => { employeeSalaryD3 = e.Salary + employeeSalaryD3 })
          console.log("Total Salary of Department 'D3' is : ", employeeSalaryD3);
}

getAllEmpployee()
