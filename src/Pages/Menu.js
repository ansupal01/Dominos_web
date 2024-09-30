import React from 'react'
import { Container , Row , Col , Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../Styles/Menu.css'
import vegPizza from '../Images/IMG-20240805-WA0006.jpg'

export default function Menu() {
  return (
    <div>
      <section className='nav2'>
      <Container>
      <Row>
      <Col>
      <Nav className='link mr-auto'>
      <Nav.Link as={Link} to="/veg" className='navLink'>
      VEG PIZZA
      </Nav.Link>
      <Nav.Link as={Link} to="/nonVeg" className='navLink'>
      NON VEG PIZZA
      </Nav.Link>
      <Nav.Link as={Link} to="/sideOrders" className='navLink'>
      SIDE ORDERS
      </Nav.Link>
      <Nav.Link as={Link} to="/beharages" className='navLink'>
      BEVARAGES
      </Nav.Link>
      <Nav.Link as={Link} to="/crusts" className='navLink'>
      CHOICE OF CRUSTS
      </Nav.Link>
      <Nav.Link as={Link} to="/toppings" className='navLink'>
      CHOICE OF TOPPINGS
      </Nav.Link>
      <Nav.Link as={Link} to="/pasta" className='navLink'>
      PASTA
      </Nav.Link>
      <Nav.Link as={Link} to="/burger" className='navLink'>
      BURGER PIZZA
      </Nav.Link>
      </Nav>
      </Col>
      </Row>
      </Container>
      </section>

      <section className='menu'>
      <Container>
      <Row className='py-4'>
      <h6>HOME / MENU</h6>
      </Row>
      <Row className='text-center py-3'>
      <Col>
      <h1 style={{color:'red',fontFamily:'fantasy'}}>DOMINO'S MENU</h1>
      </Col>
      </Row>
      <Row className='text-center py-4'>
      <Col md={4} className='menu-card'>
      <div>
      <h3>VEG PIZZA</h3>
      <img src={vegPizza} alt="" height={150} width={200} />
      <p> A delight for VEggie lover! Choose from our wide range of delicious vegetarian pizza it is softer</p>
      <Button variant="primary" style={{width:'50%'}}>VIEW ALL</Button> {' '}
      </div>
      </Col>

      <Col md={4} className='menu-card'>
      <div>
      <h3>VEG PIZZA</h3>
      <img src={vegPizza} alt="" height={150} width={200} />
      <p> A delight for VEggie lover! Choose from our wide range of delicious vegetarian pizza it is softer</p>
      <Button variant="primary" style={{width:'50%'}}>VIEW ALL</Button> {' '}
      </div>
      </Col>

      <Col md={4} className='menu-card'>
      <div>
      <h3>VEG PIZZA</h3>
      <img src={vegPizza} alt="" height={150} width={200} />
      <p> A delight for VEggie lover! Choose from our wide range of delicious vegetarian pizza it is softer</p>
      <Button variant="primary" style={{width:'50%'}}>VIEW ALL</Button> {' '}
      </div>
      </Col>

     

      </Row>
      </Container>
      </section>
    </div>
  )
}