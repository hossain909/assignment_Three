// https://github.com/hossain909/assignment_Three


// #1. ==============  Kilometer To Meter ==============//
function kilometerToMeter(kilometer){
  let meter;
  if(kilometer <= 0){
    return "Distance cannot be negative or zero";
  }else{
    meter = kilometer * 1000;
  }
  return meter;
};


// #2. ============== Budget Calculator ==============//  
function budgetCalculator(watch,phone,laptop){
  let total= 0;
  if((watch <= 0) || (phone <= 0) || (laptop <= 0)){
    return "Please input a positive number";
  }else{ 
    total += (watch * 50) + (phone * 100) + (laptop * 500);
  }
  return total;
};



// #3. =============== Hotel Cost  ==============//
function hotelCost(day){
  if(isNaN(day) || day <= 0){
    return "Please input a positive number!";
  }else if(day <= 10){
    totalCost = (day * 100)
  }else if(day <=20){
    let first_10_Days = 10 * 100;
    let remaining = day - 10;
    let second_10_Days = remaining * (100 - 20);
    totalCost = first_10_Days + second_10_Days;
  }else{
    let first_10_Days = 10 * 100;
    let second_10_Days = 10 * (100 - 20);
    let remaining = day - 20;
    let after_20_Days = remaining * 50;
    totalCost = first_10_Days + second_10_Days + after_20_Days;
  }
  return totalCost;
};



// #4. ============== Mega Friend ==============// 
function megaFriend(array){
  let largerName = [0];
  // check if array is empty
  if(array.length < 1) {
    return "This array is empty";
  }else{
    for(let i = 0; i < array.length; i++){
      let element = array[i];
      if(element <= 0 || element > 0){
        return "Please input an array with string's"
      }if (element.length > largerName.length){
          largerName = element
      }
    }
  }
  return largerName;
};
console.log(megaFriend([1,2,2,2]))
