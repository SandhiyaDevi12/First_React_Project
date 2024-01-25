import react from 'react';

class ListExample extends React.Component {

    constructor(){
        super()

        this.state = {
            studentList : [
                { id: 101, name: "Ramesh", address: "Chennai" },
                { id: 102, name: "Kamesh", address: "Vellore" },
                { id: 103, name: "Rajesh", address: "Selam" },
                { id: 104, name: "Suresh", address: "Erode" }
            ]
        }
    }

    filterStudentDetails(id){ // 101
        const filteredStudentlist = this.state.studentList.filter( std => std.id != id ); // 104 != 101

        this.setState({
            studentList : filteredStudentlist
        })

    }

    render() {
        const numberList = [98, 43, 56, 2, 46, 35];
        const stringList = ["Apple", "Grape", "Mango", "Papaya"];

        return (

            <>
                <h2>Number List</h2>
                <ul>
                    {numberList.map(x => {
                        return <li>{x + 1}</li>
                    })}
                </ul>

                <h2>Student Details : </h2>

