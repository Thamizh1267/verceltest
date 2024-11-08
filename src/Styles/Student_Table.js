import React from 'react';
import './Styles.css';

let Student_Table = () => {
    const Students = [

        { id: 1, name: "Thamizh", age: 22, Email: "thamizh@gmail.com" },
        { id: 2, name: "Ajith", age: 21, Email: "abc@gmail.com" },
        { id: 3, name: "Praveen", age: 42, Email: "cvb@gmail.com" },
        { id: 4, name: "abc", age: 25, Email: "fjf@gmail.com" },
        { id: 5, name: "cdv", age: 20, Email: "ufu@gmail.com" },

    ];
    return (
        <div className='table_container'>
            <table className='student-table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>E-mail</th> 
                    </tr>
                </thead>

                <tbody>
                    {Students.map(Student => (
                        <tr key={Student.id}>
                            <td>{Student.name}</td>
                            <td>{Student.age}</td>
                            <td>{Student.Email}</td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default Student_Table;
