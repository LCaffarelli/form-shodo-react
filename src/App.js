import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import "./App.css";

const urlJsonPlaceholder = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const title = data.title;
    const body = data.body;

    fetch(urlJsonPlaceholder, {
      method: "POST",
      body: JSON.stringify({
        titre: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        alert(`Titre : ${data.title}\nCommentaire : ${data.body}`)
      );
  };
  return (
    <div className="App">
      <Typography
        variant="h1"
        sx={{
          fontSize: "4rem",
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        Formulaire Shodo
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20rem" },
          border: "solid",
          width: "fit-content",
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField {...register("title")} required label="Titre"></TextField>
        <TextField
          {...register("body")}
          required
          multiline
          label="Commentaire"
        ></TextField>

        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
            marginTop: 4,
          }}
        >
          Enregistrer
        </Button>
      </Box>
    </div>
  );
}

export default App;
