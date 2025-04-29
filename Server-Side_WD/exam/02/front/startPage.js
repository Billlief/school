export default function startPage() {
  const str =`
  <p>白天躲起來，晚上亮起來，不怕風吹雨打，只怕太陽出來</p>
      選項：
      <form>
          <input type="radio" name="option" value="light">
          <label>電燈</label><br>
          <input type="radio" name="option" value="moon">
          <label>月亮</label><br>
          <input type="radio" name="option" value="star">
          <label>星星</label><br>
          <input type="radio" name="option" value="lighter">
          <label>打火機</label>
        </form>
        <button id="do">公佈答案</button>

        <div id="ans"></div>

        `;
      return str;
}