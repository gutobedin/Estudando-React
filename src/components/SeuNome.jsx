export default function SeuNome({ setNome, value }) {


    return (
        <div>
            <p>Digite o seu nome:</p>
            <input type="text" placeholder="Digite o seu nome" onChange={(e) => { setNome(e.target.value) }} />
        </div>
    )
}