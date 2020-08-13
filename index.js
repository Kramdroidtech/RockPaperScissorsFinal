const startgame = () =>{
  let playerScore = 0;
  let computerScore = 0;
  
  const playGame = () => {
    const playerHand = document.querySelector('#playerHand');
    const computerHand = document.querySelector('#computerHand');
    const pickButtons = document.querySelectorAll('.pick-button button');
    const computerOptions = ['rock','paper','scissor'];
    
    
    pickButtons.forEach(picker => {
      picker.addEventListener('click',(e) =>{
        
        const computerNum = Math.floor(Math.random() * 3);
        
        const computerChoice = computerOptions[computerNum];
        
        const playerpick = e.currentTarget.dataset.pick;
      
          
        setTimeout(function(){
          
          checking(playerpick,computerChoice);
          
          playerHand.src = `img/${playerpick}.png`;
          computerHand.src = `img/${computerChoice}.png`;
        }, 1000); 
        
       
        playerHand.style.animation = 'playerShake 1s ease';
        computerHand.style.animation = 'computerShake 1s ease';
        
        setTimeout(() =>{
          playerHand.src = `img/rock.png`;
          computerHand.src = `img/rock.png`;
          
          playerHand.style.animation = '';
          computerHand.style.animation = '';
        
        },2000);
        
      });
    });
  }
  
  const updateScore = ()=>{
    document.querySelector('#p-value').textContent = playerScore;
    document.querySelector('#c-value').textContent = computerScore;
  }
  
  const checking = (player,computer) =>{
    const result = document.querySelector('#result');
    if(player === computer){
      result.textContent = 'Its a tie'
      return;
    }
    if(player === 'rock'){
      if(computer === 'scissor'){
        result.textContent = 'Player Win';
        playerScore++;
        updateScore();
        return;
      }
      else{
        result.textContent = 'Computer Win';
        computerScore++;
        updateScore();
        return;
      }
    }
    if(player === 'paper'){
      if(computer === 'rock'){
        result.textContent = 'Player Win';
        playerScore++;
        updateScore();
        return;
      }
      else{
        result.textContent = 'Computer Win';
        computerScore++;
        updateScore();
        return;
      }
    }
    if(player === 'scissor'){
      if(computer === 'paper'){
        result.textContent = 'Player Win';
        playerScore++;
        updateScore();
        return;
      }
      else{
        result.textContent = 'Computer Win';
        computerScore++;
        updateScore();
        return;
      }
    }
    
  }
  
  //playGame
  playGame();
}
startgame();