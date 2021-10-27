import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import {
  AccountCircle,
  Delete,
  Edit,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import Box from "@mui/material/Box";

function Table({ items, handleActive, handleDeleteItem, handleFavoriteItem }) {
  return (
    <Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 600,
          bgcolor: "background.paper",
        }}
      >
        {items.map((item, index) => (
          <>
            <ListItem
              key={index}
              secondaryAction={
                <div>
                  <IconButton edge="end" aria-label="Edit">
                    <Edit role="button" onClick={() => handleActive(index)} />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <Delete onClick={() => handleDeleteItem(index)} />
                  </IconButton>
                  <IconButton edge="end" aria-label="favorite">
                    {item.isFavorite ? (
                      <Favorite onClick={() => handleFavoriteItem(index)} />
                    ) : (
                      <FavoriteBorder
                        onClick={() => handleFavoriteItem(index)}
                      />
                    )}
                  </IconButton>
                </div>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AccountCircle />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={item.phone_number}
              ></ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </Box>
  );
}

export default Table;
