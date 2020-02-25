import React, {Component} from 'react'
// import Component from 'React'
//let foo = "";
function BoxUp(props) {
  return (
    <div className="BoxUp">
      <div className="BoxUp-box1">
        {props.box1}
      </div>
      <div className="BoxUp-box2">
        {props.box2}
      </div>
      <div className="BoxUp-box3">
        {props.box3}
      </div>
    </div>
  );
}

function App() {
  return (
    <BoxUp
      box1={
        <FoodCopy />
      }
      box2={
        <DrinksCopy />
      }
      box3={
        <LiveMusicCopy />
      } />
  );
}
const FoodCopy = () => {return <div><h3>Food.</h3><div><p>\Can't decide where to eat? everyone craving something different? We brought 4 local restaurants to one fun\-for\-the\-whole\-family location. From a good \'ol fashion American burger, to Chicago style pizza, or classic new Mexican food./</p></div></div>};
const DrinksCopy = () => {return <div><h3>Drinks.</h3><div><p>We have 3 different full service bars for any type of vibe. Get funk\'d up at Uptown Funk. Same funk, new home.

Your 1st round pick is Draft Day Sports Bar. Watch your favorite team on our 15 ft. video wall with one of our 64 beers on draft.

Meet us at the Lobby!
The Lobby Bar will accommodate seating for all of our dining options, with a jumbotron style LED wall and 8 pinball machines to keep everyone entertained.

Need a boost? we also have Hundred Hands Coffee.</p></div></div>}
const LiveMusicCopy = () =>{}

// class BoxT extends Component {
//    constructor(props){
//      super(props);
//      this.state = {foo : ""};
//    }
//
//    render () {
//     if (foo == 'food'){
//       return <div><h3>Food.</h3><div><p>Can't decide where to eat? everyone craving something different? We brought 4 local restaurants to one fun-for-the-whole-family location. From a good 'ol fashion American burger, to Chicago style pizza, or classic new Mexican food. </p></div></div>
//     }elseif (foo == 'drinks'){
//       return <div><h3>Drinks.</h3><div><p>We have 3 different full service bars for any type of vibe.
//
// Get funk'd up at Uptown Funk. Same funk, new home.
//
// Your 1st round pick is Draft Day Sports Bar. Watch your favorite team on our 15 ft. video wall with one of our 64 beers on draft.
//
// Meet us at the Lobby!
// The Lobby Bar will accommodate seating for all of our dining options, with a jumbotron style LED wall and 8 pinball machines to keep everyone entertained.
//
// Need a boost? we also have Hundred Hands Coffee.</p></div>
// </div>;
//     }elseif (foo == 'liveMusic'){
//       return <div><h3>Live Music.</h3><div><p>Right now, we have live music in Uptown Funk, our dueling pianos bar that has been a huge success since it launched on February 26th, 2016.
//
// But that's not all.
//
// Coming soon...
//
// A brand new...
//
// State of the art...
//
// 3000 capacity concert experience...
//
// Like ABQ has never seen before. Food, drinks, and your favorite artists..</p></div></div>;
// };
//   };
// };
//   export default BoxT
// // const BoxT = (foo) => {
// //   if (foo == 'food'){
// //     x
// //   }elseif (foo == 'drinks'){
// //     x
// //   }elseif (foo == 'liveMusic'){
// //     x
// //   }
// // };
// // class BoxT extends component
// // export default BoxT
// export function BoxUp() {
//
// }
// export function App() {
//
// }
// export default FoodCopy
// export default DrinksCopy
// export default LiveMusicCopy
