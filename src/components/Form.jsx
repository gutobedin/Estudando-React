import { useState } from "react";




export default function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name)
        console.log(password)
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite o seu nome" />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}