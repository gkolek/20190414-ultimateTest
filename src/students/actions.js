import { SHOW_STUDENTS } from './constants'
import uuid from 'uuid/v1';


export const fetchStudents = () => {
    return async (dispatch) => {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();

        const students = [];
        data.forEach(studentFromApi => {
            const student = {
                id: uuid(),
                url: studentFromApi.url
            };
            students.push(student);
        });
        dispatch(showStudents(students));
    }
}


export const showStudents = (data) => ({
    type: SHOW_STUDENTS,
    data
})