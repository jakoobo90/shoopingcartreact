import {Component} from "react"
const styles = {
    tittle: {
        marginBottom: "30px",

    }
}

class Tittle extends Component {
    render (){
        return(
            <h1 style={styles.tittle}>Tienda</h1>
        )
    }
}
export default Tittle
