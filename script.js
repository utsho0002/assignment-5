// function for get element by id
function getId(id){
    return document.getElementById(id);
}



const arr=[];

//Function for Updating the div.
function updateHistory(){
    let parent = getId('history-parent');
    parent.innerHTML = `
         <div class="" id="history-parent">

            </div>
    `; 

    for(let i of arr){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between p-2 rounded-[8px] bg-[#fafafa] shadow-sm mt-[10px] w-auto items-center call-his">
                <div>
                    <h1 class="font-bold">${i.name}</h1>
                    <p>${i.number}</p>
                </div>
                <div>
                   ${i.time}
                </div>
             </div>`;
        parent.appendChild(div);
    }
}


// Making the Likes Count Section
let likes= document.getElementsByClassName('fa-heart');
let count=0;
for(let i of likes){
    i.addEventListener('click',function(event){
        count++;
       getId('total-likes').innerText=count;
    })
}


// Calling & showing alert
getId('emergency').addEventListener('click',function(event){
     let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
            alert('Calling: ' +getId('emergency-msg').innerText +' '+getId('emergency-num').innerText);
            data={
                name:getId('emergency-h').innerText,
                number:getId('emergency-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      }      
});

getId('police').addEventListener('click',function(event){
    let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
            alert('Calling: ' +getId('police-msg').innerText +' '+getId('police-num').innerText);
            data={
                name:getId('police-h').innerText,
                number:getId('police-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      }     
    
});

getId('fire').addEventListener('click',function(event){
      let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
            alert('Calling: ' +getId('fire-msg').innerText +' '+getId('fire-num').innerText);
             data={
                name:getId('fire-h').innerText,
                number:getId('fire-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      }   
});

getId('ambulance').addEventListener('click',function(event){
      let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
             alert('Calling: ' +getId('ambulance-msg').innerText +' '+getId('ambulance-num').innerText);
              data={
                name:getId('ambulance-h').innerText,
                number:getId('ambulance-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      } 
});

getId('women').addEventListener('click',function(event){
      let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
           alert('Calling: ' +getId('women-msg').innerText +' '+getId('women-num').innerText);
            data={
                name:getId('women-h').innerText,
                number:getId('women-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      } 
    
});

getId('anti').addEventListener('click',function(event){
      let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
            alert('Calling: ' +getId('anti-msg').innerText +' '+getId('anti-num').innerText);
             data={
                name:getId('anti-h').innerText,
                number:getId('anti-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      } 
   
});

getId('electricity').addEventListener('click',function(event){
      let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
            alert('Calling: ' +getId('electricity-msg').innerText +' '+getId('electricity-num').innerText);
             data={
                name:getId('electricity-h').innerText,
                number:getId('electricity-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      }     
});

getId('brac').addEventListener('click',function(event){
      let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
          alert('Calling: ' +getId('brac-msg').innerText +' '+getId('brac-num').innerText);
          data={
                name:getId('brac-h').innerText,
                number:getId('brac-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      }   
});

getId('railway').addEventListener('click',function(event){
      let amount= parseInt(getId('total-amount').innerText);
        if(amount>0){
            amount=amount-20;
            getId('total-amount').innerText=amount;
            alert('Calling: ' +getId('railway-msg').innerText +' '+getId('railway-num').innerText);
             data={
                name:getId('railway-h').innerText,
                number:getId('railway-num').innerText,
                time: new Date().toLocaleTimeString()
            }
            arr.push(data);
            updateHistory();
        }
        else{
            alert('Insufficient Balance');
            return;
      }     
});


// Call History Clear Section-
getId('clear').addEventListener('click',function(event){
 let parent = getId('history-parent');
    parent.innerHTML = ``; 
     arr.length = 0; 
})


// Copy Section
  let c=0;
getId('emergency-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('emergency-num').innerText);
    navigator.clipboard.writeText(document.getElementById('emergency-num').innerText);
});

getId('police-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('police-num').innerText);
    navigator.clipboard.writeText(document.getElementById('police-num').innerText);
});

getId('fire-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('fire-num').innerText);
    navigator.clipboard.writeText(document.getElementById('fire-num').innerText);
});

getId('ambulance-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('ambulance-num').innerText);
    navigator.clipboard.writeText(document.getElementById('ambulance-num').innerText);
});

getId('women-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('women-num').innerText);
    navigator.clipboard.writeText(document.getElementById('women-num').innerText);
});

getId('anti-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('anti-num').innerText);
    navigator.clipboard.writeText(document.getElementById('anti-num').innerText);
});

getId('electricity-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('electricity-num').innerText);
    navigator.clipboard.writeText(document.getElementById('electricity-num').innerText);
});

getId('brac-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('brac-num').innerText);
    navigator.clipboard.writeText(document.getElementById('brac-num').innerText);
});

getId('railway-copy').addEventListener('click',function(event){
    c++;
    getId('copy-nav').innerText=c;
    alert('Number Copied '+getId('railway-num').innerText);
    navigator.clipboard.writeText(document.getElementById('railway-num').innerText);
});
