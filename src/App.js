import React, { Component } from "react";
import ContactsItem from "./Components/contacts/ContactsItem";
import PhonebookFormItem from "./Components/phonebookForm/PhonebookFormItem";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    id: uuidv4(),
  };

  handleNameChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "" });
  };

  formSubmithandler = (data) => {
    const contact = data.name;
    console.log(contact);

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <>
        <PhonebookFormItem onSubmit={this.formSubmithandler} />
        {/* <ContactsItem /> */}
      </>
    );
  }
}

export default App;
