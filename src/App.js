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
        }}
      >
        <Typography variant="h1">Formulaire Shodo</Typography>
        <div>
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
        </div>
        <Button variant="contained" size="medium">
          Enregistrer
        </Button>
      </Box>
    </div>
  );
}

export default App;
