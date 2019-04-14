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
                            {student.name.first}{student.name.last}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Students
