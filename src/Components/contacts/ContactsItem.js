import React from "react";
import PropTypes from "prop-types";
import { ContactsItemStyled } from "./ContactsItemStyled";
import PhonebookFormItem from "../phonebookForm/PhonebookFormItem";

const ContactsItem = ({ value }) => {
  return (
    <ContactsItemStyled className="contacts-container">
      <h2 className="contacts-title">Contacts</h2>
      <ul className="contacts-list">
        <li className="contacts-item">{value}</li>
      </ul>
    </ContactsItemStyled>
  );
};

export default ContactsItem;
