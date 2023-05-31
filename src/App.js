import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";

function App() {
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
        <TextField required label="Titre"></TextField>
        <TextField required multiline label="Commentaire"></TextField>

        <Button
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
