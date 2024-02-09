// src/cents-to-decimals.spec.js

function centsToDecimals(cents) {

    if (typeof cents === 'string') {
      return undefined
    }
  
    if (!cents) {
      return 0
    }
    
    return cents / 100;
  
  }