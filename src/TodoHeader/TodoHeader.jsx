import React from 'react'
import moment from 'moment'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./TodoHeader.css"
import DialogModal from '../Dialog/DialogModal';
import DisplayTodo from '../DisplayTodo/DisplayTodo';

const whiteColor = '#fff'

const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
         width: '95%'
    },
    finished: {
        fontSize: '46px',
        color: whiteColor
    },
    total: {
        display: 'flex',
        flexDirection: 'column',
        color: whiteColor
    },
    weekDay: {
        color: whiteColor,
        fontSize: '28px'
    },
    date: {
        color: whiteColor,
        fontSize: '28px',
        marginLeft: '18px'
    }

}

function TodoHeader({
    isOpen,
    handleOpenDialog,
    formData,
    handleSetFieldValue,
    handleSetTodoOnSubmit,
    handleCloseButton,
    handleEditTodo,
    handleRemoveTodo,
    isOpenDisplayTodo,
    totalCount
}) {
    const weekday =  moment().format('dddd');
    const date = moment().date();

    return (
        <div className="todo-header">
            <div style={styles.wrapper}>
                <div className="todos-count">
                    <span style={styles.finished}>{totalCount.finished}</span>
                    <div style={styles.total}>
                        <span>Tasks</span>
                        <span>/{totalCount.total}</span>
                    </div>
                </div>
                <div>
                    <span style={styles.weekDay}>{weekday}</span>
                    <span style={styles.date}>{date}</span>
                </div>
                <div className="add-todos" onClick={handleOpenDialog}>
                    <AddCircleIcon color="primary"/>
                    <span className="icon-background"></span>
                </div>
                <DialogModal 
                    isOpen={isOpen}
                    handleOpenDialog={handleOpenDialog}
                    formData={formData}
                    handleSetFieldValue={handleSetFieldValue}
                    handleSetTodoOnSubmit={handleSetTodoOnSubmit}
                />
                <DisplayTodo 
                    formData={formData} 
                    isOpen={isOpenDisplayTodo} 
                    handleCloseButton={handleCloseButton}
                    handleEditTodo={handleEditTodo}
                    handleRemoveTodo={handleRemoveTodo}
                />
            </div>
        </div>
    )
}

export default TodoHeader
