import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";
import  ReactDOM  from "react-dom";

const ErrorModal = (props) => {
    const BackDrop = (props) => {
        return <div className={classes.backdrop} onClick={props.onConfirm}/>
    }
    const Overlay = (props) => {
        return (
            <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        )
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Overlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    )

}

export default ErrorModal;

// When we build a modal, or some stuff like this then it should not be nested inside other div's, otherwise
// it will give an issue like accessibility, it should outside of the other div's or mostly inside body
// without inside any div's
// Create Portals does this work for us, in create portal all we have to specify is where we have to load it
// like we are doing inside our return function and from where we are loading it
// Although in the above application the error Modal component is inside AddUser but with the help of create
// Portal in react we can load it to the place we want like above we are loading it inside the body
// that we have mention in the index.html file
