import { Component } from 'react';
import Productos from './components/Productos'
import Layout from "./components/Layout"
import Tittle from "./components/Tittle"
import Navbar from "./components/Navbar"

class App extends Component {
  state = {
    productos: [
    { name: 'Tomate', price: 35, img: '/productos/tomate.jpg'},
    { name: 'Platano', price: 25, img: '/productos/platano.jpg'},
    { name: 'Manzana', price: 45, img: '/productos/manzana.jpg'},
    
    
    

    ],
    carro:[
     // { name: 'Tomate', price: 35, img: '/productos/tomate.jpg', cantidad: 1 },
    ],
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name )){
      const newCarro = carro.map(x => x.name === producto.name 
      ?({
        ...x
      }))
    }
    
    return this.setState({
        carro: this.state.carro.concat({
          ...producto,
        cantidad: 1, 
          
        })
        
      })

  }

  render() {
    console.log (this.state.carro)
    return(
      <div>
        <Layout>
          <Navbar />
          <Tittle />
        <Productos
            agregarAlCarro= {this.agregarAlCarro}
            productos={this.state.productos}
        />

        </Layout>
        
      </div>
    )

  }
}

export default App;
