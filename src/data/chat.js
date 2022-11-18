import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZFVzZXIiOjExMjAsImVtYWlsIjoiaXZhbi5kaWF6QG5vd3BvcnRzLmNvbSIsIm5hbWUiOiJTYW5nIEppayBMZWUiLCJwaG9uZU51bWJlciI6IjgzNDEzMDc1MDkiLCJyb2xlIjoidXNlciIsImFyZWEiOiJnZW5lcmFsIiwiZXhwIjoxNjc0MjU0MTk2OTIyLCJsYW5ndWFnZSI6ImVzIiwic2Vzc2lvbiI6IjJwZG9VN1Mzb3pYVjJCSURuWmtKTklUWlcyTHpaa0NUczFhbSJ9.8fGKM187p0FesvVazgH1CGP1_P4xILAzutowAXRhOGM';

const getChats = () => {
  try {
    const response = axios.get("http://localhost:3000/chat", {
        headers: {
            'Authorization': token,
        }
    });
    return response;
  } catch (error) {
    console.log(error)
  }
};

export default getChats;
