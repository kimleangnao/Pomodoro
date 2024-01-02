

import InputAndLabel from "./components/InputAndLabel";

const CreateAccount = () => {
    return(
        <form className="createAccount">
            <h1 className="createAccount-title">
                    Account Creation
            </h1>
            <InputAndLabel labelText="First Name" inputText="John" type="text" />
            <InputAndLabel labelText="Last Name" inputText="Doe" type="text" />
            <InputAndLabel labelText="Email" inputText="example@email.com" type="email" />
            <InputAndLabel labelText="Password" inputText="*********" type="password" />
            <InputAndLabel labelText="Password" inputText="*********" type="password" />
            <input type="submit" value="Submit"  className="createAccount-create"/>
        </form>
    )
}

export default CreateAccount;