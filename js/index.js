
//add Even lisatioar calculat btn
const calCulatbtn = document.getElementById('calculate');
    calCulatbtn.addEventListener('click', function () {
        // console.log(calCulatbtn.innerText);
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
        resultsEl.classList.remove('hidden')
        
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
