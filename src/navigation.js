import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const toggle = () => {
		setIsOpen(!isOpen)
	};

	return (
	  <>
	  	<Sidebar isOpen={isOpen} toggle={toggle} />
	  	<Navbar toggle={toggle}  />
	  
	  </>
  )
}

export default Navigation;