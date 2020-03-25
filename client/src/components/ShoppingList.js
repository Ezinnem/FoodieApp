import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'react-uuid';

class ShoppingList extends Component {
 uuid = uuid();
    state = {
        items: [
            {id: uuid(), name: 'English'},
            {id: uuid(), name: 'Mathematics'},
            {id: uuid(), name: 'Programming'},
            {id: uuid(), name: 'Coding'}
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <Container>
               <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if(name){
                        this.setState(state => ({
                            items : [...state.items, { id: uuid(), name }]
                        }));
                    }
                }}
               >Add More</Button> 

               {/* to list the items */}
               <ListGroup>
                   <TransitionGroup className="shopping-list">
                       {items.map(({id, name}) => (
                           <CSSTransition key={id} timeout={500} classNames="fade">
                               <ListGroupItem>
                                   <Button className="remove-btn"
                                   color="danger"
                                   size="sm"
                                   onClick={() => {
                                       this.setState(state => ({
                                           items: state.items.filter(item => item.id != id)
                                       }))
                                   }}
                                   >&times;</Button>
                                   {name}
                               </ListGroupItem>
                           </CSSTransition>
                       ))}
                   </TransitionGroup>
               </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList
