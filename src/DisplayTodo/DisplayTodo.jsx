import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import "./DisplayTodo.css"

function DisplayTodo({isOpen, formData, handleCloseButton, handleEditTodo, handleRemoveTodo}) {
    return (
        <>
            <Dialog open={isOpen} onClose={handleCloseButton}>
                <DialogTitle>
                    <div className="dsplay-todo-title">Your todo</div>
                </DialogTitle>
                <DialogContent>
                        <h2>{formData.todoName}</h2>
                        <div>{formData.todoNote}</div>
                </DialogContent>

                <DialogActions>
                            <div className="display-buttons-wrapper">
                                <Button variant="outlined" color="primary" onClick={handleRemoveTodo}>Remove</Button>
                                <div>
                                    <Button variant="contained" color="primary" onClick={handleCloseButton}>Close</Button>
                                    <Button variant="contained" color="primary" onClick={handleEditTodo}>Edit</Button>
                                </div>
                            </div>
   
                        </DialogActions>
                <DialogActions />
            </Dialog>
        </>
    )
}

export default DisplayTodo
