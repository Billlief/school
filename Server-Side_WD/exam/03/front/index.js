import startPage from "./startPage.js";

window.onload = function () {
    document.getElementById('root').innerHTML = startPage();

    document.getElementById('do').onclick = function () {
        let total = 0;
        let recipie = '消費清單：<br>';
        let mingstring = '';
        let hwastring = '';
        let ming = 0;
        let hwa = 0;
        const list = document.getElementsByName('list');
        const fee = document.getElementsByName('fee');
        const man = document.getElementsByName('man');

        for (let i = 0; i < list.length; i++) {
            const currentMan = man[i].value.trim();
            recipie += `${list[i].value} ${fee[i].value}<br>`;
            total += parseInt(fee[i].value) || 0;

            if (currentMan === '小明') {
                mingstring += '+' + String(fee[i].value);
                ming += parseInt(fee[i].value) || 0;
            } else if (currentMan === '小華') {
                hwastring += '+' + String(fee[i].value);
                hwa += parseInt(fee[i].value) || 0;
            }
        }
        let mingthing = ming - total/2;
        let hwaThing = hwa - total/2;
        if (mingthing < 0) {
            document.getElementById('mingcolor').style.color = 'red';
        } else if (mingthing > 0) {
            document.getElementById('mingcolor').style.color = 'blue';
        }
        if (hwaThing < 0) {
            document.getElementById('hwacolor').style.color = 'red';
        } else if (hwaThing > 0) {
            document.getElementById('hwacolor').style.color = 'blue';
        }
        document.getElementById('result').innerHTML = 
            `付款統計：<br>小明：${mingstring}=${ming} 元<br>小華：${hwastring}=${hwa} 元<br><br>${recipie}總計${total}<br>平均消費${total/2}
            `;
        document.getElementById('mingcolor').innerHTML = '小明:' + mingthing;
        document.getElementById('hwacolor').innerHTML = '小華:' + hwaThing;
        
    };
};
