import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardDetails = (props) => {

    const handleclick=()=>{
props.clickme(props.title);
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img src={props.img}/>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {props.des}
        </Card.Text>
        <Button onClick={()=>{
            console.log(props.title);
        }}></Button>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default CardDetails
