import {Box, Modal} from '@mui/material';
import PropTypes from "prop-types";
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: window.innerWidth > 1000 ? '900px' : '90%',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: window.innerWidth > 500 ? 8 : 4,
	borderRadius: '10px'

};

export const ReadyModal = ({open, setOpen, children}) => {
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{children}
				</Box>
			</Modal>
		</div>
	);
}

ReadyModal.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
	children: PropTypes.node
};