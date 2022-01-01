f1.button.addEventListener('click', function () {
    let first = f1.first.value;
    let second = f1.second.value;
    let email = f1.email.value;
    let choose = f1.choose.options;
    if (first.length < 1) {
        alert(`Write First Name`);
    }
    else if (second.length < 1) {
        alert(`Write Second Name`);
    }
    else if (email.length < 1) {
        alert(`Write email`)
    }
    else if (email.length > 1) {
        for (i = 0; i < email.length; i++) {
            if (email.includes('@') == true) {
                if (email.charAt(0) == '@') {
                    alert(`Wrong email`);
                    break;
                }
                else if (email.slice(-1) == '@') {
                    alert(`Wrong email`);
                    break;
                }
                else if (choose.selectedIndex == 0) {
                    alert(`Choose Position`);
                    break;
                }
                else if (f1.iAgree.checked == false) {
                    alert('You are not agree with all statements');
                    break;
                }
                else {
                    let div1 = document.querySelector('.createAcc');
                    div1.style.display = 'none'
                    let div2 = document.querySelector('.showAcc');
                    div2.style.display = 'block'

                }
            }
            else if (email.includes('@') == false) {
                alert(`Wrong email`);
                break;
            }
        }
    }
    document.querySelector('.firstSecond').textContent = `${first} ${second}`;
    document.querySelector('.rezEmail').textContent = `${email}`;
    document.querySelector('.rezPosition').textContent = `${f1.choose.value}`;
})


f1.iAgree.addEventListener('click', function () {
    if (this.checked) {
        f1.button.style.backgroundColor = '#1b9938';
    }
    else if (this.checked == false) {
        f1.button.style.backgroundColor = '#64b676';
    }
})

function genderState() {
    if (event.target.value === 'man') {
        document.querySelector('.gender').classList.add('manBG');
        document.querySelector('.gender').classList.remove('woomanBG')
    }
    else if (event.target.value === 'wooman') {
        document.querySelector('.gender').classList.remove('manBG');
        document.querySelector('.gender').classList.add('woomanBG')
    }
}

document.querySelector('.button2').addEventListener('click', function () {
    let div1 = document.querySelector('.createAcc');
    div1.style.display = 'block'
    let div2 = document.querySelector('.showAcc');
    div2.style.display = 'none';
    window.location.reload()
})