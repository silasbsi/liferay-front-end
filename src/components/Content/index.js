import React from 'react';
import Container from 'react-bootstrap/Container'

import { Row, Col, Image} from 'react-bootstrap';
import { 
	TrashFill,
  Star
} from 'react-bootstrap-icons';

import './index.css';

 function Content(props) {
    const {
      repositories
    } = props;
    console.log(repositories)
    return (
      <div className="container-fluid">
        <Container>
            <Row>
              {repositories.length > 0 ?
                repositories.map((item) => ( 
                  <Col key={item.id} xs={12} sm={12} md={6} lg={4} >
                    <div className="card-repository-column">
                        <div className="card-repository-header">
                              <Row>
                                <Col className="col" md={10}>
                                  <Image src={item.owner.avatar_url} rounded />
                                  <span>{item.full_name}</span>
                                </Col>
                                <Col md={1}><Star /></Col>
                                <Col md={1}><TrashFill /></Col>
                              </Row>
                              
                              
                              
                            
                            
                        </div>
                        <div className="card-repository-content">
                          <Row><span><b>Star</b> {item.stargazers_count}</span></Row>
                          <Row><span><b>Forks</b> {item.forks}</span></Row>
                          <Row><span><b>Age</b> {item.created_at}</span></Row>
                          <Row><span><b>Last commit</b> {item.updated_at}</span></Row>
                          <Row><span><b>Licence</b> {item.license !== null ? item.license.name : 'N/A'}</span></Row>
                          <Row><div className="card-repository-language">{item.language ?? 'No language'}</div></Row>
                        </div>
                    </div>
                  </Col>
                ))
                :
                (
                  <p>No repositories</p>
                )
              }
            </Row>
          </Container>
        </div>
    );
}

export default Content;