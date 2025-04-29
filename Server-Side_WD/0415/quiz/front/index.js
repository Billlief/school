import startPage from "./startPage.js";

window.onload = function(){
    document.getElementById('root').innerHTML = startPage();
    document.getElementById('do').onclick = function(){
        let data = {
            'chi': document.getElementById('chi').value,
            'eng': document.getElementById('eng').value,
            'math': document.getElementById('math').value
        }
        axios.post('http://localhost/0415/quiz/server/cal.php',Qs.stringify(data))
        .then(res => {
           let response = res['data'];
           let avgElement = document.getElementById('avg'); 

                
                avgElement.innerHTML = response;
                if (response < 60) {
                    avgElement.style.color = 'red'; 
                } else {
                    avgElement.style.color = 'green';
                }
        })
        .catch(err => {
            console.error(err); 
        })

}
}