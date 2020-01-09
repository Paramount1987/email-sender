import React from 'react';
import FormContainer from './modules/Form/FormContainer';
import MessagesTable from './modules/MessagesTable/MessagesTable';

import './App.scss';

function App() {
  return (
    <div className="App">
      <FormContainer />
      <MessagesTable />
    </div>
  );
}

export default App;
