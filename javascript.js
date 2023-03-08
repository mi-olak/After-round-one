
function myStart() {
    document.getElementById('computer').style.display = 'block';
    document.getElementById('multiplayer').style.display = 'block';
    document.getElementById('end').style.display = 'block';
}
function myEnd() {
    document.getElementById('computer').style.display = 'none';
    document.getElementById('multiplayer').style.display = 'none';
    document.getElementById('end').style.display = 'none';
    document.getElementById('results').style.display = 'none';
}
function vsCom() {

    let playGame = confirm('Ready to play?');

    if (playGame) {
        document.getElementById('multiplayer').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        document.getElementById('computer').style.width = '100%';
        let playerChoice = prompt('please pick a number between 1 to 10.');


        if (playerChoice < 10 && playerChoice > 0) {

            document.getElementById('pvalue').innerHTML = playerChoice;
            alert("Computer's turn to choose");
            alert('Computer chooses...');

            let computerChoice = Math.floor(Math.random() * 10 + 1)
            alert(computerChoice);

            document.getElementById('cvalue').innerHTML = computerChoice;
            document.getElementById('results').style.display = 'block';

            setTimeout(myResult, 3000);

            function myResult() {

                sumtotal = Math.floor(Math.random() * 10 + 1);
                alert(sumtotal);
                document.getElementById('solution').innerHTML = sumtotal;

                if (sumtotal === playerChoice) {
                    verdit = "you win";
                } else if (sumtotal === computerChoice) {
                    verdit = "computer wins";
                } else {
                    verdit = "Nobody won";
                };

                document.getElementById('results').style.display = 'block';
                document.getElementById('playertwo').style.display = "none";
                document.getElementById('p2value').style.display = "none";
                document.getElementById('final').innerHTML = verdit;

            };


        } else {
            let playerChoice = prompt('please pick a number between 1 to 10.');

            if (playerChoice < 10 && playerChoice > 0) {

                document.getElementById('pvalue').innerHTML = playerChoice;
                alert("Computer's turn to choose");
                alert('Computer chooses...')

                let computerChoice = Math.floor(Math.random() * 10 + 1);
                alert(computerChoice);
                document.getElementById('cvalue').innerHTML = computerChoice;

                let verdit;

                sumtotal = Math.floor(Math.random() * 10 + 1);
                /* this is where the issue is, for some fucking reason, the final verdict is not showing. */
                document.getElementById('solution').innerHTML = sumtotal;

                if (playerChoice === sumtotal) {
                    verdit = "you win";
                } else if (computerChoice === sumtotal) {
                    verdit = "computer wins";
                } else {
                    verdit = "Nobody won";
                };



                document.getElementById('final').innerHTML = verdit;
                document.getElementById('results').style.display = 'block';



            } else {
                alert('please read the instructions and try again!');
                document.getElementById('results').style.display = 'none';
                document.getElementById('options').style.display = 'none';
            }

        }



    } else {
        document.getElementById('multiplayer').style.display = 'block';
        document.getElementById('results').style.display = 'none';
        alert('maybe some other time!')
    }

}

function mplay() {
    let playGame = confirm('3 players');

    if (playGame) {
        let playerOne = prompt('player one! pick a number between 0 & 10');

        document.getElementById('pvalue').innerHTML = playerOne;

        if (playerOne > 0 && playerOne < 10) {
            let playerTwo;
            playerTwo = prompt('playerTwo! pick a number between 0 & 10');
            if ((playerTwo > 0 && playerTwo < 10) && playerOne !== playerTwo) {
                document.getElementById('p2value').innerHTML = playerTwo;
                document.getElementById('playertwo').style.display = "block";
                alert("Computer's turn to choose");
                alert('Computer chooses...');
                document.getElementById('p2value').style.display = "block";
                let computerChoice = Math.floor(Math.random() * 10 + 1);
                if (computerChoice !== playerOne && computerChoice !== playerTwo) {
                    alert(computerChoice);
                } else {
                    alert('reload')
                };
                document.getElementById('cvalue').innerHTML = computerChoice;

                setTimeout(myResults, 3000)

                function myResults() {
                    let sumtotal = Math.floor(Math.random() * 10 + 1);
                    alert(sumtotal);
                    document.getElementById('solution').innerHTML = sumtotal;

                    if (sumtotal === playerOne) {
                        verdit = "playerOne wins"
                    } else if (sumtotal === playerTwo) {
                        verdit = 'playertwo wins'
                    } else if (sumtotal === computerChoice) {
                        verdit = 'computer wins'
                    } else {
                        verdit = 'nobody wins'
                    }
                    document.getElementById('results').style.display = 'block';
                    document.getElementById('final').innerHTML = verdit;
                    document.getElementById('computer').style.display = "none"
                    document.getElementById('multiplayer').style.width = "100%"

                }
            } else {
                alert('please read the instructions and try again!')
            }
        } else {
            alert('please read the instructions and try again!');
        }
    } else {
        alert('some other time then!')
        document.getElementById('computer').style.display = 'block';
        document.getElementById('results').style.display = 'none';
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}







/*
function startGame() {


    let playGame = confirm('Do you want to play "After Round One" game?');

    if (playGame) {
        let playerChoice = prompt('please pick a number between 1 to 10.');

        if (playerChoice) {
            let playerOne = playerChoice;
            if (playerChoice <= 10) {
                alert('my turn to choose');

                let computerChoice = Math.floor(Math.random() * 10 + 1);
                alert('i choose ...')
                alert(computerChoice);
                alert('after round one, original panadol extra, o tun gbede!')

                let bothHands = Math.floor(Math.random() * 11);
                alert(bothHands);
                if (bothHands === playerChoice) {
                    alert('you win this round')
                } else if (bothHands === computerChoice) {
                    alert('computer wins this round')
                } else {
                    alert('nobody wins')
                };


                let playAgain = confirm('play again?')
                playAgain ? location.reload() : alert("Ok, maybe next time");




            } else {
                let playerChoice = prompt('please pick a number between 1 to 10.');
                if (playerChoice >= 10) {
                    alert("OK, BYE!");
                } else {
                    alert('my turn to choose')
                    let computerChoice = Math.floor(Math.random() * 10 + 1);
                    alert('i choose ...')
                    alert(computerChoice);
                    alert('after round one, original panadol extra, o tun gbede!')

                    let bothHands = Math.floor(Math.random() * 11);
                    alert(bothHands);
                    if (bothHands === playerChoice) {
                        alert('you win this round')
                    } else if (bothHands === computerChoice) {
                        alert('computer wins this round')
                    } else {
                        alert('nobody wins')

                        let playAgain = confirm('play again?')
                        playAgain ? location.reload() : alert("Ok, maybe next time");
                    };

                }
            }
        } else {
            alert('Ok, maybe some other time.')
        }
    }
}
*/

/*
function myPractice() {
    let ppp = prompt('pick a number?');
    
    document.getElementById('practice').innerHTML = ppp;

    if (ppp > 35) {
        document.getElementById('practice2').innerHTML = 'computer wins!';
    } else if (ppp < 35) {
        document.getElementById('practice2').innerHTML = 'you wins!';
    } else {
        document.getElementById('practice2').innerHTML = 'nobody wins!';
    }
}
*/
