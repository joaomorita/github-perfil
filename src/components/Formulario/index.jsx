import { useState, useEffect } from "react"

const Formulario = () => {
    const [notaA, setNotaA] = useState(0);
    const [notaB, setNotaB] = useState(0);
    const [notaC, setNotaC] = useState(0);

    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou')

        return () => {
            console.log('o componente finalizou')
        }
    }, [])

    useEffect(() => {
        console.log('O estaod mudou')
    }, [nome])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaNota = () => {
        let soma = notaA + notaB + notaC;

        let media = soma / 3;

        if(media >= 7){
            return(
                <p>Olá {nome},sua média foi {media}, você foi aprovado!</p>
            )
        }else{
            return(
                <p>Olá {nome}, sua média foi {media}, você não foi aprovado!</p>
            )
        }
    }

    return(
        <form>
            <input type="text" placeholder="Seu nome:" onChange={alteraNome}/>
            <input type="number" placeholder="Nota A" onChange={evento => setNotaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota B" onChange={evento => setNotaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota C" onChange={evento => setNotaC(parseInt(evento.target.value))}/>
            <p>{renderizaNota()}</p>
        </form>
    )
}

export default Formulario