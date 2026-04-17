let randomNumber= parseInt(Math.random()*100 + 1);
        
       const inputNumber= document.querySelector('#inputNumber');
       const submitButton= document.querySelector('#submit');
       const lastGuess= document.querySelector('#last_Guess');
       const remainingGuess= document.querySelector('#remainingGuess');
       const lowOrHigh= document.querySelector('#lowOrHigh');
       let start= document.querySelector('#resultPara');
       const nGame = document.querySelector('#newGame');


       let prevGuess= [];
       let numGuess= 1;
       let playGame = true;

       if (playGame) {
        submitButton.addEventListener('click' , function (e) {
            e.preventDefault();
            let guess= (parseInt(inputNumber.value))
            console.log(guess);
            validateGuess(guess); 
        })
       }

       function validateGuess(guess) {
        if (isNaN(guess)) {
            alert('Please enter a valid number')
        }
        else if(guess<1){
            alert('Please enter a number greater than 1')
        }
        else if(guess>100){
            alert('Please enter a number greater than 1')
        }
        else{
            prevGuess.push(guess)
            if (numGuess>=10) {
                displayGuess(guess)
                displayMessage(`Game Over your number was ${randomNumber}`)
                endGame()

            }
            else{
                checkGuess(guess)
                displayGuess(guess)
            }
        }
       }

       function checkGuess(guess) {
        if (guess===randomNumber) {
            displayMessage("You guessed it right")
            endGame()
        }
        else if(guess<randomNumber){
            displayMessage("Your number is too low")
        }
        else if(guess>randomNumber){
            displayMessage("Your number is too high")
        }
       }

       function displayGuess(guess) {
        inputNumber.value= ""
        lastGuess.innerHTML+=`${guess},`
        numGuess++
        remainingGuess.innerHTML =`${11-numGuess}` 
       }

       function displayMessage(message) {
        lowOrHigh.innerHTML= `<h3>${message}</h3>`
       }

       function endGame() {
        inputNumber.value= '';
        inputNumber.setAttribute('disabled' ,'');
        // const nGame = document.querySelector('#newGame');
        nGame.innerHTML = 'Start New Game'
        // p.classList.add('button')
        // p.innerHTML = `<h2 id= "newGame"> Start New Game</h2>`;
        // start.appendChild(p);
        playGame= false;
        startGame();
       }
       
       function startGame() {
        // const anotherGame= document.querySelector('#newGame')
        nGame.addEventListener('click', function (e) {
            randomNumber= parseInt(Math.random()*100 + 1);
            prevGuess = []
            numGuess = 1
            lastGuess.innerHTML = '';
            remainingGuess.innerHTML =`${11-numGuess}`;
            inputNumber.removeAttribute('disabled');
            // start.remove(nGame);
            nGame.innerHTML=''
            playGame = true;

        });
       }

