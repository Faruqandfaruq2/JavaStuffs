// //ArrayMethods

// //filter

// const items = [
//     {name: "bag" ,  price: 100},
//     {name: "shoes", price: 50},
//     {name: "computer", price: 70},
//     {name: "cologne", price: 30},
//     {name: "book", price: 5},
//     {name: "bike", price: 1000},
//     {name: "s.machine", price: 25}
// ]

//  const filteredItems =items.filter ((items ) => {
//    return items.price <= 100
// }
// ,0)

// console.log (filteredItems)

// //map

// const stuffs = [
//     {name: "bag" ,  price: 100},
//     {name: "shoes", price: 50},
//     {name: "computer", price: 70},
//     {name: "cologne", price: 30},
//     {name: "book", price: 5},
//     {name: "bike", price: 1000},
//     {name: "s.machine", price: 25}
// ]

//  const itemNames =stuffs.map ((items ) => {
//    return items.price
// }
// )

// console.log (itemNames)
 
// //find
// const things = [
//     {name: "bag" ,  price: 100},
//     {name: "shoes", price: 50},
//     {name: "computer", price: 70},
//     {name: "cologne", price: 30},
//     {name: "book", price: 5},
//     {name: "bike", price: 1000},
//     {name: "s.machine", price: 25}
// ]

//  const foundItems =things.find ((items ) => {
//    return items.name === "s.machine"
// }
// )
// console.log (foundItems)

// //forEach

// const needs = [
//     {name: "bag" ,  price: 100},
//     {name: "shoes", price: 50},
//     {name: "computer", price: 70},
//     {name: "cologne", price: 30},
//     {name: "book", price: 5},
//     {name: "bike", price: 1000},
//     {name: "s.machine", price: 25}
// ]

//  items.forEach ((items ) => {

//    console.log (items.name)
// }
//   )
// //some  

//   const wants = [
//     {name: "bag" ,  price: 100},
//     {name: "shoes", price: 50},
//     {name: "computer", price: 70},
//     {name: "cologne", price: 30},
//     {name: "book", price: 5},
//     {name: "bike", price: 1000},
//     {name: "s.machine", price: 25}
// ]

//  const hasInexpensiveitems =items.some ((items ) => {
//    return items.price <= 100
// }
// )

// console.log (hasInexpensiveitems)

// //total

// const months = [
//     {name: "bag" ,  price: 100},
//     {name: "shoes", price: 50},
//     {name: "computer", price: 70},
//     {name: "cologne", price: 30},
//     {name: "book", price: 5},
//     {name: "bike", price: 1000},
//     {name: "s.machine", price: 25}
// ]

//  const total =items.reduce ((currentTotal,items ) => {
//    return items.price + currentTotal
// }
// ,0)

// console.log (total)

// //includes

// const clue = [1,2,3,4,5,6]

// let clueStuff = clue.includes(3)

// console.log(clueStuff)

const companies = [
  {name: "Company One", category: "Finance", start: 1981,  end: 2003 },
  {name: "Company Two", category: "Retail", start: 1992,  end: 2008 },
  {name: "Company Three", category: "Auto", start: 1999,  end: 2007 },
  {name: "Company Four", category: "Retail", start: 1989,  end: 2010 },
  {name: "Company Five", category: "Technology", start: 2009,  end: 2014 },
  {name: "Company Six", category: "Finance", start: 1987,  end: 2010 },
  {name: "Company Seven", category: "Auto", start: 1986,  end: 1996 },
  {name: "Company Eight", category: "Technology", start: 2011,  end: 2016 },
  {name: "Company Nine", category: "Retail", start: 1981,  end: 1989}

];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

for (let i = 0; i<companies.length; i++) {

  console.log(companies[i])
  
}
//forEach
// companies.forEach (function (company){
//   console.log(company.category);
// })

// //filter
// // let canDrink = [];

// // for(let i = 0; i < ages.length; i++) {
// //  if (ages[i] >= 21) {
// //    canDrink.push(ages[i]);
// //  }

// // }
// // console.log(canDrink);

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink)
// //filter for retail.

// // const retailCompanies = companies.filter(function (company){
// //   if (company.category === "Finance") {
// //     return true
    
// //   }
// // })

// // console.log(retailCompanies)

// // const retailCompanies = companies.filter(company => company.category === "Finance");

// // console.log(retailCompanies)

// //filter for eighties..

// // const eightiesCompany = companies.filter (function (company){
// //   if (company.start >= 1980 && company.start < 1990) {
// //     return true
// //   }
// // })

// // console.log (eightiesCompany)

// // const eightiesCompany = companies.filter (company => (company.start >= 1980 && company.start < 1990) );

// // console.log (eightiesCompany)

// //filter for companies over ten years..

// const lastedTen = companies.filter (company => (company.end - company.start >= 10));

// console.log(lastedTen)

// ///////MAP....
// //gathering names.

// // const namesMap = companies.map (company => `${company.name} [${company.start}-${company.end}]`)
 

// // console.log (namesMap)

// // const agesSquare = ages.map
// //  (age => Math.sqrt(age)).map 
// //  (age => age*2);

// // console.log (agesSquare)

// /////SORT...

// // const sortedCompanies = companies.sort (function (c1,c2) {
 
// //   if ( c1.start > c2.start ) {
// //     return 1
// //   } else {
// //     return -1
// //   }

// // })
// // console.log (sortedCompanies)

// const soatedCompanies = companies.sort ((a,b) => (a.start > b.start ? 1 :  -1));

// console.log(soatedCompanies);

// const sortAges = ages.sort ((a,b) => a-b);

// console.log (sortAges)

/////REDUCE>>>

// let ageSum = 0;

// for(let i = 0; i< ages.length; i++) {
//    ageSum += ages[i];
// }
// console.log(ageSum)

// const ageSum = ages.reduce ((total,age) => total + age,0);

// console.log (ageSum)

// const totalYear = companies.reduce ( (total,company) =>total + (company.end - company.start),0)
// console.log(totalYear)

//combining methods....

 const combined = ages
  .map (age => age*2 )
  .filter (age => age >= 40)
  .sort ((a,b) => a - b)
  .reduce ((a,b) => a + b ,0)


// console.log (combined);


const books = [
  {
    author: "Buchi Emecheta",
    name: "the bride price",
    year: "2007"
  },
  {
    author: "august wilson",
    name: "fences",
    year: "1983"
  },
  {
    author: "chinua achebe",
    name: "things fall apart",
    year: "1969"
  }
]
let vookth = books.forEach (function (book){
  console.log(book )
})

var nums = ["apple","mango","orange","pineapple","watermelon"]

let numsWork = nums.forEach (function (number){
  if (number === "mango") {
    number = number.toUpperCase();
    
  } else {
    number.toLowerCase();
  }
  console.log(number); 

});


  






