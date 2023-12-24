'use strict';
// document.querySelector('.message').textContent='🙂 Correct Number !';

// console.log(document.querySelector('.message').textContent);   
// document.querySelector('.number').textContent='13';
// document.querySelector('.score').textContent='20';
// document.querySelector('.guess').value='20';
// console.log(document.querySelector('.guess').value='20');

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent='20'
// document.querySelector('.score').textContent='30';
// document.querySelector('.guess').value='20';
// console.log(document.querySelector('.guess').value);
// const g=function(){
//     const guess =document.querySelector('.guess').value;
//     console.log(guess);
// }


// const secretNumber=Math.trunc(Math.random()*20)+1;
// let score=20;
// document.querySelector('.number').textContent=secretNumber;

// document.querySelector('.check').addEventListener('click', function(){
//     const guess=Number(document.querySelector('.guess').value);

//     console.log(guess,typeof guess);
//     if(!guess){
//         document.querySelector('.message').textContent='🙂 No Number!'
//     }
//     else if(guess===secretNumber){
//         document.querySelector('.message').textContent='🙌 correct Number';
        
//     }
//     else if(guess >secretNumber){
//         if(score>1){
//         document.querySelector('.message').textContent='📈 Too High';
//         score--;
//         document.querySelector('.score').textContent=score;
//         }
//         else{
//             document.querySelector('.message').textContent='👊 You Lost the Game';
        
//         document.querySelector('.score').textContent=0;
//     }
   
//     }
//     else if(guess < secretNumber){
    
//         if(score>1){
//                 document.querySelector('.message').textContent='📉 Too Low';
//                 score--;
//                 document.querySelector('.score').textContent=score;
//             }else{
//                 document.querySelector('.message').textContent='👊 You Lost the Game';
//                 document.querySelector('.score').textContent=0;
//                  }}
// });

// const secretNumber=Math.trunc(Math.random()*20)+1;
// let score=20;
//  document.querySelector('.number').textContent=secretNumber;

// document.querySelector('.check').addEventListener('click',function(){
//     const guess=Number(document.querySelector('.guess').value);
//     // console.log( typeof guess);
//     if(!guess){
//         document.querySelector('.message').textContent='No Number';
//     }
//     else if(guess ===secretNumber){
//         document.querySelector('.message').textContent='Correct Number';
//         document.querySelector('body').style.backgroundColor='#60b347';
//         document.querySelector('.number').style.width='30rem';
//     }
//     else if(guess > secretNumber){
//         if(score>1){
//         document.querySelector('.message').textContent='Too High';
//         score--;
//         document.querySelector('.score').textContent=score;

//         }
//         document.querySelector('.message').textContent='You Lost The Game';
//     }
//     else if(guess < secretNumber){
//         if(score >1){
//             document.querySelector('.message').textContent='Too Low';
//             score--;
//             document.querySelector('.score').textContent=score;
//         }
//         document.querySelector('.message').textContent='You Lost The Game';
//     }


// });

// let secretNumber=Math.trunc(Math.random()*20)+1;
 
// // document.querySelector('.number').textContent=secretNumber;
// let score=20;
// let highScore=0;

// document.querySelector('.check').addEventListener('click',function(){
//     const guess=Number(document.querySelector('.guess').value);
//     console.log(typeof guess , guess);
//     if(!guess){
//         document.querySelector('.message').textContent='No Number';
//     }else if(guess=== secretNumber){
//         document.querySelector('.message').textContent='Correct Number';
//         document.querySelector('body').style.backgroundColor='green';
//         document.querySelector('.number').style.width='30rem';
//         document.querySelector('.number').textContent=secretNumber;
//         document.querySelector('.number').style.color='blue';
//         if(score > highScore){
//             highScore=score;
//             document.querySelector('.highscore').textContent=highScore;
//         }
//     }else if(guess > secretNumber){
//         if(score > 1) {
//             document.querySelector('.message').textContent='Too Big';
//             score--;
//             document.querySelector('.score').textContent=score;
//         }else{
//             document.querySelector('.message').textContent='You Lost The Game';
//             document.querySelector('body').style.backgroundColor='brown';
//             document.querySelector('.number').style.color='cyan';

//             document.querySelector('.score').textContent=0;
//         } 
//     }else if(guess < secretNumber){
//         if(score > 1){
//             document.querySelector('.message').textContent='Too Small';
//             score--;
//             document.querySelector('.score').textContent=score;
//         }else{
//             document.querySelector('.message').textContent='You Lost The Game';
//             document.querySelector('body').style.backgroundColor='brown';
//             document.querySelector('.number').style.color='Blue';
//             document.querySelector('.score').textContent=0;
//         }
//     }
// });

// document.querySelector('.again').addEventListener('click', function(){
//     score=20;
//     secretNumber=Math.trunc(Math.random()*20)+1;
//     document.querySelector('.message').textContent='Start Guessing...';
//     document.querySelector('.score').textContent=score;
//     document.querySelector('.number').textContent='?';
//     document.querySelector('.guess').value='';
//     document.querySelector('body').style.backgroundColor='#222';
//     document.querySelector('.number').style.width='15rem';
// });
let secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=secretNumber;
let score=20;
let highScore=0;
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        // document.querySelector('.message').textContent='No Number';
        displayMessage('No Number');
    }else if(guess===secretNumber){
        // document.querySelector('.message').textContent='Correct Number';
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='20rem';
        if(score > highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent=guess > secretNumber ? 'Too High' : 'Too Low';
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            // document.querySelector('.message').textContent='You Lost The Game';
            displayMessage('You Lost The Game');
        }
    }
    // else if(guess > secretNumber){
    //     if(score >1){
    //     document.querySelector('.message').textContent='Too High';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent='You Lost The Game';
    //     }
    // }else if(guess < secretNumber){
    //     if(score > 1 ){
    //     document.querySelector('.message').textContent='Too Low';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent='You Lost The Game';
    //     }
    // }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent='Start Guessing ...';
    displayMessage('start guessing...')
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';    
    document.querySelector('body').style.backgroundColor='#222';
});