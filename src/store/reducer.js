import { /*CREATE_STUDENT,*/ DESTROY_STUDENT, ENROLL_STUDENT,GET_STUDENTS } from './actions'

const studentsReducer = (state = [], action)=> {
    switch(action.type){
    //   case CREATE_STUDENT:
    //     return action.users;
      case DESTROY_STUDENT:
        return state.filter(student => student.id !== action.student.id);
      case ENROLL_STUDENT:
        return state.map(_student => _student.id === action.student.id ? action.student : _student);
    }
    return state;
  };