/* https://www.codewars.com/kata/568d0dd208ee69389d000016/solutions/javascript */

function rentalCarCost(d) {
  return 40 * d - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
}

/* Second attempt
  
    let cost = 40 * d;
  
    if (d >= 7) {
      cost -= 50;
    } else if (d >= 3) {
      cost -= 20;
    }
  
    return cost;
  }
  */

/* First attempt
    
  if ( d < 3){
    return 40 * d
  }else if( 3 <= d && d < 7){
    return 40 * d - 20
  }else if( d >= 7){
    return 40 * d - 50
  }
  */
