import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          border: "solid",
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "4rem",
            marginBottom: 4,
          }}
        >
          Formulaire Shodo
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 4,
          }}
        >
          <TextField
            required
            label="Titre"
            defaultValue="Votre titre"
          ></TextField>
          <TextField
            required
            multiline
            label="Commentaire"
            defaultValue="Votre commentaire"
          ></TextField>
        </Box>

        <Button
          variant="contained"
          size="medium"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          Enregistrer
        </Button>
      </Box>
    </div>
  );
}

export default App;
