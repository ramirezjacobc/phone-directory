import { useForm } from "../../hooks/useForm";
import validations from "../../validations/phone-directory-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ButtonGroup from "@mui/material/ButtonGroup";

function Form({ item, handleSubmitDirectory }) {
  const save = () => {
    const methodType = Object.keys(item).length > 0 ? "edit" : "add";
    values["isFavorite"] = false;
    handleSubmitDirectory(values, methodType);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    save,
    validations,
    item
  );

  const { name = "", phone_number = "" } = values || {};
  const isEdit = Object.keys(item).length > 0;

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          type="text"
          name="name"
          maxLength="30"
          value={name}
          onChange={handleChange}
          error={errors["name"]}
          helperText={errors["name"] && errors["name"]}
          size="small"
          margin="normal"
        />

        <TextField
          label="Phone Number"
          type="phone"
          name="phone_number"
          maxLength="12"
          value={phone_number}
          onChange={handleChange}
          error={errors["phone_number"]}
          helperText={errors["phone_number"] && errors["phone_number"]}
          size="small"
          margin="normal"
        />
        <ButtonGroup>
          <Button
            size="big"
            startIcon={<SendIcon />}
            variant="outlined"
            type="submit"
          >
            Save
          </Button>

          {isEdit && (
            <Button size="big" type="submit">
              Cancel
            </Button>
          )}
        </ButtonGroup>
      </Box>
    </>
  );
}

export default Form;
