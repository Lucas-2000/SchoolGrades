import React from 'react'
import '../styles/card.scss'

const CardStudents = ({student}) => {

    return (
        <div id="component-card">
            <main>
                <img src={student.imageUri} alt="Foto Aluno" />
                <div className="details-card">
                    <strong>Nome: {student.name} </strong>
                    <strong>Idade: {student.age} </strong><p></p>
                    <strong>Turma:  {student.classStudent} </strong><p></p>
                    <strong>Nota 1:  {student.grade1} </strong><p></p>
                    <strong>Nota 2: {student.grade2} </strong><p></p>
                    <strong>Nota Final:  {student.finalGrade} </strong><p></p>
                    <strong>Status:  {student.status} </strong>
                </div>
            </main>
        </div>
    )
}

export default CardStudents
