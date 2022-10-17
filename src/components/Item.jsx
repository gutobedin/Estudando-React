import PropTypes from 'prop-types'

export default function Item({ marca, ano_lancamento }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}


Item.propTypes = {
    marca: PropTypes.string,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}