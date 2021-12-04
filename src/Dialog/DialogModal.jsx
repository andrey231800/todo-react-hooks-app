import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./DialogModal.css"

function DialogModal({
    isOpen,
    handleOpenDialog,
    formData,
    handleSetFieldValue,
    handleSetTodoOnSubmit
}) {
    return (
        <>
            <Dialog open={isOpen} onClose={handleOpenDialog}>
                <DialogTitle>{formData.isEdit ? 'Edit todo' : 'Add todo'}</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSetTodoOnSubmit}>
                        <TextField 
                            label="Todo"
                            variant="outlined"
                            onChange={(e) => handleSetFieldValue("todoName", e.target.value)}
                            value={formData.todoName}
                        />
                        <TextField 
                            label="Note"
                            variant="outlined"
                            onChange={(e) => handleSetFieldValue("todoNote", e.target.value)}
                            value={formData.todoNote}
                            multiline
                            minRows={4}
                        />
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={handleOpenDialog}>Close</Button>
                            <Button disabled={!formData.todoName} type="submit" variant="contained" color="primary">{formData.isEdit ? 'Edit' : 'Add'}</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
                <DialogActions />
            </Dialog>
        </>
    )
}

export default DialogModal
