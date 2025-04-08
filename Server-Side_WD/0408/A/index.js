import startPage from "./startPage.js";
window.onload = function () {
    document.getElementById("root").innerHTML = startPage();
    document.getElementById("name").onkeyup = function () {
        let data = {
            "name" : document.getElementById("name").value,
        };
        axios.post("http://localhost/0408/sayHello.php",Qs.stringify(data))
        .then(res => {
            console.log(res);
            let response = res["data"];
            document.getElementById("content").innerHTML = response;
        })
        .catch(err => {
            console.error(err); 
        })
};
}