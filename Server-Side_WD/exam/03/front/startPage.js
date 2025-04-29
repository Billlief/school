
export default function startPage() {
  const str =`
          <table>
          <tr><th>品項</th><th>費用</th><th>付款人</th></tr>
          <tr><td><input type="text" name="list" value="車子油費"></td><td><input type="text" name="fee" value=1500></td><td><input type="text" name="man" value="小明"></td></tr>
          <tr><td><input type="text" name="list" value="早餐"></td><td><input type="text" name="fee" value=170></td><td><input type="text" name="man" value="小華"></td></tr>
          <tr><td><input type="text" name="list" value="劍湖山門票"></td><td><input type="text" name="fee" value=1100></td><td><input type="text" name="man" value="小華"></td></tr>
          <tr><td><input type="text" name="list" value="晚餐"></td><td><input type="text" name="fee" value=1850></td><td><input type="text" name="man" value="小明"></td></tr>
          <tr><td><input type="text" name="list" value="停車費"></td><td><input type="text" name="fee" value=100></td><td><input type="text" name="man" value="小華"></td></tr>
      </table>
      <button id="do">計算</button>
      <div id="result"></div><br>
      <div id="mingcolor"></div><br>
      <div id="hwacolor"></div>

        `;
      return str;
}