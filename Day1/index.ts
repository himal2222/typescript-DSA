// Problem: Shopping Cart Calculator
/*
You are building a shopping cart calculator for an online store.

Task:
Given an array of prices for items in a shopping cart and a discount percentage,
write a program that will:

1. Calculate the total cost of all items before discount
2. Calculate how much the customer saves with the discount
3. Calculate the final price after applying the discount

Example Input:
prices = [10, 20, 30, 40]  // Array of item prices
discount = 10              // 10% discount

Expected Output Format:
"Total before discount: $X"
"Discount amount: $Y"
"Final total: $Z"

Requirements:
- Use a loop to sum the prices
- Use variables to store the calculations
- Create a function that takes prices array and discount as parameters
- Format the output to show dollar amounts

This problem tests:
- Array iteration
- Basic mathematical calculations
- Variables and functions
- Problem solving logic
*/

export const discountCalculator = (prices: number[], discounts: number) => {
  let totalCost = 0;
  let saveFromDiscount = 0;
  let DiscountedPrice = 0;
  prices.forEach((Element) => {
    totalCost = totalCost + Element;
  });
  saveFromDiscount = (totalCost * discounts) / 100;
  DiscountedPrice = totalCost - saveFromDiscount;
  console.log("Total Price: ", totalCost);
  console.log("You Saved: ", saveFromDiscount);
  console.log("Discounted Price: ", DiscountedPrice);
};

export const discountCalculator = (prices: number[], discounts: number) => {
  let overallAmount = 0;
  let saved = 0;
  let specialAmount = 0;

  for (let i = 0; i < prices.length; i++) {
    overallAmount = overallAmount + prices[i];
  }
  saved = (overallAmount * discounts) / 100;
  specialAmount = overallAmount - saved;
  console.log("overAll: ", overallAmount);
  console.log("Saved Amount: ", saved);
  console.log("Special Amount: ", specialAmount);
};

export const discountCalculator = (prices: number[], discount: number) => {
  let totalCost = 0;
  let saved = 0;
  let discountedPrice = 0;

  if (prices.length <= 0) throw "Prices Cannot Be Empty";
  if (discount < 0) throw "Discount cannot be Negative";

  for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
  }
  saved = Math.floor((totalCost * discount) / 100);
  discountedPrice = totalCost - saved;

  console.log("Total Cost : ", totalCost);
  console.log("You Saved : ", saved);
  console.log("Discounted Price : ", discountedPrice);
};
