const up = () => {
  window.navigator.vibrate(50);
  document.querySelector('.answer').setAttribute('id', 'up');
}
const down = () => {
  window.navigator.vibrate(50);
  document.querySelector('.answer').setAttribute('id', 'down');
}

//Uzbek then here

//Constitution of Uzbekistan (type Object)
const constitution = {
  1: {
    1: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: ""
    },
    2: {
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: ""
    },
    3: {
      15: "",
      16: ""
    },
    4: {
      17: ""
    }
  },
  2: {
    5: {
      18: "",
      19: "",
      20: ""
    },
    6: {
      21: "",
      22: "",
      23: ""
    },
    7: {
      24: "",
      25: "",
      26: "",
      27: "",
      28: "",
      29: "",
      30: "",
      31: ""
    },
    8: {
      32: "",
      33: "",
      34: "",
      35: ""
    },
    9: {
      36: "",
      37: "",
      38: "",
      39: "",
      40: "",
      41: "",
      42: ""
    },
    10: {
      43: "",
      44: "",
      45: "",
      46: ""
    },
    11: {
      47: "",
      48: "",
      49: "",
      50: "",
      51: "",
      52: ""
    }
  },
  3: {
    12: {
      53: "",
      54: "",
      55: ""
    },
    13: {
      56: "",
      57: "",
      58: "",
      59: "",
      60: "",
      61: "",
      62: ""
    },
    14: {
      63: "",
      64: "",
      65: "",
      66: "",
    },
    15: {
      67: ""
    }
  },
  4: {
    16: {
      68: "",
      69: ""
    },
    17: {
      70: "",
      71: "",
      72: "",
      73: "",
      74: "",
      75: ""
    }
  },
  5: {
    18: {
      76: "",
      77: "",
      78: "",
      79: "",
      80: "",
      81: "",
      82: "",
      83: "",
      84: "",
      85: "",
      86: "",
      87: "",
      88: ""
    },
    19: {
      89: "",
      90: "",
      91: "",
      92: "",
      93: "",
      94: "",
      95: "",
      96: "",
      97: "",
    },
    20: {
      98: ""
    },
    21: {
      99: "",
      100: "",
      101: "",
      102: "",
      103: "",
      104: "",
      105: "",
    },
    22: {
      106: "",
      107: "",
      108: "",
      109: "",
      110: "",
      111: "",
      112: "",
      113: "",
      114: "",
      115: "",
      116: ""
    },
    23: {
      117: ""
    },
    24: {
      118: "",
      119: "",
      120: "",
      121: ""
    },
    25: {
      122: "",
      123: "",
      124: ""
    },
    26: {
      125: "",
      126: ""
    }
  },
  6: {
    0: {
      127: "",
      128: ""
    }
  }
}


const get_one = () => {
  //Uzbek then here
  const bolim = Math.round(Math.random() * Object.keys(constitution).length);
  const bob_max = Number(Object.keys(constitution[bolim]).reverse()[0]);
  const bob_min = Number(Object.keys(constitution[bolim])[0]);
  const bob = Math.round(Math.random() * (bob_max - bob_min)) + bob_min;
  const modda_max = Number(Object.keys(constitution[bolim][bob]).reverse()[0]);
  const modda_min = Number(Object.keys(constitution[bolim][bob])[0]);
  const modda = Math.round(Math.random() * (modda_max - modda_min)) + modda_min;
  if (bolim == 6) {
    document.querySelector('.num').innerHTML = `${bolim}-bo\'lim ${modda}-modda`;
  } else {
    document.querySelector('.num').innerHTML = `${bolim}-bo\'lim ${bob}-bob ${modda}-modda`;
  }
  document.querySelector('.text').innerHTML = constitution[bolim][bob][modda];
  document.querySelector('.modda').innerHTML = `${modda}-modda`
}

let single_mode = false;
const single = () => {
  window.navigator.vibrate(50);
  if (single_mode) {
    document.querySelector('.single').setAttribute('id', 'off');
    document.querySelector('.start').setAttribute('id', 'left-center')
    document.querySelector('.end').setAttribute('id', 'right-center');
    setTimeout(() => {
      document.querySelector('.start').style.display = 'none';
      document.querySelector('.end').style.display = 'none';
    }, 900)
    single_mode = false;
  } else {
    document.querySelector('.single').setAttribute('id', 'on');
    document.querySelector('.start').setAttribute('id', 'center-left')
    document.querySelector('.start').style.display = 'inline-block';
    document.querySelector('.end').setAttribute('id', 'center-right');
    document.querySelector('.end').style.display = 'inline-block';
    single_mode = true;
  }
}

let user_min = 1;
let user_max = 128;

let simple_constitution = {};
const get_one_between = () => {
  for (var prop in constitution) {
    for (var prop2 in constitution[prop]) {
      for (var prop3 in constitution[prop][prop2]) {
        simple_constitution[prop3] = constitution[prop][prop2][prop3]
      }
    }
  }
  //Uzbek then here
  const modda = Math.floor(Math.random() * (user_max - user_min)) + user_min;
  document.querySelector('.text').innerHTML = simple_constitution[modda];
  document.querySelector('.num').innerHTML = document.querySelector('.modda').innerHTML = `${modda}-modda`;
}

const tap = () => {
  window.navigator.vibrate(30);
  single_mode ? get_one_between() : get_one();
}