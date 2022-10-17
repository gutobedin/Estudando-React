import Button from "./evento/Button"

export default function Evento({ }) {
    function meuEvento() {
        console.log(`Booaaa`)
    }

    function segundoEvento() {
        console.log(`boooaaa 2`)
    }


    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}