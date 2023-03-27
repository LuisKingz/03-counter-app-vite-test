import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {    
    return (
    <>
        <h2 data-testid="test-title" >{ title }</h2>
        <p>{ subTitle }</p>
        <p> { name } </p>
    </>
  )
}

// RESTRICCIONES PARA EL TIPO DE DATOS QUE SE RECIBE EN LAS PROPS

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

//  VALORES POR DEFECTO EN CASO DE QUE NO SE ENVIEN LOS PROPS. ENTRAN PRIMERO QUE LOS PROPTYPES
FirstApp.defaultProps = {
    name: "No hay nombre",
    subTitle:"No hay Subtitulo"
}