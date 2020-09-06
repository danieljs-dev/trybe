const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const listObjectValues = () => {
  console.log(`The object's values lesson1 is: ${Object.values(lesson1)}`);
  console.log(`The object's values lesson2 is: ${Object.values(lesson2)}`);
  console.log(`The object's values lesson3 is: ${Object.values(lesson3)}`);
}

listObjectValues();