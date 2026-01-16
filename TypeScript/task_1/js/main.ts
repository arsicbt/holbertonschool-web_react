interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

interface Teacher {
  readonly firstName: string, // only be set during object initialization
  readonly lastName: string, 
  fullTimeEmployee: boolean,
  yearsOfExperience?: number;  // optional
  location: string;
  [key: string]: any; //  possibility to add any attribute
}

interface Directors extends Teacher {
  numberOfReports: number,
}

const teacher1: Teacher = {
  firstName: "Maximilien",
  lastName: "Chobert",
  fullTimeEmployee: false,
  location: "Cherbourg",
  contract: false
};

const director1: Directors = {
  firstName: 'Aude',
  lastName: 'Chobert',
  location: 'Saint-Vaast',
  fullTimeEmployee: true,
  numberOfReports: 4,
};

console.log(director1);

const allStudents: Student[] = [
  { firstName: 'Khalil', lastName: 'Adam', age: 22, location: 'Saint-lô' },
  { firstName: 'Philemon', lastName: 'Chobert', age: 17, location: 'Saint-Vaast' }
];

// créer l'élément table
const table: HTMLTableElement = document.createElement('table');
table.border = '1';

// créer la table du header
const headerRow: HTMLTableRowElement = table.insertRow();
const headers = ['First Name', 'Location'];
for (const headerText of headers) {
  const th: HTMLTableCellElement = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
}

// ajouter les lignes pour chaque étudiant
allStudents.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// envoie de la table dans le body
document.body.appendChild(table);
