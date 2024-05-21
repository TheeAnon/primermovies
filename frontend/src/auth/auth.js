import axios from "axios";

//login
export const login = async (formData) => {
  const { email, password } = formData
  try{
    const response = await axios.post("/login", { email, password});

    if (response.status === 200) {
      localStorage.setItem('token', response.user)
      return { success: true };
    } else {
      return { success: false, error: response.data.message };
    }
  }catch(e){
    return { success: false, error: e.response ? e.response.data.message : e.message};
  }
};

//sign up
export const signup = async (formData) => {
  const { firstName, lastName, email, password } = formData
  try {
     const response = await axios.post('/signup', { firstName, lastName, email, password });

    if (response.status === 201) {
      return { success: true };
    } else {
      return { success: false, error: response.data.message };
    }
  } catch (e) {
    return { success: false, error: e.response ? e.response.data.message : e.message };
  }
};

