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

const sizeObject = () => {
  console.log(`The object's size is: ${Object.keys(lesson1).length}`);
  console.log(`The object's size is: ${Object.keys(lesson2).length}`);
  console.log(`The object's size is: ${Object.keys(lesson3).length}`);
}

sizeObject();

