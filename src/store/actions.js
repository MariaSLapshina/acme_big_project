import axios from "axios";

// const setLoading = (loading) => {
//     return {
//         type: 'SET_LOADING',
//         loading
//     }
// }
//import axios from 'axios'
const CREATE_STUDENT = 'CREATE_STUDENT'
const DESTROY_STUDENT ='DESTROY_STUDENT'
const ENROLL_STUDENT = 'ENROLL_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS'


const getStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    }
}
 const createStudent = (student)=>{ //actions creator -- the function
     return {
         type: CREATE_STUDENT, //action -- the object
         student
     }
 }
 const destroyStudent = (student) =>{
    return {
        type: DESTROY_STUDENT,
        student
    }
 }
 const enrollStudent = (student) => {
     return{
         type: ENROLL_STUDENT,
         student
     }
 }

 const fetchStudents = () => { //thunk
    return async(dispatch) =>  {
        const students = (await axios.get('/api/students')).data
        return dispatch(getStudents(students))
    }
 }

 const createStudent_ = () => {
     return async(dispatch) => {
          const student = (await axios.post('/api/students')).data
          return dispatch(createStudent(student))
     }
 }

const destroyStudent_ = (student) => {
    return async(dispatch) => {
        await axios.delete(`/api/students/${student.id}`)
        return dispatch(destroyStudent(student))
    }
}

const enrollStudent_ = (student) => {
    return async(dispatch) => {
        await axios.put(`/api/students/${student.id}`, student)
        return dispatch(enrollStudent(student))
    }
}







export { createStudent_, destroyStudent_, fetchStudents}