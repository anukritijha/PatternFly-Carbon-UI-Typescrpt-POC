/*
 * (C) Copyright IBM Corp. 2020  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {useAddBookModel} from './AddBook.model.js';

import { TextInput, Button } from 'carbon-components-react';
import { Heading } from 'Elements';

export const AddBook = () => {
  const {onTitleChange, onAuthorChange, isInvalid, addNewBook} = useAddBookModel();

  return (
    <div>
      <Heading level={2}>Add a new book</Heading>
      <TextInput id={'title'} labelText={'Book title'} onChange={onTitleChange} />
      <TextInput id={'author'} labelText={'Author'} onChange={onAuthorChange} />
      <Button disabled={isInvalid} onClick={addNewBook}>Add book</Button>
    </div>
  );;
}

