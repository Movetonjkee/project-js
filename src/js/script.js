let startBtn = document.getElementById('start'),
    BudgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('exspenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),

    exspensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');





let money, time;
 
let appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [] ,
     savings: true,
     start: function() {
        money = +prompt('Ваш бюджет на месяц?', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
     },
     chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Цена вопроса?', '');

        if( (typeof(a)) === 'string' && (typeof(a)) != null && 
        (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
            console.log('done')
            appData.expenses[a] = b;
        } else {
            i--; 
        } 
        }
     },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Дневной бюджет составляет: " + appData.moneyPerDay);
    },
    etectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('Низкий уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 5000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка...');
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", '');
        let percent = +prompt('Под какой процент?', '');

        appData.MonthIncome = save/100/12 * percent;

        alert('Доход в месяц ' + appData.MonthIncome);
    }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
        let NotImportant = prompt('Статья необязательных расходов?', '');
        if( (typeof(NotImportant)) == 'string' && (typeof(NotImportant)) != null 
        && (typeof(NotImportant)) != '' );
        appData.optionalExpenses[i] = NotImportant;
    }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет доп. доход? (перечислете через запятую)', '');
        if( (typeof(items)) != 'string' || (typeof(items)) == null || items == '' ) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-нибудь еще?'));
            appData.income.sort();
        }

        appData.income.forEach( function(itemmassive, i) {
            document.write('Способы доп. заработка ' + (i+1) + ': ' + itemmassive + '<br>') 
        });
    }

 };

 for (let key in appData) {
     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key])
 };

