//  I N T E R F A C E S  --------------------------------------------------

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

interface Teacher {
  readonly firstName: string; // only set during object initialization
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // optional
  location: string;
  [key: string]: any; // possibility to add any attribute
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

//  C L A S S ----------------------------------------------

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

class Directors implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

//  I N S T A N C I A T I O N ------------------------------------------------

// On utilise directement les classes pour éviter l'erreur "missing properties"
const teacher1 = new Teacher();
const director1 = new Directors();

// Ajouter éventuellement des propriétés supplémentaires si besoin
(teacher1 as Teacher & { firstName: string; lastName: string; location: string }).firstName = "Maximilien";
(teacher1 as Teacher & { firstName: string; lastName: string; location: string }).lastName = "Chobert";
(teacher1 as Teacher & { location: string }).location = "Cherbourg";

(director1 as Directors & { firstName: string; lastName: string; location: string; numberOfReports: number }).firstName = "Aude";
(director1 as Directors & { lastName: string }).lastName = "Chobert";
(director1 as Directors & { location: string }).location = "Saint-Vaast";
(director1 as Directors & { numberOfReports: number }).numberOfReports = 4;

console.log(director1);

// Liste des étudiants
const allStudents: Student[] = [
  { firstName: 'Khalil', lastName: 'Adam', age: 22, location: 'Saint-lô' },
  { firstName: 'Philemon', lastName: 'Chobert', age: 17, location: 'Saint-Vaast' }
];

//  F U N C T I O N S ------------------------------------------------------------------

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('Maximilien', 'Chobert'));

function createEmployee(salary: number | string): Directors | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Directors();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Directors | Teacher): employee is Directors {
  return (employee as Directors).workDirectorTasks !== undefined;
}

function executeWork(employee: Directors | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));  

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

console.log(teachClass("Math"));     
console.log(teachClass("History")); 

export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;


//  U S E R   V I E W ----------------------------------------------------

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
