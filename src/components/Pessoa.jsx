export default function Pessoa({ nome, idade, profissao, foto }) {
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade} </p>
            <p>Profissao: {profissao} </p>
            <img src={foto} alt={nome} />
        </div>
    )
}