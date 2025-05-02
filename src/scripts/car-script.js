const carTemplate = document.querySelector("[data-car-template]");
const searchInput = document.querySelector([data-search]);
const searchBtn = document.getElementById("search-btn");
const textInput = document.getElementById("text-input");

searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log(value);
});

searchBtn.addEventListener("click", () => {
    if (searchInput.value == "") {
        alert("test");
        return;
    }
});

const carInfo = {
    deVilleCars: [
        { // 1
        model: "1959 Cadillac Sedan De Ville (1st Gen)",
        prodYears: "1959 - 1960",
        numProd: "53,390",
        engineType: "V8 (Carter AFB 4-barrel carburetor) (Front)",
        transType: "4 Automatic Turbo - HydraMatic",
        driveType: "RWD",
        doorNum: "2-4D",
        seatNum: "6S",
        price: "$5,250 - $5,500",
        },
        { // 2
        model: "1961 Cadillac Coupe De Ville (2nd Gen)",
        prodYears: "1961 - 1964",
        numProd: "55,174",
        engineType: "Engine Type: </b>V8 (1 4-barrel carburetor) (Front)",
        transType: "Automatic Hydra-Matic",
        driveType: "RWD",
        doorNum: "2-4D",
        seatNum: "6S",
        price: "$5,250 - $5,500",
        },
        { // 3
        model: "1965 Cadillac Coupe De Ville (3rd Gen)",
        prodYears: "1965 - 1970",
        numProd: "123,080",
        engineType: "V8 (Carter AFB 4-barrel carburetor) (Front)",
        transType: "Automatic Turbo Hydra-Matic",
        driveType: "RWD",
        doorNum: "2-4D",
        seatNum: "6S",
        price: "$5,420 - $5,665",
        },
        { // 4
        model: "1972 Cadillac Coupe De Ville (4th Gen)",
        prodYears: "1971 - 1976",
        numProd: "194,811",
        engineType: "V8 (Rochester Quadrajet 4-barrel) (Front)",
        transType: "3 Automatic TH-400",
        driveType: "RWD",
        doorNum: "2-4D",
        seatNum: "6S",
        price: "$6,170 - $6,390",
        },
        { // 5
        model: "1980 Cadillac Coupe De Ville (5th Gen)",
        prodYears: "1977 - 1984",
        numProd: "104,678",
        engineType: "V8 (Electronic fuel injection)",
        transType: "Automatic Turbo Hydra Matic",
        driveType: "RWD",
        doorNum: "2D",
        seatNum: "6P",
        price: "$12,400 - $12,770",
        },
        { // 6
        model: "1985 Cadillac Coupe De Ville (6th Gen)",
        prodYears: "1985 - 1993",
        numProd: "282,582",
        engineType: "Engine Type: </b>V8 (Digital Fuel Injection)",
        transType: "4 Automatic THM 440-T4 with overdrive",
        driveType: "FWD",
        doorNum: "2D",
        seatNum: "5S",
        price: "$21,315 - $21,660",
        },
        { // 7
        model: "1999 Cadillac Sedan De Ville (7th Gen)",
        prodYears: "1994 - 1999",
        numProd: "112,253",
        engineType: "V8 (Tuned Port Fuel Injection System)",
        transType: "4 Automatic 4T80-E electronically controlled",
        driveType: "FWD",
        doorNum: "4D",
        seatNum: "5S",
        price: "$38,630 - $43,230",
        },
        { // 8
        model: "2003 Cadillac Sedan De Ville (8th Gen)",
        prodYears: "2000 - 2005",
        numProd: "82,085",
        engineType: "V8 (Sequential Fuel Injection)",
        transType: "4 Automatic Hydra-Matic 4T80-E Electronically controlled Overdrive",
        driveType: "FWD",
        doorNum: "4D",
        seatNum: "5S",
        price: "$43,575 - $48,225",
        }
    ],
    thunderbirdCars: [
        { // 1
            model: "1955 Ford Thunderbird (1st Gen)",
            prodYears: "1955 - 1957",
            numProd: "53,166",
            engineType: "292-cubic-inch OHV 292 Y-block V8",
            transType: "3-speed Ford-O-Matic automatic",
            driveType: "RWD",
            doorNum: "2D",
            seatNum: "2S",
            price: "$2,695 - $4,000",
        },
        { // 2
            model: "1958 Ford Thunderbird (2nd Gen)",
            prodYears: "1958 - 1960",
            numProd: "198,191",
            engineType: "352 cu in (5.8 L) FE V8 430 cu in (7.0 L) MEL V8",
            transType: "3-speed Cruise-o-Matic automatic",
            driveType: "RWD",
            doorNum: "2D",
            seatNum: "4S",
            price: "$3,631 - $7,575",
        },
        { // 3
            model: "1961 Ford Thunderbird (3rd Gen)",
            prodYears: "1960 - 1963",
            numProd: "214,375",
            engineType: "390 cu in (6.4 L) FE-series V8",
            transType: "3-speed Cruise-O Matic MX automatic",
            driveType: "RWD",
            doorNum: "2D",
            seatNum: "4S",
            price: "$4,170",
        },
        { // 4
            model: "1966 Ford Thunderbird (4th Gen)",
            prodYears: "1964 - 1966",
            numProd: "236,613",
            engineType: "390-cubic-inch 300 hp (224 kW) V8 engine",
            transType: "3-speed Cruise-O Matic MX automatic",
            driveType: "RWD",
            doorNum: "3D",
            seatNum: "4S",
            price: "$4,426",
        },
        { // 5
            model: "1967 Ford Thunderbird (5th Gen)",
            prodYears: "1967 - 1971",
            numProd: "278,058",
            engineType: "390 4v V-8, or 428 4v V-8 engine",
            transType: "3-speed Cruise-o-Matic automatic",
            driveType: "RWD",
            doorNum: "4D",
            seatNum: "4-6S",
            price: "$4,600-$4,800",
        },
        { // 6
            model: "1972 Ford Thunderbird (6th Gen)",
            prodYears: "1972 - 1976",
            numProd: "57,814",
            engineType: "spark-ignition 4-stroke (Front)",
            transType: "3-speed Cruise-o-Matic automatic",
            driveType: "RWD",
            doorNum: "2D",
            seatNum: "2-4S",
            price: "$5,293",
        },
    ]
};

carInfo.forEach(
    ({ prodYears, numProd, engineType, transType, driveType, doorNum, seatNum, price }) => {
        textInput.innerHTML += `
        <div class="text">
            <p class="prod-years"><b>Production Years: </b>${prodYears}</p>
            <p class="num-produced"><b>Number Produced: </b>${numProd}</p>
            <p class="engine-type"><b>Engine Type: </b>${engineType}</p>
            <p class="trans-type"><b>Transmission Type: </b>${transType}</p>
            <p class="drive-type"><b>Drive Type: </b>${driveType}</p>
            <p class="door-num"><b>Door Number: </b>${doorNum}</p>
            <p class="seat-num"><b>Seat Number: </b>${seatNum}</p>
            <p class="price"><b>Price: </b>${price}</p>
        </div>
        `;
    }
);