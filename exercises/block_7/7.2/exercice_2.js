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

const listKeysObjects = () => {
  console.log(`The object's key lessons1 is: ${Object.keys(lesson1)}`);
  console.log(`The object's key lessons2 is: ${Object.keys(lesson2)}`);
  console.log(`The object's key lessons3 is: ${Object.keys(lesson3)}`);
}

listKeysObjects();
