import startPage from "./startPage.js";

window.onload = function(){
    document.getElementById('root').innerHTML = startPage();
    document.getElementById('do').onclick = function(){
         let data = {
            'a':document.getElementById('a').value,
            'b':document.getElementById('b').value,
            'op':document.getElementById('op').value
         };
         axios.post('http://localhost/0415/operate/server/math.php',Qs.stringify(data))
         .then(res => {
            let response = res['data'];
            document.getElementById('ans').innerHTML = response;
         })
         .catch(err => {
            console.error(err); 
         })
    }
}