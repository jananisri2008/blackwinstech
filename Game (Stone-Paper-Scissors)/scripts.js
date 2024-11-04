let choose=['stone','paper','scissors'];
let start=0;
document.getElementById('stone').addEventListener('click',()=>play('stone'));
document.getElementById('paper').addEventListener('click',()=>play('paper'));
document.getElementById('scissors').addEventListener('click',()=>play('scissors'));

function play(user){
        let computer=choose[start];
        start=(start+1)%choose.length;
        finalresult(user,computer);
}
function finalresult(user,computer){
    if(user===computer)
        {
        alert(`Tie both select same ${user}`);
        }else if((user==='stone' && computer==='scissors')||
                 (user==='paper' && computer==='rock')||
                 (user==='scissors' && computer==='paper')
                )
                {
                    alert(`Winner User choose ${user} Computer choose ${computer}`);
                }else{
                    alert(`Looser Computer choose ${computer} User choose ${user}`);
                }
}