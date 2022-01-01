const sel = selector => document.querySelector(selector);
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 192) {
        sel('.t11').classList.add('bg')
    }
    else if (event.keyCode === 49) {
        sel('.t1').classList.add('bg')
    }
    else if (event.keyCode === 50) {
        sel('.t2').classList.add('bg')
    }
    else if (event.keyCode === 51) {
        sel('.t3').classList.add('bg')
    }
    else if (event.keyCode === 52) {
        sel('.t4').classList.add('bg')
    }
    else if (event.keyCode === 53) {
        sel('.t5').classList.add('bg')
    }
    else if (event.keyCode === 54) {
        sel('.t6').classList.add('bg')
    }
    else if (event.keyCode === 55) {
        sel('.t7').classList.add('bg')
    }
    else if (event.keyCode === 56) {
        sel('.t8').classList.add('bg')
    }
    else if (event.keyCode === 57) {
        sel('.t9').classList.add('bg')
    }
    else if (event.keyCode === 48) {
        sel('.t0').classList.add('bg')
    }
    else if (event.keyCode === 189) {
        sel('.t-').classList.add('bg')
    }
    else if (event.keyCode === 187) {
        sel('.t--').classList.add('bg')
    }
    else if (event.keyCode === 8) {
        sel('.back').classList.add('bg')
    }
    //---------------------------------------------tr2---------------------------------------//
    else if (event.keyCode === 9) {
        event.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;

        let target = event.target;
        let value = target.value;

        target.value = value.substring(0, start)
            + "\t";
        + value.substring(end);

        this.selectionStart = this.selectionEnd = start + 1;
        event.preventDefault();
        sel('.tab').classList.add('bg')
    }

    else if (event.keyCode === 81) {
        sel('.tq').classList.add('bg')
    }

    else if (event.keyCode === 87) {
        sel('.tw').classList.add('bg')
    }

    else if (event.keyCode === 69) {
        sel('.te').classList.add('bg')
    }

    else if (event.keyCode === 82) {
        sel('.tr').classList.add('bg')
    }

    else if (event.keyCode === 84) {
        sel('.tt').classList.add('bg')
    }

    else if (event.keyCode === 89) {
        sel('.ty').classList.add('bg')
    }

    else if (event.keyCode === 85) {
        sel('.tu').classList.add('bg')
    }

    else if (event.keyCode === 73) {
        sel('.ti').classList.add('bg')
    }

    else if (event.keyCode === 79) {
        sel('.to').classList.add('bg')
    }

    else if (event.keyCode === 80) {
        sel('.tp').classList.add('bg')
    }

    else if (event.keyCode === 219) {
        sel('.t219').classList.add('bg')
    }

    else if (event.keyCode === 221) {
        sel('.t221').classList.add('bg')
    }

    else if (event.keyCode === 220) {
        sel('.t12').classList.add('bg')
    }
    //------------------------------------------------------tr3---------------------------------------------------//

    else if (event.keyCode === 20) {
        sel('.caps').classList.toggle('bg')
    }

    else if (event.keyCode === 65) {
        sel('.ta').classList.add('bg')
    }

    else if (event.keyCode === 83) {
        sel('.ts').classList.add('bg')
    }

    else if (event.keyCode === 68) {
        sel('.td').classList.add('bg')
    }

    else if (event.keyCode === 70) {
        sel('.tf').classList.add('bg')
    }

    else if (event.keyCode === 71) {
        sel('.tg').classList.add('bg')
    }

    else if (event.keyCode === 72) {
        sel('.th').classList.add('bg')
    }

    else if (event.keyCode === 74) {
        sel('.tj').classList.add('bg')
    }

    else if (event.keyCode === 75) {
        sel('.tk').classList.add('bg')
    }

    else if (event.keyCode === 76) {
        sel('.tl').classList.add('bg')
    }

    else if (event.keyCode === 186) {
        sel('.t186').classList.add('bg')
    }

    else if (event.keyCode === 222) {
        sel('.t222').classList.add('bg')
    }

    else if (event.keyCode === 13) {
        sel('.enter').classList.add('bg')
    }

    //----------------------------------------------tr4-----------------------------------------------------//
    else if (event.keyCode === 16 && event.location === 1) {
        sel('.shiftLeft').classList.add('bg')
    }

    else if (event.keyCode === 90) {
        sel('.tz').classList.add('bg')
    }

    else if (event.keyCode === 88) {
        sel('.tx').classList.add('bg')
    }

    else if (event.keyCode === 67) {
        sel('.tc').classList.add('bg')
    }

    else if (event.keyCode === 86) {
        sel('.tv').classList.add('bg')
    }

    else if (event.keyCode === 66) {
        sel('.tb').classList.add('bg')
    }

    else if (event.keyCode === 78) {
        sel('.tn').classList.add('bg')
    }

    else if (event.keyCode === 77) {
        sel('.tm').classList.add('bg')
    }

    else if (event.keyCode === 188) {
        sel('.t188').classList.add('bg')
    }

    else if (event.keyCode === 190) {
        sel('.t190').classList.add('bg')
    }

    else if (event.keyCode === 191) {
        sel('.t191').classList.add('bg')
    }

    else if (event.keyCode === 16 && event.location === 2) {
        sel('.shiftRight').classList.add('bg')
    }

    //----------------------------------------------tr5-----------------------------------------------------//
    else if (event.keyCode === 32) {
        sel('.t32').classList.add('bg')
    }

})
//------------------------------------------------------REMOVE----------------------------------------------//
window.addEventListener('keyup', function (event) {
    if (event.keyCode === 192) {
        sel('.t11').classList.remove('bg')
    }
    else if (event.keyCode === 49) {
        sel('.t1').classList.remove('bg')
    }
    else if (event.keyCode === 50) {
        sel('.t2').classList.remove('bg')
    }
    else if (event.keyCode === 51) {
        sel('.t3').classList.remove('bg')
    }
    else if (event.keyCode === 52) {
        sel('.t4').classList.remove('bg')
    }
    else if (event.keyCode === 53) {
        sel('.t5').classList.remove('bg')
    }
    else if (event.keyCode === 54) {
        sel('.t6').classList.remove('bg')
    }
    else if (event.keyCode === 55) {
        sel('.t7').classList.remove('bg')
    }
    else if (event.keyCode === 56) {
        sel('.t8').classList.remove('bg')
    }
    else if (event.keyCode === 57) {
        sel('.t9').classList.remove('bg')
    }
    else if (event.keyCode === 48) {
        sel('.t0').classList.remove('bg')
    }
    else if (event.keyCode === 189) {
        sel('.t-').classList.remove('bg')
    }
    else if (event.keyCode === 187) {
        sel('.t--').classList.remove('bg')
    }
    else if (event.keyCode === 8) {
        sel('.back').classList.remove('bg')
    }
    //---------------------------------------------tr2---------------------------------------//
    else if (event.keyCode === 9) {
        sel('.tab').classList.remove('bg')
    }

    else if (event.keyCode === 81) {
        sel('.tq').classList.remove('bg')
    }

    else if (event.keyCode === 87) {
        sel('.tw').classList.remove('bg')
    }

    else if (event.keyCode === 69) {
        sel('.te').classList.remove('bg')
    }

    else if (event.keyCode === 82) {
        sel('.tr').classList.remove('bg')
    }

    else if (event.keyCode === 84) {
        sel('.tt').classList.remove('bg')
    }

    else if (event.keyCode === 89) {
        sel('.ty').classList.remove('bg')
    }

    else if (event.keyCode === 85) {
        sel('.tu').classList.remove('bg')
    }

    else if (event.keyCode === 73) {
        sel('.ti').classList.remove('bg')
    }

    else if (event.keyCode === 79) {
        sel('.to').classList.remove('bg')
    }

    else if (event.keyCode === 80) {
        sel('.tp').classList.remove('bg')
    }

    else if (event.keyCode === 219) {
        sel('.t219').classList.remove('bg')
    }

    else if (event.keyCode === 221) {
        sel('.t221').classList.remove('bg')
    }

    else if (event.keyCode === 220) {
        sel('.t12').classList.remove('bg')
    }
    //------------------------------------------------------tr3---------------------------------------------------//

    else if (event.keyCode === 65) {
        sel('.ta').classList.remove('bg')
    }

    else if (event.keyCode === 83) {
        sel('.ts').classList.remove('bg')
    }

    else if (event.keyCode === 68) {
        sel('.td').classList.remove('bg')
    }

    else if (event.keyCode === 70) {
        sel('.tf').classList.remove('bg')
    }

    else if (event.keyCode === 71) {
        sel('.tg').classList.remove('bg')
    }

    else if (event.keyCode === 72) {
        sel('.th').classList.remove('bg')
    }

    else if (event.keyCode === 74) {
        sel('.tj').classList.remove('bg')
    }

    else if (event.keyCode === 75) {
        sel('.tk').classList.remove('bg')
    }

    else if (event.keyCode === 76) {
        sel('.tl').classList.remove('bg')
    }

    else if (event.keyCode === 186) {
        sel('.t186').classList.remove('bg')
    }

    else if (event.keyCode === 222) {
        sel('.t222').classList.remove('bg')
    }

    else if (event.keyCode === 13) {
        sel('.enter').classList.remove('bg')
    }

    //----------------------------------------------tr4-----------------------------------------------------//
    else if (event.keyCode === 16 && event.location === 1) {
        sel('.shiftLeft').classList.remove('bg')
    }

    else if (event.keyCode === 90) {
        sel('.tz').classList.remove('bg')
    }

    else if (event.keyCode === 88) {
        sel('.tx').classList.remove('bg')
    }

    else if (event.keyCode === 67) {
        sel('.tc').classList.remove('bg')
    }

    else if (event.keyCode === 86) {
        sel('.tv').classList.remove('bg')
    }

    else if (event.keyCode === 66) {
        sel('.tb').classList.remove('bg')
    }

    else if (event.keyCode === 78) {
        sel('.tn').classList.remove('bg')
    }

    else if (event.keyCode === 77) {
        sel('.tm').classList.remove('bg')
    }

    else if (event.keyCode === 188) {
        sel('.t188').classList.remove('bg')
    }

    else if (event.keyCode === 190) {
        sel('.t190').classList.remove('bg')
    }

    else if (event.keyCode === 191) {
        sel('.t191').classList.remove('bg')
    }

    else if (event.keyCode === 16 && event.location === 2) {
        sel('.shiftRight').classList.remove('bg')
    }
    //----------------------------------------------tr5-----------------------------------------------------//
    else if (event.keyCode === 32) {
        sel('.t32').classList.remove('bg')
    }
})

window.addEventListener('keydown', function (event) {
    console.log(event);
})