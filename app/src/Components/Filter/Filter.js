import { Form, Row, Col } from "react-bootstrap"
import {useState} from "react"
const Filter = ({handlerFilter}) => {
    const [products, setProducts] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (characters.trim() === "") return //Terminamos la funcion si esta vacio
        handlerFilter(characters)
    }
    const handlerInput = (e) => {
        setProducts(e.target.value) // Valor de busqueda
    }

    const agregarCaja = () => {

    }
    return (

        
        <Row className="justify-content-center">
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item href="#">Menor a mayor</Dropdown.Item>
                        <Dropdown.Item href="#">Mayor a menor</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    </Form.Group>
                </Form>
            </Col>   
        </Row>
    )
    
}
export default Filter