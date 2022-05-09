let body = document.body;
let rowNum = document.getElementById('row');
let colNum = document.getElementById('column');
let tbcell = document.getElementsByTagName('td');
let generate = document.getElementById('generate');
let count = 0;


generate.addEventListener('click', generateGrid())

function generateGrid(){

    let color = document.getElementById("color");
    let table = document.getElementById("table");

    if(count == true || count > 1){
        table.removeChild(table.firstElementChild)
              }

        for(let i = 0; i < rowNum.value;i++){
           let row = table.insertRow(i) 

             for (let j = 0;j < colNum.value;j++){
               let cell = row.insertCell(j)
            
                cell.addEventListener('mouseover', function callBack(){     
                cell.addEventListener('click', () => {
                    
                cell.style.backgroundColor = color.value              
                
                cell.addEventListener('click', () => {
                    cell.style.backgroundColor = 'white'
                    return callBack();    
                    })
                })
            })
        }
    }
 count++
}

generateGrid()