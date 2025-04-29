import startPage from "./startPage.js";
window.onload = function () {
    document.getElementById('root').innerHTML = startPage();
    document.getElementById('point').onkeyup = function () {
        let data = {
            'point' : document.getElementById('point').value,
        };
        axios.post('http://localhost/exam/01/server/index.php',Qs.stringify(data))
        .then(res => {
            console.log(res)
            let response = res['data'];
            document.getElementById('money').innerHTML = response;
        })
        .catch(err => {
            console.error(err); 
        })
        


};
}