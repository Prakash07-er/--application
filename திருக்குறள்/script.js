const form =document.querySelector('form');
const searchKural = document.getElementById('searchKural');
const tamil = document.getElementById('tamil');
const english = document.getElementById('english');

form.addEventListener( 'submit', (e) => {
    e.preventDefault();
    let number = searchKural.value;
    console.log(number);
    fetchAPI(number)
})

async function fetchAPI(number){

const baseURL=`https://api-thirukkural.vercel.app/api?num=${number}`

const response = await fetch(baseURL); 
const data = await response.json();
console.log(data)
const details = data ;
console.log(details.line1)
if (`${number}` >= 1330){
    alert("Please enter the number within 1330");

}
    else{
        tamil.innerHTML = `
        <div class="card">
                <div class="card-body">
                <h1 class="chapter">${details.chap_tam}</h1><br><br>
                <hr>
                <h5> ${details.line1}</h5><br>
                <h5> ${details.line2}</h5><br> 
                <hr>
                <h3><b class="bold">அதிகாரம்: </b>${details.chapgrp_tam}</h3><br>
                <hr>
                <h3> <b class="bold">முப்பால்: </b>  ${details.sect_tam}</h3><br>
                <hr>
                <h3 ><b class="bold">பொருள்: </b><span id="exp">${details.tam_exp} </span></h3><br>
                </div>
        </div>`
        
        english.innerHTML = `
        <div class="card">
                <div class="card-body">
                <h1 class="chapter">${details.chap_eng}</h1><br><br>
                <hr>
                <h5> ${details.eng_exp}</h5><br>
                <hr>
                <h3><b class="bold">Groups : </b> ${details.chapgrp_eng}</h3><br>
                <hr>
                <h3><b class="bold">Sections :  </b>${details.sect_eng}</h3><br>
                <hr>
                <h5> <b class="bold">Explanation : </b> ${details.eng}</h5><br>
                </div>
               

        </div>`
    }


}



