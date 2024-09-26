
// tailwind css config code 
tailwind.config = {
  theme: {
    extend: {
      colors: {
        btnBack: 'rgb(180, 244, 97)',
        paraClr: 'rgba(17, 17, 17, 0.7)',
        headingClr: 'rgb(17, 17, 17)',
      },
     fontFamily: {
      bodyFont:["Lexend", 'sans-serif'],
     }
    }
  }
}

//update showpages
 function showPages(p1, p2){
  const pageOne = document.getElementById(p1);
  const pageTwo = document.getElementById(p2);
  pageOne.classList.remove('hidden');
  pageTwo.classList.add('hidden');
 }
 //control btnBack with function
function showBtnBack(activBtn, disableBtn) {
  const donationButton = document.getElementById(activBtn);
  const donationHistoryButton = document.getElementById(disableBtn);
  donationButton.classList.add('bg-btnBack', 'text-headingClr');
  donationButton.classList.remove('bg-gray-200', 'text-paraClr');
  donationHistoryButton.classList.remove('bg-btnBack', 'text-headingClr');
  donationHistoryButton.classList.add('bg-gray-200', 'text-paraClr');
}
//control modal with function
const modal = document.getElementById('modal');
function showModal(){
  modal.classList.toggle('hidden');
  modal.classList.toggle('flex');
}
//  my AmountId 
const myAmount = document.getElementById('my-amount');
let myIntAmount = parseFloat(myAmount.innerText);

//amount increase, decrease, creareHistory, showModal control with funtion
function commonFunction(input, amount, title){
  // donated amountId
  const donatedAmount = document.getElementById(amount);
  let donatedIntAmount = parseFloat(donatedAmount.innerText);
  // dontated title
  const donateTitle = document.getElementById(title).innerText;
  //donate input value part
  const donateInput = document.getElementById(input);
  const donateInputValue = donateInput.value ;
  const donatValue = parseFloat(donateInputValue);
  //input value condition
  if (donateInputValue === "" || isNaN(donateInputValue) || donateInputValue <= 0 || !/^\d+(\.\d+)?$/.test(donateInputValue)) {
    alert('Invalid donation');
  }
  else{
    showModal();
    //increase and decrease part
    myIntAmount -= donatValue;
    myAmount.innerText = myIntAmount.toFixed(2);
    donatedIntAmount += donatValue;
    donatedAmount.innerText = donatedIntAmount.toFixed(2);
    //donate history part
    const historyContainer = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.className = 'border text-black p-4 rounded-lg mb-4';
    const h3 = document.createElement('h3');
    h3.className = 'sm:text-xl text-base font-bold mb-3';
    const p = document.createElement('p');
    p.className = 'sm:text-base text-sm'
    const getDate = new Date();
    p.innerText = 'Date: ' + getDate;
    h3.innerText =`${donateInputValue} Taka is donated for ${donateTitle} ` ;
    historyContainer.appendChild(newHistory);
    newHistory.appendChild(h3);
    newHistory.appendChild(p);
  }
  donateInput.value = '';
};
