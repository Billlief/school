import { getstartpage } from './startPage.js';
import {getbmi} from './getbmi.js';
window.onload =function(){
    
        document.getElementById('root').innerHTML = getstartpage();
        document.getElementById('do').onclick = function(){
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);
            document.getElementById('bmi').innerHTML = getbmi();
        }

}