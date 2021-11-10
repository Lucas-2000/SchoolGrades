import React, { useEffect, useState } from 'react'
import CardStudents from '../components/CardStudents'
import Sidebar from '../components/Siderbar'
import '../styles/students.scss'

const Students = () => {
    const [students, setStudents] = useState([])
    const [totalStudents, setTotalStudents] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:8000/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    useEffect(() => {
        setTotalStudents(`${students.length}`)
    }, [students])

    return (
        <div>
            <Sidebar />
            <div id="page-students">
                <div className="search-students">
                    <label>Buscar aluno</label>
                    <input placeholder="Nome" required onChange={event => {setSearch(event.target.value)}} />
                    <strong>Alunos cadastrados: {totalStudents}</strong>
                </div>
                {students.filter((student) => {
                    if(search === ""){
                        return student
                    } else if(student.name.toLowerCase().includes(search.toLowerCase())) {
                        return student
                    }
                }).map(student => (
                <div className="show-students" key={student.id}>
                    <CardStudents student={student} />
                </div>
                  ))}
            </div>
        </div>
    )
}

export default Students
