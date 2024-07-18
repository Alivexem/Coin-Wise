let display= document.getElementById("display")
let button = document.querySelectorAll(".btn")
button.forEach((item) => {
    item.addEventListener("click",() => {
        if(item.innerText === "="){            
            try{                
                let result = parseFloat(eval(display.value))          
                display.value = result
                return
            }catch{
                display.value = display.value
                return
            }
        }
        if(item.innerText === "C"){        
            display.value = ""
            return           
        }
        display.value += item.innerText        
    })
})
let wealth = document.querySelector(".wealth")
let loss = document.querySelector(".loss")

let expenseRecordsArray = []
let incomeRecordsArray = []

let idisplay = document.getElementById("idisplay")
let exdisplay = document.getElementById("exdisplay")
let income_message = document.getElementById("isave")
income_message.style.display = "none"
let expense_message = document.getElementById("exsave")
expense_message.style.display = "none"
let image = document.getElementById("image")
let income_alert = document.getElementById("income_alert")
income_alert.style.display = "none"
let expense_alert = document.getElementById("expense_alert")
expense_alert.style.display = "none"
let incomeR = document.getElementById("incomer")
incomeR.style.display = "none"

let expenseR = document.getElementById("expenser")
expenseR.style.display = "none"

let calculator = document.getElementById("calculator")
calculator.style.display = "none"



let income_total = document.getElementById("tincome")

let expense_total = document.getElementById("texpenses")

let icon = document.getElementById("icon")

let income_click = false
let expense_click = false
let icon_click = false
income_total.addEventListener("click", () => {
    income_click = !income_click;
    expense_click = false
    icon_click = false
    incomeR.style.display = income_click ? "block" : "none";
    
    if(maxWidth.matches){
      document.getElementById('haps').style.display = 'none'
    }else{
      document.getElementById('haps').style.display = 'block'
    }
    document.getElementById('sads').style.display = 'none'
    image.style.display = "none";
    calculator.style.display = "none";
    expenseR.style.display = "none";
    icon.style.animation = "shake 0.5s ease-in-out infinite"

    if (!income_click) {
        image.style.display = "flex";
        document.getElementById('haps').style.display = 'none'
    }
});

const maxWidth = window.matchMedia('(max-width: 650px)')
expense_total.addEventListener("click", () => {
    expense_click = !expense_click;
    icon_click = false
    income_click = false
    expenseR.style.display = expense_click? "block" : "none";
    image.style.display = "none";
    calculator.style.display = "none";
    document.getElementById('haps').style.display = 'none'
    
    if(maxWidth.matches){
      document.getElementById('sads').style.display = 'none'
    }else{
      document.getElementById('sads').style.display = 'block'
    }
    incomeR.style.display = "none";
    icon.style.animation = "shake 0.5s ease-in-out infinite"

    if (!expense_click) {
        image.style.display = "flex";
        document.getElementById('sads').style.display = 'none'
    }
});

icon.addEventListener("click", () => {
    icon_click = !icon_click;
    income_click = false
    expense_click = false
    calculator.style.display = icon_click? "block" : "none";
    image.style.display = "none";
    incomeR.style.display = "none";
    expenseR.style.display = "none";
    document.getElementById('sads').style.display = 'none'
    document.getElementById('haps').style.display = 'none'
    icon.style.animation = "none"
    if (!icon_click) {
        image.style.display = "flex";
        icon.style.animation = "shake 0.5s ease-in-out infinite"
    }
});


let menu = document.getElementById("menu")
let list = document.getElementById("list")
let list_click = true
menu.addEventListener("click",() => {
    if(list_click){
        list.style.display = "block"
    }else{
        list.style.display = "none"
    }
    list_click = !list_click
})

let menunav = document.querySelectorAll(".menunav");



document.addEventListener('click', function(event) {

  if(list.style.display == "block"){
    if (!menu.contains(event.target) && !list.contains(event.target)) {
      menunav.forEach((item) => {
        if (!item.contains(event.target)) {
          list.style.display = 'none';
          list_click = !list_click;

        }
      });
      list_click = !list_click;
    }
  }
});


let innav = document.getElementById("innav")
let exnav = document.getElementById("exnav")
let calnav = document.getElementById("calnav")
let netnav = document.getElementById("netnav")
let refnav = document.getElementById("refnav")
let netexnav = document.getElementById("netexnav")

let total_ex = document.getElementById("totale")
let total_in = document.getElementById("totalin")
let net_in = document.getElementById("netin")
let totex = document.getElementById("totex")


let innavs = document.getElementById("innavs")
let exnavs = document.getElementById("exnavs")
let calnavs = document.getElementById("calnavs")
let netnavs = document.getElementById("netnavs")
let refnavs = document.getElementById("refnavs")
let netexnavs = document.getElementById("netexnavs")


innav.addEventListener("click",() => {    
    income_click = !income_click;
    list.style.display = 'none';
    list_click = !list_click;
    icon_click = false
    expense_click = false
    expenseR.style.display = "none" 
    image.style.display = "none";
    calculator.style.display = "none";
    incomeR.style.display = "block";
    window.location.hash = "#totalin"
    total_in.classList.remove("green")
    total_in.classList.add("adjust")

    setTimeout(() => {
        total_in.classList.remove("adjust")
        total_in.classList.add("green")
    },6000)

})

exnav.addEventListener("click",() => {
    expense_click = !expense_click;
    list.style.display = 'none';
    list_click = !list_click;
    icon_click = false
    income_click = false
    expenseR.style.display = "block" 
    image.style.display = "none";
    calculator.style.display = "none";
    incomeR.style.display = "none";
    window.location.hash = "#totale"

    total_ex.classList.remove("red")
    total_ex.classList.add("adjust")

    setTimeout(() => {
        total_ex.classList.remove("adjust")
        total_ex.classList.add("red")
    },6000)

})

calnav.addEventListener("click",() => {
    icon_click = !icon_click;
    list.style.display = 'none';
    list_click = !list_click;
    income_click = false
    expense_click = false
    calculator.style.display = "block" 
    image.style.display = "none";
    incomeR.style.display = "none";
    expenseR.style.display = "none";
    window.location.hash = "#calculator"
    icon.style.animation = "none"

})

netnav.addEventListener("click",() => {
    income_click = !income_click;
    list.style.display = 'none';
    list_click = !list_click;
    icon_click = false
    expense_click = false
    expenseR.style.display = "none" 
    image.style.display = "none";
    calculator.style.display = "none";
    incomeR.style.display = "block";
    window.location.hash = "#netin"
    net_in.classList.remove("green")
    net_in.classList.add("adjust")

    setTimeout(() => {
        net_in.classList.remove("adjust")
        net_in.classList.add("green")
    },6000)
})

refnav.addEventListener("click",(e) => {
    e.preventDefault();
    window.location.href = window.location.pathname;
    window.location.reload();
})

netexnav.addEventListener("click",() => {
    expense_click = !expense_click;
    list.style.display = 'none';
    list_click = !list_click;
    icon_click = false
    income_click = false
    expenseR.style.display = "block" 
    image.style.display = "none";
    calculator.style.display = "none";
    incomeR.style.display = "none";
    window.location.hash = "#totale"

    totex.classList.remove("red")
    totex.classList.add("adjust")

    setTimeout(() => {
        totex.classList.remove("adjust")
        totex.classList.add("red")
    },6000)
})



/*Sytem responsiveness*/

innavs.addEventListener("click",() => {    
    income_click = !income_click;

    icon_click = false
    expense_click = false
    expenseR.style.display = "none" 
    image.style.display = "none";
    calculator.style.display = "none";
    incomeR.style.display = "block";
    window.location.hash = "#totalin"
    total_in.classList.remove("green")
    total_in.classList.add("adjust")
    if(maxWidth.matches){
      document.getElementById('haps').style.display = 'none'
    }else{
      document.getElementById('haps').style.display = 'block'
    }
    document.getElementById('sads').style.display = 'none'

    setTimeout(() => {
        total_in.classList.remove("adjust")
        total_in.classList.add("green")
    },6000)

})

exnavs.addEventListener("click",() => {
    expense_click = !expense_click;

    icon_click = false
    income_click = false
    expenseR.style.display = "block" 
    image.style.display = "none";
    calculator.style.display = "none";
    incomeR.style.display = "none";
    window.location.hash = "#totale"

    total_ex.classList.remove("red")
    total_ex.classList.add("adjust")
    if(maxWidth.matches){
      document.getElementById('sads').style.display = 'none'
    }else{
      document.getElementById('sads').style.display = 'block'
    }
    document.getElementById('haps').style.display = 'none'

    setTimeout(() => {
        total_ex.classList.remove("adjust")
        total_ex.classList.add("red")
    },6000)

})

calnavs.addEventListener("click",() => {
    icon_click = !icon_click;

    income_click = false
    expense_click = false
    calculator.style.display = "block" 
    image.style.display = "none";
    incomeR.style.display = "none";
    expenseR.style.display = "none";
    window.location.hash = "#calculator"
    icon.style.animation = "none"

})

netnavs.addEventListener("click",() => {
    income_click = !income_click;

    icon_click = false
    expense_click = false
    expenseR.style.display = "none" 
    image.style.display = "none";
    calculator.style.display = "none";
    incomeR.style.display = "block";
    window.location.hash = "#netin"
    net_in.classList.remove("green")
    net_in.classList.add("adjust")
    if(maxWidth.matches){
      document.getElementById('haps').style.display = 'none'
    }else{
      document.getElementById('haps').style.display = 'block'
    }
    document.getElementById('sads').style.display = 'none'
    setTimeout(() => {
        net_in.classList.remove("adjust")
        net_in.classList.add("green")
    },6000)
})

refnavs.addEventListener("click",(e) => {
    e.preventDefault();
    window.location.href = window.location.pathname;
    window.location.reload();
})

netexnavs.addEventListener("click",() => {
    expense_click = !expense_click;

    icon_click = false
    income_click = false
    expenseR.style.display = "block" 
    image.style.display = "none";
    calculator.style.display = "none";
    incomeR.style.display = "none";
    window.location.hash = "#totale"

    totex.classList.remove("red")
    totex.classList.add("adjust")
    if(maxWidth.matches){
      document.getElementById('sads').style.display = 'none'
    }else{
      document.getElementById('sads').style.display = 'block'
    }
    document.getElementById('haps').style.display = 'none'
    setTimeout(() => {
        totex.classList.remove("adjust")
        totex.classList.add("red")
    },6000)
})


const save_income = document.getElementById("save1")

const save_expenses = document.getElementById("save2")

const record = document.getElementById("record")
const secrecord = document.getElementById("secrecord")
let income_sum = []
let sum_total = 0
let expense_sum = []
let expenses = 0


save_income.addEventListener("click",() => {

    let income_source = document.getElementById("isource").value

    let income_amount = document.getElementById("iamount").value
    let split = income_amount.split("")

    let result = split.filter((item) => {
        return item !== ","
    })
    let new_result = result.join("")
    let day = document.getElementById("day").value
    let month = document.getElementById("opt").value
    let year = document.getElementById("optyear").value
    if(income_source.trim() == "" || income_amount.trim() == ""){
      alert("Fill the fields before saving!")
      return
    }
    if(isNaN(new_result)){
      alert("Income amount should be in number")
      return 
    }
    if(income_source.trim().length > 100){
      alert("Source of income is at most 100 characters.")
      return
    }
    if(new_result.trim().length > 12){
      alert("Please input a Realistic income amount")
      return
    }
    if(month == "february" && day >  29){
      alert("February has at most 29 days")
      return 
    }
    if(month == "september" && day >  30){
      alert("September has at most 30 days")
      return 
    }
    if(month == "april" && day >  30){
      alert("April has at most 30 days")
      return 
    }
    if(month == "june" && day >  30){
      alert("June has at most 30 days")
      return 
    }
    if(month == "november" && day >  30){
      alert("November has at most 30 days")
      return 
    }

    income_message.style.display = "block"
    setTimeout(() => {
      income_message.style.display = "none"
    },4000)


    let block = document.getElementById("incomer")
    let new_div = document.createElement("div")
    new_div.classList.add("info")
    let first_paragraph = document.createElement("p")
    let amount = parseInt(new_result).toLocaleString('en-US');
first_paragraph.innerText = `${amount} added to your income from ${income_source}`;
    let second_paragraph = document.createElement("p")
    second_paragraph.innerText = `Date recorded: ${month}-${day}-${year}`
    let btn = document.createElement("i")

    btn.classList.add("fas", "fa-trash-alt")
    btn.classList.add("del")
    btn.style.fontSize = "35px"
    btn.style.color = "red"


    new_div.append(first_paragraph,second_paragraph,btn)
    record.append(new_div)
    let income = parseInt(new_result)


    income_sum.push(income)

    sum_total = income_sum.reduce((num,acc) => {
      return acc+= num
    },0)
    total_in.value = `TOTAL INCOME: ${sum_total.toLocaleString('en-US')}`

    expenses = expense_sum.reduce((num,acc) => {
        return acc+= num
    },0)
    let evaluate = sum_total - expenses
    net_in.value = `NET INCOME: ${(evaluate).toLocaleString('en-US')}`
    idisplay.innerText = evaluate.toLocaleString('en-US')


    if(evaluate < 0){
        net_in.style.border = "1.5px solid red"
        income_alert.style.display = "block"
        loss.innerText = Math.abs(evaluate).toLocaleString('en-US')
        idisplay.style.color = "red"
        exdisplay.style.color = "black"
    }else{
        income_alert.style.display = "none"
        net_in.style.border = "1.5px solid green"
    }


    expenses = expense_sum.reduce((num,acc) => {
        return acc+= num
    },0)
    total_ex.value = `TOTAL SPENDING: ${expenses.toLocaleString('en-US')}`

    income = income_sum.reduce((num,acc) => {
        return acc+= num
    },0)
    let exevaluate = expenses - sum_total
    totex.value = `NET EXPENSES: ${(exevaluate).toLocaleString('en-US')}`
    exdisplay.innerText = exevaluate.toLocaleString('en-US')
    if(exevaluate < 0){
       totex.style.border = "1.5px solid green"
       net_in.style.border = "1.5px solid green"
       expense_alert.style.display = "block"
       wealth.innerText = Math.abs(evaluate).toLocaleString('en-US')
       exdisplay.style.color = "green"
       idisplay.style.color = "black"
    }else{
       expense_alert.style.display = "none"
    }

    let newIncomeRecord = {
      source: income_source,
      amount: parseFloat(new_result),
      date: `${month}-${day}-${year}`
    };

    incomeRecordsArray.push(newIncomeRecord);



    localStorage.setItem('expenseRecords', JSON.stringify(expenseRecordsArray));
    localStorage.setItem('incomeRecords', JSON.stringify(incomeRecordsArray));
    updateLocalStorage();

    btn.addEventListener("click",() => {
      let sure = confirm(`Are you sure you want to delete this record?`)
      if(sure){

        new_div.remove()
        let index = income_sum.indexOf(income)
        income_sum.splice(index,1)
        sum_total = income_sum.reduce((num,acc) => {
         return acc+= num
       },0)
       total_in.value = `TOTAL INCOME: ${sum_total.toLocaleString('en-US')}`

       expenses = expense_sum.reduce((num,acc) => {
           return acc+= num
       },0)
       let evaluate = sum_total - expenses
       net_in.value = `NET INCOME: ${(evaluate).toLocaleString('en-US')}`
       idisplay.innerText = evaluate.toLocaleString('en-US')
       if(evaluate < 0){
           net_in.style.border = "1.5px solid red"
           income_alert.style.display = "block"
           loss.innerText = Math.abs(evaluate).toLocaleString('en-US')
           idisplay.style.color = "red"
           exdisplay.style.color = "black"
       }else{
           income_alert.style.display = "none"
           net_in.style.border = "1.5px solid green"
           totex.style.border = "1.5px solid red"
       }



        expenses = expense_sum.reduce((num,acc) => {
            return acc+= num
        },0)
        total_ex.value = `TOTAL SPENDING: ${expenses.toLocaleString('en-US')}`

        income = income_sum.reduce((num,acc) => {
            return acc+= num
        },0)
        let exevaluate = expenses - sum_total
        exdisplay.innerText = exevaluate.toLocaleString('en-US')
        totex.value = `NET EXPENSES: ${(exevaluate).toLocaleString('en-US')}`
        if(exevaluate < 0){

           net_in.style.border = "1.5px solid green"
           expense_alert.style.display = "block"
           exdisplay.style.color = "green"
           idisplay.style.color = "black"
           wealth.innerText = Math.abs(exevaluate).toLocaleString('en-US')
        }else{
           expense_alert.style.display = "none"
           totex.style.border = "1.5px solid red"
        }

        updateTotalAndDisplay();  
        updateLocalStorage();

          incomeRecordsArray.splice(incomeRecordsArray.findIndex(item => item.amount === record.amount), 1);
          localStorage.setItem('incomeRecords', JSON.stringify(incomeRecordsArray));


     }
  })

    document.getElementById("isource").value = ""

    document.getElementById("iamount").value = ""
    document.getElementById("opt").value = "january"
    document.getElementById("day").value = "1"


    document.getElementById("optyear").value = "2024"
    setTimeout(() => {
      window.location.hash = "#tincome"
    income_total.style.border = "5px solid orange"
    income_total.style.marginTop = "-5px"
    },2000)

    setTimeout(() => {
      income_total.style.border = "none"
      income_total.style.marginTop = "0px"
    },9000)
})


save_expenses.addEventListener("click",() => {

    let _source = document.getElementById("exsource").value

    let _amount = document.getElementById("examount").value
    let split = _amount.split("")

    let result = split.filter((item) => {
        return item !== ","
    })
    let new_result = result.join("")

    let day = document.getElementById("exday").value
    let month = document.getElementById("exopt").value
    let year = document.getElementById("exoptyear").value
    if(_source.trim() == "" || _amount.trim() == ""){
      alert("Fill the fields before saving!")
      return
    }
    if(isNaN(new_result)){
      alert("Income amount should be in number")
      return 
    }
    if(_source.trim().length > 100){
      alert("Source of income is at most 100 characters.")
      return
    }
    if(new_result.trim().length > 12){
      alert("Please input a Realistic income amount")
      return
    }
    if(month == "february" && day >  29){
      alert("February has at most 29 days")
      return 
    }
    if(month == "september" && day >  30){
      alert("September has at most 30 days")
      return 
    }
    if(month == "april" && day >  30){
      alert("April has at most 30 days")
      return 
    }
    if(month == "june" && day >  30){
      alert("June has at most 30 days")
      return 
    }
    if(month == "november" && day >  30){
      alert("November has at most 30 days")
      return 
    }       

    expense_message.style.display = "block"
    setTimeout(() => {
      expense_message.style.display = "none"
    },4000)
    let block = document.getElementById("expenser")
    let new_div = document.createElement("div")
    new_div.classList.add("info")
    let first_paragraph = document.createElement("p")
    let exparse = parseInt(new_result)
    let amount = parseInt(new_result).toLocaleString('en-US');
first_paragraph.innerText = `Spent ${amount} on ${_source}`;
    let second_paragraph = document.createElement("p")
    second_paragraph.innerText = `Date recorded: ${month}-${day}-${year}`
    let btn = document.createElement("i")

    btn.classList.add("fas", "fa-trash-alt")
    btn.classList.add("del")
    btn.style.fontSize = "35px"
    btn.style.color = "red"

    new_div.append(first_paragraph,second_paragraph,btn)
    secrecord.append(new_div)
    let spending = parseInt(new_result)


    expense_sum.push(spending)

    expenses = expense_sum.reduce((num,acc) => {
        return acc+= num
    },0)
    total_ex.value = `TOTAL SPENDING: ${expenses.toLocaleString('en-US')}`

    income = income_sum.reduce((num,acc) => {
        return acc+= num
    },0)
    let evaluate = expenses - sum_total
    exdisplay.innerText = evaluate.toLocaleString('en-US')
    totex.value = `NET EXPENSES: ${(evaluate).toLocaleString('en-US')}`
    if(evaluate < 0){
       totex.style.border = "1.5px solid green"
       exdisplay.style.color = "green"
       idisplay.style.color = "black"
       wealth.innerText = Math.abs(evaluate).toLocaleString('en-US')
       expense_alert.style.display = "block"
    }else{
       expense_alert.style.display = "none"
       net_in.style.border = "1.5px solid green"
    }


    sum_total = income_sum.reduce((num,acc) => {
      return acc+= num
    },0)
    total_in.value = `TOTAL INCOME: ${sum_total.toLocaleString('en-US')}`

    expenses = expense_sum.reduce((num,acc) => {
        return acc+= num
    },0)
    let ievaluate = sum_total - expenses
    idisplay.innerText = ievaluate.toLocaleString('en-US')
    net_in.value = `NET INCOME: ${(ievaluate).toLocaleString('en-US')}`
    if(ievaluate < 0){
        net_in.style.border = "1.5px solid red"
        totex.style.border = "1.5px solid red"
        idisplay.style.color = "red"
        exdisplay.style.color = "black"
        income_alert.style.display = "block"
        loss.innerText = Math.abs(ievaluate).toLocaleString('en-US')
    }else{
        income_alert.style.display = "none"
    }


    let newExpenseRecord = {
      source: _source,
      amount: parseFloat(new_result),
      date: `${month}-${day}-${year}`
    };

    expenseRecordsArray.push(newExpenseRecord);
    localStorage.setItem('expenseRecords', JSON.stringify(expenseRecordsArray));
    localStorage.setItem('incomeRecords', JSON.stringify(incomeRecordsArray));
    updateLocalStorage();

    btn.addEventListener("click",() => {
      let sure = confirm(`Are you sure you want to delete this record?`)
      if(sure){

        new_div.remove()
        let index = expense_sum.indexOf(spending)
        expense_sum.splice(index, 1)
        sum_total = income_sum.reduce((num,acc) => {
          return acc+= num
        },0)
        total_in.value = `TOTAL INCOME: ${sum_total.toLocaleString('en-US')}`

        expenses = expense_sum.reduce((num,acc) => {
            return acc+= num
        },0)
        let ievaluate = sum_total - expenses
        idisplay.innerText = ievaluate.toLocaleString('en-US')
        net_in.value = `NET INCOME: ${(ievaluate).toLocaleString('en-US')}`
        if(ievaluate < 0){

            totex.style.border = "1.5px solid red"
            idisplay.style.color = "red"
            exdisplay.style.color = "black"
            income_alert.style.display = "block"
            loss.innerText = Math.abs(ievaluate).toLocaleString('en-US')
        }else{
            income_alert.style.display = "none"
            net_in.style.border = "1.5px solid green"
        }

            expenses = expense_sum.reduce((num,acc) => {
            return acc+= num
        },0)
        total_ex.value = `TOTAL SPENDING: ${expenses.toLocaleString('en-US')}`

        income = income_sum.reduce((num,acc) => {
            return acc+= num
        },0)
        let evaluate = expenses - sum_total
        exdisplay.innerText = evaluate.toLocaleString('en-US')
        totex.value = `NET EXPENSES: ${(evaluate).toLocaleString('en-US')}`
        if(evaluate < 0){
           totex.style.border = "1.5px solid green"
           exdisplay.style.color = "green"
           idisplay.style.color = "black"
           wealth.innerText = Math.abs(evaluate).toLocaleString('en-US')
           expense_alert.style.display = "block"
        }else{
           expense_alert.style.display = "none"
           net_in.style.border = "1.5px solid green"
        }

        updateTotalAndDisplay();  
        updateLocalStorage();

           expenseRecordsArray.splice(expenseRecordsArray.findIndex(item => item.amount === record.amount), 1);
          localStorage.setItem('expenseRecords', JSON.stringify(expenseRecordsArray));


      }
    })

    document.getElementById("exsource").value = ""

    document.getElementById("examount").value = ""
    document.getElementById("exopt").value = "january"
    document.getElementById("exday").value = "1"


    document.getElementById("exoptyear").value = "2024"
    setTimeout(() => {
      window.location.hash = "#texpenses"
    expense_total.style.border = "5px solid orange"
    expense_total.style.marginTop = "-5px"
    },2000)

    setTimeout(() => {
      expense_total.style.border = "none"
      expense_total.style.marginTop = "0px"
    },9000)


})

function updateLocalStorage() {
    localStorage.setItem('income_sum', JSON.stringify(income_sum));
    localStorage.setItem('expense_sum', JSON.stringify(expense_sum));
    localStorage.setItem('sum_total', sum_total);

    const netIncome = sum_total - expenses;
    const netProfit = expenses - sum_total;

    localStorage.setItem('netIncome', netIncome);
    localStorage.setItem('netProfit', netProfit);

    localStorage.setItem('expenseRecords', JSON.stringify(expenseRecordsArray));

    localStorage.setItem('incomeRecords', JSON.stringify(incomeRecordsArray));
}


function retrieveLocalStorage() {
    income_sum = JSON.parse(localStorage.getItem('income_sum')) || [];
    expense_sum = JSON.parse(localStorage.getItem('expense_sum')) || [];
    sum_total = parseInt(localStorage.getItem('sum_total')) || 0;

    const netIncome = parseInt(localStorage.getItem('netIncome')) || 0;
    const netProfit = parseInt(localStorage.getItem('netProfit')) || 0;
    let in_total = income_sum.reduce((a,b) => {
      return b += a
    },0)
    total_in.value = `TOTAL INCOME:  ${in_total.toLocaleString('en-US')}`;
    let ex_total = expense_sum.reduce((a,b) => {
      return b += a
    },0)
    total_ex.value = `TOTAL EXPENSES: ${ex_total.toLocaleString('en-US')}`;
    net_in.value = `NET INCOME: ${netIncome.toLocaleString('en-US')}`;
    idisplay.innerText = netIncome.toLocaleString('en-US');
    if (netIncome < 0) {
        idisplay.style.color = "red";
        exdisplay.style.color = "black"
        income_alert.style.display = "block";
        loss.innerText = Math.abs(netIncome).toLocaleString('en-US');
    }
    totex.value = `NET EXPENSES: ${netProfit.toLocaleString('en-US')}`;
    exdisplay.innerText = netProfit.toLocaleString('en-US');
    if (netProfit < 0) {
        exdisplay.style.color = "green";
        idisplay.style.color = "black"
        wealth.innerText = Math.abs(netProfit).toLocaleString('en-US');
        expense_alert.style.display = "block";
    }

    incomeRecordsArray = JSON.parse(localStorage.getItem('incomeRecords')) || [];
    expenseRecordsArray = JSON.parse(localStorage.getItem('expenseRecords')) || [];

    const recordContainer = document.getElementById('record');

    const secrecordContainer = document.getElementById('secrecord');

    for (const income of incomeRecordsArray) {
        const newDiv = createRecordDiv(income, income_sum, 'income');
        recordContainer.append(newDiv);


    }

    for (const expense of expenseRecordsArray) {
        const newDiv = createRecordDiv(expense, expense_sum, 'expense');
        secrecordContainer.append(newDiv);
    }
}

function createRecordDiv(record, sumArray, type) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('info');

    const firstParagraph = document.createElement('p');
    const amount = record.amount.toLocaleString('en-US');

    if (type === 'income') {
        firstParagraph.innerText = `${amount} added to your income from ${record.source}`;
    } else if (type === 'expense') {
        firstParagraph.innerText = `Spent ${amount} on ${record.source}`;
    }

    const secondParagraph = document.createElement('p');
    secondParagraph.innerText = `Date recorded: ${record.date}`;

    const btn = document.createElement('i');
    btn.classList.add('fas', 'fa-trash-alt', 'del');
    btn.style.fontSize = '35px';
    btn.style.color = 'red';

    btn.addEventListener('click', () => {
    let sure = confirm("Are you sure you want to delete this record?")
    if(sure){
      const index = sumArray.findIndex(item => item.amount === record.amount);

      sumArray.splice(index, 1);

      updateTotalAndDisplay();

      newDiv.remove();
      updateLocalStorage()
      if (type === 'income') {
          incomeRecordsArray.splice(incomeRecordsArray.findIndex(item => item.amount === record.amount), 1);
          localStorage.setItem('incomeRecords', JSON.stringify(incomeRecordsArray));
    } else if (type === 'expense') {
          expenseRecordsArray.splice(expenseRecordsArray.findIndex(item => item.amount === record.amount), 1);
          localStorage.setItem('expenseRecords', JSON.stringify(expenseRecordsArray));
      }
    }
});


    newDiv.append(firstParagraph, secondParagraph, btn);

    return newDiv;
}


function updateTotalAndDisplay() {
    sum_total = income_sum.reduce((num, acc) => acc += num, 0);
    total_in.value = `TOTAL INCOME: ${sum_total.toLocaleString('en-US')}`;

    expenses = expense_sum.reduce((num, acc) => acc += num, 0);
    total_ex.value = `TOTAL SPENDING: ${expenses.toLocaleString('en-US')}`;

    const evaluate = sum_total - expenses;
    net_in.value = `NET INCOME: ${evaluate.toLocaleString('en-US')}`;
    idisplay.innerText = evaluate.toLocaleString('en-US');

    if (evaluate < 0) {
        net_in.style.border = "1.5px solid red";
        income_alert.style.display = "block";
        loss.innerText = Math.abs(evaluate).toLocaleString('en-US');
        idisplay.style.color = "red";
        exdisplay.style.color = "black"
    } else {
        income_alert.style.display = "none";
        net_in.style.border = "1.5px solid green";
        totex.style.border = "1.5px solid red";
    }

    const exevaluate = expenses - sum_total;
    totex.value = `NET EXPENSES: ${exevaluate.toLocaleString('en-US')}`;
    exdisplay.innerText = exevaluate.toLocaleString('en-US');

    if (exevaluate < 0) {
        totex.style.border = "1.5px solid green";
        exdisplay.style.color = "green";
        idisplay.style.color = "black"
        wealth.innerText = Math.abs(exevaluate).toLocaleString('en-US');
        expense_alert.style.display = "block";
    } else {
        expense_alert.style.display = "none";
        totex.style.border = "1.5px solid red";
    }
}
window.onload = () => {
    retrieveLocalStorage();
}; 