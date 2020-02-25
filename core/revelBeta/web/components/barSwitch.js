//3 parts
//1.circles
//2.hero image
//3.box with styles
// import Circles {useState} from '../HeaderC'
const BarSwitch = () => {
  return (
    <div id=BarSwitchBox>
      <div class= barImage></div>
      <div class= barListBox>
        <ol id= barList>
          <li id=b1>Uptown Funk<li>
          //<img src="" />
          <li id=b2>Draft Day<li>
          <li id=b3>The Lobby<li>
          <li id=b4>Revel Burger<li>
          <li id=b5>Pizza 9<li>
          <li id=b6>Pericos<li>
          <li id=b7>Rude Boy Cookies<li>
          <li id=b8>Hundred Hands<li>
        </ol>
      </div>//barListBox
    </div>//BarSwitchBox
    <style jsx>{`
    .container {
      margin: 50px;
    }
    p {
      color: blue;
    }
  `}</style>
  )
};
export default BarSwitch
