import startPage from "./startPage.js";
window.onload = function () {
    document.getElementById('root').innerHTML = startPage();
    document.getElementById('do').onclick = function () {
        const option = document.getElementsByName('option');
        let str = '正確答案是：星星<br>你的答案是：';
        let selectedValue = '';
        for (let i = 0; i < option.length; i++) {
            if (option[i].checked) {
              selectedValue = option[i].value;
              break;
            }
          }
        let data ={
            'option' : selectedValue,
        };
        axios.post('http://localhost/exam/02/server/index.php',Qs.stringify(data))
        .then(res => {
            let response = res.data;
            if (response == 1){
                document.getElementById('ans').innerHTML = str + '星星';
            } else if (response == 2){
                document.getElementById('ans').innerHTML = str + '月亮';
            } else if (response == 3){
                document.getElementById('ans').innerHTML = str + '電燈';
            } else if (response == 4){
                document.getElementById('ans').innerHTML = str + '打火機';
            }
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    };
}