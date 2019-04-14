import React, { Component } from 'react';

class Students extends Component {
    state = {
        students: []
    }

    async componentDidMount() {

        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();

        console.log(data)

        this.setState({ students: data.results });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.students.map(student => (
                        <div key={student.login.uuid}>
                            <img src={student.picture.large} alt="" />
                            <p>
                                imię: {student.name.first}
                            </p>
                            <p>
                                nazwisko: {student.name.last}
                            </p>
                            <p>
                                email: {student.email}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Students
