// https://github.com/hossain909/assignment_Three

// #1. ==============  Convert Kilometer To Meter ==============
function kilometerToMeter(km){
  let meter = 0;
  if(km <= 0){
    return "Please input a positive integer!";
  }else{
    meter = km * 1000;
  }
  return meter;
}



// #2. ============== Budget Calculator ==============//  
function budgetCalculator(watch, phone, laptop){
  let total= 0;
  if((watch <= 0) || (phone <= 0) || (laptop <= 0)){
    return "Please input a positive integer!";
  }else{ 
    total += (watch * 50) + (phone * 100) + (laptop * 500);
  }
  return total
}



// #3. =============== Hotel Cost Function ==============//
function hotelCost(day){
  if(day <= 0){
    return "Please input a positive integer!";
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
}


// #4. ============== Hotel Cost Function ==============// 
function megaFriend(arr){
  let largerName = [0];
  let empty = []
  for(let i = 0; i < arr.length; i++){
    let element = arr[i];
    if(element <= 0 || element > 0){
      return "Please input an array with strings!"
    }if(element.length > largerName.length){
      largerName = element;
    }
  }
  return largerName;
}

