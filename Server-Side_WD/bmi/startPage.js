function getstartpage(){
    const startPage =`
        身高：<input type="text" id="height">
        體重：<input type="text" id="weight">
        BMI：<div id="bmi"></div>
        <button id="do">do</button>
        `
        return startPage
    }
        export {getstartpage}