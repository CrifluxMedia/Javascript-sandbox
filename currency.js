//wirte a funtion that takes in a string and convert the first letter of everyword to uppercase
//hello world =>Hello world 
const firstLetterToCaps = (str) => {
    const result = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return result.join(" ");
};
console.log(firstLetterToCaps("testing is fun and stressful"));
//write a function that checks if the parameter is a number or not
//return true or false
const checkNumber = (arg) => typeof arg === "number";
console.log(checkNumber("hllo"));

const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EuR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];
//iterate over the currencydata and log a message
currencyData.map((currencyRate) => {
    console.log(
      `The Exchange Rate for ${currencyRate.from} to ${currencyRate.to} is ${currencyRate.rate}`
    );
});
//wriet a function that returns the exchange rate for that cureency pair
//or an appropriate message if the pair is not found 
const findCurrencyPair = (baseCurrency, toCurrency) => {
    //search through the currencyData to find a match
    const pair = currencyData.find((currency) => {
        return currency.from === baseCurrency && currency.to === toCurrency;
    });
    if (pair) {
        console.log(
            `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
        );
    } else {
        console.log("The currency pair cannot be found");
    }
};
findCurrencyPair("YEN", "NGN");

//write a conversion function
//2usd
const convertCurrency = (baseCurrency, toCurrency, amount) => {
    const pair = currencyData.find((currency) => {
        return currency.from === baseCurrency && currency.to === toCurrency;
    });

    if (pair) {
        //conversion
        console.log(`${amount} ${pair.from} is equaivalent to ${amount * pair.rate} ${pair.to}`);
    } else {
        console.log("currency pair not found");
    }
};

convertCurrency("GBP", "NGN", 500);
//write a function to add to the currency data list
const AddNewCurrency = (from, to, rate) => {
    currencyData.push({from, to, rate });
    console.log(currencyData);
};
AddNewCurrency("AUS","NGN", 1040);