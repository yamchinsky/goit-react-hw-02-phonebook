import React, { Component } from "react";
import PropTypes from "prop-types";
import { PhonebookItemStyled } from "./PhonebookFormItemStyled";
import { v4 as uuidv4 } from "uuid";
import { ContactsItemStyled } from "../contacts/ContactsItemStyled";

class PhonebookFormItem extends Component {
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

  render() {
    return (
      <div className="phonebook-container">
        <h2 className="phonebook-title">Phonebook</h2>
        <PhonebookItemStyled
          action=""
          className="form-input"
          onSubmit={this.handleSubmit}
        >
          <label className="phonebook-name">
            Name
            <br />
            <input
              onChange={this.handleNameChange}
              value={this.state.name}
              className="input"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="phonebook"
              required
              id={this.id}
            />
          </label>

          <button type="submit" className="add-contact-btn">
            Add contact
          </button>
        </PhonebookItemStyled>
      </div>
    );
  }
}

export default PhonebookFormItem;
