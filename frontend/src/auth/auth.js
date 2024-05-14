//login
export const login = async (formData) => {
  const response = await fetch("http://localhost:1337/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (response.ok) {
    return { success: true };
  } else {
    return { success: false, error: data.message };
  }
};

//sign up
export const signup = async (formData) => {
  const response = await fetch("http://localhost:1337/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (response.ok) {
    return { success: true };
  } else {
    return { success: false, error: data.message };
  }
};
