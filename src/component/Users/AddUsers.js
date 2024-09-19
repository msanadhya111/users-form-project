import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState, useRef } from "react";

const AddUsers = (props) => {
    const enteredUserNameRef = useRef();
    const enteredAgeRef = useRef();
    const [errorOccured, settingErrorOccured] = useState(false);

    const addUsersHandler = (event) => {
        event.preventDefault();
        const enteredUsername = enteredUserNameRef.current.value;
        const enteredAge = enteredAgeRef.current.value;
        if (enteredUsername.trim().length > 0 && enteredAge && +enteredAge >= 1) {
            console.log(enteredUsername + " " + enteredAge);
            props.onAddUserData(enteredUsername, enteredAge);
            enteredUserNameRef.current.value = "";         // although not a good practice but fine here
            enteredAgeRef.current.value = "";              // although not a good practice but fine here
        }
        else {
            settingErrorOccured(true);
        }
    }
    const handlingErrorModalFlag = () => {
        settingErrorOccured(false);
    }
    const handlingErrorScenario = () => {
        settingErrorOccured(false);
    }
    return (
        <div>
            {errorOccured && <ErrorModal title="An error occured" message="Something went wrong" errorModalFlag={handlingErrorModalFlag} onConfirm={handlingErrorScenario}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUsersHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" 
                        type="text" 
                        ref={enteredUserNameRef}
                    >
                    </input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age"
                        type="number" 
                        ref={enteredAgeRef}
                    >
                    </input>
                    <Button type="submit">Add Users</Button>
                </form>
            </Card>
        </div>
    )
} 

export default AddUsers;

// Above Card is a custom tag and it does not apply the css that we write with classname so we send this to
// Card component and there we apply the css to it as there it is an underline div only that apply the css
// to it

// Ref in react is basically creates a linkage between html and the Javascript var 
// It is advisable to only used as a read only property although we write in the DOM but not a good practice
// If we want a property that we wants to write as well we can use State in that case as useState

// Ref approach where we assign the value as .current.value = somthing, this comes under uncontrolled component
// as we are manually changing the DOM value but if we go with state approach it's value gets updated by react
// itself there we are not doing it manually that will come under controlled state
