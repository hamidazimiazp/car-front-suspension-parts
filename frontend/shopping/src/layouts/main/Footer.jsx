import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <footer>
      <Box
        sx={{
          background: theme.palette.primary.main,
          padding: 1,
          textAlign: "center",
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography
          component={"p"}
          variant="p"
          sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 700 }}
        >
          تمام حقوق مادی و معنوی این وبسایت برای جلوبندی سورنا محفوظ میباشد 1403
          ©
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
