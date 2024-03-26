import { useState } from 'react';
import './style/testGame.css'

function TestGame() {
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
//entry point of app
function appContainer(){
    plotFood()
    var newHead = locateNextHead(pressedButton, parseInt(Snake.headLocation.slice(1)))
    var headDiv = document.getElementById(newHead)
    if(headDiv == null){
        headDiv = Snake.bodyLocations[0]
    }
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
    let isOutOfBounds = boundryCheck(newHead)
    if(!isOutOfBounds){
        try{
            plotSnake()
        }catch(error){
            console.log(error)
        }
    }
    if(isOutOfBounds){
        correctSnake(isOutOfBounds)
        plotSnake()
    }
}

//create a randomizer to pick random div containers
function plotFood(){
    document.getElementById(Food.location).style.background = 'blue'
}

//generates a new food location and plots location
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
    Snake.bodyLocations.unshift(Snake.headLocation)
    Snake.headLocation = newHead
}

//removes tail off snake.body
function updateTail(){
    var body = Snake.bodyLocations
    Snake.tailLocation = body[body.length -1]
}

//trims the snake body as it moves
function updateSnakeBody(){
    if(Snake.bodyLocations.length>=Snake.length){
        Snake.bodyLocations.pop()
    }
}

function boundryCheck(head){
    let numToofarUp = [11,21,31,41,51,61,71,81]
    let numToofarDown = [20,30,40,50,60,70,80,90]
    let numToofarLeft = [2,3,4,5,6,7,8,9]
    let numToofarRight = [92,93,94,95,96,97,98,99]
    let newHead = parseInt(head.slice(1))
    let oldHead = parseInt(Snake.bodyLocations[0].slice(1))
    
    //Next head will exceed boudning heading upwards
    if(oldHead - 1 == newHead && numToofarUp.includes(oldHead)){
        let updatedHead = 9 + oldHead
        return 'c' + updatedHead
    }
    //Next head will exceed boudning heading Down
    if(oldHead + 1 == newHead && numToofarDown.includes(oldHead)){
        console.log("LJDJDSJDSJDJD")
        let updatedHead = oldHead - 9
        return 'c' + updatedHead
    }
    
    //Next head will exceed boudning heading Right
    if(oldHead - 10 == newHead && numToofarLeft.includes(oldHead)){
        console.log("LJDJDSJDSJDJD")
        let updatedHead = oldHead + 90
        return 'c' + updatedHead
    }
        //Next head will exceed boudning heading Left
    if(oldHead + 10 == newHead && numToofarRight.includes(oldHead)){
        console.log("LJDJDSJDSJDJD")
        let updatedHead = oldHead - 90
        return 'c' + updatedHead
    }

    
return false
}

function correctSnake(updatedHead){
    Snake.headLocation = updatedHead
}

//chages color/plots snake body
function plotSnake(){
    console.log(Snake.bodyLocations)
    if(Snake.tailLocation == undefined){
        return
    }
    for(let i=0; i<Snake.bodyLocations.length;i++){
        var body = document.getElementById(Snake.bodyLocations[i]).style.backgroundColor = 'red'
    }
    console.log(Snake.bodyLocations[Snake.bodyLocations.length -1])

    var head = document.getElementById(Snake.headLocation).style.backgroundColor='red'
    removeTail()
}

//remove tail as it moves
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
