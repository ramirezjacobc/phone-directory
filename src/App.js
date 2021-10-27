import { useState } from "react";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Table from "./components/Table";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [directory, setDirectory] = useState([]);
  const [removeItem, setRemoveItem] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const isDuplicated = (name) => {
    let tmpDirectory = [...directory];
    tmpDirectory = tmpDirectory.filter((item) => item.name === name);

    return tmpDirectory.length > 0;
  };

  const handleSubmit = (item, type) => {
    if (type === "add" && !isDuplicated(item.name)) {
      setDirectory((directory) => [...directory, item]);
    } else {
      let tmpDirectory = [...directory];
      tmpDirectory[activeItem] = item;

      setDirectory(tmpDirectory);
      setActiveItem(null);
    }
    setShowForm(false);
  };

  const handleDelete = (status) => {
    if (status) {
      let tmpDirectory = [...directory];
      tmpDirectory.splice(removeItem, 1);

      setDirectory(tmpDirectory);
    }
    setRemoveItem(null);
    setShowForm(false);
  };

  const handleFavorite = (index) => {
    let tmpDirectory = [...directory];
    tmpDirectory[index]["isFavorite"] = !tmpDirectory[index]["isFavorite"];
    setDirectory(tmpDirectory);
  };

  return (
    <>
      <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phone Directory
          </Typography>
        </Toolbar>
      </AppBar>
      {removeItem !== null && (
        <Modal handleDelete={handleDelete} item={directory[removeItem] || {}} />
      )}
      <Container maxWidth="md">
        <Box sx={{ p: 2 }}>
          {directory.length > 0 && activeItem === null && (
            <Button size="big" onClick={() => setShowForm(true)}>
              New item
            </Button>
          )}

          {showForm && (
            <Form
              item={directory[activeItem] || {}}
              handleSubmitDirectory={handleSubmit}
            />
          )}
          <Table
            items={directory}
            handleActive={(index) => {
              setActiveItem(index);
              setShowForm(true);
            }}
            handleDeleteItem={(index) => {
              setRemoveItem(index);
              setShowForm(true);
            }}
            handleFavoriteItem={handleFavorite}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
