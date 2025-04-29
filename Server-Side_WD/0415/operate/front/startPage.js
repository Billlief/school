export default function startPage(){
    return `<input type="text" id="a">
    <select id="op">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="text" id="b">
    =<span id="ans"></span><br>
    <button id="do">do</button>`
}