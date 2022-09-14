// 1. Declare an object `cohort` that has the following properties:
//     * a string `name` (e.g `'May2022'`)
//     * a number `id` (e.g `1234`)
//     * an array of student names

cohort = {
  name: 'May2022',
  id: 1234,
  students: ['student1', 'student2', 'student3'],
};

// 2. Declare a function that accepts that object as argument and print a message with the
//    following structure:
// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

readCohort = (cohortObj) => {
  const { id, name, students } = cohortObj;
  const msg = `${id} - ${name} - ${students.length} students in this cohort`;
  console.log(msg);
};

readCohort(cohort);