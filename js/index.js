
//add Even lisatioar calculat btn
let count = 0;

const calCulatbtn = document.getElementById('calculate');
    calCulatbtn.addEventListener('click', function () {
        // console.log(calCulatbtn.innerText);
        count += 1;
        const incomeInput = parseFloat(document.getElementById('income').value);
        const softwareInput = parseFloat(document.getElementById('software').value);
        const coursesInput = parseFloat(document.getElementById('courses').value);
        const internetInput = parseFloat(document.getElementById('internet').value);
    
        // console.table({incomeInput,softwareInput, coursesInput,internetInput});
        
        const totalExpansess = softwareInput + coursesInput + internetInput;
        const balance = incomeInput - totalExpansess;
        // console.table(balance);

        const totalExpensesEl = document.getElementById('total-expenses');
        totalExpensesEl.innerText = totalExpansess.toFixed(2);
        
        const balanceEl = document.getElementById('balance');
        balanceEl.innerText = balance.toFixed(2);

        const resultsEl = document.getElementById('results');
        resultsEl.classList.remove('hidden');

        const historyItem = document.createElement("div");
        historyItem.className= "bg-white p-3 rounded-md shadow-sm border-l-2 border-blue-500";
        historyItem.innerHTML = `
                <p class= "font-bold">serial: ${count}</p>
                <p class= "text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
                <p class= "text-xs text-gray-500">Income:$${incomeInput.toFixed(2)}</p>
                <p class= "text-xs text-gray-500">Expansess:$${totalExpansess.toFixed(2)}</p>
                <p class= "text-xs text-gray-500">balance:$${balance.toFixed(2)}</p>

        `;
        const historyList =document.getElementById('history-list');
            historyList.insertBefore(historyItem, historyList.firstChild)
        
    });
    
//add Even lisatioar calculat btn

    const calculateSavings = document.getElementById('calculate-savings');
    calculateSavings.addEventListener('click', function () {
        const incomeInput = parseFloat(document.getElementById('income').value);
        const softwareInput = parseFloat(document.getElementById('software').value);
        const coursesInput = parseFloat(document.getElementById('courses').value);
        const internetInput = parseFloat(document.getElementById('internet').value);
        const savingsInput = parseFloat(document.getElementById('savings').value);
        // console.log(savingsInput);

         const totalExpansess = softwareInput + coursesInput + internetInput;
        const balance = incomeInput - totalExpansess;
        const saving = ( savingsInput * balance) /100;

        const totalSaving = document.getElementById('savings-amount');
        totalSaving.innerText = saving.toFixed(2);

        const remanignBalance = document.getElementById('remaining-balance');
        const remaning = balance - saving;
        remanignBalance.innerText = remaning.toFixed(2);

     });


     //assistant Tab 
     const assistantTab = document.getElementById('assistant-tab');
     assistantTab.addEventListener('click', function(){
             assistantTab.classList.add( 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');

        const historySection = document.getElementById('history-section');
        historySection.classList.add('hidden');

        const expenseForm = document.getElementById('expense-form');
        expenseForm.classList.remove('hidden');
        const historyTab = document.getElementById('history-tab');
        historyTab.classList.remove( 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
     })

     
    //history Tab
     const historyTab = document.getElementById('history-tab');
     historyTab.addEventListener('click', function(){
        historyTab.classList.add( 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');

        const historySection = document.getElementById('history-section');
            historySection.classList.remove('hidden')

        const expenseForm = document.getElementById('expense-form');
            expenseForm.classList.add('hidden');
        const assistantTab = document.getElementById('assistant-tab');
            assistantTab.classList.remove( 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
     });
