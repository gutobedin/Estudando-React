import Item from './Item'


export default function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Item 1 " ano_lancamento={2019} />
                <Item marca="Item 2" ano_lancamento={2020} />
                <Item />
            </ul>
        </>
    )
}

