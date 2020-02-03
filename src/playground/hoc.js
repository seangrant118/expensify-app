import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div id="app">
    <h1>Info</h1>
    <p>This is info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>Warning</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Log in</p>
      )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are deets" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are deets" />, document.getElementById("app"))