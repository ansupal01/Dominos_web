import React from 'react'
import '../Styles/Home.css'
import { Container, Row , Col, Button , Card } from 'react-bootstrap'
import img1 from '../Images/coupon1.jpg'
import img2 from '../Images/coupon2.jpg'
import menu from '../Images/menu1.jpg'
import store from '../Images/store.jpg'


export default function Home() {
  return (
    <div>
      <section className='Banner'>
      <Container>
      <Row className='py-4'>
      <Col>
      <h1>DOMINO'S ONLINE ORDERING</h1>
      <h5>Yummy Pizza Delivery Fast And Fresh</h5>
      <Button variant='success'>Order Onlinr Now....</Button>
      </Col>
      </Row>
      </Container>
      </section>
      <section ClassName='Coupons'>
      <Row style={{color:'blue',fontFamily:'sans-serif',fontWeight:'bolder'}}>
      <h3>Coupons $ Offers</h3>
      </Row>
      <Container>
      <Row className='py-4'>
      <Col md={6}>
      <img src={img1} style={{width:'500px'}} />
      </Col>
      <Col  md={6}>
      <img src={img2} style={{width:'500px'}} />
      </Col>
      </Row>
      </Container>
      </section>

      <section>
      <Row className='py-4'>
      <Col>
      <h3 style={{color:'blue' , fontFamily:'sans-serif', fontWeight:'bolder'}}>Explore</h3>
      </Col>
      </Row>
      <Row className='text-center'>
      <Col md={3}>
      <Card style={{width:'16rem'}}>
      <Card.Img variant='top' src={menu} style={{height:'150px'}}></Card.Img>
      <Card.Body>
      <Card.Title>OUR MENU</Card.Title>
      <Card.Text> Explore Our RAnge of delecious Pizza'sdelived in 30 minutes!
      </Card.Text>
      <Button variant='primary'>DISCOVER</Button>
      </Card.Body>
      </Card>
      </Col> 

      <Col md={3}>
      <Card style={{width:'16rem'}}>
      <Card.Img variant='top' src={store} style={{height:'150px'}}></Card.Img>
      <Card.Body>
      <Card.Title>OUR MENU</Card.Title>
      <Card.Text> Explore Our RAnge of delecious Pizza'sdelived in 30 minutes!
      </Card.Text>
      <Button variant='primary'>DISCOVER</Button>
      </Card.Body>
      </Card>
      </Col>

      <Col md={3}>
      <Card style={{width:'16rem'}}>
      <Card.Img variant='top' src={menu} style={{height:'150px'}}></Card.Img>
      <Card.Body>
      <Card.Title>OUR MENU</Card.Title>
      <Card.Text> Explore Our RAnge of delecious Pizza'sdelived in 30 minutes!
      </Card.Text>
      <Button variant='primary'>DISCOVER</Button>
      </Card.Body>
      </Card>
      </Col>

      <Col md={3}>
      <Card style={{width:'16rem'}}>
      <Card.Img variant='top' src={store} style={{height:'150px'}}></Card.Img>
      <Card.Body>
      <Card.Title>OUR MENU</Card.Title>
      <Card.Text> Explore Our RAnge of delecious Pizza'sdelived in 30 minutes!
      </Card.Text>
      <Button variant='primary'>DISCOVER</Button>
      </Card.Body>
      </Card>
      </Col>


      </Row>
      </section>
    </div>
  )
}