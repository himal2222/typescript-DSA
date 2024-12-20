// Problem: Temperature Monitoring System
/*
You are building a temperature monitoring system for a greenhouse. The system needs
to track temperature readings over time and provide analysis functions.
Task:
Create a temperature monitoring system with the following features:

1. A function factory that creates a temperature tracker for a specific zone
2. Each tracker should:
   - Store temperature readings
   - Calculate average temperature
   - Track min/max temperatures
   - Alert if temperature goes outside defined thresholds

Example Usage:
const zoneAMonitor = createZoneMonitor("Zone A", 18, 24); // min 18°C, max 24°C
zoneAMonitor.addReading(21);
zoneAMonitor.getStats();
zoneAMonitor.checkThresholds(); // Returns true if current temperature is within thresholds (between min 18°C and max 24°C)
                               // Returns false if temperature is too low (< 18°C) or too high (> 24°C)

Requirements:
1. Use closure to maintain private state for each zone monitor
2. Implement function factory pattern
3. Each monitor should expose methods:
//    - addReading(temp: number): void
//    - getStats(): { avg: number, min: number, max: number }
//    - checkThresholds(): boolean // Returns true if current temp is within min/max thresholds
//    - getZoneInfo(): string

This problem tests:
- Function factories
- Closures and scope
- State management
- Object methods
- Data validation

Constraints:
- Temperature readings should be numbers
- Min temperature must be less than max temperature
- Zone name must be non-empty string
*/

//answer
type temperatureTypes = {
  zone: string;
  minThreshold: number;
  maxThreshold: number;
  readings?: number[];
};
export const createZoneMonitor = ({
  zone,
  minThreshold,
  maxThreshold,
}: temperatureTypes) => {
  if (zone == "") throw new Error("Zone Cannot be Empty");
  const temperature: temperatureTypes = {
    zone,
    readings: [],
    minThreshold,
    maxThreshold,
  };

  return {
    addReading(temp: number) {
      temperature.readings?.push(temp);
      return `${temp},  has been added to readings`;
    },
    getStatus() {
      if (
        temperature.readings?.length === undefined ||
        temperature.readings.length - 1 < 0
      )
        throw new Error("Problem with Readings");

      let totalSum = 0;
      let average = 0;

      const minimum = Math.min(...temperature.readings);
      const maximum = Math.max(...temperature.readings);
      temperature.readings?.forEach((element) => {
        totalSum += element;
      });
      average = totalSum / temperature.readings?.length - 1;

      return {
        avg: average,
        min: minimum,
        max: maximum,
      };
    },
    checkThresholds() {
      if (
        temperature.readings?.length === undefined ||
        temperature.readings.length - 1 < 0
      )
        throw new Error("Problem with Readings");

      if (
        temperature.readings[temperature.readings.length - 1] < minThreshold &&
        temperature.readings[temperature.readings.length - 1] > maxThreshold
      ) {
        return true;
      } else {
        return false;
      }
    },
    getZoneInfo() {
      return `${zone},the minimum temperature is ${
        this.getStatus().min
      }, the maximum temperature is ${this.getStatus().max} and average ${
        this.getStatus().avg
      }`;
    },
  };
};

//Answer
// export const createZoneMonitor = (zone: string, min: number, max: number) => {
//   if (zone == "") throw "Zone Must Not Be Empty";
//   if (min > max)
//     throw "Minimum Temperature should always lower than Maximum Temperature";
//   const minTemp = 18;
//   const MaxTemp = 24;
//   const temperature = {
//     zone,
//     current: 0,
//     average: 0,
//     min,
//     max,
//   };

//   temperature.average = (min + max) / 2;
//   return {
//     getStatus: () => {
//       console.log("OverAll Status :", temperature);
//     },
//     addReading: (temp: number) => {
//       temperature.current = temp;
//       console.log("Reading Added :", temperature.current);
//     },
//     checkThresholds: () => {
//       if (temperature.min > minTemp && temperature.max < MaxTemp) {
//         console.log(true, "Minimum and Maximum threshold are normal");
//       } else {
//         console.log(false, "Minimum and Maximum threshold are abnormal");
//       }
//     },
//     getZoneInfo: () => {
//       console.log(temperature.zone);
//     },
//   };
// };

// export const createZoneMonitor2 = (zone: string, min: number, max: number) => {
//   const temperatureThreshold = {
//     minimum: 18,
//     maximum: 24,
//   };
//   const readings = {
//     zone,
//     averageTemp: 0,
//     minimumTemp: min,
//     maximumTemp: max,
//   };

//   if (temperatureThreshold.minimum > min && temperatureThreshold.maximum < max)
//     console.warn("Alert Temperature is Abnormal");

//   readings.averageTemp = (readings.minimumTemp + readings.maximumTemp) / 2;
//   return {
//     getStatus: () => {
//       console.log(readings);
//     },
//   };
// };

//generated Answer
// export const createZoneMonitor = (zone: string, min: number, max: number) => {
//     if (zone.trim() === "") throw new Error("Zone Must Not Be Empty");
//     if (min > max)
//       throw new Error(
//         "Minimum Temperature should be lower than Maximum Temperature"
//       );
//     if (typeof min !== "number" || typeof max !== "number")
//       throw new Error("Temperature thresholds must be numbers");

//     const temperature = {
//       zone,
//       readings: [] as number[],
//       minThreshold: min,
//       maxThreshold: max,
//     };

//     return {
//       getStatus: () => {
//         console.log("Overall Status:", temperature);
//       },

//       addReading: (temp: number) => {
//         if (typeof temp !== "number")
//           throw new Error("Temperature reading must be a number");
//         temperature.readings.push(temp);
//         console.log("Reading Added:", temp);
//       },

//       checkThresholds: () => {
//         const currentTemp = temperature.readings[temperature.readings.length - 1];
//         const isWithinThresholds =
//           currentTemp >= temperature.minThreshold &&
//           currentTemp <= temperature.maxThreshold;
//         console.log(
//           isWithinThresholds,
//           isWithinThresholds
//             ? "Temperature is within normal range"
//             : "Temperature is outside normal range"
//         );
//         return isWithinThresholds;
//       },

//       // Store reference to getStats since arrow functions don't have their own 'this' binding
//       getStats: () => {
//         if (temperature.readings.length === 0) {
//           return { avg: 0, min: 0, max: 0 };
//         }
//         const avg =
//           temperature.readings.reduce((sum, temp) => sum + temp, 0) /
//           temperature.readings.length;
//         const min = Math.min(...temperature.readings);
//         const max = Math.max(...temperature.readings);
//         return { avg, min, max };
//       },

//       getZoneInfo: function () {
//         // Changed to regular function to get correct 'this' binding
//         // Arrow functions don't have their own 'this' context, so 'this' was undefined
//         const stats = this.getStats();
//         console.log(`Zone: ${temperature.zone}
//           Current Temperature: ${
//             temperature.readings[temperature.readings.length - 1] || "No readings"
//           }
//           Average Temperature: ${stats.avg}
//           Min Temperature: ${stats.min}
//           Max Temperature: ${stats.max}
//           Thresholds: ${temperature.minThreshold}°C - ${
//           temperature.maxThreshold
//         }°C`);
//       },
//     };
//   };

//explanation
/*
1. Function Factories:
A function factory is a function that creates and returns other functions. It's a powerful 
pattern that allows you to create specialized functions with some pre-configured behavior.

Example of Function Factory:
*/
// function createGreeter(greeting: string) {
//     // This is a function factory that returns a specialized greeting function
//     return function(name: string) {
//         return `${greeting}, ${name}!`;
//     }
// }
// Usage:
// const sayHello = createGreeter("Hello");
// const sayHi = createGreeter("Hi");
// sayHello("John") // Returns "Hello, John!"
// sayHi("John")    // Returns "Hi, John!"

/*
2. Closures:
A closure is a function that has access to variables in its outer (enclosing) scope, 
even after the outer function has returned. It "closes over" the variables from its 
outer scope, preserving them.

Example of Closure:
*/
// function createBankAccount(initialBalance: number) {
//     let balance = initialBalance; // This variable is "closed over"

//     return {
//         deposit(amount: number) {
//             balance += amount;
//             return balance;
//         },
//         withdraw(amount: number) {
//             if (amount > balance) {
//                 throw new Error("Insufficient funds");
//             }
//             balance -= amount;
//             return balance;
//         },
//         getBalance() {
//             return balance;
//         }
//     }
// }
// Usage:
// const account = createBankAccount(100);
// account.deposit(50);  // Balance: 150
// account.withdraw(30); // Balance: 120
// account.getBalance(); // Returns: 120
// The 'balance' variable remains private and can only be accessed
// through the provided methods
