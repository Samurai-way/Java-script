class expressionCalc {
    constructor() {
        this.observers = [];
        this.result=0;
    }
    watch(observer) {
        this.observers.push(observer);
    }
    clear(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    equal(expression) {
        this.observers.forEach(observer => {
            this.result=observer.doPolish(expression);
        })
    }
}
class Observer {
    constructor() {
        this.result = 0;
        this.outArr = [];
        this.steck = [];
        this.lowPriorityOperand = ['+', '-', '('];
        this.heightPriorityOperand = ['*', '÷'];
    }
    doCalck(polishExpression) {
        let steck = [];
        let operand = this.lowPriorityOperand.concat(this.heightPriorityOperand);
        let j = 0;
        for (let i = 0; i < polishExpression.length; i++) {
            if (operand.includes(polishExpression[i])) {
                switch (polishExpression[i]) {
                    case '+':
                        steck[j - 2] = (steck[j - 2] + steck[j - 1]);
                        break;
                    case '-':
                        steck[j - 2] = (steck[j - 2] - steck[j - 1]);
                        break;
                    case '*':
                        steck[j - 2] = (steck[j - 2] * steck[j - 1]);
                        break;
                    case '÷':
                        steck[j - 2] = (steck[j - 2] / steck[j - 1]);
                        break;
                }
                j = j - 1;
                steck.length = steck.length - 1;
            }
            else {
                steck.push(polishExpression[i]);
                j++;
            }
        }
        //console.log(steck[0]);
        return steck[0];

    };
    doPolish(expression) {
        let i = 0;
        let number = '';
        this.outArr=[];
        while (expression.length > 0) {
            if (!Number.isNaN(parseInt(expression[i]))) {
                while (true) {
                    if (!Number.isNaN(parseInt(expression[i])) || expression[i] === '.') {
                        number += expression[i];
                        i++;
                    }
                    else break;
                };
                this.outArr.push(parseFloat(number));
                expression = expression.slice(number.length);
                i = 0;
                number = '';
            }
            else {
                if (this.steck.length === 0) {
                    this.steck.push(expression[i]);
                    expression = expression.slice(1);
                }
                else {
                    if (expression[i] === '(') {
                        this.steck.push(expression[i]);
                        expression = expression.slice(1);
                    };
                    if (expression[i] === ')') {
                        let j = this.steck.length - 1;
                        while (this.steck[j] !== '(') {
                            this.outArr.push(this.steck[j]);
                            j--;
                        }
                        this.steck.length = j;
                        expression = expression.slice(1);
                    }
                    if (this.lowPriorityOperand.includes(expression[i]) && this.lowPriorityOperand.includes(this.steck[this.steck.length - 1])) {
                        if (this.steck[this.steck.length - 1] === '(') {
                            this.steck.push(expression[i]);
                            expression = expression.slice(1);
                        }
                        else {
                            this.outArr.push(this.steck[this.steck.length - 1]);
                            this.steck[this.steck.length - 1] = expression[i];
                            expression = expression.slice(1);
                        }

                    };
                    if (this.heightPriorityOperand.includes(expression[i]) && this.lowPriorityOperand.includes(this.steck[this.steck.length - 1])) {
                        this.steck.push(expression[i]);
                        expression = expression.slice(1);
                    };
                    if (this.heightPriorityOperand.includes(expression[i]) && this.heightPriorityOperand.includes(this.steck[this.steck.length - 1])) {
                        this.outArr.push(this.steck[this.steck.length - 1]);
                        this.steck[this.steck.length - 1] = expression[i];
                        expression = expression.slice(1);
                    }
                    if (this.lowPriorityOperand.includes(expression[i]) && this.heightPriorityOperand.includes(this.steck[this.steck.length - 1])) {
                        this.outArr.push(this.steck[this.steck.length - 1]);
                        this.steck[this.steck.length - 1] = expression[i];
                        expression = expression.slice(1);
                    };
                }
            }
        }
        this.steck.reverse();
        this.outArr = this.outArr.concat(this.steck);
        this.steck = [];
        //console.log(this.outArr);
        return this.doCalck(this.outArr);

    };
}

const calculator = (function () {
    let buttonCalc = document.querySelectorAll('[number]');
    let previos = document.querySelector('.calcDisplay__previousOperand');
    let curent = document.querySelector('.calcDisplay__curentOperand');
    let ac = document.querySelector('[ac]');
    let del = document.querySelector('[del]');
    let point = document.querySelector('[point]');
    let buttonOperand = document.querySelectorAll('[operand]');
    let checkOperand = true;
    let bracketOpen = document.querySelector('[bracketOpen]');
    let bracketClose = document.querySelector('[bracketClose]');
    let bracketOpenCheck = false;
    let curentBracket = 0;
    let operandSqr = document.querySelector('[sqr]');
    let operandSqrt = document.querySelector('[sqrt]');
    const calc1 = new expressionCalc;
    let equal = document.querySelector('[equal]');
    const obs = new Observer;
    let equalCheck=false;
    function enterPoint() {
        if (curent.textContent === '') return;
        if (curent.textContent.includes('.')) return
        curent.textContent += this.textContent;
    }
    function enterNumber() {
        if(equalCheck){
            previos.textContent='';
            equalCheck=false;
        }
        curent.textContent += this.textContent;
        checkOperand = true;
        bracketOpenCheck = false;
    };
    function allClear() {
        curent.textContent = '';
        previos.textContent = '';
    };
    function deleteNumber() {
        curent.textContent = curent.textContent.substr(0, curent.textContent.length - 1);
    };
    function enterOperand() {
        if (equalCheck){
            previos.textContent='';
            equalCheck=false;
        }
        if (previos.textContent === '' && curent.textContent === '') return;
        if (bracketOpenCheck) {
            previos.textContent = previos.textContent + '0';
        }
        if (checkOperand) {
            previos.textContent = previos.textContent + curent.textContent + this.textContent;
            curent.textContent = '';
            checkOperand = false;
            bracketOpenCheck = false;
        }
        else {
            previos.textContent = previos.textContent.substr(0, previos.textContent.length - 1) + this.textContent;
        }

    };
    function bracketOpenFunction() {
        previos.textContent = previos.textContent + '(';
        bracketOpenCheck = true;
        checkOperand = true;
        curentBracket++;
    };
    function bracketCloseFunction() {
        if (curentBracket === 0) return;
        curentBracket--;
        if (!checkOperand || previos.textContent[previos.textContent.length - 1] === '(') {
            previos.textContent = previos.textContent + '0)';
            checkOperand = true;
        }
        else {
            previos.textContent = previos.textContent + curent.textContent + ')';
            curent.textContent = '';
        }
    };
    function equalFunction() {
        previos.textContent = previos.textContent + curent.textContent;
        calc1.watch(obs);
        calc1.equal(previos.textContent);
        curent.textContent=calc1.result;
        calc1.clear(obs);
        equalCheck=true;
    }
    function sqrFunction(){
        if (previos.textContent!==''){
            previos.textContent = previos.textContent + curent.textContent;
            calc1.watch(obs);
            calc1.equal(previos.textContent);
            curent.textContent=calc1.result**2;
            calc1.clear(obs);
        }
        else{
            curent.textContent=parseFloat(curent.textContent)**2;
        }
    }
    function sqrtFunction(){
        if (previos.textContent!==''){
            previos.textContent = previos.textContent + curent.textContent;
            calc1.watch(obs);
            calc1.equal(previos.textContent);
            curent.textContent=Math.sqrt(calc1.result);
            calc1.clear(obs);
        }
        else{
            curent.textContent=Math.sqrt(parseFloat(curent.textContent));
        }
    }
    function bindEvent() {
        buttonCalc.forEach(element => element.addEventListener('click', enterNumber));
        ac.addEventListener('click', allClear);
        del.addEventListener('click', deleteNumber);
        point.addEventListener('click', enterPoint);
        buttonOperand.forEach(element => element.addEventListener('click', enterOperand));
        bracketOpen.addEventListener('click', bracketOpenFunction);
        bracketClose.addEventListener('click', bracketCloseFunction);
        equal.addEventListener('click', equalFunction);
        operandSqr.addEventListener('click',sqrFunction);
        operandSqrt.addEventListener('click', sqrtFunction);
    };

    return {
        bindEvent: bindEvent
    }
})();

calculator.bindEvent();