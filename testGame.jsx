import { useState } from 'react';
import './style/testGame.css'

function TestGame() {
var cellOne = document.getElementById('c1');
var cellTwo = document.getElementById('c2');
var cellThree = document.getElementById('c3');
var cellFour = document.getElementById('c4');
var cellFive = document.getElementById('c5');
var cellSix = document.getElementById('c6');
var cellSeven = document.getElementById('c7');
var cellEight = document.getElementById('c8');
var cellNine = document.getElementById('c9');
var cellTen = document.getElementById('c10');
var cellEleven = document.getElementById('c11');
var cellTwelve = document.getElementById('c12');
var cellThirteen = document.getElementById('c13');
var cellFourteen = document.getElementById('c14');
var cellFifteen = document.getElementById('c15');
var cellSixteen = document.getElementById('c16');
var cellSeventeen = document.getElementById('c17');
var cellEighteen = document.getElementById('c18');
var cellNineteen = document.getElementById('c19');
var cellTwenty = document.getElementById('c20');
var cellTwentyOne = document.getElementById('c21');
var cellTwentyTwo = document.getElementById('c22');
var cellTwentyThree = document.getElementById('c23');
var cellTwentyFour = document.getElementById('c24');
var cellTwentyFive = document.getElementById('c25');
var cellTwentySix = document.getElementById('c26');
var cellTwentySeven = document.getElementById('c27');
var cellTwentyEight = document.getElementById('c28');
var cellTwentyNine = document.getElementById('c29');
var cellThirty = document.getElementById('c30');
var cellThirtyOne = document.getElementById('c31');
var cellThirtyTwo = document.getElementById('c32');
var cellThirtyThree = document.getElementById('c33');
var cellThirtyFour = document.getElementById('c34');
var cellThirtyFive = document.getElementById('c35');
var cellThirtySix = document.getElementById('c36');
var cellThirtySeven = document.getElementById('c37');
var cellThirtyEight = document.getElementById('c38');
var cellThirtyNine = document.getElementById('c39');
var cellForty = document.getElementById('c40');
var cellFortyOne = document.getElementById('c41');
var cellFortyTwo = document.getElementById('c42');
var cellFortyThree = document.getElementById('c43');
var cellFortyFour = document.getElementById('c44');
var cellFortyFive = document.getElementById('c45');
var cellFortySix = document.getElementById('c46');
var cellFortySeven = document.getElementById('c47');
var cellFortyEight = document.getElementById('c48');
var cellFortyNine = document.getElementById('c49');
var cellFifty = document.getElementById('c50');
var cellFiftyOne = document.getElementById('c51');
var cellFiftyTwo = document.getElementById('c52');
var cellFiftyThree = document.getElementById('c53');
var cellFiftyFour = document.getElementById('c54');
var cellFiftyFive = document.getElementById('c55');
var cellFiftySix = document.getElementById('c56');
var cellFiftySeven = document.getElementById('c57');
var cellFiftyEight = document.getElementById('c58');
var cellFiftyNine = document.getElementById('c59');
var cellSixty = document.getElementById('c60');
var cellSixtyOne = document.getElementById('c61');
var cellSixtyTwo = document.getElementById('c62');
var cellSixtyThree = document.getElementById('c63');
var cellSixtyFour = document.getElementById('c64');
var cellSixtyFive = document.getElementById('c65');
var cellSixtySix = document.getElementById('c66');
var cellSixtySeven = document.getElementById('c67');
var cellSixtyEight = document.getElementById('c68');
var cellSixtyNine = document.getElementById('c69');
var cellSeventy = document.getElementById('c70');
var cellSeventyOne = document.getElementById('c71');
var cellSeventyTwo = document.getElementById('c72');
var cellSeventyThree = document.getElementById('c73');
var cellSeventyFour = document.getElementById('c74');
var cellSeventyFive = document.getElementById('c75');
var cellSeventySix = document.getElementById('c76');
var cellSeventySeven = document.getElementById('c77');
var cellSeventyEight = document.getElementById('c78');
var cellSeventyNine = document.getElementById('c79');
var cellEighty = document.getElementById('c80');
var cellEightyOne = document.getElementById('c81');
var cellEightyTwo = document.getElementById('c82');
var cellEightyThree = document.getElementById('c83');
var cellEightyFour = document.getElementById('c84');
var cellEightyFive = document.getElementById('c85');
var cellEightySix = document.getElementById('c86');
var cellEightySeven = document.getElementById('c87');
var cellEightyEight = document.getElementById('c88');
var cellEightyNine = document.getElementById('c89');
var cellNinety = document.getElementById('c90');
var cellNinetyOne = document.getElementById('c91');
var cellNinetyTwo = document.getElementById('c92');
var cellNinetyThree = document.getElementById('c93');
var cellNinetyFour = document.getElementById('c94');
var cellNinetyFive = document.getElementById('c95');
var cellNinetySix = document.getElementById('c96');
var cellNinetySeven = document.getElementById('c97');
var cellNinetyEight = document.getElementById('c98');
var cellNinetyNine = document.getElementById('c99');
var cellOneHundred = document.getElementById('c100');

///////MAIN COMPONENTS//////////
const [ start, setStart ] = useState(false);


var pressedButton = "UP"  

const Snake = {
    length:3,
    headLocation:'c46',
    bodyLocations: [],
    tailLocation: '',
}

const Food = {
    location: 'c15',
}


function startApp(){
    console.log("APP STARTED")

    setInterval(appContainer, 200);
    
}

//////////END OF MAIN COMPONENTS//////


function appContainer(){
    plotFood()
    var newHead = locateNextHead(pressedButton, parseInt(Snake.headLocation.slice(1)))
    var headDiv = document.getElementById(newHead)
    if(headDiv.id == Food.location){
        Snake.length++
        newFoodLocation()
    }
    if(isCollision(newHead)){
        //!!!!change setStart to False to end the game!!!!GAME OVER
        console.log("COLLISION")

    }
    updateHeadAndBody(newHead)
    updateTail()
    updateSnakeBody()
    plotSnake()
}


//create a randomizer to pick random div containers
function plotFood(){
    document.getElementById(Food.location).style.background = 'blue'
}

function newFoodLocation(){
    var randomNumber = Math.ceil(Math.random() * 100)
    Food.location = 'c'+randomNumber
    plotFood()
}

//Determines next head location based off the current locations cell number
//returns a string that matches the corespondign Div ID
function locateNextHead(direction, currentHeadNumber){
    var currentHead = currentHeadNumber
    var outputNextHead = 0
    if(direction=='LEFT'){
        currentHead -=10
        outputNextHead = currentHead
        return 'c' + outputNextHead.toString()
    }
    if(direction=='UP'){
        currentHead -=1
        outputNextHead = currentHead
        return 'c' + outputNextHead.toString()
    }
    if(direction=='RIGHT'){
        currentHead +=10
        outputNextHead = currentHead
        return 'c' + outputNextHead.toString()
    }
    if(direction=='DOWN'){
        currentHead +=1
        outputNextHead = currentHead
        return 'c' + outputNextHead.toString()
    }
}

//determines if thea head collides with body
function isCollision(newHead){
    if(Snake.bodyLocations.includes(newHead)){
        return true
    }
        return false
}

//insert the current snake head into the first positon of its body
//sets the new head of the Snake
function updateHeadAndBody(newHead){
    var currentHead = Snake.headLocation
    Snake.bodyLocations.unshift(currentHead)
    Snake.headLocation = newHead
}

function updateTail(){
    var body = Snake.bodyLocations
    var snakeTail = body[body.length -1]
    Snake.tailLocation = snakeTail
}

function updateSnakeBody(){
    while(Snake.bodyLocations.length>=Snake.length){
        Snake.bodyLocations.pop()
    }
}

function plotSnake(){
    if(Snake.tailLocation == undefined){
        return
    }
    for(let i=0; i<Snake.bodyLocations.length;i++){
        var body = document.getElementById(Snake.bodyLocations[i]).style.backgroundColor = 'red'
    }

    var head = document.getElementById(Snake.headLocation).style.backgroundColor='red'
    removeTail()
}

function removeTail(){
    var tail = document.getElementById(Snake.tailLocation)
    if(tail == null){
        return
    }
    tail.style.backgroundColor = 'aquamarine'
}


// Event listener for keydown
document.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event) {
    const key = event.key;
    if(key == 'ArrowLeft'){
        pressedButton="LEFT"
    }
    if(key == 'ArrowUp'){
        pressedButton="UP"
    }
    if(key == 'ArrowRight'){
        pressedButton="RIGHT"
    }
    if(key == 'ArrowDown'){
        pressedButton="DOWN"
    }
}

// Event listener for keyup
document.addEventListener('keyup', handleKeyUp);
function handleKeyUp(event) {
    const key = event.key;
    //pressedButton = "";
}


  return (
<div id="main-container">
    <h1>TEST TEST TEST GAME</h1>
    <div id="grid-container">
      <button onClick={startApp}>Start Game</button>
   
        <div class="rows" id="column1">
            <div class="cell" id="c1">1</div>
            <div class="cell" id="c2">2</div>
            <div class="cell" id="c3">3</div>
            <div class="cell" id="c4">4</div>
            <div class="cell" id="c5">5</div>
            <div class="cell" id="c6">6</div>
            <div class="cell" id="c7">7</div>
            <div class="cell" id="c8">8</div>
            <div class="cell" id="c9">9</div>
            <div class="cell" id="c10">10</div>
        </div>

        <div class="rows" id="column2">
            <div class="cell" id="c11">11</div>
            <div class="cell" id="c12">12</div>
            <div class="cell" id="c13">13</div>
            <div class="cell" id="c14">14</div>
            <div class="cell" id="c15">15</div>
            <div class="cell" id="c16">16</div>
            <div class="cell" id="c17">17</div>
            <div class="cell" id="c18">18</div>
            <div class="cell" id="c19">19</div>
            <div class="cell" id="c20">20</div>
        </div>

        <div class="rows" id="column3">
            <div class="cell" id="c21">21</div>
            <div class="cell" id="c22">22</div>
            <div class="cell" id="c23">23</div>
            <div class="cell" id="c24">24</div>
            <div class="cell" id="c25">25</div>
            <div class="cell" id="c26">26</div>
            <div class="cell" id="c27">27</div>
            <div class="cell" id="c28">28</div>
            <div class="cell" id="c29">29</div>
            <div class="cell" id="c30">30</div>
        </div>

        <div class="rows" id="column4">
            <div class="cell" id="c31">31</div>
            <div class="cell" id="c32">32</div>
            <div class="cell" id="c33">33</div>
            <div class="cell" id="c34">34</div>
            <div class="cell" id="c35">35</div>
            <div class="cell" id="c36">36</div>
            <div class="cell" id="c37">37</div>
            <div class="cell" id="c38">38</div>
            <div class="cell" id="c39">39</div>
            <div class="cell" id="c40">40</div>
        </div>

        <div class="rows" id="column5">
            <div class="cell" id="c41">41</div>
            <div class="cell" id="c42">42</div>
            <div class="cell" id="c43">43</div>
            <div class="cell" id="c44">44</div>
            <div class="cell" id="c45">45</div>
            <div class="cell" id="c46">46</div>
            <div class="cell" id="c47">47</div>
            <div class="cell" id="c48">48</div>
            <div class="cell" id="c49">49</div>
            <div class="cell" id="c50">50</div>
        </div>

        <div class="rows" id="column6">
            <div class="cell" id="c51">51</div>
            <div class="cell" id="c52">52</div>
            <div class="cell" id="c53">53</div>
            <div class="cell" id="c54">54</div>
            <div class="cell" id="c55">55</div>
            <div class="cell" id="c56">56</div>
            <div class="cell" id="c57">57</div>
            <div class="cell" id="c58">58</div>
            <div class="cell" id="c59">59</div>
            <div class="cell" id="c60">60</div>
        </div>

        <div class="rows" id="column7">
            <div class="cell" id="c61">61</div>
            <div class="cell" id="c62">62</div>
            <div class="cell" id="c63">63</div>
            <div class="cell" id="c64">64</div>
            <div class="cell" id="c65">65</div>
            <div class="cell" id="c66">66</div>
            <div class="cell" id="c67">67</div>
            <div class="cell" id="c68">68</div>
            <div class="cell" id="c69">69</div>
            <div class="cell" id="c70">70</div>
        </div>

        <div class="rows" id="column8">
            <div class="cell" id="c71">71</div>
            <div class="cell" id="c72">72</div>
            <div class="cell" id="c73">73</div>
            <div class="cell" id="c74">74</div>
            <div class="cell" id="c75">75</div>
            <div class="cell" id="c76">76</div>
            <div class="cell" id="c77">77</div>
            <div class="cell" id="c78">78</div>
            <div class="cell" id="c79">79</div>
            <div class="cell" id="c80">80</div>
        </div>

        <div class="rows" id="column9">
            <div class="cell" id="c81">81</div>
            <div class="cell" id="c82">82</div>
            <div class="cell" id="c83">83</div>
            <div class="cell" id="c84">84</div>
            <div class="cell" id="c85">85</div>
            <div class="cell" id="c86">86</div>
            <div class="cell" id="c87">87</div>
            <div class="cell" id="c88">88</div>
            <div class="cell" id="c89">89</div>
            <div class="cell" id="c90">90</div>
        </div>

        <div class="rows" id="column10">
            <div class="cell" id="c91">91</div>
            <div class="cell" id="c92">92</div>
            <div class="cell" id="c93">93</div>
            <div class="cell" id="c94">94</div>
            <div class="cell" id="c95">95</div>
            <div class="cell" id="c96">96</div>
            <div class="cell" id="c97">97</div>
            <div class="cell" id="c98">98</div>
            <div class="cell" id="c99">99</div>
            <div class="cell" id="c100">100</div>
        </div>
    </div>
</div>
  );
}

export default TestGame;
