import React, { useRef, useState } from 'react';
import './index.css';
import { 
	Github, 
	PlusSquareFill,
	Star, 
	CircleHalf, 
	GridFill,
	Search
} from 'react-bootstrap-icons';

import { Button, Form, Overlay, Popover } from 'react-bootstrap';

import api from '../../services/api';

const Header = (props) => {
	const { loadContent  } = props;
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);
	const handleClick = (event) => {
		setShow(!show);
		setTarget(event.target);
	};

	const handleAddNewRepository = () => {	
		let repositoryName = document.getElementById('repositoryForm').value;	
		api.post('/orgs/silasjsilvajr/repos', {name: repositoryName})
		.then(() => {
			if (typeof newRepository === 'function') {
				loadContent();
			}
		})
	}

	return (
		<>
			<div className="header-content">
				<div className="github-icon">
				<Github />
				</div>
				<div className="github-compare-icon">
					Github Compare
				</div>
				<div className="filter-order-icon">
					Filter and order
				</div>			
				<div className="input-group flex-nowrap">
					<input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" />
					<span className="input-group-text" id="addon-wrapping"><Search /></span>
				</div>
				<div className="star-icon">
					<Star />
				</div>
				<div className="circle-half-icon">
					<CircleHalf />
				</div>
				<div className="grid-fill-icon">
					<GridFill />
				</div>
				<div className="plus-square-fill-icon">
					<PlusSquareFill onClick={handleClick}/>
				</div>
			</div>
			<Overlay
				show={show}
				target={target}
				placement="bottom"
				container={ref.current}
				containerPadding={20}
			>
				<Popover id="popover-contained">
					<div className="new-repository">
						<div className="new-repository-header">
							New Repository
						</div>
						<div className="new-repository-content">
							<Form>
								<Form.Group controlId="repositoryForm">
									<Form.Label>Repository <span style={{color:"red"}}>*</span></Form.Label>
									<Form.Control type="text" placeholder="Enter repository" />
								</Form.Group>
								
							</Form>
						</div>
					</div>
					<div className="new-repository-footer">
						<Button className="cancel-button" variant="outline-secondary">Cancel</Button>
						<Button variant="primary" type="submit" onClick={(event) => handleAddNewRepository(event)}>Add</Button>
					</div>
				</Popover>
			</Overlay>
		</>
    );
}

export default Header;