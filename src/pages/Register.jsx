import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Sidebar from '../components/Siderbar'
import '../styles/register.scss'

const Register = () => {

    const [finalGrade, setFinalGrade] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [classStudent, setClassStudent] = useState('')
    const [status, setStatus] = useState('')
    const [grade1, setGrade1] = useState('')
    const [grade2, setGrade2] = useState('')

    const handleAvg = () => {

        if (grade1 === '' || grade2 === '') {
            window.alert('Preencha os campos de notas')
        } else {
            if (grade1 <= 10 && grade1 >= 0 && grade2 <= 10 && grade2 >= 0) {
                setFinalGrade((Number(grade1) + Number(grade2)) / 2)
            } else {
                window.alert('Insira valores válidos')
                setGrade1('')
                setGrade2('')
                setFinalGrade('')
                setStatus('')
            }

            if ((Number(grade1) + Number(grade2)) / 2 >= 6) {
                setStatus('Aprovado')
            } else {
                setStatus('Reprovado')
            }
        }
    }

    const handleSave = (e) => {
        e.preventDefault()

        if (finalGrade === '' || name === '' || age === '' || classStudent === ''
            || status === '' || grade1 === '' || grade2 === '') {
            window.alert('Preencha todos os campos')
        }
        else {

            if (grade1 <= 10 && grade1 >= 0 && grade2 <= 10 && grade2 >= 0) {
                if (name && age && classStudent && grade1 && grade2 && status && finalGrade) {
                    fetch('http://localhost:8000/students', {
                        method: 'POST',
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({ name, age, classStudent, grade1, grade2, status, finalGrade })
                    })
                }

                window.alert('Aluno inserido com sucesso')
                setName('')
                setAge('')
                setClassStudent('')
                setGrade1('')
                setGrade2('')
                setFinalGrade('')
                setStatus('')
            } else {
                window.alert('Insira um valores válidos')
                setGrade1('')
                setGrade2('')
                setFinalGrade('')
                setStatus('')
            }
        }
    }

    return (
        <div>
            <Sidebar />
            <div id="page-register">
                <main className="main-content">
                    <strong>Cadastre um aluno abaixo</strong>
                    <input value={name} type="text" placeholder="Nome do aluno" onChange={(e) => setName(e.target.value)} />
                    <input value={age} type="number" placeholder="Idade do aluno" onChange={(e) => setAge(e.target.value)} />
                    <input value={classStudent} type="text" placeholder="Turma do aluno" onChange={(e) => setClassStudent(e.target.value)} />
                    <input value={grade1} type="number" placeholder="Nota 1 do aluno" onChange={(e) => setGrade1(e.target.value)} />
                    <input value={grade2} type="number" placeholder="Nota 2 do aluno" onChange={(e) => setGrade2(e.target.value)} />
                    <input type="text" disabled placeholder="Média final" value={finalGrade} onChange={(e) => setFinalGrade(e.target.value)} />
                    <input type="text" disabled placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
                    <button onClick={handleAvg}>CALCULAR MÉDIA</button>
                    <button type="submit" onClick={handleSave}>SALVAR DADOS</button>
                </main>
            </div>
        </div>
    )
}

export default Register
