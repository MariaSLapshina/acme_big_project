import { CREATE_STUDENT, DESTROY_STUDENT, ENROLL_STUDENT,GET_STUDENTS, GET_SCHOOLS } from './actions'
  
import { combineReducers } from 'redux';

const studentsReducer = (state = [], action)=> {
    switch(action.type){
      case GET_STUDENTS:
        return action.students;
      case DESTROY_STUDENT:
        return state.filter(student => student.id !== action.student.id);
      case ENROLL_STUDENT:
        return state.map(_student => _student.id === action.student.id ? action.student : _student);
    }
    return state;
  };

const schoolsReducer = (state = [], action) => {
    switch(action.type){
      case GET_SCHOOLS:
        return action.schools
    }
    return state
}

const reducer = combineReducers({
  students: studentsReducer,
  schools: schoolsReducer
})
export default reducer