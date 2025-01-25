const elements = [
    // Period 1
    { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, group: 'Nonmetals', col: 1, row: 1 },
    { symbol: 'He', name: 'Helium', atomicNumber: 2, group: 'Noble Gases', col: 18, row: 1 },

    // Period 2
    { symbol: 'Li', name: 'Lithium', atomicNumber: 3, group: 'Alkali Metals', col: 1, row: 2 },
    { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, group: 'Alkaline Earth Metals', col: 2, row: 2 },
    { symbol: 'B', name: 'Boron', atomicNumber: 5, group: 'Metalloids', col: 13, row: 2 },
    { symbol: 'C', name: 'Carbon', atomicNumber: 6, group: 'Nonmetals', col: 14, row: 2 },
    { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, group: 'Nonmetals', col: 15, row: 2 },
    { symbol: 'O', name: 'Oxygen', atomicNumber: 8, group: 'Nonmetals', col: 16, row: 2 },
    { symbol: 'F', name: 'Fluorine', atomicNumber: 9, group: 'Halogens', col: 17, row: 2 },
    { symbol: 'Ne', name: 'Neon', atomicNumber: 10, group: 'Noble Gases', col: 18, row: 2 },

    // Period 3
    { symbol: 'Na', name: 'Sodium', atomicNumber: 11, group: 'Alkali Metals', col: 1, row: 3 },
    { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, group: 'Alkaline Earth Metals', col: 2, row: 3 },
    { symbol: 'Al', name: 'Aluminium', atomicNumber: 13, group: 'Post-transition Metals', col: 13, row: 3 },
    { symbol: 'Si', name: 'Silicon', atomicNumber: 14, group: 'Metalloids', col: 14, row: 3 },
    { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, group: 'Nonmetals', col: 15, row: 3 },
    { symbol: 'S', name: 'Sulfur', atomicNumber: 16, group: 'Nonmetals', col: 16, row: 3 },
    { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, group: 'Halogens', col: 17, row: 3 },
    { symbol: 'Ar', name: 'Argon', atomicNumber: 18, group: 'Noble Gases', col: 18, row: 3 },

    // Period 4
    { symbol: 'K', name: 'Potassium', atomicNumber: 19, group: 'Alkali Metals', col: 1, row: 4 },
    { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, group: 'Alkaline Earth Metals', col: 2, row: 4 },
    { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, group: 'Transition Metals', col: 3, row: 4 },
    { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, group: 'Transition Metals', col: 4, row: 4 },
    { symbol: 'V', name: 'Vanadium', atomicNumber: 23, group: 'Transition Metals', col: 5, row: 4 },
    { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, group: 'Transition Metals', col: 6, row: 4 },
    { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, group: 'Transition Metals', col: 7, row: 4 },
    { symbol: 'Fe', name: 'Iron', atomicNumber: 26, group: 'Transition Metals', col: 8, row: 4 },
    { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, group: 'Transition Metals', col: 9, row: 4 },
    { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, group: 'Transition Metals', col: 10, row: 4 },
    { symbol: 'Cu', name: 'Copper', atomicNumber: 29, group: 'Transition Metals', col: 11, row: 4 },
    { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, group: 'Transition Metals', col: 12, row: 4 },
    { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, group: 'Post-transition Metals', col: 13, row: 4 },
    { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, group: 'Metalloids', col: 14, row: 4 },
    { symbol: 'As', name: 'Arsenic', atomicNumber: 33, group: 'Metalloids', col: 15, row: 4 },
    { symbol: 'Se', name: 'Selenium', atomicNumber: 34, group: 'Nonmetals', col: 16, row: 4 },
    { symbol: 'Br', name: 'Bromine', atomicNumber: 35, group: 'Halogens', col: 17, row: 4 },
    { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, group: 'Noble Gases', col: 18, row: 4 },

    // Period 5 (complete this similarly)
    { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, group: 'Alkali Metals', col: 1, row: 5 },
    { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, group: 'Alkaline Earth Metals', col: 2, row: 5 },
    { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, group: 'Transition Metals', col: 3, row: 5 },
    { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, group: 'Transition Metals', col: 4, row: 5 },
    { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, group: 'Transition Metals', col: 5, row: 5 },
    { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, group: 'Transition Metals', col: 6, row: 5 },
    { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, group: 'Transition Metals', col: 7, row: 5 },
    { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, group: 'Transition Metals', col: 8, row: 5 },
    { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, group: 'Transition Metals', col: 9, row: 5 },
    { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, group: 'Transition Metals', col: 10, row: 5 },
    { symbol: 'Ag', name: 'Silver', atomicNumber: 47, group: 'Transition Metals', col: 11, row: 5 },
    { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, group: 'Transition Metals', col: 12, row: 5 },
    { symbol: 'In', name: 'Indium', atomicNumber: 49, group: 'Post-transition Metals', col: 13, row: 5 },
    { symbol: 'Sn', name: 'Tin', atomicNumber: 50, group: 'Post-transition Metals', col: 14, row: 5 },
    { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, group: 'Metalloids', col: 15, row: 5 },
    { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, group: 'Metalloids', col: 16, row: 5 },
    { symbol: 'I', name: 'Iodine', atomicNumber: 53, group: 'Halogens', col: 17, row: 5 },
    { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, group: 'Noble Gases', col: 18, row: 5 },

    // Period 6
    { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, group: 'Alkali Metals', col: 1, row: 6 },
    { symbol: 'Ba', name: 'Barium', atomicNumber: 56, group: 'Alkaline Earth Metals', col: 2, row: 6 },
    { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, group: 'Lanthanides', col: 4, row: 9 }, // Start of lanthanides
    { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, group: 'Lanthanides', col: 5, row: 9 },
    { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, group: 'Lanthanides', col: 6, row: 9 },
    { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, group: 'Lanthanides', col: 7, row: 9 },
    { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, group: 'Lanthanides', col: 8, row: 9 },
    { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, group: 'Lanthanides', col: 9, row: 9 },
    { symbol: 'Eu', name: 'Europium', atomicNumber: 63, group: 'Lanthanides', col: 10, row: 9 },
    { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, group: 'Lanthanides', col: 11, row: 9 },
    { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, group: 'Lanthanides', col: 12, row: 9 },
    { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, group: 'Lanthanides', col: 13, row: 9 },
    { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, group: 'Lanthanides', col: 14, row: 9 },
    { symbol: 'Er', name: 'Erbium', atomicNumber: 68, group: 'Lanthanides', col: 15, row: 9 },
    { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, group: 'Lanthanides', col: 16, row: 9 },
    { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, group: 'Lanthanides', col: 17, row: 9 },
    { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, group: 'Lanthanides', col: 18, row: 9 },
    
    { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, group: 'Transition Metals', col: 4, row: 6 },
    { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, group: 'Transition Metals', col: 5, row: 6 },
    { symbol: 'W', name: 'Tungsten', atomicNumber: 74, group: 'Transition Metals', col: 6, row: 6 },
    { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, group: 'Transition Metals', col: 7, row: 6 },
    { symbol: 'Os', name: 'Osmium', atomicNumber: 76, group: 'Transition Metals', col: 8, row: 6 },
    { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, group: 'Transition Metals', col: 9, row: 6 },
    { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, group: 'Transition Metals', col: 10, row: 6 },
    { symbol: 'Au', name: 'Gold', atomicNumber: 79, group: 'Transition Metals', col: 11, row: 6 },
    { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, group: 'Transition Metals', col: 12, row: 6 },
    { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, group: 'Post-transition Metals', col: 13, row: 6 },
    { symbol: 'Pb', name: 'Lead', atomicNumber: 82, group: 'Post-transition Metals', col: 14, row: 6 },
    { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, group: 'Post-transition Metals', col: 15, row: 6 },
    { symbol: 'Po', name: 'Polonium', atomicNumber: 84, group: 'Metalloids', col: 16, row: 6 },
    { symbol: 'At', name: 'Astatine', atomicNumber: 85, group: 'Halogens', col: 17, row: 6 },
    { symbol: 'Rn', name: 'Radon', atomicNumber: 86, group: 'Noble Gases', col: 18, row: 6 },

    // Period 7
    { symbol: 'Fr', name: 'Francium', atomicNumber: 87, group: 'Alkali Metals', col: 1, row: 7 },
    { symbol: 'Ra', name: 'Radium', atomicNumber: 88, group: 'Alkaline Earth Metals', col: 2, row: 7 },
    { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, group: 'Actinides', col: 4, row: 10 }, // Start of actinides
    { symbol: 'Th', name: 'Thorium', atomicNumber: 90, group: 'Actinides', col: 5, row: 10 },
    { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, group: 'Actinides', col: 6, row: 10 },
    { symbol: 'U', name: 'Uranium', atomicNumber: 92, group: 'Actinides', col: 7, row: 10 },
    { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, group: 'Actinides', col: 8, row: 10 },
    { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, group: 'Actinides', col: 9, row: 10 },
    { symbol: 'Am', name: 'Americium', atomicNumber: 95, group: 'Actinides', col: 10, row: 10 },
    { symbol: 'Cm', name: 'Curium', atomicNumber: 96, group: 'Actinides', col: 11, row: 10 },
    { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, group: 'Actinides', col: 12, row: 10 },
    { symbol: 'Cf', name: 'Californium', atomicNumber: 98, group: 'Actinides', col: 13, row: 10 },
    { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, group: 'Actinides', col: 14, row: 10 },
    { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, group: 'Actinides', col: 15, row: 10 },
    { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, group: 'Actinides', col: 16, row: 10 },
    { symbol: 'No', name: 'Nobelium', atomicNumber: 102, group: 'Actinides', col: 17, row: 10 },
    { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, group: 'Actinides', col: 18, row: 10 },

    { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, group: 'Transition Metals', col: 4, row: 7 },
    { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, group: 'Transition Metals', col: 5, row: 7 },
    { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, group: 'Transition Metals', col: 6, row: 7 },
    { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, group: 'Transition Metals', col: 7, row: 7 },
    { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, group: 'Transition Metals', col: 8, row: 7 },
    { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, group: 'Transition Metals', col: 9, row: 7 },
    { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, group: 'Transition Metals', col: 10, row: 7 },
    { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, group: 'Transition Metals', col: 11, row: 7 },
    { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, group: 'Transition Metals', col: 12, row: 7 },
    { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, group: 'Post-transition Metals', col: 13, row: 7 },
    { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, group: 'Post-transition Metals', col: 14, row: 7 },
    { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, group: 'Post-transition Metals', col: 15, row: 7 },
    { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, group: 'Post-transition Metals', col: 16, row: 7 },
    { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, group: 'Halogens', col: 17, row: 7 },
    { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, group: 'Noble Gases', col: 18, row: 7 },

];

const periodicTable = document.getElementById('periodic-table');
const elementInfo = document.getElementById('element-info');
const searchBar = document.getElementById('search-bar');

// Function to create the periodic table
function createTable() {
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 18; col++) {
            const element = elements.find(el => el.row === row && el.col === col);

            const cell = document.createElement('div');
            cell.classList.add('element');
            if (element) {
                cell.dataset.group = element.group;
                cell.dataset.name = element.name.toLowerCase();
                cell.dataset.symbol = element.symbol.toLowerCase();
                cell.dataset.atomicNumber = element.atomicNumber;

                cell.innerHTML = `
                    <strong>${element.symbol}</strong>
                    <br>
                    <small>${element.atomicNumber}</small>
                `;

                cell.addEventListener('click', () => displayElementDetails(element));
            } else {
                cell.classList.add('empty');
            }

            periodicTable.appendChild(cell);
        }
    }
}

function displayElementDetails(element) {
    // Remove previous element highlights
    document.querySelectorAll('.element').forEach(el => {
        el.classList.remove('highlighted', 'group-highlighted');
    });

    // Highlight the selected element
    const selectedElement = [...document.querySelectorAll('.element')]
        .find(el => el.dataset.atomicNumber == element.atomicNumber);
    selectedElement.classList.add('highlighted');

    // Highlight all elements in the same group
    const groupElements = document.querySelectorAll(`[data-group="${element.group}"]`);
    groupElements.forEach(el => el.classList.add('group-highlighted'));

    // Update the element details
    elementInfo.innerHTML = `
        <p><strong>Name:</strong> ${element.name}</p>
        <p><strong>Symbol:</strong> ${element.symbol}</p>
        <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
        <p><strong>Group:</strong> ${element.group}</p>
    `;
}


function filterElements(query) {
    const lowerCaseQuery = query.toLowerCase();
    document.querySelectorAll('.element').forEach(el => {
        if (el.classList.contains('empty')) return;

        const matches = el.dataset.name.includes(lowerCaseQuery) ||
                        el.dataset.symbol.includes(lowerCaseQuery) ||
                        el.dataset.atomicNumber === lowerCaseQuery;
        el.style.display = matches ? 'block' : 'none';
    });
}

// Event listeners
searchBar.addEventListener('input', (e) => filterElements(e.target.value));

// Initialize the table
createTable();
