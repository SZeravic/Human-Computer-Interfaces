export const isBrowser = () => typeof window !== "undefined";
export const getUser = () => isBrowser() && window.localStorage.getItem("gatsbyUser") ? JSON.parse(window.localStorage.getItem("gatsbyUser")) : {};
const setUser = user => window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (username === `admin` && password === `1221`) {
    setUser({
      username: `admin`,
      name: `Admin`,
      email: `admin@fesb.hr`
    });

    return {
      error: false
    };
  }

  if (username === `stipe` && password === `pro`) {
    setUser({
      username: `stipe`,
      name: `Stipe`,
      email: `stipe@fesb.hr`
    });

    return {
      error: false
    };
  }

  if (username === `student` && password === `stud`) {
    setUser({
      username: `student`,
      name: `Student`,
      email: `student@fesb.hr`
    });

    return {
      error: false
    };
  }

  return {
    error: true,
    message: 'Invalid username or password'
  };
};

export const handleRegestration = ({ username, password, email }) => {
  // console.log(username);
  // console.log(password);

  if (username !== "" && password !== "") {
    setUser({
      username: username,
      name: password,
      email: email
    });

    return {
      error: false
    };
  }

  return {
    error: true,
    message: 'Error while creating User'
  };
};

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};

export const handleLogout = callback => {
  setUser({});
  callback && callback();
};