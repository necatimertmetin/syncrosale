import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box mb={8}>
        <Typography
          component="span"
          variant="h1"
          fontWeight="600"
          sx={{ letterSpacing: 3 }}
        >
          Hello
        </Typography>
        <Typography
          component="span"
          variant="h1"
          fontWeight="bold"
          color={"primary"}
          sx={{ ml: 1 }}
        >
          !
        </Typography>
      </Box>

      {/* Form */}
      <Stack component="form" spacing={4} noValidate ref={formRef}>
        <TextField label="Adınız" name="name" variant="outlined" fullWidth />
        <TextField
          label="E-posta"
          name="email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Mesajınız"
          name="message"
          variant="outlined"
          multiline
          rows={5}
          fullWidth
          required
        />

        {/* Submit butonu */}
        <Stack direction="row" justifyContent="flex-end">
          <Button
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              px: 5,
              py: 2,
              fontSize: "1.5rem",
              textTransform: "none",
            }}
          >
            Gönder
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
