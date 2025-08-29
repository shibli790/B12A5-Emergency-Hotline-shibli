// console.log("shibli ahmed here");


let transationData = [];


function heartUp(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// 1 like heart emergency //////////////////////////////////////////////
document.getElementById("like-link").addEventListener("click", function (e) {
  e.preventDefault();

  let likeNumber = heartUp("like-display");
  likeNumber++;

  document.getElementById("like-display").innerText = likeNumber;
});

// btn ...........................................
document
  .getElementById("btn-emergency")
  .addEventListener("click", function (e) {
    e.preventDefault();

    

    const availAbleBalance = parseInt(
      document.getElementById("coin-valance").innerText
    );
    const payCoin = availAbleBalance - 20;

    if (payCoin < 0) {
      alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
      return;
    }

    alert(" 📞 Calling Nation Emergency Service 999... ");
    const lastCoin = (document.getElementById("coin-valance").innerText =
      payCoin);

    // history start 1emergency..................................
    const data = {
      name: "National Emergency Number",
      phone: "999",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
  });

// 2nd like heart///////////////////////////////////////////////////////
document.getElementById("like-Police").addEventListener("click", function (e) {
  e.preventDefault();

  let likeNumber = heartUp("like-display");
  likeNumber++;

  document.getElementById("like-display").innerText = likeNumber;
});

// btn .......................................................
document.getElementById("btn-Police").addEventListener("click", function (e) {
  e.preventDefault();
  const availAbleBalance = parseInt(
    document.getElementById("coin-valance").innerText
  );
  const payCoin = availAbleBalance - 20;

  if (payCoin < 0) {
    alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
    return;
  }
  //  console.log('pay coin')
  alert(" 📞 Calling Nation Emergency Service 999... ");
  const lastCoin = (document.getElementById("coin-valance").innerText =
    payCoin);

     // history start police ...............................
    const data = {
      name: "Police Helpline Number",
      phone: "999",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
});

// 3nd like heart /////////////////////////////////////////////
document.getElementById("like-fire").addEventListener("click", function (e) {
  e.preventDefault();

  let likeNumber = heartUp("like-display");
  likeNumber++;

  document.getElementById("like-display").innerText = likeNumber;
});

// btn ---
document.getElementById("btn-fire").addEventListener("click", function (e) {
  e.preventDefault();
  const availAbleBalance = parseInt(
    document.getElementById("coin-valance").innerText
  );
  const payCoin = availAbleBalance - 20;

  if (payCoin < 0) {
    alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
    return;
  }
  //  console.log('pay coin')
  alert(" 📞 Calling Nation Emergency Service 999... ");
  const lastCoin = (document.getElementById("coin-valance").innerText =
    payCoin);
      // history start fire  ...............................
    const data = {
      name: "Fire Service Number",
      phone: "999",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
});
// 4nd like heart /////////////////////////////////////////////////////
document
  .getElementById("like-ambulance")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let likeNumber = heartUp("like-display");
    likeNumber++;

    document.getElementById("like-display").innerText = likeNumber;
  });
// btn ---.............................................
document
  .getElementById("btn-Ambulance")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const availAbleBalance = parseInt(
      document.getElementById("coin-valance").innerText
    );
    const payCoin = availAbleBalance - 20;

    if (payCoin < 0) {
      alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
      return;
    }
    //  console.log('pay coin')
    alert(" 📞 Calling Nation Emergency Service 999... ");
    const lastCoin = (document.getElementById("coin-valance").innerText =
      payCoin);
        // history start police ...............................
    const data = {
      name: "Ambulance Service",
      phone: "1994-999999",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
  });
// 5nd like heart ///////////////////////////////////////////////////////
document.getElementById("like-women").addEventListener("click", function (e) {
  e.preventDefault();

  let likeNumber = heartUp("like-display");
  likeNumber++;

  document.getElementById("like-display").innerText = likeNumber;
});
// btn ---..................................................
document.getElementById("btn-Women").addEventListener("click", function (e) {
  e.preventDefault();
  const availAbleBalance = parseInt(
    document.getElementById("coin-valance").innerText
  );
  const payCoin = availAbleBalance - 20;

  if (payCoin < 0) {
    alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
    return;
  }
  //  console.log('pay coin')
  alert(" 📞 Calling Nation Emergency Service 999... ");
  const lastCoin = (document.getElementById("coin-valance").innerText =
    payCoin);
      // history start police ...............................
    const data = {
      name: "Women & Child Helpline",
      phone: "109",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
});
// 6nd like heart //////////////////////////////////////////////////
document.getElementById("like-anti").addEventListener("click", function (e) {
  e.preventDefault();

  let likeNumber = heartUp("like-display");
  likeNumber++;

  document.getElementById("like-display").innerText = likeNumber;
});
// btn ---.......................................
document.getElementById("btn-Anti").addEventListener("click", function (e) {
  e.preventDefault();
  const availAbleBalance = parseInt(
    document.getElementById("coin-valance").innerText
  );
  const payCoin = availAbleBalance - 20;

  if (payCoin < 0) {
    alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
    return;
  }
  //  console.log('pay coin')
  alert(" 📞 Calling Nation Emergency Service 999... ");
  const lastCoin = (document.getElementById("coin-valance").innerText =
    payCoin);
      // history start police ...............................
    const data = {
      name: "Anti-Corruption Helpline",
      phone: "106",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
});
// 7nd like heart/////////////////////////////////////////////////
document
  .getElementById("like-electricity")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let likeNumber = heartUp("like-display");
    likeNumber++;

    document.getElementById("like-display").innerText = likeNumber;
  });
// btn ---.................................................
document
  .getElementById("btn-Electricity")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const availAbleBalance = parseInt(
      document.getElementById("coin-valance").innerText
    );
    const payCoin = availAbleBalance - 20;

    if (payCoin < 0) {
      alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
      return;
    }
    //  console.log('pay coin')
    alert(" 📞 Calling Nation Emergency Service 999... ");
    const lastCoin = (document.getElementById("coin-valance").innerText =
      payCoin);
        // history start police ...............................
    const data = {
      name: "Electricity Helpline",
      phone: "16216",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
  });

// 8nd like heart /////////////////////////////////////////////////
document.getElementById("like-barc").addEventListener("click", function (e) {
  e.preventDefault();

  let likeNumber = heartUp("like-display");
  likeNumber++;

  document.getElementById("like-display").innerText = likeNumber;
});
// btn ---.....................................................
document.getElementById("btn-Brac").addEventListener("click", function (e) {
  e.preventDefault();
  const availAbleBalance = parseInt(
    document.getElementById("coin-valance").innerText
  );
  const payCoin = availAbleBalance - 20;

  if (payCoin < 0) {
    alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
    return;
  }
  //  console.log('pay coin')
  alert(" 📞 Calling Nation Emergency Service 999... ");
  const lastCoin = (document.getElementById("coin-valance").innerText =
    payCoin);
      // history start police ...............................
    const data = {
      name: "Brac Helpline",
      phone: "16445",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
});
// 9nd like heart //////////////////////////////////////////
document.getElementById("like-railway").addEventListener("click", function (e) {
  e.preventDefault();

  let likeNumber = heartUp("like-display");
  likeNumber++;

  document.getElementById("like-display").innerText = likeNumber;
});
// btn ---..............................................
document.getElementById("btn-Railway").addEventListener("click", function (e) {
  e.preventDefault();
  const availAbleBalance = parseInt(
    document.getElementById("coin-valance").innerText
  );
  const payCoin = availAbleBalance - 20;

  if (payCoin < 0) {
    alert("❌আপনার পর্যান্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে 🙂");
    return;
  }
  //  console.log('pay coin')
  alert(" 📞 Calling Nation Emergency Service 999... ");
  const lastCoin = (document.getElementById("coin-valance").innerText =
    payCoin);
      // history start police ...............................
    const data = {
      name: "Bangladesh Railway Helpline",
      phone: "163",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
    // console.log(transationData);
});

// chalange part //////////////
// 1 nation emergency
document
  .getElementById("copy-emergency")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let copyNumber = heartUp("copy-display");
    copyNumber++;

    document.getElementById("copy-display").innerText = copyNumber;

    let number = document.getElementById("copy-enumber").innerText;
    navigator.clipboard.writeText(number).then(() => {
      alert("নাম্বার কপি হয়েছে: " + number);
    });
  });
// 2 nation emergency
document.getElementById("copy-police").addEventListener("click", function (e) {
  e.preventDefault();

  let copyNumber = heartUp("copy-display");
  copyNumber++;

  document.getElementById("copy-display").innerText = copyNumber;

  let number = document.getElementById("copy-enumber").innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert("নাম্বার কপি হয়েছে: " + number);
  });
});
// 3 nation emergency
document.getElementById("copy-fire").addEventListener("click", function (e) {
  e.preventDefault();

  let copyNumber = heartUp("copy-display");
  copyNumber++;

  document.getElementById("copy-display").innerText = copyNumber;

  let number = document.getElementById("copy-enumber").innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert("নাম্বার কপি হয়েছে: " + number);
  });
});
// 4 nation emergency
document
  .getElementById("copy-ambulance")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let copyNumber = heartUp("copy-display");
    copyNumber++;

    document.getElementById("copy-display").innerText = copyNumber;

    let number = document.getElementById("copy-enumber4").innerText;
    navigator.clipboard.writeText(number).then(() => {
      alert("নাম্বার কপি হয়েছে: " + number);
    });
  });
// 5 nation emergency
document.getElementById("copy-women").addEventListener("click", function (e) {
  e.preventDefault();

  let copyNumber = heartUp("copy-display");
  copyNumber++;

  document.getElementById("copy-display").innerText = copyNumber;

  let number = document.getElementById("copy-enumber5").innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert("নাম্বার কপি হয়েছে: " + number);
  });
});
// 6 nation emergency
document.getElementById("copy-anti").addEventListener("click", function (e) {
  e.preventDefault();

  let copyNumber = heartUp("copy-display");
  copyNumber++;

  document.getElementById("copy-display").innerText = copyNumber;

  let number = document.getElementById("copy-enumber6").innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert("নাম্বার কপি হয়েছে: " + number);
  });
});
// 7 nation emergency
document
  .getElementById("copy-electricity")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let copyNumber = heartUp("copy-display");
    copyNumber++;

    document.getElementById("copy-display").innerText = copyNumber;

    let number = document.getElementById("copy-enumber7").innerText;
    navigator.clipboard.writeText(number).then(() => {
      alert("নাম্বার কপি হয়েছে: " + number);
    });
  });
// 8 nation emergency
document.getElementById("copy-brac").addEventListener("click", function (e) {
  e.preventDefault();

  let copyNumber = heartUp("copy-display");
  copyNumber++;

  document.getElementById("copy-display").innerText = copyNumber;

  let number = document.getElementById("copy-enumber8").innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert("নাম্বার কপি হয়েছে: " + number);
  });
});
// 9 nation emergency
document.getElementById("copy-railway").addEventListener("click", function (e) {
  e.preventDefault();

  let copyNumber = heartUp("copy-display");
  copyNumber++;

  document.getElementById("copy-display").innerText = copyNumber;

  let number = document.getElementById("copy-enumber9").innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert("নাম্বার কপি হয়েছে: " + number);
  });
});
// histoti shibli alll 
// emergency btn 1 ..........................
// ...........................................
// ..........................................
document
  .getElementById("btn-emergency")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });
  // police btn 2 ..........................
document
  .getElementById("btn-Police")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });
  // btn-fire 3 ..........................
document
  .getElementById("btn-fire")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });
  // btn-Ambulance 4 ..........................
document
  .getElementById("btn-Ambulance")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });
  // btn-Women 5 ..........................
document
  .getElementById("btn-Women")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });
  // btn-Anti 6 ..........................
document
  .getElementById("btn-Anti")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });
  // btn-Electricity 7  ..........................
document
  .getElementById("btn-Electricity")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });
  //btn-Brac 8..........................
document
  .getElementById("btn-Brac")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });
  // btn-Railway 9 ..........................
document
  .getElementById("btn-Railway")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("me here");

    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";
    // console.log(transactionContainer);
    for (const data of transationData) {
      const div = document.createElement("div");
      div.innerHTML = `
                         
                        <div class=" flex justify-between w-full p-3 items-center bg-[#f2f2f2] shadow-md mt-4">
                            <div>
                                <h2 class=" font-bold text-[15px]">${data.name}
                                </h2>
                                <p>${data.phone}</p>
                            </div>
                            <div>
                                <p>${data.date}</p>
                            </div>

                        </div>
                    
    
    `;
      transactionContainer.appendChild(div);
    }
  });





  // buttan clear /////////////////////////////

  document.getElementById("clear-all").addEventListener("click",function(e){
    e.preventDefault()
     const transactionContainer = document.getElementById(
      "transaction-container"

    );
 
    transactionContainer.innerText = "";
    transationData = []
    
 console.log(transationData);
 
  })