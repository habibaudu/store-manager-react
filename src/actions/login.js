//Action creator

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    loginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

const loginApi = (email, password, callback)  => {

  fetch('https://store-manager2.herokuapp.com/api/v1/auth/login', {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({email, password})
               
  }).then((Response) =>{
    status = Response.status;
    return Response.json();
  })
    .then((data) => {
      switch (status) {
        case '200': 
          localStorage.setItem("token",data.token);
                   
          alert(`${data.message}`);
          const Role = String(data.userRole);
 
          if ( Role == 'ADMIN' ) {
            return callback(null); 
          } 
          
          break;
                
        case '400': 
          return callback(new Error('Invalid email and password'));   
                
        default:
          alert(`${data.message}`);
          window.location = 'index.html';
          break;
      }
          
    })
            
    .catch(err => console.log(err));

}

const setLoginPending = (isLoginPending) => {
  return {
    type: 'IS_PENDING',
    isLoginPending
  };
}

const setLoginSuccess =(isLoginSuccess) => {
  return {
    type: 'IS_LOGGED_IN',
    isLoginSuccess
  };
}

const setLoginError = (loginError) =>{
  return {
    type: 'IS_ERROR',
    loginError
  }
}


