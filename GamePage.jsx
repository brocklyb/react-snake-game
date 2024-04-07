import { useState, useContext, useEffect } from 'react';
import './style/testGame.css'
import Customize from './CustomizePage';
import UserContext from "../contexts/UserContext";

function TestGame() {
    ///////MAIN COMPONENTS//////////
    const [ start, setStart ] = useState(false);
    const [ score, setScore ] = useState(0)


    //this context lets users select colors 
    const {snakeColor,gameBoardColor, foodColor} = useContext(UserContext)

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


    useEffect(() => {
        const intervalId = startApp();

        // Clear the interval when the component unmounts or on collision
        return () => {
            clearInterval(intervalId);
            if(!start){
                console.log("app ON")
            }else{
                console.log("app OFF")
            }
        };
    }, [start]);

    const startApp = () =>{
        if(start){
            return setInterval(appContainer, 200);
        }
    }

    const resetGame = () =>{
        setStart(true)
        Snake.length = 3
        Snake.headLocation = 'c46'
        Snake.bodyLocations = []
        Snake.tailLocation = ''
        setScore(0)
        for(let i = 1; i<101;i++){
            document.getElementById('c'+i).style.background = gameBoardColor
        }
    }

    const pauseGame = () =>{
        setStart(false)
    }

    const startGame = () =>{
        setStart(true)
    }

    //////////END OF MAIN COMPONENTS//////
    //entry point of app
    const appContainer = () =>{
        plotFood()
        var newHead = locateNextHead(pressedButton, parseInt(Snake.headLocation.slice(1)))
        var headDiv = document.getElementById(newHead)
        if(headDiv === null){
            headDiv = Snake.bodyLocations[0]
        }
        if(headDiv.id === Food.location){
            Snake.length++
            setScore(prevScore => prevScore + 1)
            newFoodLocation()
        }
        if(isCollision(newHead)){
            //!!!!change setStart to False to end the game!!!!GAME OVER
            console.log("COLLISION")
            setStart(false)
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
    const plotFood = () =>{
        document.getElementById(Food.location).style.background = foodColor
    }

    //generates a new food location and plots location
    const newFoodLocation = () =>{
        var randomNumber = Math.ceil(Math.random() * 100)
        Food.location = 'c'+randomNumber
        plotFood()
    }

    //Determines next head location based off the current locations cell number
    //returns a string that matches the corespondign Div ID
    const locateNextHead = (direction, currentHeadNumber) =>{
        var currentHead = currentHeadNumber
        var outputNextHead = 0
        if(direction ==='LEFT'){
            currentHead -=10
            outputNextHead = currentHead
            return 'c' + outputNextHead.toString()
        }
        if(direction ==='UP'){
            currentHead -=1
            outputNextHead = currentHead
            return 'c' + outputNextHead.toString()
        }
        if(direction ==='RIGHT'){
            currentHead +=10
            outputNextHead = currentHead
            return 'c' + outputNextHead.toString()
        }
        if(direction ==='DOWN'){
            currentHead +=1
            outputNextHead = currentHead
            return 'c' + outputNextHead.toString()
        }
    }

    //determines if thea head collides with body
    const isCollision = (newHead) =>{
        if(Snake.bodyLocations.includes(newHead)){
            return true
        }
            return false
    }

    //insert the current snake head into the first positon of its body
    //sets the new head of the Snake
    const updateHeadAndBody = (newHead) =>{
        Snake.bodyLocations.unshift(Snake.headLocation)
        Snake.headLocation = newHead
    }

    //removes tail off snake.body
    const updateTail = () =>{
        var body = Snake.bodyLocations
        Snake.tailLocation = body[body.length -1]
    }

    //trims the snake body as it moves
    const updateSnakeBody = () =>{
        if(Snake.bodyLocations.length>=Snake.length){
            Snake.bodyLocations.pop()
        }
    }

    const boundryCheck = (head) =>{
        let toofarUp = [11,21,31,41,51,61,71,81]
        let toofarDown = [20,30,40,50,60,70,80,90]
        let numToofarLeft = [2,3,4,5,6,7,8,9]
        let toofarRight = [92,93,94,95,96,97,98,99]
        let newHead = parseInt(head.slice(1))
        let oldHead = parseInt(Snake.bodyLocations[0].slice(1))
        
        //Next head will exceed boudning heading upwards
        if(oldHead - 1 === newHead && toofarUp.includes(oldHead)){
            let updatedHead = 9 + oldHead
            return 'c' + updatedHead
        }
        //Next head will exceed boudning heading Down
        if(oldHead + 1 === newHead && toofarDown.includes(oldHead)){
            let updatedHead = oldHead - 9
            return 'c' + updatedHead
        }
        
        //Next head will exceed boudning heading Right
        if(oldHead - 10 === newHead && numToofarLeft.includes(oldHead)){
            let updatedHead = oldHead + 90
            return 'c' + updatedHead
        }
            //Next head will exceed boudning heading Left
        if(oldHead + 10 === newHead && toofarRight.includes(oldHead)){
            let updatedHead = oldHead - 90
            return 'c' + updatedHead
        }

        
    return false
    }

    const correctSnake = (updatedHead) =>{
        Snake.headLocation = updatedHead
    }

    //chages color/plots snake body
    const plotSnake = () =>{
        //console.log(Snake.bodyLocations)
        if(Snake.tailLocation === undefined){
            return
        }
        for(let i=0; i<Snake.bodyLocations.length;i++){
            document.getElementById(Snake.bodyLocations[i]).style.backgroundColor = snakeColor
        }
        //console.log(Snake.bodyLocations[Snake.bodyLocations.length -1])
        document.getElementById(Snake.headLocation).style.backgroundColor= snakeColor
        removeTail()
    }

    //remove tail as it moves
    const removeTail = () =>{
        var tail = document.getElementById(Snake.tailLocation)
        if(tail === null || tail === undefined){
            return
        }
        tail.style.backgroundColor = gameBoardColor
    }

    // Event listener for keydown
    document.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(event) {
        const key = event.key;
        if(key === 'ArrowLeft'){
            pressedButton="LEFT"
        }
        if(key === 'ArrowUp'){
            pressedButton="UP"
        }
        if(key === 'ArrowRight'){
            pressedButton="RIGHT"
        }
        if(key === 'ArrowDown'){
            pressedButton="DOWN"
        }
    }

    // Event listener for keyup
    document.addEventListener('keyup', handleKeyUp);
    function handleKeyUp(event) {
        //const key = event.key;
        //pressedButton = "";
    }

  return (
<div id="main-container">
    <h1>TEST TEST TEST GAME</h1>
    <Customize />
    <h2>Score = {score}</h2>
    <div id="grid-container">
      <button onClick={startGame} style={{backgroundColor:'green'}}>Start Game</button>
      <button onClick={resetGame} style={{backgroundColor:'red'}}>Reset</button>
      <button onClick={pauseGame} style={{backgroundColor:'yellow'}}>Pause</button>
   
        <div className="rows" id="column1">
            <div className="cell" id="c1" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c2" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c3" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c4" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c5" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c6" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c7" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c8" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c9" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c10" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column2">
            <div className="cell" id="c11" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c12" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c13" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c14" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c15" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c16" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c17" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c18" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c19" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c20" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column3">
            <div className="cell" id="c21" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c22" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c23" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c24" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c25" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c26" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c27" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c28" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c29" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c30" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column4">
            <div className="cell" id="c31" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c32" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c33" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c34" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c35" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c36" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c37" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c38" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c39" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c40" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column5">
            <div className="cell" id="c41" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c42" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c43" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c44" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c45" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c46" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c47" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c48" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c49" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c50" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column6">
            <div className="cell" id="c51" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c52" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c53" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c54" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c55" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c56" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c57" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c58" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c59" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c60" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column7">
            <div className="cell" id="c61" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c62" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c63" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c64" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c65" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c66" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c67" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c68" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c69" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c70" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column8">
            <div className="cell" id="c71" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c72" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c73" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c74" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c75" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c76" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c77" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c78" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c79" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c80" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column9">
            <div className="cell" id="c81" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c82" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c83" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c84" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c85" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c86" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c87" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c88" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c89" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c90" style={{backgroundColor: gameBoardColor}}></div>
        </div>

        <div className="rows" id="column10">
            <div className="cell" id="c91" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c92" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c93" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c94" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c95" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c96" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c97" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c98" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c99" style={{backgroundColor: gameBoardColor}}></div>
            <div className="cell" id="c100" style={{backgroundColor: gameBoardColor}}></div>
        </div>
    </div>
</div>
  );
}

export default TestGame;